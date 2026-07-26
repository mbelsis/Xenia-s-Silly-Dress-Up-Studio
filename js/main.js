/* Silly Dress-Up Studio — game logic */
(function () {
  "use strict";

  /* ---------------- state ---------------- */

  const NAMES_KEY = "dressup-names";

  function loadNames() {
    try { return JSON.parse(localStorage.getItem(NAMES_KEY)) || {}; }
    catch (e) { return {}; }
  }

  const state = {
    characterId: "zoe",
    tab: "hats",
    // one worn item per slot; the outfit stays on when switching characters
    worn: { hats: null, hair: null, beards: null, clothes: null, bottoms: null,
            shoes: null, jewelry: null, makeup: null, glasses: null, held: null,
            badges: null },
    // per-drawer colors for colorable categories: a CSS color, or "rainbow"
    itemColors: { hair: "#6d4c41", beards: "#6d4c41" },
    // per-character skin tone overrides (characters with a `skin` default)
    skinTones: {},
    // per-character fur color overrides (animals with a `fur` default)
    furColors: {},
    // per-character eye color overrides (every character has eyes)
    eyeColors: {},
    // per-character eye and mouth shape overrides
    eyeShapes: {},
    mouthShapes: {},
    // photo export options
    photoTextColor: "#4a3728",
    photoEmoji: true,
    // stage background id from BACKGROUNDS ("none" = plain / transparent photo)
    background: "none",
    // falling weather over the scene
    weather: "none",
    // id of the character lending their head, or null
    swapHead: null,
    // what the character is saying, when the player typed it themselves
    customLine: "",
    // custom character names, persisted in localStorage
    names: loadNames()
  };

  const HAIR_COLORS = [
    "#6d4c41", "#2f2f2f", "#f7d774", "#e07a2e",           // normal-ish
    "#ff6fb5", "#9b59ff", "#3aa0ff", "#3ecf5a", "rainbow" // silly
  ];

  const SKIN_TONES = [
    "#ffdbb4", "#f2c49b", "#e8b78a", "#c68863", "#8d5524", "#5c3b1e", // realistic
    "#7ed957", "#8ab6f9"                                              // alien & frosty
  ];

  const getSkinTone = (id) =>
    state.skinTones[id] || CHARACTERS[id].skin;

  const FUR_COLORS = [
    "#b98753", "#5d4037", "#2f2f2f", "#9e9e9e", "#f5f5f5",  // natural
    "#ef9a3c", "#f2c94c", "#ff8ab5", "#7ec8e3"              // orange, golden, silly
  ];

  const getFur = (id) =>
    state.furColors[id] || CHARACTERS[id].fur;

  const EYE_COLORS = [
    "#33261d", "#6d4c41", "#3aa0ff", "#2e7d32", "#9b59ff", "#e53935", "#f9a825"
  ];

  const getEyeColor = (id) =>
    state.eyeColors[id] || CHARACTERS[id].eyes || "#33261d";

  /* eye shapes: the EYEC pupil circles are rewritten into the chosen shape,
     preserving each character's own eye positions and sizes */
  const EYE_SHAPES = [
    { id: "round",  emoji: "🙂" },
    { id: "happy",  emoji: "😊" },
    { id: "wide",   emoji: "😲" },
    { id: "sleepy", emoji: "😪" },
    { id: "star",   emoji: "🤩" },
    { id: "heart",  emoji: "😍" }
  ];

  function eyeSvg(shape, cx, cy, r, color) {
    switch (shape) {
      case "happy":
        return `<path d="M ${cx - 1.4 * r} ${cy + 0.4 * r} Q ${cx} ${cy - 1.7 * r} ${cx + 1.4 * r} ${cy + 0.4 * r}" stroke="${color}" stroke-width="${0.9 * r}" fill="none" stroke-linecap="round"/>`;
      case "wide":
        return `<circle cx="${cx}" cy="${cy}" r="${1.5 * r}" fill="#fff" stroke="${color}" stroke-width="2"/>` +
               `<circle cx="${cx}" cy="${cy}" r="${0.75 * r}" fill="${color}"/>`;
      case "sleepy":
        return `<path d="M ${cx - 1.2 * r} ${cy} a ${1.2 * r} ${1.2 * r} 0 0 0 ${2.4 * r} 0 Z" fill="${color}"/>` +
               `<path d="M ${cx - 1.3 * r} ${cy} H ${cx + 1.3 * r}" stroke="${color}" stroke-width="${0.5 * r}" stroke-linecap="round"/>`;
      case "star":
        return `<path transform="translate(${cx} ${cy}) scale(${(1.9 * r) / 12})" d="M0 -12 L3.5 -4 L12 -3 L6 3 L7.5 12 L0 7 L-7.5 12 L-6 3 L-12 -3 L-3.5 -4 Z" fill="#f9a825"/>`;
      case "heart":
        return `<path transform="translate(${cx} ${cy}) scale(${(1.8 * r) / 12})" d="M0 -4 Q4 -12 9 -7 Q13 -2 6 5 L0 11 L-6 5 Q-13 -2 -9 -7 Q-4 -12 0 -4 Z" fill="#e0245e"/>`;
      default:
        return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}"/>`;
    }
  }

  /* mouth shapes: humans have a MOUTHC placeholder at their mouth position */
  const MOUTH_SHAPES = [
    { id: "smile", emoji: "🙂", svg: `<path d="M-20 -3 Q0 13 20 -3" stroke="#33261d" stroke-width="5" fill="none" stroke-linecap="round"/>` },
    { id: "laugh", emoji: "😄", svg: `<path d="M-20 -6 Q0 26 20 -6 Q0 2 -20 -6 Z" fill="#6d2a2a"/><path d="M-11 8 Q0 16 11 8 Q0 24 -11 8 Z" fill="#ff8a9d"/>` },
    { id: "surprised", emoji: "😮", svg: `<ellipse cx="0" cy="3" rx="8" ry="11" fill="#6d2a2a"/>` },
    { id: "tongue", emoji: "😛", svg: `<path d="M-18 -4 Q0 10 18 -4" stroke="#33261d" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M-2 2 Q0 20 12 16 Q18 8 8 0 Z" fill="#ff6f91"/>` },
    { id: "frown", emoji: "🙁", svg: `<path d="M-16 9 Q0 -5 16 9" stroke="#33261d" stroke-width="5" fill="none" stroke-linecap="round"/>` }
  ];

  const getEyeShape = (id) => state.eyeShapes[id] || "round";
  const getMouthShape = (id) => state.mouthShapes[id] || "smile";

  /* character base art with skin, eye, and mouth tokens filled in */
  function charArt(id) {
    const char = CHARACTERS[id];
    let svg = char.svg;
    if (char.skin) svg = svg.replaceAll("SKINC", getSkinTone(id));
    // animal fur: swap every occurrence of the default fur color literal
    if (char.fur && getFur(id) !== char.fur) {
      svg = svg.split(char.fur).join(getFur(id));
    }
    const eyeColor = getEyeColor(id);
    const eyeShape = getEyeShape(id);
    svg = svg.replace(
      /<circle cx="([\d.]+)" cy="([\d.]+)" r="([\d.]+)" fill="EYEC"\/>/g,
      (m, cx, cy, r) => eyeSvg(eyeShape, +cx, +cy, +r, eyeColor)
    );
    const mouth = MOUTH_SHAPES.find((s) => s.id === getMouthShape(id));
    svg = svg.replaceAll("MOUTHC", mouth.svg);
    // photo data goes in last: base64 can contain the other token letters
    if (char.photo) svg = svg.replace("PHOTOSRC", char.photo);
    return svg;
  }

  function saveNames() {
    try { localStorage.setItem(NAMES_KEY, JSON.stringify(state.names)); }
    catch (e) { /* private mode etc. — names just won't persist */ }
  }

  const getName = (id) => state.names[id] || CHARACTERS[id].name;

  const QUIPS = {
    generic: [
      "Fabulous!", "Ooh la la!", "So stylish!", "Runway ready!",
      "Hahaha, amazing!", "Best. Outfit. Ever.", "Simply glamorous, darling!"
    ],
    duck: ["The duck approves! 🦆", "Quack quack, very chic!"],
    macaroni: ["Is that... spaghetti?!", "Mmm, crunchy jewelry!"],
    banana: ["Careful, that's slippery!", "Very a-peel-ing!"],
    clown: ["Honk honk!", "Those are TOO big!"],
    nose: ["Honk!", "Beep beep!"],
    rocket: ["3... 2... 1... BLAST OFF!", "Whoosh!"],
    dino: ["RAWR means fabulous in dinosaur!"],
    mohawk: ["ROCK ON! 🤘", "So punk!"],
    afro: ["That's some BIG hair!", "Groovy!"],
    punk: ["Spiky-tastic!", "Don't touch, it's sharp!"],
    superlong: ["Rapunzel called, she's jealous!", "Careful not to trip on it!"],
    tuxedo: ["Very fancy indeed!", "Shaken, not stirred!"],
    jersey: ["GOOOOAL!", "Number 10, superstar!"],
    leather: ["Born to be wild!", "Vroom vroom!"],
    astronaut: ["To infinity... and the backyard!", "One small step..."],
    knight: ["Fear not, citizens!", "Clank clank clank!"],
    gown: ["Royal fabulousness!", "The ball awaits!"],
    sundress: ["Twirl time!", "Sunshine style!"],
    fairy: ["Fairy magic activated! ✨", "Flutter flutter!"],
    popstar: ["And the crowd goes WILD!", "Encore! Encore!"],
    mermaid: ["Splish splash!", "Part-time mermaid, full-time fabulous!"],
    shorts: ["Beach mode: ON!", "Where's the pool?"],
    lipstick: ["Mwah! 💋", "Kiss kiss!"],
    fullbeard: ["So distinguished!", "Beard level: expert!"],
    santabeard: ["You shall not pass!", "Ho ho ho... wait, wrong beard!"],
    goatee: ["Ooh, mysterious!", "Very artistic!"],
    curlylong: ["Boing boing boing!", "So bouncy!"],
    megacurls: ["MAXIMUM CURL POWER!", "The curls have arrived."],
    sunglasses: ["Too cool for school!", "Deal with it. 😎"],
    specs: ["So smart-looking!", "Time to read a big book!"],
    starglasses: ["Seeing stars!", "Superstar!"],
    boltglasses: ["ZAP! ⚡", "Shockingly stylish!"],
    heartglasses: ["Love at first sight!"],
    boombox: ["Turn it UP!", "🎵 Dance party! 🎵"],
    tablet: ["Just one more level...", "New high score!"],
    flag: ["Wave it proudly!", "Flag of Funland!"],
    icecream: ["Quick, lick it before it melts!", "Brain freeze incoming!"],
    wand: ["Abracadabra!", "Bibbidi-bobbidi-boo!"],
    chicken: ["BAWK BAWK!", "Why a chicken? WHY NOT."],
    lollipop: ["Sugar rush in 3... 2... 1..."],
    starstamp: ["You're a star!", "Gold star for style!"],
    heartstamp: ["Made with love!"],
    boltstamp: ["ZAP! Super charged!"],
    smileystamp: ["Happy shirt, happy day!"],
    ballstamp: ["GOOOAL!"],
    rainbowstamp: ["Double rainbow!"],
    guitarstamp: ["Shred it! 🎸", "Rock and roll!"],
    drumstamp: ["Ba-dum-TSS!"],
    notestamp: ["La la la!", "Music to my ears!"],
    rockstamp: ["ROCK ON! 🤘", "Turn it to eleven!"],
    robotstamp: ["Beep boop!", "Robot approved."],
    pizzastamp: ["Mmm, pizza shirt!", "Extra cheese, please!"],
    rainyellow: ["Puddle jumping time!", "SPLASH!"],
    rainpink: ["Pretty AND puddle-proof!"],
    rainblue: ["Rain rain, come and play!"],
    cowboy: ["Yee-haw!", "Howdy, partner!"],
    flamingo: ["Flamingo Friday!", "Tropical vibes!"],
    goldwatch: ["Right on time!", "Fancy AND punctual!"],
    sportwatch: ["New lap record!"],
    freckles: ["Cute as a button!"],
    glitter: ["SPARKLE POWER! ✨"],
    warpaint: ["GAME TIME!", "Ready to WIN!"],
    cap: ["Batter up!", "Home run!"],
    sunhat: ["So glamorous!", "Sun's out, hats on!"],
    bballshorts: ["Slam dunk!"],
    runshorts: ["Ready... set... GO!"],
    hoodie: ["So cozy!", "Hood up, world out."],
    denimjacket: ["Double denim? DOUBLE denim!"],
    sailor: ["Ahoy, matey!", "All aboard!"],
    polkablouse: ["Dotty and delightful!"],
    flowerblouse: ["Flower power!"],
    uglysweater: ["It's not ugly, it's FESTIVE!", "Ho ho ho!"],
    rippedjeans: ["Pre-ripped for your convenience!"],
    jeanshorts: ["Summer ready!"],
    plaidskirt: ["Très chic!"],
    fishbowl: ["A hat you can snack on... wait, no!", "Glub glub!"],
    carrot: ["Very vitamin-rich fashion!", "What's up, doc?"],
    honeypot: ["Uh oh, here come the bees!", "Sticky but stylish!"],
    bone: ["Very fetching!", "Bone appétit!"],
    fishskel: ["Someone already ate this one!", "Recycled jewelry!"],
    peanuts: ["Emergency snacks included!", "Crunchy AND classy!"],
    snorkel: ["Ready to dive!", "Blub blub blub!"],
    whiskerpaint: ["Meow meow!", "Purrfect!"],
    remove: ["Phew, that's better.", "Back in the cabinet!", "Changed your mind?"]
  };

  /* extra-funny reactions when the RIGHT animal wears the item */
  const COMBO_QUIPS = {
    "fishbowl:cat":      ["So close... yet so far away!", "This is TORTURE."],
    "fishbowl:cat2":     ["Best. Hat. EVER. Can I eat it?"],
    "fishbowl:fish":     ["A fish wearing a fish?! Fish-ception!"],
    "fishskel:cat":      ["Dinner AND jewelry. Perfect."],
    "fishskel:cat2":     ["Mmm... crunchy memories!"],
    "bone:dog":          ["DO NOT eat your necklace. DO NOT.", "Drooling is not allowed on jewelry!"],
    "bone:dog2":         ["A snack around my neck?! GENIUS!"],
    "carrot:bunny":      ["A snack AND a hat! Best day ever!", "Don't tempt me..."],
    "honeypot:bear":     ["Sweet style! Now excuse me while I eat my hat."],
    "snorkel:fish":      ["But... I already breathe water?!"],
    "peanuts:elephant":  ["MY FAVORITE! Trunk, don't fail me now!"],
    "whiskerpaint:cat":  ["I already HAVE whiskers. Now I have MORE."],
    "whiskerpaint:cat2": ["Double whiskers, double cute!"],
    "whiskerpaint:max":  ["A beard AND whiskers? Majestic."],
    "mermaid:fish":      ["Wait... I'm ALREADY a fish!"],
    "fullbeard:grandpa": ["A beard ON my beard? Genius!"],
    "fullbeard:zoe":     ["Hahaha! Beard kid!"],
    "santabeard:cat":    ["The wisest cat in the land."],
    "icecream:dog":      ["MINE. All mine. No sharing."],
    "icecream:dog2":     ["Drooling initiated..."],
    "chicken:cat":       ["I caught dinner!"],
    "chicken:parrot":    ["We are NOT related."],
    "wand:grandpa":      ["You're a wizard, Grandpa!"],
    "boombox:elephant":  ["Who needs a trunk-et when you have BEATS?"],
    "sunglasses:cat":    ["I was already this cool."]
  };

  /* ---------------- dom ---------------- */

  const stage = document.getElementById("stage");
  const charSvg = document.getElementById("char-svg");
  const bubble = document.getElementById("bubble");
  let dancing = false;
  const tabsEl = document.getElementById("tabs");
  const gridEl = document.getElementById("item-grid");
  const listEl = document.getElementById("character-list");
  const ghost = document.getElementById("ghost");
  const ghostSvg = ghost.querySelector("svg");

  const itemById = (id) => ITEMS.find((i) => i.id === id);

  /* hair & beard art use the HAIRC token as their color; fill it in at render */
  function itemArt(item) {
    const color = state.itemColors[item.category];
    if (!color) return item.svg;
    const fill = color === "rainbow" ? "url(#rainbowHair)" : color;
    return item.svg.replaceAll("HAIRC", fill);
  }

  /* ---------------- rendering ---------------- */

  /* items are drawn compact in wardrobe.js; these per-slot multipliers blow
     them up to wearable size (a dress must actually cover the torso) */
  const SLOT_SCALE = {
    hats: 1.25, hair: 1.2, beards: 1.2, clothes: 1.55, bottoms: 1.4,
    shoes: 1.35, jewelry: 1.2, makeup: 1.15, glasses: 1.15, held: 1.15,
    badges: 1.0
  };

  /* bottoms/beards/glasses/held positions are derived from existing anchors,
     so every character supports them without extra per-character data */
  function slotAnchor(char, cat) {
    if (char.anchors[cat]) return char.anchors[cat];
    if (cat === "bottoms") {
      const c = char.anchors.clothes;
      return { x: c.x, y: c.y + 85 * c.scale, scale: c.scale };
    }
    if (cat === "beards") {
      const m = char.anchors.makeup;
      return { x: m.x, y: m.y + 44 * m.scale, scale: m.scale };
    }
    if (cat === "glasses") {
      const m = char.anchors.makeup;
      return { x: m.x, y: m.y - 10 * m.scale, scale: m.scale };
    }
    if (cat === "held") {
      const c = char.anchors.clothes;
      return { x: c.x + 68 * c.scale, y: c.y + 48 * c.scale, scale: c.scale };
    }
    if (cat === "badges") {
      const c = char.anchors.clothes;
      return { x: c.x, y: c.y - 16 * c.scale, scale: c.scale };
    }
    return { x: 160, y: 260, scale: 1 };
  }

  /* ---------------- weather ---------------- */

  const WEATHERS = [
    { id: "none",    emoji: "⛅", name: "Clear" },
    { id: "rain",    emoji: "🌧️", name: "Rain" },
    { id: "snow",    emoji: "❄️", name: "Snow" },
    { id: "bubbles", emoji: "🫧", name: "Bubbles" },
    { id: "confetti", emoji: "🎊", name: "Confetti" }
  ];

  /* stable pseudo-random so particles don't jump around on every re-render */
  const scatter = (n, seed) => {
    const out = [];
    let v = seed;
    for (let i = 0; i < n; i++) {
      v = (v * 1103515245 + 12345) % 2147483648;
      out.push(v / 2147483648);
    }
    return out;
  };

  const CONFETTI_COLORS = ["#ff6fb5", "#ffe921", "#3ecf5a", "#3aa0ff", "#9b59ff", "#ff8a3d"];

  function weatherSvg() {
    const w = state.weather;
    if (w === "none") return "";
    const r = scatter(90, 7);
    let out = "";

    if (w === "rain") {
      for (let i = 0; i < 26; i++) {
        const x = r[i] * 320, delay = -(r[i + 30] * 1.05).toFixed(2);
        out += `<line class="wx-drop" x1="${x.toFixed(0)}" y1="-20" x2="${(x - 4).toFixed(0)}" y2="-4" style="animation-delay:${delay}s"/>`;
      }
      // puddles for anyone sensible enough to wear rain boots
      if (["rainyellow", "rainpink", "rainblue"].includes(state.worn.shoes)) {
        out += `<ellipse class="wx-puddle" cx="120" cy="486" rx="34" ry="8"/>`;
        out += `<ellipse class="wx-puddle" cx="206" cy="498" rx="26" ry="6" style="animation-delay:-1s"/>`;
      }
    } else if (w === "snow") {
      for (let i = 0; i < 30; i++) {
        const x = r[i] * 320, rad = 2 + r[i + 60] * 3;
        out += `<circle class="wx-flake" cx="${x.toFixed(0)}" cy="-10" r="${rad.toFixed(1)}" style="animation-delay:${-(r[i + 30] * 6).toFixed(2)}s"/>`;
      }
    } else if (w === "bubbles") {
      for (let i = 0; i < 22; i++) {
        const x = r[i] * 320, rad = 3 + r[i + 60] * 7;
        out += `<circle class="wx-bubble" cx="${x.toFixed(0)}" cy="540" r="${rad.toFixed(1)}" style="animation-delay:${-(r[i + 30] * 6).toFixed(2)}s"/>`;
      }
    } else if (w === "confetti") {
      for (let i = 0; i < 28; i++) {
        const x = r[i] * 320;
        const col = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
        out += `<rect class="wx-confetti" x="${x.toFixed(0)}" y="-14" width="9" height="5" rx="2" fill="${col}" style="animation-delay:${-(r[i + 60] * 3.2).toFixed(2)}s"/>`;
      }
    }
    return `<g class="weather">${out}</g>`;
  }

  function renderCharacter() {
    const char = CHARACTERS[state.characterId];
    const bg = BACKGROUNDS.find((b) => b.id === state.background);
    // worn items replace the character's painted-on basics: bottoms remove the
    // trousers (revealing bare legs), tops remove the base shirt, shoes remove
    // the base shoes (stripped from the string so photo exports match)
    let base = charArt(state.characterId);
    if (state.worn.bottoms) {
      base = base.replace(/<g class="pants">[\s\S]*?<\/g>/, "");
    }
    if (state.worn.clothes) {
      base = base.replace(/<g class="baseshirt">[\s\S]*?<\/g>/, "");
    }
    if (state.worn.shoes) {
      base = base.replace(/<g class="baseshoes">[\s\S]*?<\/g>/, "");
    }

    /* head swap: keep the host below its chin line, and paste the donor's
       head on top, shifted so the two necks line up */
    const donorId = state.swapHead && CHARACTERS[state.swapHead] ? state.swapHead : null;
    if (donorId && donorId !== state.characterId) {
      const donor = CHARACTERS[donorId];
      // keep the host from the torso down, keep the donor from the torso up,
      // then line the two chins up so each body keeps its own proportions
      const dy = char.headY - donor.headY;
      base =
        `<defs>
           <clipPath id="hostBody"><rect x="-60" y="${char.neckY}" width="440" height="${640 - char.neckY}"/></clipPath>
           <clipPath id="donorHead"><rect x="-60" y="-160" width="440" height="${donor.neckY + 160}"/></clipPath>
         </defs>
         <g clip-path="url(#hostBody)">${base}</g>
         <g transform="translate(0 ${dy})">
           <g clip-path="url(#donorHead)">${charArt(donorId)}</g>
         </g>`;
    }

    let out = `<g>${bg ? bg.svg : ""}</g><g>${base}</g>`;
    // draw order: bottoms under tops, beard over makeup, glasses over beard,
    // hair under the hat, held items in front of everything
    for (const cat of ["shoes", "bottoms", "clothes", "badges", "jewelry", "makeup", "beards", "glasses", "hair", "hats", "held"]) {
      const id = state.worn[cat];
      if (!id) continue;
      const a = slotAnchor(char, cat);
      const scale = a.scale * (SLOT_SCALE[cat] || 1);
      out += `<g class="worn" data-cat="${cat}"
                 transform="translate(${a.x} ${a.y}) scale(${scale})">
                ${itemArt(itemById(id))}
              </g>`;
    }
    charSvg.innerHTML = out + weatherSvg();
  }

  function renderShelf() {
    listEl.innerHTML = "";
    for (const [id, char] of Object.entries(CHARACTERS)) {
      const btn = document.createElement("button");
      btn.className = "char-thumb" + (id === state.characterId ? " selected" : "");
      btn.innerHTML =
        `<svg viewBox="40 20 240 480">${charArt(id)}</svg><span></span>`;
      btn.querySelector("span").textContent = getName(id);
      btn.addEventListener("click", () => {
        state.characterId = id;
        renderShelf();
        renderCharacter();
        renderNameTag();
        renderSkinPicker();
        renderEyePicker();
        renderFacePicker();
        bounce();
        say([`${getName(id)} steps up!`, `Your turn, ${getName(id)}!`]);
      });
      // photo characters can be taken off the shelf again
      if (PhotoStudio.isCustom(id)) {
        const del = document.createElement("button");
        del.className = "thumb-del";
        del.textContent = "✕";
        del.title = "Remove this character";
        del.addEventListener("click", (e) => {
          e.stopPropagation();
          PhotoStudio.remove(id);
          delete state.names[id];
          saveNames();
          if (state.characterId === id) state.characterId = "zoe";
          renderShelf();
          renderCharacter();
          renderNameTag();
          renderSkinPicker();
          renderEyePicker();
          renderFacePicker();
          playSound("off");
        });
        btn.appendChild(del);
      }
      listEl.appendChild(btn);
    }
  }

  function renderTabs() {
    tabsEl.innerHTML = "";
    for (const cat of CATEGORIES) {
      const btn = document.createElement("button");
      btn.className = "tab" + (cat.id === state.tab ? " active" : "");
      btn.textContent = cat.label;
      btn.addEventListener("click", () => {
        state.tab = cat.id;
        renderTabs();
        renderGrid();
      });
      tabsEl.appendChild(btn);
    }
  }

  function renderGrid() {
    gridEl.innerHTML = "";
    for (const item of ITEMS.filter((i) => i.category === state.tab)) {
      const el = document.createElement("div");
      el.className = "cab-item";
      el.dataset.itemId = item.id;
      el.innerHTML =
        `<svg viewBox="${item.preview || "-70 -70 140 140"}">${itemArt(item)}</svg><span>${item.name}</span>`;
      gridEl.appendChild(el);
    }
    renderSwatches();
  }

  const swatchesEl = document.getElementById("swatches");

  function renderSwatches() {
    const colorable = state.tab in state.itemColors;
    swatchesEl.classList.toggle("hidden", !colorable);
    if (!colorable) return;
    swatchesEl.innerHTML = "";
    for (const color of HAIR_COLORS) {
      const btn = document.createElement("button");
      btn.className = "swatch" + (color === "rainbow" ? " rainbow" : "") +
                      (color === state.itemColors[state.tab] ? " selected" : "");
      if (color !== "rainbow") btn.style.background = color;
      btn.title = color === "rainbow" ? "Rainbow!" : "Pick a color";
      btn.addEventListener("click", () => {
        state.itemColors[state.tab] = color;
        renderGrid();
        if (state.worn[state.tab]) {
          renderCharacter();
          bounce();
          playSound("on");
          say(color === "rainbow"
            ? ["RAINBOW!!!", "Taste the rainbow!"]
            : ["Fresh new color!", "Love that shade!", "Hair-mazing!"]);
        }
      });
      swatchesEl.appendChild(btn);
    }
  }

  /* ---------------- skin tone picker (humans) ---------------- */

  const skinPickerEl = document.getElementById("skin-picker");

  function renderSkinPicker() {
    const charId = state.characterId;
    const char = CHARACTERS[charId];
    // humans get skin tones, animals get fur colors — same row
    const isFur = !!char.fur;
    skinPickerEl.classList.toggle("hidden", !char.skin && !char.fur);
    if (!char.skin && !char.fur) return;
    skinPickerEl.innerHTML = `<span class='picker-icon'>${isFur ? "🐾" : "🖐️"}</span>`;
    const palette = isFur ? FUR_COLORS : SKIN_TONES;
    const current = isFur ? getFur(charId) : getSkinTone(charId);
    for (const tone of palette) {
      const btn = document.createElement("button");
      btn.className = "swatch" + (tone === current ? " selected" : "");
      btn.style.background = tone;
      btn.title = isFur ? "Fur color" : "Skin tone";
      btn.addEventListener("click", () => {
        if (isFur) state.furColors[charId] = tone;
        else state.skinTones[charId] = tone;
        renderSkinPicker();
        renderCharacter();
        renderShelf();
        playSound("on");
        say(isFur
          ? (tone === "#ff8ab5" ? ["PINK fur?! Amazing!"]
            : tone === "#7ec8e3" ? ["Blue fur, don't care!"]
            : ["Fresh fur, who dis?", "So fluffy and new!"])
          : tone === "#7ed957" ? ["I'm an ALIEN now! 👽", "Greetings, earthlings!"]
          : tone === "#8ab6f9" ? ["Brrr, so frosty!", "Ice ice baby!"]
          : ["Looking good!", "That's so me!"]);
      });
      skinPickerEl.appendChild(btn);
    }
  }

  /* ---------------- eye color picker (everyone) ---------------- */

  const eyePickerEl = document.getElementById("eye-picker");

  function renderEyePicker() {
    // photo characters have real eyes in the picture — nothing to recolour
    const drawn = !CHARACTERS[state.characterId].photo;
    eyePickerEl.classList.toggle("hidden", !drawn);
    if (!drawn) return;
    eyePickerEl.innerHTML = "<span class='picker-icon'>👁️</span>";
    for (const color of EYE_COLORS) {
      const btn = document.createElement("button");
      btn.className = "swatch" + (color === getEyeColor(state.characterId) ? " selected" : "");
      btn.style.background = color;
      btn.title = "Eye color";
      btn.addEventListener("click", () => {
        state.eyeColors[state.characterId] = color;
        renderEyePicker();
        renderCharacter();
        renderShelf();
        playSound("on");
        say(["What lovely eyes!", "New eyes, who's this?", "Blink blink!"]);
      });
      eyePickerEl.appendChild(btn);
    }
  }

  /* ---------------- eye & mouth shape pickers ---------------- */

  const facePickerEl = document.getElementById("face-picker");

  function renderFacePicker() {
    facePickerEl.innerHTML = "";
    const charId = state.characterId;
    const drawn = !CHARACTERS[charId].photo;
    facePickerEl.classList.toggle("hidden", !drawn);
    if (!drawn) { renderMouthPicker(); return; }

    const eyeLabel = document.createElement("span");
    eyeLabel.className = "picker-icon";
    eyeLabel.textContent = "👀";
    facePickerEl.appendChild(eyeLabel);
    for (const shape of EYE_SHAPES) {
      const btn = document.createElement("button");
      btn.className = "shape-btn" + (shape.id === getEyeShape(charId) ? " selected" : "");
      btn.textContent = shape.emoji;
      btn.title = "Eye shape";
      btn.addEventListener("click", () => {
        state.eyeShapes[charId] = shape.id;
        renderFacePicker();
        renderCharacter();
        renderShelf();
        playSound("on");
        say(shape.id === "heart" ? ["So in love!", "Heart eyes!!"]
          : shape.id === "star" ? ["Seeing stars!", "Superstar eyes!"]
          : ["New look!", "Blink blink!"]);
      });
      facePickerEl.appendChild(btn);
    }

    renderMouthPicker();
  }

  const mouthPickerEl = document.getElementById("mouth-picker");

  function renderMouthPicker() {
    const charId = state.characterId;
    // mouth shapes only exist for characters with a MOUTHC placeholder
    const hasMouth = CHARACTERS[charId].svg.includes("MOUTHC");
    mouthPickerEl.classList.toggle("hidden", !hasMouth);
    if (!hasMouth) return;
    mouthPickerEl.innerHTML = "<span class='picker-icon'>👄</span>";
    for (const shape of MOUTH_SHAPES) {
      const btn = document.createElement("button");
      btn.className = "shape-btn" + (shape.id === getMouthShape(charId) ? " selected" : "");
      btn.textContent = shape.emoji;
      btn.title = "Mouth shape";
      btn.addEventListener("click", () => {
        state.mouthShapes[charId] = shape.id;
        renderMouthPicker();
        renderCharacter();
        renderShelf();
        playSound("on");
        say(shape.id === "tongue" ? ["Blehhh! 😛"]
          : shape.id === "surprised" ? ["WOW!", "Gasp!"]
          : shape.id === "laugh" ? ["HAHAHA!"]
          : shape.id === "frown" ? ["Aww, cheer up!"]
          : ["Smile!"]);
      });
      mouthPickerEl.appendChild(btn);
    }
  }

  /* ---------------- background picker ---------------- */

  const bgPickerEl = document.getElementById("bg-picker");

  function renderBgPicker() {
    bgPickerEl.innerHTML = "";
    for (const bg of BACKGROUNDS) {
      const btn = document.createElement("button");
      btn.className = "bg-btn" + (bg.id === state.background ? " selected" : "");
      btn.textContent = bg.emoji;
      btn.title = bg.name;
      btn.addEventListener("click", () => {
        state.background = bg.id;
        renderBgPicker();
        renderCharacter();
        playSound("on");
        if (bg.id !== "none") {
          say([`Off to the ${bg.name.toLowerCase()}!`, "Nice scenery!", "New adventure!"]);
        }
      });
      bgPickerEl.appendChild(btn);
    }
  }

  /* ---------------- weather picker ---------------- */

  const weatherPickerEl = document.getElementById("weather-picker");

  function renderWeatherPicker() {
    weatherPickerEl.innerHTML = "<span class='picker-icon'>🌦️</span>";
    for (const wx of WEATHERS) {
      const btn = document.createElement("button");
      btn.className = "bg-btn" + (wx.id === state.weather ? " selected" : "");
      btn.textContent = wx.emoji;
      btn.title = wx.name;
      btn.addEventListener("click", () => {
        state.weather = wx.id;
        renderWeatherPicker();
        renderCharacter();
        playSound("on");
        if (wx.id !== "none") {
          say(wx.id === "rain" ? ["Splish splash!", "Where are my boots?"]
            : wx.id === "snow" ? ["Brrr! Snow day!", "Let it snow!"]
            : wx.id === "bubbles" ? ["Blub blub!", "Bubble party!"]
            : ["HOORAY!", "Party time! 🎊"]);
        }
      });
      weatherPickerEl.appendChild(btn);
    }
  }

  /* ---------------- renaming ---------------- */

  const nameTag = document.getElementById("name-tag");
  const nameText = document.getElementById("name-text");
  const renameBtn = document.getElementById("rename-btn");

  function renderNameTag() {
    nameText.textContent = getName(state.characterId);
  }

  function startRename() {
    if (document.getElementById("name-input")) return; // already editing
    const input = document.createElement("input");
    input.id = "name-input";
    input.maxLength = 16;
    input.value = getName(state.characterId);
    nameText.replaceWith(input);
    renameBtn.classList.add("hidden");
    input.focus();
    input.select();

    const commit = () => {
      const newName = input.value.trim();
      const oldName = getName(state.characterId);
      state.names[state.characterId] = newName || CHARACTERS[state.characterId].name;
      saveNames();
      input.replaceWith(nameText);
      renameBtn.classList.remove("hidden");
      renderNameTag();
      renderShelf();
      if (getName(state.characterId) !== oldName) {
        bounce();
        playSound("on");
        say([
          `Nice to meet you, ${getName(state.characterId)}!`,
          `${getName(state.characterId)}? Great name!`,
          `All hail ${getName(state.characterId)}!`
        ]);
      }
    };

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") input.blur();
      if (e.key === "Escape") { input.value = getName(state.characterId); input.blur(); }
    });
    input.addEventListener("blur", commit);
  }

  nameTag.addEventListener("click", startRename);

  /* ---------------- reactions ---------------- */

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  let bubbleTimer;
  function say(lines) {
    if (state.customLine) return;   // don't talk over what the player wrote
    bubble.textContent = pick(lines);
    bubble.classList.remove("hidden");
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.add("hidden"), 2200);
  }

  /* the player can type their own line — it stays put and goes into photos */
  function showCustomLine() {
    clearTimeout(bubbleTimer);
    if (state.customLine) {
      bubble.textContent = state.customLine;
      bubble.classList.remove("hidden");
      bubble.classList.add("custom");
    } else {
      bubble.classList.add("hidden");
      bubble.classList.remove("custom");
    }
  }

  function editLine() {
    if (bubble.querySelector("input")) return;
    clearTimeout(bubbleTimer);
    const input = document.createElement("input");
    input.id = "bubble-input";
    input.maxLength = 40;
    input.placeholder = "Say something...";
    input.value = state.customLine;
    bubble.textContent = "";
    bubble.classList.remove("hidden");
    bubble.appendChild(input);
    input.focus();
    input.select();

    const done = () => {
      state.customLine = input.value.trim();
      showCustomLine();
      if (state.customLine) { bounce(); playSound("on"); }
    };
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") input.blur();
      if (e.key === "Escape") { input.value = state.customLine; input.blur(); }
    });
    input.addEventListener("blur", done);
  }

  bubble.addEventListener("click", editLine);
  document.getElementById("talk-btn").addEventListener("click", editLine);

  function bounce() {
    if (dancing) return;            // the dance already has the floor
    charSvg.classList.remove("bounce");
    void charSvg.offsetWidth; // restart the animation
    charSvg.classList.add("bounce");
  }

  /* tiny cartoon sounds, no audio files needed (shares the Jukebox context) */
  function playSound(kind) {
    try {
      const audioCtx = Jukebox.context();
      if (audioCtx.state === "suspended") audioCtx.resume();
      const t = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain).connect(audioCtx.destination);
      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      if (kind === "off") {         // descending "pop"
        osc.frequency.setValueAtTime(500, t);
        osc.frequency.exponentialRampToValueAtTime(180, t + 0.25);
      } else {                      // rising "boing"
        osc.frequency.setValueAtTime(220, t);
        osc.frequency.exponentialRampToValueAtTime(660, t + 0.18);
      }
      osc.start(t);
      osc.stop(t + 0.3);
    } catch (e) { /* sound is a bonus, never break the game for it */ }
  }

  /* ---------------- equip / remove ---------------- */

  function equip(itemId) {
    const item = itemById(itemId);
    state.worn[item.category] = itemId;
    renderCharacter();
    bounce();
    playSound("on");
    say(COMBO_QUIPS[`${itemId}:${state.characterId}`] || QUIPS[itemId] || QUIPS.generic);
  }

  function removeWorn(cat) {
    state.worn[cat] = null;
    renderCharacter();
    playSound("off");
    say(QUIPS.remove);
  }

  charSvg.addEventListener("click", (e) => {
    const worn = e.target.closest(".worn");
    if (worn) removeWorn(worn.dataset.cat);
  });

  /* ---------------- drag & drop (pointer events: mouse + touch) ---------------- */

  let dragItemId = null;

  gridEl.addEventListener("pointerdown", (e) => {
    const cab = e.target.closest(".cab-item");
    if (!cab) return;
    e.preventDefault();
    dragItemId = cab.dataset.itemId;
    const dragItem = itemById(dragItemId);
    ghostSvg.setAttribute("viewBox", dragItem.preview || "-70 -70 140 140");
    ghostSvg.innerHTML = itemArt(dragItem);
    moveGhost(e);
    ghost.classList.remove("hidden");
    stage.classList.add("drop-ready");
  });

  // track the whole document so the drop always completes (or cleanly
  // cancels), even if the pointer leaves the cabinet mid-drag
  document.addEventListener("pointermove", (e) => {
    if (dragItemId) moveGhost(e);
  });

  document.addEventListener("pointerup", (e) => {
    if (!dragItemId) return;
    const r = stage.getBoundingClientRect();
    const overStage =
      e.clientX >= r.left && e.clientX <= r.right &&
      e.clientY >= r.top && e.clientY <= r.bottom;
    if (overStage) equip(dragItemId);
    endDrag();
  });

  document.addEventListener("pointercancel", endDrag);

  function moveGhost(e) {
    ghost.style.left = e.clientX + "px";
    ghost.style.top = e.clientY + "px";
  }

  function endDrag() {
    dragItemId = null;
    ghost.classList.add("hidden");
    stage.classList.remove("drop-ready");
  }

  /* ---------------- toolbar ---------------- */

  document.getElementById("surprise-btn").addEventListener("click", () => {
    for (const cat of CATEGORIES) {
      const options = ITEMS.filter((i) => i.category === cat.id);
      // 80% chance per slot: usually a full outfit, sometimes bare feet
      state.worn[cat.id] = Math.random() < 0.8 ? pick(options).id : null;
    }
    state.itemColors.hair = pick(HAIR_COLORS);
    state.itemColors.beards = pick(HAIR_COLORS);
    renderGrid();
    renderCharacter();
    bounce();
    playSound("on");
    say(["TA-DAAA!", "A masterpiece!", "What a look!", "Did the cabinet explode?!"]);
  });

  /* photo options: name color + emoji toggle, shown next to the Photo button */
  const PHOTO_COLORS = ["#4a3728", "#ffffff", "#e53935", "#3aa0ff", "#3ecf5a", "#9b59ff", "#ff6fb5"];
  const photoOptsEl = document.getElementById("photo-opts");

  function renderPhotoOpts() {
    photoOptsEl.innerHTML = "";
    for (const color of PHOTO_COLORS) {
      const btn = document.createElement("button");
      btn.className = "swatch small" + (color === state.photoTextColor ? " selected" : "");
      btn.style.background = color;
      btn.title = "Photo name color";
      btn.addEventListener("click", () => {
        state.photoTextColor = color;
        renderPhotoOpts();
      });
      photoOptsEl.appendChild(btn);
    }
    const emojiBtn = document.createElement("button");
    emojiBtn.className = "shape-btn small" + (state.photoEmoji ? " selected" : "");
    emojiBtn.textContent = "⭐";
    emojiBtn.title = state.photoEmoji ? "Stars ON — click to remove from photos" : "Stars OFF — click to add to photos";
    emojiBtn.addEventListener("click", () => {
      state.photoEmoji = !state.photoEmoji;
      renderPhotoOpts();
    });
    photoOptsEl.appendChild(emojiBtn);
  }

  /* speech bubble for saved photos: wraps the text, sizes the bubble to fit,
     and points a little tail down at the character */
  function drawSpeechBubble(ctx, text, W) {
    const font = "bold 34px 'Comic Sans MS', 'Chalkboard SE', cursive";
    ctx.font = font;
    ctx.textAlign = "center";

    const maxWidth = W - 140;
    const words = text.split(/\s+/);
    const lines = [];
    let line = "";
    for (const word of words) {
      const attempt = line ? line + " " + word : word;
      if (ctx.measureText(attempt).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = attempt;
      }
    }
    if (line) lines.push(line);

    const lh = 42;
    const textW = Math.max(...lines.map((l) => ctx.measureText(l).width));
    const bw = Math.min(W - 40, textW + 60);
    const bh = lines.length * lh + 34;
    const bx = (W - bw) / 2, by = 26, rad = 26;

    ctx.beginPath();
    ctx.moveTo(bx + rad, by);
    ctx.arcTo(bx + bw, by, bx + bw, by + bh, rad);
    ctx.arcTo(bx + bw, by + bh, bx, by + bh, rad);
    ctx.arcTo(bx, by + bh, bx, by, rad);
    ctx.arcTo(bx, by, bx + bw, by, rad);
    ctx.closePath();
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#4a3728";
    ctx.stroke();

    // tail
    ctx.beginPath();
    ctx.moveTo(W / 2 - 20, by + bh - 3);
    ctx.lineTo(W / 2, by + bh + 34);
    ctx.lineTo(W / 2 + 20, by + bh - 3);
    ctx.closePath();
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.strokeStyle = "#4a3728";
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(W / 2 - 17, by + bh - 4);
    ctx.lineTo(W / 2 + 17, by + bh - 4);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.fillStyle = "#4a3728";
    ctx.font = font;
    lines.forEach((l, i) => ctx.fillText(l, W / 2, by + 44 + i * lh));
  }

  /* photo booth: render the stage SVG (background included) to a canvas.
     With a background → JPG; with "none" → transparent PNG. */
  document.getElementById("photo-btn").addEventListener("click", () => {
    const W = 640, H = 1040, BAND = 110; // 2x the 320x520 viewBox + name band
    const plain = state.background === "none";

    // stand-alone copy of the stage SVG, with the shared defs (rainbow
    // gradient) baked in so hair colors survive outside the page
    const svgEl = charSvg.cloneNode(true);
    svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgEl.setAttribute("width", W);
    svgEl.setAttribute("height", H);

    // the weather particles get their look and motion from the stylesheet,
    // which does not travel with an exported SVG — bake both in
    const live = charSvg.querySelectorAll(".weather > *");
    const copies = svgEl.querySelectorAll(".weather > *");
    live.forEach((el, i) => {
      const copy = copies[i];
      if (!copy) return;
      const cs = getComputedStyle(el);
      if (cs.transform && cs.transform !== "none") copy.setAttribute("transform", cs.transform);
      for (const prop of ["fill", "stroke", "stroke-width", "stroke-linecap", "opacity"]) {
        const v = cs.getPropertyValue(prop);
        if (v) copy.setAttribute(prop, v);
      }
    });
    const defs = document.querySelector("#shared-defs defs");
    if (defs) svgEl.insertBefore(defs.cloneNode(true), svgEl.firstChild);

    const svgText = new XMLSerializer().serializeToString(svgEl);
    const svgUrl = URL.createObjectURL(
      new Blob([svgText], { type: "image/svg+xml;charset=utf-8" })
    );

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = W;
      canvas.height = H + BAND;
      const ctx = canvas.getContext("2d");

      // JPG can't be transparent, so give it a base; PNG stays see-through
      if (!plain) {
        ctx.fillStyle = "#fdf3e3";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0, W, H); // scene background comes from the SVG

      // the line the player typed, drawn as a speech bubble at the top
      if (state.customLine) drawSpeechBubble(ctx, state.customLine, W);

      // name plate at the bottom, in the chosen color (outlined so it reads
      // on any backdrop), with optional stars
      const name = getName(state.characterId);
      const label = state.photoEmoji ? `⭐ ${name} ⭐` : name;
      ctx.font = "bold 52px 'Comic Sans MS', 'Chalkboard SE', cursive";
      ctx.textAlign = "center";
      ctx.lineWidth = 8;
      ctx.strokeStyle = state.photoTextColor === "#ffffff" ? "#4a3728" : "#ffffff";
      ctx.strokeText(label, W / 2, H + 68);
      ctx.fillStyle = state.photoTextColor;
      ctx.fillText(label, W / 2, H + 68);

      URL.revokeObjectURL(svgUrl);
      const type = plain ? "image/png" : "image/jpeg";
      const ext = plain ? "png" : "jpg";
      canvas.toBlob((blob) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${name.replace(/[^\w\- ]/g, "").trim() || "outfit"}.${ext}`;
        a.click();
        URL.revokeObjectURL(a.href);
      }, type, 0.92);

      bounce();
      playSound("on");
      say(["Say cheese! 📸", "Strike a pose!", "Gorgeous! Frame it!"]);
    };
    img.src = svgUrl;
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    for (const cat of CATEGORIES) state.worn[cat.id] = null;
    renderCharacter();
    playSound("off");
    say(["Squeaky clean!", "Fresh start!"]);
  });

  /* ---------------- dance & head swap ---------------- */

  const danceBtn = document.getElementById("dance-btn");
  const swapBtn = document.getElementById("swap-btn");
  const unswapBtn = document.getElementById("unswap-btn");

  danceBtn.addEventListener("click", () => {
    dancing = !dancing;
    charSvg.classList.toggle("dancing", dancing);
    charSvg.classList.remove("bounce");
    danceBtn.classList.toggle("off", !dancing);
    danceBtn.textContent = dancing ? "🛑 Stop" : "💃 Dance!";
    if (dancing) {
      if (!Jukebox.isOn()) { Jukebox.toggle(); renderMusicBtn(); }  // music for the dancer
      playSound("on");
      say(["🎵 Boogie time!", "Watch my moves!", "Shake it!", "Dance party!!"]);
    }
  });

  function renderSwapButtons() {
    unswapBtn.classList.toggle("hidden", !state.swapHead);
    swapBtn.textContent = state.swapHead ? "🔀 Another!" : "🔀 Head Swap";
  }

  swapBtn.addEventListener("click", () => {
    const others = Object.keys(CHARACTERS).filter(
      (id) => id !== state.characterId && id !== state.swapHead
    );
    if (!others.length) return;
    state.swapHead = pick(others);
    renderSwapButtons();
    renderCharacter();
    bounce();
    playSound("on");
    say([`Whose head is this?!`, `I'm a ${getName(state.swapHead)} now!`,
         "This feels weird...", "Hahaha! Look at me!"]);
  });

  unswapBtn.addEventListener("click", () => {
    state.swapHead = null;
    renderSwapButtons();
    renderCharacter();
    playSound("off");
    say(["Phew, my own head!", "That's better."]);
  });

  /* ---------------- music ---------------- */

  const musicBtn = document.getElementById("music-btn");

  function renderMusicBtn() {
    const playing = Jukebox.isOn();
    musicBtn.textContent = playing ? "🎵" : "🔇";
    musicBtn.classList.toggle("off", !playing);
    musicBtn.title = playing ? "Music on — click for quiet" : "Music off — click to play";
  }

  Jukebox.init();
  renderMusicBtn();
  musicBtn.addEventListener("click", () => {
    const playing = Jukebox.toggle();
    renderMusicBtn();
    say(playing ? ["🎵 La la la!", "Dance party!"] : ["Shhh...", "Quiet time."]);
  });

  /* ---------------- photo studio ---------------- */

  PhotoStudio.init();
  PhotoStudio.restoreAll();

  document.getElementById("add-photo-btn").addEventListener("click", () => PhotoStudio.open());

  PhotoStudio.onAdd = (id) => {
    state.characterId = id;
    renderShelf();
    renderCharacter();
    renderNameTag();
    renderSkinPicker();
    renderEyePicker();
    renderFacePicker();
    bounce();
    playSound("on");
    say([`Welcome, ${getName(id)}!`, "A brand new star!", "Looking great already!"]);
    const sel = listEl.querySelector(".char-thumb.selected");
    if (sel) sel.scrollIntoView({ block: "nearest" });
  };

  /* ---------------- go ---------------- */

  renderShelf();
  renderTabs();
  renderGrid();
  renderCharacter();
  renderNameTag();
  renderBgPicker();
  renderSkinPicker();
  renderEyePicker();
  renderFacePicker();
  renderWeatherPicker();
  renderSwapButtons();
  renderPhotoOpts();
})();
