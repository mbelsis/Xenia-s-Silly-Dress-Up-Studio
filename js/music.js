/**
 * Jukebox — cheerful background music, synthesized live with the Web Audio API
 * (no audio files, same as the sound effects).
 *
 * The tune is generative: a fixed happy chord progression with a melody that
 * wanders around a pentatonic scale, so it never lands on a wrong note and
 * never repeats exactly — much easier on grown-up ears than a short loop.
 */

const Jukebox = (function () {
  "use strict";

  const KEY = "dressup-music";
  const TEMPO = 112;                 // beats per minute
  const STEP = 60 / TEMPO / 2;       // one eighth note
  const LOOKAHEAD = 0.15;            // schedule this far ahead, in seconds

  let ctx = null, master = null, musicGain = null, noiseBuf = null;
  let on = false, timer = null, nextTime = 0, step = 0, melodyIdx = 2;

  /* C major: the friendliest key there is. Bass roots for C – G – Am – F. */
  const ROOTS = [130.81, 98.00, 110.00, 87.31];
  const PENT = [261.63, 293.66, 329.63, 392.00, 440.00,   // C D E G A
                523.25, 587.33, 659.25, 784.00, 880.00];
  const RHYTHM = [1, 0, 1, 1, 0, 1, 0, 1];                // eighth-note pattern

  /* one shared AudioContext for music and sound effects */
  function context() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain();
      master.gain.value = 1;
      master.connect(ctx.destination);

      musicGain = ctx.createGain();
      musicGain.gain.value = 0;
      musicGain.connect(master);

      const len = Math.floor(ctx.sampleRate * 0.2);
      noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
      const data = noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    }
    return ctx;
  }

  function tone(freq, at, dur, type, level, glide) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 2600;

    osc.type = type;
    osc.frequency.setValueAtTime(freq, at);
    if (glide) osc.frequency.exponentialRampToValueAtTime(freq * glide, at + dur);

    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.exponentialRampToValueAtTime(level, at + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + dur);

    osc.connect(filter).connect(gain).connect(musicGain);
    osc.start(at);
    osc.stop(at + dur + 0.02);
  }

  function hat(at, level) {
    const src = ctx.createBufferSource();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 7000;
    src.buffer = noiseBuf;
    gain.gain.setValueAtTime(level, at);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.05);
    src.connect(filter).connect(gain).connect(musicGain);
    src.start(at);
    src.stop(at + 0.06);
  }

  /* one eighth note of the arrangement */
  function playStep(n, at) {
    const bar = Math.floor(n / 8) % 4;
    const beat = n % 8;
    const root = ROOTS[bar];

    if (beat === 0 || beat === 3 || beat === 6) {
      tone(root, at, beat === 0 ? 0.34 : 0.22, "triangle", 0.16);
    }
    if (beat === 0 || beat === 4) {
      tone(root * 2, at, 0.5, "sine", 0.05);        // soft pad
    }
    if (RHYTHM[beat]) {
      // random walk on the scale keeps it tuneful but always fresh
      melodyIdx += Math.floor(Math.random() * 5) - 2;
      melodyIdx = Math.max(2, Math.min(PENT.length - 1, melodyIdx));
      if (Math.random() < 0.85) {
        tone(PENT[melodyIdx], at, 0.2, "square", 0.055);
      }
    }
    hat(at, beat % 2 ? 0.02 : 0.035);
  }

  function tick() {
    while (nextTime < ctx.currentTime + LOOKAHEAD) {
      playStep(step, nextTime);
      step = (step + 1) % 32;
      nextTime += STEP;
    }
  }

  function start() {
    context();
    if (ctx.state === "suspended") ctx.resume();
    if (timer) return;
    step = 0;
    nextTime = ctx.currentTime + 0.1;
    musicGain.gain.cancelScheduledValues(ctx.currentTime);
    musicGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    musicGain.gain.linearRampToValueAtTime(0.13, ctx.currentTime + 1.2);
    timer = setInterval(tick, 25);
  }

  function stop() {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
    if (musicGain) {
      musicGain.gain.cancelScheduledValues(ctx.currentTime);
      musicGain.gain.setValueAtTime(musicGain.gain.value, ctx.currentTime);
      musicGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
    }
  }

  function setOn(value) {
    on = value;
    try { localStorage.setItem(KEY, on ? "1" : "0"); } catch (e) { /* private mode */ }
    if (on) start(); else stop();
  }

  function init() {
    try { on = localStorage.getItem(KEY) !== "0"; } catch (e) { on = true; }
    // browsers only allow sound after the first tap, so wait for one
    const kick = () => {
      document.removeEventListener("pointerdown", kick);
      if (on) start();
    };
    document.addEventListener("pointerdown", kick);

    // hush while the game is in the background
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else if (on) start();
    });
  }

  return {
    init,
    context,
    isOn: () => on,
    toggle: () => { setOn(!on); return on; }
  };
})();
