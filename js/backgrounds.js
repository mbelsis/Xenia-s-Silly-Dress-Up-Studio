/**
 * Stage backgrounds. Each svg fills the 320x520 viewBox and is drawn BEHIND
 * the character — both on the stage and in saved photos. "none" keeps the
 * stage plain and makes the photo booth save a transparent PNG.
 */

const BACKGROUNDS = [

  { id: "none", name: "No background", emoji: "⬜", svg: "" },

  {
    id: "party", name: "Party", emoji: "🎈",
    svg: `
      <rect width="320" height="520" fill="#fff0f6"/>
      <!-- streamers -->
      <path d="M0 0 Q40 40 20 90" stroke="#ff6fb5" stroke-width="6" fill="none"/>
      <path d="M320 0 Q280 50 300 100" stroke="#3aa0ff" stroke-width="6" fill="none"/>
      <!-- balloons -->
      <ellipse cx="42" cy="96" rx="24" ry="30" fill="#e53935"/>
      <path d="M42 126 q-4 30 6 56" stroke="#b0bec5" stroke-width="3" fill="none"/>
      <ellipse cx="282" cy="120" rx="24" ry="30" fill="#42a5f5"/>
      <path d="M282 150 q4 30 -6 56" stroke="#b0bec5" stroke-width="3" fill="none"/>
      <ellipse cx="66" cy="320" rx="20" ry="26" fill="#ffd54f"/>
      <path d="M66 346 q-4 26 4 48" stroke="#b0bec5" stroke-width="3" fill="none"/>
      <!-- confetti -->
      <g>
        <rect x="120" y="40"  width="10" height="5" fill="#ff6fb5" transform="rotate(25 125 42)"/>
        <rect x="200" y="70"  width="10" height="5" fill="#3ecf5a" transform="rotate(-30 205 72)"/>
        <rect x="260" y="250" width="10" height="5" fill="#ffb142" transform="rotate(45 265 252)"/>
        <rect x="30"  y="220" width="10" height="5" fill="#9b59ff" transform="rotate(-20 35 222)"/>
        <rect x="150" y="480" width="10" height="5" fill="#3aa0ff" transform="rotate(30 155 482)"/>
        <rect x="280" y="420" width="10" height="5" fill="#e53935" transform="rotate(-40 285 422)"/>
        <circle cx="100" cy="150" r="4" fill="#3ecf5a"/>
        <circle cx="240" cy="180" r="4" fill="#ff6fb5"/>
        <circle cx="60"  cy="430" r="4" fill="#ffb142"/>
        <circle cx="300" cy="330" r="4" fill="#9b59ff"/>
        <circle cx="170" cy="30"  r="4" fill="#3aa0ff"/>
      </g>
    `
  },

  {
    id: "beach", name: "Beach", emoji: "🏖️",
    svg: `
      <rect width="320" height="520" fill="#c8ecff"/>
      <!-- sun -->
      <circle cx="262" cy="66" r="30" fill="#ffd54f"/>
      <g stroke="#ffd54f" stroke-width="6" stroke-linecap="round">
        <path d="M262 20 v-12 M262 112 v12 M216 66 h-12 M308 66 h12"/>
        <path d="M230 34 l-9 -9 M294 98 l9 9 M294 34 l9 -9 M230 98 l-9 9"/>
      </g>
      <!-- cloud -->
      <g fill="#fff">
        <ellipse cx="70" cy="60" rx="30" ry="16"/>
        <ellipse cx="95" cy="52" rx="22" ry="13"/>
        <ellipse cx="48" cy="52" rx="18" ry="11"/>
      </g>
      <!-- sea -->
      <rect y="330" width="320" height="100" fill="#4fc3f7"/>
      <g stroke="#b3e5fc" stroke-width="4" fill="none">
        <path d="M20 360 q14 -8 28 0 q14 8 28 0"/>
        <path d="M180 390 q14 -8 28 0 q14 8 28 0"/>
        <path d="M80 410 q14 -8 28 0"/>
      </g>
      <!-- sand -->
      <rect y="424" width="320" height="96" fill="#ffe0a3"/>
      <circle cx="60" cy="470" r="5" fill="#f2c94c"/>
      <circle cx="250" cy="490" r="5" fill="#f2c94c"/>
      <!-- starfish -->
      <path d="M290 452 l5 10 11 1 -8 8 2 11 -10 -5 -10 5 2 -11 -8 -8 11 -1 Z" fill="#ff8a65"/>
    `
  },

  {
    id: "space", name: "Space", emoji: "🚀",
    svg: `
      <rect width="320" height="520" fill="#191243"/>
      <g fill="#fff">
        <circle cx="40" cy="60" r="2.5"/><circle cx="120" cy="30" r="2"/><circle cx="200" cy="70" r="2.5"/>
        <circle cx="290" cy="40" r="2"/><circle cx="30" cy="200" r="2"/><circle cx="300" cy="220" r="2.5"/>
        <circle cx="60" cy="340" r="2"/><circle cx="280" cy="380" r="2"/><circle cx="150" cy="490" r="2.5"/>
        <circle cx="40" cy="470" r="2"/><circle cx="240" cy="500" r="2"/>
      </g>
      <g fill="#ffe921">
        <path d="M70 130 l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1 Z"/>
        <path d="M260 300 l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1 Z"/>
      </g>
      <!-- ringed planet -->
      <circle cx="262" cy="100" r="24" fill="#ff8a65"/>
      <ellipse cx="262" cy="100" rx="38" ry="10" fill="none" stroke="#ffd54f" stroke-width="5" transform="rotate(-18 262 100)"/>
      <!-- moon -->
      <path d="M52 400 a20 20 0 1 0 20 26 a15 15 0 1 1 -20 -26 Z" fill="#e0e0e0"/>
      <!-- shooting star -->
      <path d="M100 240 l40 -18" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
      <circle cx="142" cy="220" r="4" fill="#fff"/>
    `
  },

  {
    id: "meadow", name: "Meadow", emoji: "🌈",
    svg: `
      <rect width="320" height="520" fill="#d9f2ff"/>
      <!-- rainbow -->
      <g fill="none" stroke-width="10">
        <path d="M-20 180 Q80 40 180 -20" stroke="#e53935"/>
        <path d="M-20 200 Q86 60 190 -6"  stroke="#ffb142"/>
        <path d="M-20 220 Q92 80 200 8"   stroke="#ffe921"/>
        <path d="M-20 240 Q98 100 210 22" stroke="#3ecf5a"/>
        <path d="M-20 260 Q104 120 220 36" stroke="#3aa0ff"/>
      </g>
      <!-- clouds -->
      <g fill="#fff">
        <ellipse cx="250" cy="90" rx="34" ry="18"/>
        <ellipse cx="278" cy="80" rx="24" ry="14"/>
        <ellipse cx="60" cy="290" rx="26" ry="14"/>
      </g>
      <!-- grass -->
      <rect y="408" width="320" height="112" fill="#9ed36a"/>
      <path d="M0 408 Q80 396 160 408 Q240 420 320 408 L320 424 L0 424 Z" fill="#8bc653"/>
      <!-- flowers -->
      <g>
        <path d="M50 470 v-22" stroke="#558b2f" stroke-width="4"/>
        <circle cx="50" cy="442" r="9" fill="#ff6fb5"/><circle cx="50" cy="442" r="4" fill="#ffe921"/>
        <path d="M272 486 v-24" stroke="#558b2f" stroke-width="4"/>
        <circle cx="272" cy="456" r="9" fill="#9b59ff"/><circle cx="272" cy="456" r="4" fill="#ffe921"/>
        <path d="M160 500 v-18" stroke="#558b2f" stroke-width="4"/>
        <circle cx="160" cy="476" r="8" fill="#ffb142"/><circle cx="160" cy="476" r="3.5" fill="#fff"/>
      </g>
    `
  },

  {
    id: "park", name: "Playground Park", emoji: "🛝",
    svg: `
      <rect width="320" height="520" fill="#d9f2ff"/>
      <!-- sun & clouds -->
      <circle cx="52" cy="56" r="26" fill="#ffd54f"/>
      <g fill="#fff">
        <ellipse cx="240" cy="60" rx="32" ry="16"/>
        <ellipse cx="266" cy="52" rx="22" ry="12"/>
        <ellipse cx="140" cy="40" rx="24" ry="12"/>
      </g>
      <!-- grass -->
      <rect y="360" width="320" height="160" fill="#9ed36a"/>
      <path d="M0 360 Q80 348 160 360 Q240 372 320 360 L320 376 L0 376 Z" fill="#8bc653"/>
      <!-- path -->
      <path d="M120 520 Q140 440 160 420 Q180 440 200 520 Z" fill="#e8d5a8"/>
      <!-- trees -->
      <rect x="34" y="300" width="14" height="70" rx="6" fill="#8d6e63"/>
      <circle cx="41" cy="278" r="34" fill="#66bb6a"/>
      <circle cx="22" cy="296" r="22" fill="#7cc46f"/>
      <circle cx="62" cy="294" r="22" fill="#7cc46f"/>
      <!-- slide (right) -->
      <rect x="272" y="290" width="8" height="90" fill="#90a4ae"/>
      <path d="M276 292 L232 386 L244 392 L282 306 Z" fill="#ffb142"/>
      <path d="M276 288 h14 v10 h-14 Z" fill="#e0662e"/>
      <path d="M286 298 V380" stroke="#90a4ae" stroke-width="6"/>
      <!-- swing (left) -->
      <path d="M70 388 L86 320 L102 388" stroke="#8d6e63" stroke-width="7" fill="none"/>
      <path d="M86 322 h34" stroke="#8d6e63" stroke-width="7" stroke-linecap="round"/>
      <path d="M96 326 V360 M112 326 V360" stroke="#78909c" stroke-width="3"/>
      <rect x="92" y="358" width="24" height="7" rx="3" fill="#e53935"/>
      <!-- flowers & butterfly -->
      <g>
        <path d="M150 470 v-16" stroke="#558b2f" stroke-width="3.5"/>
        <circle cx="150" cy="450" r="7" fill="#ff6fb5"/><circle cx="150" cy="450" r="3" fill="#ffe921"/>
        <path d="M262 486 v-14" stroke="#558b2f" stroke-width="3.5"/>
        <circle cx="262" cy="468" r="6" fill="#9b59ff"/><circle cx="262" cy="468" r="2.5" fill="#fff"/>
      </g>
      <ellipse cx="204" cy="180" rx="7" ry="10" fill="#ff8ab5" transform="rotate(-24 204 180)"/>
      <ellipse cx="216" cy="176" rx="7" ry="10" fill="#ffb0c0" transform="rotate(24 216 176)"/>
      <path d="M210 168 v18" stroke="#33261d" stroke-width="2.5"/>
    `
  },

  {
    id: "posters", name: "Poster Wall", emoji: "🖼️",
    svg: `
      <rect width="320" height="520" fill="#b39ddb"/>
      <rect y="470" width="320" height="50" fill="#8d6e63"/>
      <rect y="462" width="320" height="10" fill="#a1887f"/>
      <!-- rock star poster -->
      <g>
        <rect x="16" y="36" width="84" height="106" rx="4" fill="#fff" stroke="#7e57c2" stroke-width="3" transform="rotate(-3 58 89)"/>
        <rect x="24" y="46" width="68" height="60" fill="#33232b" transform="rotate(-3 58 76)"/>
        <path d="M44 88 L60 58 L66 62 L52 90 Z" fill="#ffd54f" transform="rotate(-3 58 76)"/>
        <circle cx="48" cy="92" r="7" fill="#e53935" transform="rotate(-3 58 76)"/>
        <path d="M30 120 h56 M34 130 h44" stroke="#7e57c2" stroke-width="5" transform="rotate(-3 58 125)"/>
      </g>
      <!-- dino poster -->
      <g>
        <rect x="222" y="52" width="80" height="98" rx="4" fill="#fff" stroke="#43a047" stroke-width="3" transform="rotate(2 262 101)"/>
        <ellipse cx="262" cy="92" rx="26" ry="20" fill="#66bb6a" transform="rotate(2 262 101)"/>
        <circle cx="252" cy="86" r="4" fill="#33261d" transform="rotate(2 262 101)"/>
        <path d="M240 74 l6 -10 6 8 6 -10 6 8" stroke="#2e7d32" stroke-width="4" fill="none" transform="rotate(2 262 101)"/>
        <path d="M238 128 h48" stroke="#43a047" stroke-width="6" transform="rotate(2 262 101)"/>
      </g>
      <!-- rainbow poster -->
      <g>
        <rect x="24" y="292" width="78" height="92" rx="4" fill="#fff" stroke="#3aa0ff" stroke-width="3" transform="rotate(2 63 338)"/>
        <g fill="none" transform="rotate(2 63 338)">
          <path d="M40 348 A23 23 0 0 1 86 348" stroke="#e53935" stroke-width="5"/>
          <path d="M46 348 A17 17 0 0 1 80 348" stroke="#ffe921" stroke-width="5"/>
          <path d="M52 348 A11 11 0 0 1 74 348" stroke="#3ecf5a" stroke-width="5"/>
        </g>
        <ellipse cx="42" cy="350" rx="8" ry="5" fill="#e0e0e0" transform="rotate(2 63 338)"/>
        <ellipse cx="84" cy="350" rx="8" ry="5" fill="#e0e0e0" transform="rotate(2 63 338)"/>
      </g>
      <!-- rocket poster -->
      <g>
        <rect x="218" y="286" width="82" height="100" rx="4" fill="#191243" stroke="#ffd54f" stroke-width="3" transform="rotate(-2 259 336)"/>
        <path d="M259 306 Q272 322 266 348 L252 348 Q246 322 259 306 Z" fill="#eceff1" transform="rotate(-2 259 336)"/>
        <circle cx="259" cy="330" r="5" fill="#4fc3f7" transform="rotate(-2 259 336)"/>
        <path d="M252 348 q7 14 7 18 q0 -4 7 -18 Z" fill="#ff9800" transform="rotate(-2 259 336)"/>
        <circle cx="236" cy="304" r="2" fill="#fff" transform="rotate(-2 259 336)"/>
        <circle cx="284" cy="368" r="2" fill="#fff" transform="rotate(-2 259 336)"/>
      </g>
      <!-- tape bits -->
      <g fill="#fff59d" opacity="0.9">
        <rect x="50" y="30" width="18" height="8" rx="2" transform="rotate(-10 59 34)"/>
        <rect x="252" y="48" width="18" height="8" rx="2" transform="rotate(8 261 52)"/>
        <rect x="54" y="286" width="18" height="8" rx="2" transform="rotate(6 63 290)"/>
        <rect x="250" y="282" width="18" height="8" rx="2" transform="rotate(-7 259 286)"/>
      </g>
    `
  },

  {
    id: "sea", name: "Under the Sea", emoji: "🐠",
    svg: `
      <rect width="320" height="520" fill="#0288d1"/>
      <rect width="320" height="240" fill="#29b6f6" opacity="0.45"/>
      <!-- light beams -->
      <polygon points="60,0 110,0 40,300" fill="#ffffff" opacity="0.08"/>
      <polygon points="200,0 260,0 300,260" fill="#ffffff" opacity="0.08"/>
      <!-- sand -->
      <path d="M0 468 Q80 454 160 468 Q240 482 320 468 L320 520 L0 520 Z" fill="#f2d38b"/>
      <!-- seaweed -->
      <path d="M24 516 q-12 -44 4 -76 q14 -30 2 -62" stroke="#2e7d32" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M44 516 q10 -36 -2 -66 q-10 -26 0 -50" stroke="#43a047" stroke-width="7" fill="none" stroke-linecap="round"/>
      <!-- coral -->
      <path d="M286 516 v-46 M286 490 l-16 -20 M286 480 l14 -22" stroke="#ff8a80" stroke-width="9" stroke-linecap="round" fill="none"/>
      <!-- fish -->
      <g>
        <ellipse cx="62" cy="140" rx="17" ry="11" fill="#ffb142"/>
        <path d="M78 140 L94 131 L94 149 Z" fill="#ffb142"/>
        <circle cx="55" cy="137" r="2.5" fill="#33261d"/>
      </g>
      <g>
        <ellipse cx="252" cy="210" rx="15" ry="10" fill="#ff6fb5"/>
        <path d="M237 210 L222 202 L222 218 Z" fill="#ff6fb5"/>
        <circle cx="259" cy="207" r="2.5" fill="#33261d"/>
      </g>
      <g>
        <ellipse cx="110" cy="330" rx="11" ry="7" fill="#ffe921"/>
        <path d="M121 330 L132 324 L132 336 Z" fill="#ffe921"/>
        <circle cx="105" cy="328" r="2" fill="#33261d"/>
      </g>
      <!-- bubbles -->
      <g fill="none" stroke="#b3e5fc" stroke-width="3">
        <circle cx="90" cy="80" r="7"/><circle cx="104" cy="56" r="5"/>
        <circle cx="280" cy="330" r="7"/><circle cx="292" cy="306" r="5"/>
        <circle cx="40" cy="410" r="6"/>
      </g>
    `
  },

  {
    id: "stage", name: "Theater Stage", emoji: "🎭",
    svg: `
      <rect width="320" height="520" fill="#33232b"/>
      <!-- spotlight -->
      <polygon points="118,0 202,0 305,520 15,520" fill="#fff3c4" opacity="0.22"/>
      <ellipse cx="160" cy="490" rx="150" ry="26" fill="#fff3c4" opacity="0.25"/>
      <!-- floor -->
      <rect y="452" width="320" height="68" fill="#6d4c41"/>
      <path d="M0 452 h320" stroke="#5d4037" stroke-width="4"/>
      <!-- curtains -->
      <path d="M0 0 H62 Q46 120 58 260 Q64 380 40 520 H0 Z" fill="#c62828"/>
      <path d="M320 0 H258 Q274 120 262 260 Q256 380 280 520 H320 Z" fill="#c62828"/>
      <path d="M30 0 Q38 140 30 300 Q26 420 34 520" stroke="#8e1b1b" stroke-width="6" fill="none"/>
      <path d="M290 0 Q282 140 290 300 Q294 420 286 520" stroke="#8e1b1b" stroke-width="6" fill="none"/>
      <!-- valance -->
      <path d="M0 0 H320 V26 Q290 52 260 26 Q230 52 200 26 Q170 52 140 26 Q110 52 80 26 Q50 52 20 26 Q10 34 0 26 Z" fill="#b71c1c"/>
      <path d="M0 26 H320" stroke="#ffd54f" stroke-width="5"/>
    `
  }
];
