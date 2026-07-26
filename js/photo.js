/**
 * Photo Studio — turn a picture into a dress-up character.
 *
 * Everything happens on this device: the picture is read with FileReader,
 * drawn to a canvas, cartoon-filtered, and stored in localStorage. Nothing is
 * ever uploaded anywhere.
 *
 * The finished head is a square JPEG data URL; the character SVG clips it to a
 * circle (see #photoHead in index.html) and the usual wardrobe anchors apply,
 * so photo characters can wear everything.
 */

const PhotoStudio = (function () {
  "use strict";

  const STORE_KEY = "dressup-photos";
  const HEAD = 256;     // exported head size in pixels
  const PREVIEW = 240;  // preview canvas size

  let img = null;               // the loaded Image
  let zoom = 1, offX = 0, offY = 0;
  let strength = 0.45;          // 0 = plain photo, 1 = boldest illustration
  let editing = null;           // id when re-editing (unused for now)

  /* ---------------- storage ---------------- */

  function load() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
    catch (e) { return []; }
  }

  function save(list) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); return true; }
    catch (e) { return false; }
  }

  /* ---------------- character construction ---------------- */

  const ANCHORS = {
    hats:    { x: 160, y: 52,  scale: 1.0 },
    hair:    { x: 160, y: 60,  scale: 1.0 },
    makeup:  { x: 160, y: 122, scale: 1.0 },
    jewelry: { x: 160, y: 196, scale: 1.0 },
    clothes: { x: 160, y: 288, scale: 1.0 },
    shoes:   { x: 160, y: 458, scale: 1.0 }
  };

  /* PHOTOSRC is swapped for the image data at render time (never before the
     SKINC pass — base64 can contain the token letters). */
  const BODY = `
      <!-- legs -->
      <rect x="132" y="350" width="22" height="100" rx="11" fill="SKINC"/>
      <rect x="166" y="350" width="22" height="100" rx="11" fill="SKINC"/>
      <!-- basic shoes (hidden when wearing shoes) -->
      <g class="baseshoes">
        <ellipse cx="140" cy="458" rx="24" ry="12" fill="#8d6e63"/>
        <ellipse cx="180" cy="458" rx="24" ry="12" fill="#8d6e63"/>
      </g>
      <!-- arms -->
      <rect x="92"  y="212" width="20" height="110" rx="10" fill="SKINC" transform="rotate(14 102 212)"/>
      <rect x="208" y="212" width="20" height="110" rx="10" fill="SKINC" transform="rotate(-14 218 212)"/>
      <!-- basic t-shirt (hidden when wearing a top) -->
      <g class="baseshirt">
        <path d="M115 210 Q160 190 205 210 L212 320 Q160 345 108 320 Z" fill="#7ec8e3"/>
      </g>
      <!-- neck -->
      <rect x="148" y="158" width="24" height="46" rx="10" fill="SKINC"/>
      <!-- photo head -->
      <circle cx="160" cy="118" r="60" fill="#ffffff"/>
      <image href="PHOTOSRC" x="100" y="58" width="120" height="120"
             clip-path="url(#photoHead)" preserveAspectRatio="xMidYMid slice"/>
      <circle cx="160" cy="118" r="60" fill="none" stroke="#4a3728" stroke-width="4"/>
  `;

  function register(entry) {
    CHARACTERS[entry.id] = {
      name: entry.name,
      skin: entry.skin || "#f2c49b",
      photo: entry.dataUrl,
      anchors: ANCHORS,
      svg: BODY
    };
  }

  function restoreAll() {
    for (const entry of load()) register(entry);
  }

  const isCustom = (id) => !!(CHARACTERS[id] && CHARACTERS[id].photo);

  /* ---------------- illustration filter ---------------- */

  /* Edge-preserving smoothing (bilateral): flattens skin, hair and background
     into calm areas while leaving real outlines sharp. Plain blurring would
     smear the face, which is what makes naive "cartoon" filters look wrong. */
  function smooth(data, lum, w, h, radius, sigmaRange) {
    const out = new Uint8ClampedArray(data.length);
    const span = radius * 2 + 1;

    // brightness-difference weights, looked up instead of exp() per neighbour
    const range = new Float32Array(256);
    const sr2 = 2 * sigmaRange * sigmaRange;
    for (let i = 0; i < 256; i++) range[i] = Math.exp(-(i * i) / sr2);

    const spatial = new Float32Array(span * span);
    const ss2 = 2 * (radius * 0.62) * (radius * 0.62);
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        spatial[(dy + radius) * span + (dx + radius)] =
          Math.exp(-(dx * dx + dy * dy) / ss2);
      }
    }

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = y * w + x, p = i * 4, lc = lum[i];
        let R = 0, G = 0, B = 0, W = 0;
        for (let dy = -radius; dy <= radius; dy++) {
          const yy = y + dy;
          if (yy < 0 || yy >= h) continue;
          for (let dx = -radius; dx <= radius; dx++) {
            const xx = x + dx;
            if (xx < 0 || xx >= w) continue;
            const j = yy * w + xx;
            const wgt = spatial[(dy + radius) * span + (dx + radius)] *
                        range[Math.abs(lum[j] - lc)];
            const q = j * 4;
            R += data[q] * wgt; G += data[q + 1] * wgt; B += data[q + 2] * wgt;
            W += wgt;
          }
        }
        out[p] = R / W; out[p + 1] = G / W; out[p + 2] = B / W; out[p + 3] = 255;
      }
    }
    return out;
  }

  /* strength 0 = untouched photo, 1 = boldest illustration.
     Only brightness is banded (hues are left alone, so skin stays skin), and
     outlines fade in softly instead of snapping to hard black. */
  function stylize(ctx, w, h, strength) {
    if (strength <= 0.001) return;

    const d = ctx.getImageData(0, 0, w, h).data;
    const lum = new Uint8ClampedArray(w * h);
    for (let i = 0, p = 0; i < lum.length; i++, p += 4) {
      lum[i] = 0.299 * d[p] + 0.587 * d[p + 1] + 0.114 * d[p + 2];
    }

    const sm = smooth(d, lum, w, h, 3, 34);
    const sl = new Float32Array(w * h);
    for (let i = 0, p = 0; i < sl.length; i++, p += 4) {
      sl[i] = 0.299 * sm[p] + 0.587 * sm[p + 1] + 0.114 * sm[p + 2];
    }

    const levels = Math.round(14 - 7 * strength);   // 14 gentle → 7 bold
    const step = 255 / (levels - 1);
    const flatten = 0.5 + 0.4 * strength;           // how far toward the band
    const sat = 1 + 0.25 * strength;
    const inkLo = 78 - 26 * strength, inkHi = inkLo + 42;
    const inkMax = 0.3 + 0.35 * strength;

    const out = ctx.createImageData(w, h);
    const o = out.data;

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = y * w + x, p = i * 4;
        const L = sl[i];
        const banded = L + (Math.round(L / step) * step - L) * flatten;
        const f = banded / (L < 1 ? 1 : L);

        const r = (L + (sm[p]     - L) * sat) * f;
        const g = (L + (sm[p + 1] - L) * sat) * f;
        const b = (L + (sm[p + 2] - L) * sat) * f;

        let mag = 0;
        if (x > 0 && x < w - 1 && y > 0 && y < h - 1) {
          const gx = -sl[i - w - 1] - 2 * sl[i - 1] - sl[i + w - 1]
                     + sl[i - w + 1] + 2 * sl[i + 1] + sl[i + w + 1];
          const gy = -sl[i - w - 1] - 2 * sl[i - w] - sl[i - w + 1]
                     + sl[i + w - 1] + 2 * sl[i + w] + sl[i + w + 1];
          mag = Math.sqrt(gx * gx + gy * gy);
        }
        let t = (mag - inkLo) / (inkHi - inkLo);
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        t = t * t * (3 - 2 * t);                    // smooth ramp, no jaggies
        const k = 1 - inkMax * t;

        o[p] = r * k; o[p + 1] = g * k; o[p + 2] = b * k; o[p + 3] = 255;
      }
    }
    ctx.putImageData(out, 0, 0);
  }

  /* ---------------- framing & preview ---------------- */

  function drawFramed(ctx, size) {
    const base = Math.max(size / img.width, size / img.height);
    const s = base * zoom;
    const w = img.width * s, h = img.height * s;
    const k = size / PREVIEW; // offsets are tracked in preview pixels
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);
    ctx.drawImage(img, (size - w) / 2 + offX * k, (size - h) / 2 + offY * k, w, h);
  }

  function renderPreview() {
    const c = document.getElementById("photo-canvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, PREVIEW, PREVIEW);
    document.getElementById("photo-empty").classList.toggle("hidden", !!img);
    if (!img) return;

    const off = document.createElement("canvas");
    off.width = off.height = PREVIEW;
    const octx = off.getContext("2d");
    drawFramed(octx, PREVIEW);
    stylize(octx, PREVIEW, PREVIEW, strength);

    const R = PREVIEW / 2 - 6;
    ctx.save();
    ctx.beginPath();
    ctx.arc(PREVIEW / 2, PREVIEW / 2, R, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(off, 0, 0);
    ctx.restore();
    ctx.beginPath();
    ctx.arc(PREVIEW / 2, PREVIEW / 2, R, 0, Math.PI * 2);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#9b6dff";
    ctx.stroke();
  }

  function exportHead() {
    const c = document.createElement("canvas");
    c.width = c.height = HEAD;
    const ctx = c.getContext("2d");
    drawFramed(ctx, HEAD);
    stylize(ctx, HEAD, HEAD, strength);
    return c.toDataURL("image/jpeg", 0.82);
  }

  /* ---------------- modal ---------------- */

  const $ = (id) => document.getElementById(id);
  let modal, fileInput, nameInput, msgEl;

  function open() {
    img = null; zoom = 1; offX = 0; offY = 0; strength = 0.45; editing = null;
    $("photo-style").value = 45;
    $("photo-zoom").value = 100;
    nameInput.value = "";
    msgEl.textContent = "";
    modal.classList.remove("hidden");
    renderPreview();
  }

  function close() {
    modal.classList.add("hidden");
    img = null;
    fileInput.value = "";
  }

  function handleFile(file) {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        img = image;
        zoom = 1; offX = 0; offY = 0;
        $("photo-zoom").value = 100;
        renderPreview();
      };
      image.onerror = () => { msgEl.textContent = "Hmm, that picture wouldn't open. Try another one!"; };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  function add() {
    if (!img) { msgEl.textContent = "Choose a photo first!"; return; }
    const dataUrl = exportHead();
    const list = load();
    const entry = {
      id: "photo" + (Date.now().toString(36)) + list.length,
      name: (nameInput.value || "").trim().slice(0, 16) || "My Character",
      dataUrl,
      skin: "#f2c49b"
    };
    list.push(entry);
    if (!save(list)) {
      msgEl.textContent = "No room to save more photos — remove one first.";
      return;
    }
    register(entry);
    close();
    if (PhotoStudio.onAdd) PhotoStudio.onAdd(entry.id);
  }

  function remove(id) {
    save(load().filter((e) => e.id !== id));
    delete CHARACTERS[id];
  }

  function init() {
    modal = $("photo-modal");
    fileInput = $("photo-file");
    nameInput = $("photo-name");
    msgEl = $("photo-msg");

    $("photo-pick").addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", (e) => handleFile(e.target.files[0]));
    $("photo-style").addEventListener("input", (e) => {
      strength = e.target.value / 100;
      renderPreview();
    });
    $("photo-zoom").addEventListener("input", (e) => {
      zoom = e.target.value / 100;
      renderPreview();
    });
    $("photo-add").addEventListener("click", add);
    $("photo-cancel").addEventListener("click", close);
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); });

    // drag the picture to frame the face
    const canvas = $("photo-canvas");
    let dragging = false, lastX = 0, lastY = 0;
    canvas.addEventListener("pointerdown", (e) => {
      if (!img) return;
      dragging = true; lastX = e.clientX; lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    });
    canvas.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      offX += e.clientX - lastX;
      offY += e.clientY - lastY;
      lastX = e.clientX; lastY = e.clientY;
      renderPreview();
    });
    const stop = () => { dragging = false; };
    canvas.addEventListener("pointerup", stop);
    canvas.addEventListener("pointercancel", stop);
  }

  return { init, open, close, restoreAll, register, remove, isCustom, onAdd: null };
})();
