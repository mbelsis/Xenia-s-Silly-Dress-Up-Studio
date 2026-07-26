/**
 * Character catalog.
 * Each character is drawn in a 320x520 viewBox and defines anchor points —
 * the coordinates where each wardrobe slot snaps — plus a per-slot scale so
 * one wardrobe fits every head/body size.
 */

const CHARACTERS = {

  zoe: {
    name: "Zoe",
    neckY: 196,
    headY: 178,
    skin: "#f2c49b",
    anchors: {
      hats:    { x: 160, y: 52,  scale: 1.0 },
      hair:    { x: 160, y: 60,  scale: 1.0 },
      makeup:  { x: 160, y: 122, scale: 1.0 },
      jewelry: { x: 160, y: 196, scale: 1.0 },
      clothes: { x: 160, y: 288, scale: 1.0 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
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
        <path d="M115 210 Q160 190 205 210 L212 320 Q160 345 108 320 Z" fill="#ffd54f"/>
      </g>
      <!-- head -->
      <circle cx="160" cy="118" r="60" fill="SKINC"/>
      <!-- hair -->
      <path d="M100 118 Q95 48 160 46 Q225 48 220 118 Q212 84 160 82 Q108 84 100 118 Z" fill="#6d4c41"/>
      <circle cx="103" cy="122" r="10" fill="#6d4c41"/>
      <circle cx="217" cy="122" r="10" fill="#6d4c41"/>
      <!-- face -->
      <circle cx="138" cy="115" r="7" fill="EYEC"/>
      <circle cx="182" cy="115" r="7" fill="EYEC"/>
      <circle cx="140" cy="112" r="2.5" fill="#fff"/>
      <circle cx="184" cy="112" r="2.5" fill="#fff"/>
      <g transform="translate(160 151)">MOUTHC</g>
    `
  },

  cat: {
    name: "Sir Fluffington",
    neckY: 258,
    headY: 213,
    fur: "#ef9a3c",
    anchors: {
      hats:    { x: 160, y: 74,  scale: 1.1 },
      hair:    { x: 160, y: 84,  scale: 1.1 },
      makeup:  { x: 160, y: 158, scale: 1.05 },
      jewelry: { x: 160, y: 240, scale: 1.05 },
      clothes: { x: 160, y: 330, scale: 1.05 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <!-- tail -->
      <path d="M235 400 Q290 380 280 320 Q275 295 258 300" stroke="#ef9a3c" stroke-width="22" fill="none" stroke-linecap="round"/>
      <!-- back paws (hidden when wearing shoes) -->
      <g class="baseshoes">
        <ellipse cx="132" cy="458" rx="26" ry="14" fill="#f7b45c"/>
        <ellipse cx="188" cy="458" rx="26" ry="14" fill="#f7b45c"/>
      </g>
      <!-- body -->
      <ellipse cx="160" cy="360" rx="86" ry="100" fill="#ef9a3c"/>
      <ellipse cx="160" cy="385" rx="52" ry="65" fill="#ffe0b2"/>
      <!-- front paws -->
      <ellipse cx="118" cy="440" rx="20" ry="26" fill="#ef9a3c"/>
      <ellipse cx="202" cy="440" rx="20" ry="26" fill="#ef9a3c"/>
      <!-- ears -->
      <path d="M96 100 L110 40 L150 82 Z" fill="#ef9a3c"/>
      <path d="M224 100 L210 40 L170 82 Z" fill="#ef9a3c"/>
      <path d="M107 90 L114 58 L136 82 Z" fill="#ffb0c0"/>
      <path d="M213 90 L206 58 L184 82 Z" fill="#ffb0c0"/>
      <!-- head -->
      <circle cx="160" cy="145" r="68" fill="#ef9a3c"/>
      <!-- stripes -->
      <path d="M150 80 q10 8 20 0" stroke="#d97f22" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M138 90 q22 12 44 0" stroke="#d97f22" stroke-width="6" fill="none" stroke-linecap="round"/>
      <!-- eyes: deadpan half-closed -->
      <path d="M124 138 h26" stroke="#33261d" stroke-width="6" stroke-linecap="round"/>
      <path d="M170 138 h26" stroke="#33261d" stroke-width="6" stroke-linecap="round"/>
      <circle cx="137" cy="144" r="5" fill="EYEC"/>
      <circle cx="183" cy="144" r="5" fill="EYEC"/>
      <!-- muzzle -->
      <path d="M154 160 L160 168 L166 160 Z" fill="#e57373"/>
      <path d="M160 168 Q160 178 148 180 M160 168 Q160 178 172 180" stroke="#33261d" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- whiskers -->
      <path d="M110 158 h-34 M112 170 h-30" stroke="#33261d" stroke-width="3" stroke-linecap="round"/>
      <path d="M210 158 h34 M208 170 h30" stroke="#33261d" stroke-width="3" stroke-linecap="round"/>
    `
  },

  dog: {
    name: "Biscuit",
    neckY: 254,
    headY: 206,
    fur: "#b98753",
    anchors: {
      hats:    { x: 160, y: 70,  scale: 1.1 },
      hair:    { x: 160, y: 80,  scale: 1.1 },
      makeup:  { x: 160, y: 152, scale: 1.05 },
      jewelry: { x: 160, y: 238, scale: 1.05 },
      clothes: { x: 160, y: 330, scale: 1.05 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <!-- tail (mid-wag) -->
      <path d="M232 380 Q280 350 270 305" stroke="#a1734b" stroke-width="20" fill="none" stroke-linecap="round"/>
      <!-- back paws -->
      <g class="baseshoes">
        <ellipse cx="130" cy="458" rx="27" ry="14" fill="#b98753"/>
        <ellipse cx="190" cy="458" rx="27" ry="14" fill="#b98753"/>
      </g>
      <!-- body -->
      <ellipse cx="160" cy="358" rx="88" ry="102" fill="#b98753"/>
      <ellipse cx="160" cy="385" rx="54" ry="66" fill="#f0dcbe"/>
      <!-- front paws -->
      <ellipse cx="116" cy="440" rx="21" ry="27" fill="#b98753"/>
      <ellipse cx="204" cy="440" rx="21" ry="27" fill="#b98753"/>
      <!-- floppy ears -->
      <path d="M100 92 Q70 130 84 180 Q104 190 116 150 Z" fill="#8a5a33"/>
      <path d="M220 92 Q250 130 236 180 Q216 190 204 150 Z" fill="#8a5a33"/>
      <!-- head -->
      <circle cx="160" cy="140" r="66" fill="#b98753"/>
      <!-- eye patch -->
      <circle cx="185" cy="128" r="22" fill="#8a5a33"/>
      <!-- eyes: big and excited -->
      <circle cx="136" cy="130" r="11" fill="#fff"/>
      <circle cx="186" cy="130" r="11" fill="#fff"/>
      <circle cx="138" cy="132" r="6" fill="EYEC"/>
      <circle cx="188" cy="132" r="6" fill="EYEC"/>
      <!-- muzzle + tongue -->
      <ellipse cx="160" cy="168" rx="30" ry="22" fill="#f0dcbe"/>
      <ellipse cx="160" cy="156" rx="12" ry="9" fill="#33261d"/>
      <path d="M160 176 q0 26 14 30 q10 2 10 -12 q0 -10 -8 -14" fill="#ff8a9d"/>
      <path d="M138 172 Q160 186 182 172" stroke="#33261d" stroke-width="4" fill="none" stroke-linecap="round"/>
    `
  },

  leo: {
    name: "Leo",
    neckY: 196,
    headY: 178,
    skin: "#e8b78a",
    anchors: {
      hats:    { x: 160, y: 52,  scale: 1.0 },
      hair:    { x: 160, y: 60,  scale: 1.0 },
      makeup:  { x: 160, y: 122, scale: 1.0 },
      jewelry: { x: 160, y: 196, scale: 1.0 },
      clothes: { x: 160, y: 288, scale: 1.0 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <!-- legs -->
      <rect x="132" y="350" width="22" height="100" rx="11" fill="SKINC"/>
      <rect x="166" y="350" width="22" height="100" rx="11" fill="SKINC"/>
      <!-- painted shorts (hidden when wearing bottoms) -->
      <g class="pants">
        <path d="M126 340 H194 L198 392 H166 L160 368 L154 392 H122 Z" fill="#5c6bc0"/>
      </g>
      <!-- sneakers (hidden when wearing shoes) -->
      <g class="baseshoes">
        <ellipse cx="140" cy="458" rx="24" ry="12" fill="#43a047"/>
        <ellipse cx="180" cy="458" rx="24" ry="12" fill="#43a047"/>
        <path d="M126 456 h18 M170 456 h18" stroke="#fff" stroke-width="3"/>
      </g>
      <!-- arms -->
      <rect x="92"  y="212" width="20" height="110" rx="10" fill="SKINC" transform="rotate(14 102 212)"/>
      <rect x="208" y="212" width="20" height="110" rx="10" fill="SKINC" transform="rotate(-14 218 212)"/>
      <!-- striped t-shirt (hidden when wearing a top) -->
      <g class="baseshirt">
        <path d="M115 210 Q160 190 205 210 L212 320 Q160 345 108 320 Z" fill="#66bb6a"/>
        <path d="M113 240 Q160 252 207 240 M111 274 Q160 286 209 274" stroke="#388e3c" stroke-width="8" fill="none"/>
      </g>
      <!-- head -->
      <circle cx="160" cy="118" r="60" fill="SKINC"/>
      <!-- spiky hair -->
      <path d="M100 108 Q96 62 116 52 L122 70 L132 46 L140 66 L152 40 L160 62 L170 40 L180 64 L190 46 L200 68 L206 52 Q224 64 220 108 Q208 76 160 74 Q112 76 100 108 Z" fill="#4e342e"/>
      <!-- face -->
      <circle cx="138" cy="115" r="7" fill="EYEC"/>
      <circle cx="182" cy="115" r="7" fill="EYEC"/>
      <circle cx="140" cy="112" r="2.5" fill="#fff"/>
      <circle cx="184" cy="112" r="2.5" fill="#fff"/>
      <g fill="#d99a68">
        <circle cx="126" cy="134" r="2.5"/><circle cx="134" cy="139" r="2.5"/><circle cx="120" cy="140" r="2.5"/>
        <circle cx="194" cy="134" r="2.5"/><circle cx="186" cy="139" r="2.5"/><circle cx="200" cy="140" r="2.5"/>
      </g>
      <g transform="translate(160 153)">MOUTHC</g>
    `
  },

  mia: {
    name: "Mia",
    neckY: 196,
    headY: 178,
    skin: "#c68863",
    anchors: {
      hats:    { x: 160, y: 52,  scale: 1.0 },
      hair:    { x: 160, y: 60,  scale: 1.0 },
      makeup:  { x: 160, y: 122, scale: 1.0 },
      jewelry: { x: 160, y: 196, scale: 1.0 },
      clothes: { x: 160, y: 288, scale: 1.0 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <!-- legs -->
      <rect x="132" y="350" width="22" height="100" rx="11" fill="SKINC"/>
      <rect x="166" y="350" width="22" height="100" rx="11" fill="SKINC"/>
      <!-- shoes with straps (hidden when wearing shoes) -->
      <g class="baseshoes">
        <ellipse cx="140" cy="458" rx="24" ry="12" fill="#d81b60"/>
        <ellipse cx="180" cy="458" rx="24" ry="12" fill="#d81b60"/>
      </g>
      <!-- arms -->
      <rect x="92"  y="212" width="20" height="110" rx="10" fill="SKINC" transform="rotate(14 102 212)"/>
      <rect x="208" y="212" width="20" height="110" rx="10" fill="SKINC" transform="rotate(-14 218 212)"/>
      <!-- little dress (hidden when wearing a top) -->
      <g class="baseshirt">
        <path d="M118 210 Q160 192 202 210 L214 330 Q160 348 106 330 Z" fill="#ab47bc"/>
        <path d="M126 250 Q160 260 194 250" stroke="#8e24aa" stroke-width="5" fill="none"/>
        <path d="M152 228 q8 -8 8 0 q0 -8 8 0 q2 8 -8 14 q-10 -6 -8 -14 Z" fill="#ffe921"/>
      </g>
      <!-- pigtails behind head -->
      <circle cx="96" cy="88" r="19" fill="#3e2723"/>
      <circle cx="224" cy="88" r="19" fill="#3e2723"/>
      <path d="M92 104 q-6 24 4 40 M228 104 q6 24 -4 40" stroke="#3e2723" stroke-width="13" fill="none" stroke-linecap="round"/>
      <path d="M88 76 l10 10 -12 4 Z M232 76 l-10 10 12 4 Z" fill="#ff6fb5"/>
      <!-- head -->
      <circle cx="160" cy="118" r="60" fill="SKINC"/>
      <!-- hair with fringe -->
      <path d="M100 118 Q94 50 160 46 Q226 50 220 118 Q214 82 186 88 Q196 70 172 78 Q160 64 148 78 Q124 70 134 88 Q106 82 100 118 Z" fill="#3e2723"/>
      <!-- face -->
      <circle cx="138" cy="115" r="7" fill="EYEC"/>
      <circle cx="182" cy="115" r="7" fill="EYEC"/>
      <circle cx="140" cy="112" r="2.5" fill="#fff"/>
      <circle cx="184" cy="112" r="2.5" fill="#fff"/>
      <path d="M120 106 q6 -8 14 -6 M186 100 q8 -2 14 6" stroke="#3e2723" stroke-width="4" fill="none" stroke-linecap="round"/>
      <g transform="translate(160 151)">MOUTHC</g>
    `
  },

  sofia: {
    name: "Sofia",
    neckY: 188,
    headY: 168,
    skin: "#f2c49b",
    anchors: {
      hats:    { x: 160, y: 46,  scale: 1.0 },
      hair:    { x: 160, y: 54,  scale: 1.0 },
      makeup:  { x: 160, y: 114, scale: 1.0 },
      jewelry: { x: 160, y: 190, scale: 1.0 },
      clothes: { x: 160, y: 282, scale: 1.0 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <!-- long hair behind the body -->
      <path d="M100 100 Q90 200 108 258 L128 248 Q114 175 120 115 Z" fill="#4e2a14"/>
      <path d="M220 100 Q230 200 212 258 L192 248 Q206 175 200 115 Z" fill="#4e2a14"/>
      <!-- legs -->
      <rect x="130" y="345" width="24" height="106" rx="12" fill="SKINC"/>
      <rect x="166" y="345" width="24" height="106" rx="12" fill="SKINC"/>
      <!-- flats (hidden when wearing shoes) -->
      <g class="baseshoes">
        <ellipse cx="140" cy="458" rx="25" ry="12" fill="#7b1fa2"/>
        <ellipse cx="180" cy="458" rx="25" ry="12" fill="#7b1fa2"/>
      </g>
      <!-- arms -->
      <rect x="90"  y="208" width="21" height="114" rx="10" fill="SKINC" transform="rotate(14 100 208)"/>
      <rect x="209" y="208" width="21" height="114" rx="10" fill="SKINC" transform="rotate(-14 219 208)"/>
      <!-- wrap dress (hidden when wearing a top) -->
      <g class="baseshirt">
        <path d="M112 200 Q160 182 208 200 L222 332 Q160 352 98 332 Z" fill="#ff7043"/>
        <path d="M112 200 L160 252 L208 200" stroke="#e64a19" stroke-width="5" fill="none"/>
        <rect x="116" y="248" width="88" height="10" rx="5" fill="#e64a19"/>
      </g>
      <!-- head -->
      <circle cx="160" cy="110" r="58" fill="SKINC"/>
      <!-- hair with side part -->
      <path d="M102 102 Q98 42 160 40 Q222 42 218 102 Q212 66 178 74 Q140 58 118 84 Q106 88 102 102 Z" fill="#4e2a14"/>
      <!-- face -->
      <path d="M124 92 q7 -6 15 -4 M181 88 q8 -2 15 4" stroke="#4e2a14" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="139" cy="108" r="6.5" fill="EYEC"/>
      <circle cx="181" cy="108" r="6.5" fill="EYEC"/>
      <circle cx="141" cy="105" r="2.5" fill="#fff"/>
      <circle cx="183" cy="105" r="2.5" fill="#fff"/>
      <path d="M128 100 l-6 -4 M132 96 l-4 -5 M192 100 l6 -4 M188 96 l4 -5" stroke="#33261d" stroke-width="2.5" stroke-linecap="round"/>
      <g transform="translate(160 146)">MOUTHC</g>
    `
  },

  max: {
    name: "Max",
    neckY: 190,
    headY: 182,
    skin: "#e8b78a",
    anchors: {
      hats:    { x: 160, y: 48,  scale: 1.0 },
      hair:    { x: 160, y: 56,  scale: 1.0 },
      makeup:  { x: 160, y: 116, scale: 1.0 },
      jewelry: { x: 160, y: 190, scale: 1.0 },
      clothes: { x: 160, y: 282, scale: 1.05 },
      shoes:   { x: 160, y: 460, scale: 1.05 }
    },
    svg: `
      <!-- bare legs (revealed when wearing bottoms) -->
      <rect x="128" y="340" width="26" height="112" rx="12" fill="SKINC"/>
      <rect x="166" y="340" width="26" height="112" rx="12" fill="SKINC"/>
      <!-- jeans (hidden when wearing bottoms) -->
      <g class="pants">
        <rect x="128" y="340" width="26" height="112" rx="12" fill="#4a6da0"/>
        <rect x="166" y="340" width="26" height="112" rx="12" fill="#4a6da0"/>
      </g>
      <!-- basic shoes (hidden when wearing shoes) -->
      <g class="baseshoes">
        <ellipse cx="138" cy="460" rx="26" ry="13" fill="#5d4037"/>
        <ellipse cx="182" cy="460" rx="26" ry="13" fill="#5d4037"/>
      </g>
      <!-- arms -->
      <rect x="86"  y="206" width="22" height="118" rx="11" fill="SKINC" transform="rotate(14 97 206)"/>
      <rect x="212" y="206" width="22" height="118" rx="11" fill="SKINC" transform="rotate(-14 223 206)"/>
      <!-- lumberjack shirt (hidden when wearing a top) -->
      <g class="baseshirt">
        <path d="M108 200 Q160 180 212 200 L220 322 Q160 346 100 322 Z" fill="#c62828"/>
        <path d="M118 205 L126 330 M160 190 L160 340 M202 205 L194 330" stroke="#8e1b1b" stroke-width="7"/>
        <path d="M112 246 L210 246 M108 292 L214 292" stroke="#8e1b1b" stroke-width="7"/>
      </g>
      <!-- head -->
      <circle cx="160" cy="112" r="58" fill="SKINC"/>
      <!-- short hair -->
      <path d="M104 104 Q100 46 160 44 Q220 46 216 104 Q206 74 160 72 Q114 74 104 104 Z" fill="#3e2b23"/>
      <!-- beard -->
      <path d="M106 116 Q108 176 160 180 Q212 176 214 116 Q206 156 160 152 Q114 156 106 116 Z" fill="#3e2b23"/>
      <!-- face -->
      <path d="M126 96 h22 M172 96 h22" stroke="#3e2b23" stroke-width="6" stroke-linecap="round"/>
      <circle cx="139" cy="110" r="6.5" fill="EYEC"/>
      <circle cx="181" cy="110" r="6.5" fill="EYEC"/>
      <g transform="translate(160 144) scale(0.8)">MOUTHC</g>
    `
  },

  tom: {
    name: "Tom",
    neckY: 190,
    headY: 170,
    skin: "#d9a06b",
    anchors: {
      hats:    { x: 160, y: 48,  scale: 1.0 },
      hair:    { x: 160, y: 56,  scale: 1.0 },
      makeup:  { x: 160, y: 116, scale: 1.0 },
      jewelry: { x: 160, y: 190, scale: 1.0 },
      clothes: { x: 160, y: 282, scale: 1.05 },
      shoes:   { x: 160, y: 460, scale: 1.05 }
    },
    svg: `
      <!-- bare legs (revealed when wearing bottoms) -->
      <rect x="128" y="340" width="26" height="112" rx="12" fill="SKINC"/>
      <rect x="166" y="340" width="26" height="112" rx="12" fill="SKINC"/>
      <!-- chinos (hidden when wearing bottoms) -->
      <g class="pants">
        <rect x="128" y="340" width="26" height="112" rx="12" fill="#8d6e63"/>
        <rect x="166" y="340" width="26" height="112" rx="12" fill="#8d6e63"/>
      </g>
      <!-- basic shoes (hidden when wearing shoes) -->
      <g class="baseshoes">
        <ellipse cx="138" cy="460" rx="26" ry="13" fill="#37474f"/>
        <ellipse cx="182" cy="460" rx="26" ry="13" fill="#37474f"/>
      </g>
      <!-- arms -->
      <rect x="86"  y="206" width="22" height="118" rx="11" fill="SKINC" transform="rotate(14 97 206)"/>
      <rect x="212" y="206" width="22" height="118" rx="11" fill="SKINC" transform="rotate(-14 223 206)"/>
      <!-- polo shirt (hidden when wearing a top) -->
      <g class="baseshirt">
        <path d="M108 200 Q160 180 212 200 L220 322 Q160 346 100 322 Z" fill="#26a69a"/>
        <path d="M138 196 L160 224 L182 196 L174 190 L160 206 L146 190 Z" fill="#00897b"/>
        <circle cx="160" cy="234" r="3.5" fill="#00695c"/>
        <circle cx="160" cy="252" r="3.5" fill="#00695c"/>
      </g>
      <!-- head -->
      <circle cx="160" cy="112" r="58" fill="SKINC"/>
      <!-- neat short hair -->
      <path d="M104 102 Q100 44 160 42 Q220 44 216 102 Q206 70 160 68 Q114 70 104 102 Z" fill="#263238"/>
      <!-- face -->
      <path d="M126 94 h22 M172 94 h22" stroke="#263238" stroke-width="6" stroke-linecap="round"/>
      <circle cx="139" cy="110" r="6.5" fill="EYEC"/>
      <circle cx="181" cy="110" r="6.5" fill="EYEC"/>
      <circle cx="141" cy="107" r="2.5" fill="#fff"/>
      <circle cx="183" cy="107" r="2.5" fill="#fff"/>
      <g transform="translate(160 150)">MOUTHC</g>
    `
  },

  grandpa: {
    name: "Grandpa Joe",
    neckY: 192,
    headY: 182,
    skin: "#eec9a2",
    anchors: {
      hats:    { x: 160, y: 46,  scale: 1.0 },
      hair:    { x: 160, y: 54,  scale: 1.0 },
      makeup:  { x: 160, y: 114, scale: 1.0 },
      jewelry: { x: 160, y: 190, scale: 1.0 },
      clothes: { x: 160, y: 282, scale: 1.05 },
      shoes:   { x: 160, y: 460, scale: 1.05 }
    },
    svg: `
      <!-- bare legs (revealed when wearing bottoms) -->
      <rect x="128" y="340" width="26" height="112" rx="12" fill="SKINC"/>
      <rect x="166" y="340" width="26" height="112" rx="12" fill="SKINC"/>
      <!-- comfy trousers (hidden when wearing bottoms) -->
      <g class="pants">
        <rect x="128" y="340" width="26" height="112" rx="12" fill="#7a6a58"/>
        <rect x="166" y="340" width="26" height="112" rx="12" fill="#7a6a58"/>
      </g>
      <!-- basic shoes (hidden when wearing shoes) -->
      <g class="baseshoes">
        <ellipse cx="138" cy="460" rx="26" ry="13" fill="#4e342e"/>
        <ellipse cx="182" cy="460" rx="26" ry="13" fill="#4e342e"/>
      </g>
      <!-- arms -->
      <rect x="86"  y="206" width="22" height="118" rx="11" fill="SKINC" transform="rotate(14 97 206)"/>
      <rect x="212" y="206" width="22" height="118" rx="11" fill="SKINC" transform="rotate(-14 223 206)"/>
      <!-- cardigan (hidden when wearing a top) -->
      <g class="baseshirt">
        <path d="M108 200 Q160 182 212 200 L218 322 Q160 344 102 322 Z" fill="#607d8b"/>
        <path d="M160 192 V340" stroke="#546e7a" stroke-width="6"/>
        <path d="M130 202 L160 226 L190 202 L184 194 L160 210 L136 194 Z" fill="#eceff1"/>
        <circle cx="150" cy="248" r="4" fill="#37474f"/>
        <circle cx="150" cy="278" r="4" fill="#37474f"/>
      </g>
      <!-- head (bald on top) -->
      <circle cx="160" cy="112" r="58" fill="SKINC"/>
      <circle cx="106" cy="122" r="13" fill="#cfd8dc"/>
      <circle cx="214" cy="122" r="13" fill="#cfd8dc"/>
      <!-- glasses -->
      <circle cx="137" cy="106" r="15" fill="none" stroke="#455a64" stroke-width="4"/>
      <circle cx="183" cy="106" r="15" fill="none" stroke="#455a64" stroke-width="4"/>
      <path d="M152 106 h16 M122 104 l-14 -4 M198 104 l14 -4" stroke="#455a64" stroke-width="4"/>
      <circle cx="137" cy="108" r="5" fill="EYEC"/>
      <circle cx="183" cy="108" r="5" fill="EYEC"/>
      <!-- rosy cheeks -->
      <ellipse cx="120" cy="126" rx="8" ry="5" fill="#f7b2a0" opacity="0.8"/>
      <ellipse cx="200" cy="126" rx="8" ry="5" fill="#f7b2a0" opacity="0.8"/>
      <!-- fluffy white beard -->
      <path d="M108 116 Q108 174 160 180 Q212 174 212 116 Q200 152 160 148 Q120 152 108 116 Z" fill="#eceff1"/>
      <path d="M138 132 Q160 121 182 132 Q170 142 160 138 Q150 142 138 132 Z" fill="#f5f5f5"/>
      <g transform="translate(160 152) scale(0.7)">MOUTHC</g>
    `
  },

  granny: {
    name: "Granny Rose",
    neckY: 190,
    headY: 168,
    skin: "#eec9a2",
    anchors: {
      hats:    { x: 160, y: 44,  scale: 1.0 },
      hair:    { x: 160, y: 52,  scale: 1.0 },
      makeup:  { x: 160, y: 114, scale: 1.0 },
      jewelry: { x: 160, y: 190, scale: 1.0 },
      clothes: { x: 160, y: 282, scale: 1.05 },
      shoes:   { x: 160, y: 460, scale: 1.05 }
    },
    svg: `
      <!-- legs -->
      <rect x="130" y="345" width="24" height="108" rx="12" fill="SKINC"/>
      <rect x="166" y="345" width="24" height="108" rx="12" fill="SKINC"/>
      <!-- long skirt (hidden when wearing bottoms) -->
      <g class="pants">
        <path d="M122 340 L198 340 L210 420 Q160 430 110 420 Z" fill="#00838f"/>
        <path d="M110 420 Q160 430 210 420 L210 410 Q160 420 110 410 Z" fill="#006064"/>
      </g>
      <!-- comfy shoes (hidden when wearing shoes) -->
      <g class="baseshoes">
        <ellipse cx="138" cy="460" rx="26" ry="13" fill="#8e24aa"/>
        <ellipse cx="182" cy="460" rx="26" ry="13" fill="#8e24aa"/>
      </g>
      <!-- arms -->
      <rect x="88"  y="208" width="21" height="114" rx="10" fill="SKINC" transform="rotate(14 98 208)"/>
      <rect x="211" y="208" width="21" height="114" rx="10" fill="SKINC" transform="rotate(-14 221 208)"/>
      <!-- blouse & shawl (hidden when wearing a top) -->
      <g class="baseshirt">
        <path d="M110 200 Q160 182 210 200 L218 326 Q160 346 102 326 Z" fill="#ce93d8"/>
        <path d="M110 200 Q160 224 210 200 L214 232 Q160 258 106 232 Z" fill="#8e24aa"/>
        <circle cx="160" cy="270" r="4" fill="#8e24aa"/>
        <circle cx="160" cy="292" r="4" fill="#8e24aa"/>
      </g>
      <!-- head -->
      <circle cx="160" cy="110" r="56" fill="SKINC"/>
      <!-- gray hair with a bun on top -->
      <circle cx="160" cy="44" r="20" fill="#cfd8dc"/>
      <path d="M106 100 Q102 48 160 46 Q218 48 214 100 Q206 70 160 68 Q114 70 106 100 Z" fill="#cfd8dc"/>
      <circle cx="107" cy="106" r="9" fill="#cfd8dc"/>
      <circle cx="213" cy="106" r="9" fill="#cfd8dc"/>
      <!-- glasses -->
      <circle cx="138" cy="105" r="14" fill="none" stroke="#ad1457" stroke-width="4"/>
      <circle cx="182" cy="105" r="14" fill="none" stroke="#ad1457" stroke-width="4"/>
      <path d="M152 105 h16 M124 103 l-13 -4 M196 103 l13 -4" stroke="#ad1457" stroke-width="4"/>
      <circle cx="138" cy="107" r="5" fill="EYEC"/>
      <circle cx="182" cy="107" r="5" fill="EYEC"/>
      <!-- rosy cheeks -->
      <ellipse cx="122" cy="126" rx="8" ry="5" fill="#f7b2a0" opacity="0.8"/>
      <ellipse cx="198" cy="126" rx="8" ry="5" fill="#f7b2a0" opacity="0.8"/>
      <g transform="translate(160 146) scale(0.9)">MOUTHC</g>
    `
  },

  pip: {
    name: "Pip",
    skin: "#f7d0ae",
    neckY: 205,
    headY: 193,
    anchors: {
      hats:    { x: 160, y: 56,  scale: 1.05 },
      hair:    { x: 160, y: 64,  scale: 1.05 },
      makeup:  { x: 160, y: 128, scale: 1.05 },
      jewelry: { x: 160, y: 205, scale: 0.95 },
      clothes: { x: 160, y: 282, scale: 0.95 },
      shoes:   { x: 160, y: 440, scale: 0.95 }
    },
    svg: `
      <!-- stubby legs -->
      <rect x="134" y="348" width="24" height="84" rx="12" fill="SKINC"/>
      <rect x="162" y="348" width="24" height="84" rx="12" fill="SKINC"/>
      <g class="baseshoes">
        <ellipse cx="142" cy="440" rx="24" ry="12" fill="#ef9a9a"/>
        <ellipse cx="178" cy="440" rx="24" ry="12" fill="#ef9a9a"/>
      </g>
      <!-- arms -->
      <rect x="96"  y="222" width="22" height="92" rx="11" fill="SKINC" transform="rotate(16 107 222)"/>
      <rect x="202" y="222" width="22" height="92" rx="11" fill="SKINC" transform="rotate(-16 213 222)"/>
      <!-- onesie -->
      <g class="baseshirt">
        <path d="M118 214 Q160 196 202 214 L212 330 Q160 352 108 330 Z" fill="#a5d6f7"/>
        <circle cx="160" cy="252" r="5" fill="#7fb3e0"/>
        <circle cx="160" cy="286" r="5" fill="#7fb3e0"/>
      </g>
      <!-- big toddler head -->
      <circle cx="160" cy="125" r="68" fill="SKINC"/>
      <path d="M152 60 q8 -24 24 -12 q-13 2 -13 15" stroke="#8d6e63" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="136" cy="122" r="8" fill="EYEC"/>
      <circle cx="184" cy="122" r="8" fill="EYEC"/>
      <circle cx="139" cy="118" r="3" fill="#fff"/>
      <circle cx="187" cy="118" r="3" fill="#fff"/>
      <ellipse cx="116" cy="146" rx="12" ry="8" fill="#f7b2a0" opacity="0.85"/>
      <ellipse cx="204" cy="146" rx="12" ry="8" fill="#f7b2a0" opacity="0.85"/>
      <g transform="translate(160 158) scale(0.9)">MOUTHC</g>
    `
  },

  nia: {
    name: "Nia",
    skin: "#8d5524",
    neckY: 196,
    headY: 178,
    anchors: {
      hats:    { x: 160, y: 46,  scale: 1.0 },
      hair:    { x: 160, y: 58,  scale: 1.0 },
      makeup:  { x: 160, y: 122, scale: 1.0 },
      jewelry: { x: 160, y: 196, scale: 1.0 },
      clothes: { x: 160, y: 288, scale: 1.0 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <rect x="132" y="350" width="22" height="100" rx="11" fill="SKINC"/>
      <rect x="166" y="350" width="22" height="100" rx="11" fill="SKINC"/>
      <g class="baseshoes">
        <ellipse cx="140" cy="458" rx="24" ry="12" fill="#ffb300"/>
        <ellipse cx="180" cy="458" rx="24" ry="12" fill="#ffb300"/>
      </g>
      <rect x="92"  y="212" width="20" height="110" rx="10" fill="SKINC" transform="rotate(14 102 212)"/>
      <rect x="208" y="212" width="20" height="110" rx="10" fill="SKINC" transform="rotate(-14 218 212)"/>
      <g class="baseshirt">
        <path d="M115 210 Q160 190 205 210 L212 320 Q160 345 108 320 Z" fill="#ff7043"/>
        <path d="M126 236 Q160 248 194 236" stroke="#e64a19" stroke-width="5" fill="none"/>
      </g>
      <!-- big curly hair -->
      <g fill="#2b1b12">
        <circle cx="160" cy="58" r="34"/><circle cx="116" cy="76" r="30"/><circle cx="204" cy="76" r="30"/>
        <circle cx="98" cy="108" r="26"/><circle cx="222" cy="108" r="26"/>
        <circle cx="132" cy="52" r="26"/><circle cx="188" cy="52" r="26"/>
      </g>
      <circle cx="160" cy="118" r="60" fill="SKINC"/>
      <path d="M104 108 Q108 62 160 60 Q212 62 216 108 Q206 80 160 78 Q114 80 104 108 Z" fill="#2b1b12"/>
      <circle cx="138" cy="115" r="7" fill="EYEC"/>
      <circle cx="182" cy="115" r="7" fill="EYEC"/>
      <circle cx="140" cy="112" r="2.5" fill="#fff"/>
      <circle cx="184" cy="112" r="2.5" fill="#fff"/>
      <path d="M124 100 q8 -6 16 -4 M180 96 q8 -2 16 4" stroke="#2b1b12" stroke-width="4" fill="none" stroke-linecap="round"/>
      <g transform="translate(160 151)">MOUTHC</g>
    `
  },

  ravi: {
    name: "Ravi",
    skin: "#c68863",
    neckY: 194,
    headY: 176,
    anchors: {
      hats:    { x: 160, y: 50,  scale: 1.0 },
      hair:    { x: 160, y: 58,  scale: 1.0 },
      makeup:  { x: 160, y: 120, scale: 1.0 },
      jewelry: { x: 160, y: 194, scale: 1.0 },
      clothes: { x: 160, y: 286, scale: 1.0 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <rect x="130" y="348" width="24" height="102" rx="12" fill="SKINC"/>
      <rect x="166" y="348" width="24" height="102" rx="12" fill="SKINC"/>
      <g class="pants">
        <rect x="130" y="340" width="24" height="90" rx="10" fill="#37474f"/>
        <rect x="166" y="340" width="24" height="90" rx="10" fill="#37474f"/>
      </g>
      <g class="baseshoes">
        <ellipse cx="140" cy="458" rx="25" ry="12" fill="#eceff1"/>
        <ellipse cx="180" cy="458" rx="25" ry="12" fill="#eceff1"/>
        <path d="M126 456 h20 M174 456 h20" stroke="#b0bec5" stroke-width="3"/>
      </g>
      <rect x="90"  y="210" width="21" height="112" rx="10" fill="SKINC" transform="rotate(14 100 210)"/>
      <rect x="209" y="210" width="21" height="112" rx="10" fill="SKINC" transform="rotate(-14 219 210)"/>
      <g class="baseshirt">
        <path d="M112 206 Q160 188 208 206 L216 324 Q160 346 104 324 Z" fill="#5c6bc0"/>
        <path d="M136 200 Q160 224 184 200" stroke="#3f51b5" stroke-width="5" fill="none"/>
      </g>
      <circle cx="160" cy="116" r="58" fill="SKINC"/>
      <!-- undercut with a topknot -->
      <circle cx="160" cy="44" r="15" fill="#1c1c1c"/>
      <path d="M104 100 Q102 54 160 52 Q218 54 216 100 Q206 74 160 72 Q114 74 104 100 Z" fill="#1c1c1c"/>
      <path d="M104 100 q10 8 20 4 M216 100 q-10 8 -20 4" stroke="#111" stroke-width="4" fill="none"/>
      <path d="M128 98 h22 M170 98 h22" stroke="#1c1c1c" stroke-width="6" stroke-linecap="round"/>
      <circle cx="139" cy="114" r="6.5" fill="EYEC"/>
      <circle cx="181" cy="114" r="6.5" fill="EYEC"/>
      <circle cx="141" cy="111" r="2.5" fill="#fff"/>
      <circle cx="183" cy="111" r="2.5" fill="#fff"/>
      <g transform="translate(160 150)">MOUTHC</g>
    `
  },

  elena: {
    name: "Elena",
    skin: "#e8b78a",
    neckY: 190,
    headY: 170,
    anchors: {
      hats:    { x: 160, y: 44,  scale: 1.0 },
      hair:    { x: 160, y: 54,  scale: 1.0 },
      makeup:  { x: 160, y: 116, scale: 1.0 },
      jewelry: { x: 160, y: 192, scale: 1.0 },
      clothes: { x: 160, y: 284, scale: 1.0 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <rect x="130" y="346" width="24" height="104" rx="12" fill="SKINC"/>
      <rect x="166" y="346" width="24" height="104" rx="12" fill="SKINC"/>
      <g class="baseshoes">
        <ellipse cx="140" cy="458" rx="25" ry="12" fill="#455a64"/>
        <ellipse cx="180" cy="458" rx="25" ry="12" fill="#455a64"/>
      </g>
      <rect x="90"  y="208" width="21" height="112" rx="10" fill="SKINC" transform="rotate(14 100 208)"/>
      <rect x="209" y="208" width="21" height="112" rx="10" fill="SKINC" transform="rotate(-14 219 208)"/>
      <g class="baseshirt">
        <path d="M112 202 Q160 184 208 202 L218 330 Q160 350 102 330 Z" fill="#26a69a"/>
        <path d="M138 196 L160 224 L182 196 L176 190 L160 210 L144 190 Z" fill="#00897b"/>
      </g>
      <circle cx="160" cy="112" r="58" fill="SKINC"/>
      <!-- hair in a neat bun -->
      <circle cx="160" cy="42" r="19" fill="#5d4037"/>
      <path d="M102 104 Q100 48 160 46 Q220 48 218 104 Q208 72 160 70 Q112 72 102 104 Z" fill="#6d4c41"/>
      <circle cx="103" cy="112" r="10" fill="#6d4c41"/>
      <circle cx="217" cy="112" r="10" fill="#6d4c41"/>
      <!-- glasses -->
      <rect x="120" y="98" width="34" height="26" rx="8" fill="none" stroke="#37474f" stroke-width="4"/>
      <rect x="166" y="98" width="34" height="26" rx="8" fill="none" stroke="#37474f" stroke-width="4"/>
      <path d="M154 110 h12 M120 104 l-12 -4 M200 104 l12 -4" stroke="#37474f" stroke-width="4"/>
      <circle cx="137" cy="111" r="6" fill="EYEC"/>
      <circle cx="183" cy="111" r="6" fill="EYEC"/>
      <g transform="translate(160 148)">MOUTHC</g>
    `
  },

  cat2: {
    name: "Mochi",
    neckY: 258,
    headY: 213,
    fur: "#9e9e9e",
    eyes: "#2e7d32",
    anchors: {
      hats:    { x: 160, y: 74,  scale: 1.1 },
      hair:    { x: 160, y: 84,  scale: 1.1 },
      makeup:  { x: 160, y: 158, scale: 1.05 },
      jewelry: { x: 160, y: 240, scale: 1.05 },
      clothes: { x: 160, y: 330, scale: 1.05 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <path d="M235 400 Q292 378 278 318 Q272 294 255 300" stroke="#9e9e9e" stroke-width="22" fill="none" stroke-linecap="round"/>
      <g class="baseshoes">
        <ellipse cx="132" cy="458" rx="26" ry="14" fill="#bdbdbd"/>
        <ellipse cx="188" cy="458" rx="26" ry="14" fill="#bdbdbd"/>
      </g>
      <ellipse cx="160" cy="360" rx="86" ry="100" fill="#9e9e9e"/>
      <ellipse cx="160" cy="385" rx="52" ry="65" fill="#eceff1"/>
      <ellipse cx="118" cy="440" rx="20" ry="26" fill="#9e9e9e"/>
      <ellipse cx="202" cy="440" rx="20" ry="26" fill="#9e9e9e"/>
      <path d="M96 100 L110 40 L150 82 Z" fill="#9e9e9e"/>
      <path d="M224 100 L210 40 L170 82 Z" fill="#9e9e9e"/>
      <path d="M107 90 L114 58 L136 82 Z" fill="#f8bbd0"/>
      <path d="M213 90 L206 58 L184 82 Z" fill="#f8bbd0"/>
      <circle cx="160" cy="145" r="68" fill="#9e9e9e"/>
      <ellipse cx="160" cy="168" rx="34" ry="24" fill="#eceff1"/>
      <!-- big happy eyes -->
      <circle cx="134" cy="134" r="13" fill="#fff"/>
      <circle cx="186" cy="134" r="13" fill="#fff"/>
      <circle cx="136" cy="136" r="7" fill="EYEC"/>
      <circle cx="188" cy="136" r="7" fill="EYEC"/>
      <path d="M154 160 L160 168 L166 160 Z" fill="#f48fb1"/>
      <path d="M160 168 Q160 176 150 178 M160 168 Q160 176 170 178" stroke="#33261d" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M110 158 h-32 M112 170 h-28" stroke="#33261d" stroke-width="3" stroke-linecap="round"/>
      <path d="M210 158 h32 M208 170 h28" stroke="#33261d" stroke-width="3" stroke-linecap="round"/>
    `
  },

  dog2: {
    name: "Spot",
    neckY: 254,
    headY: 206,
    fur: "#f5f5f5",
    anchors: {
      hats:    { x: 160, y: 70,  scale: 1.1 },
      hair:    { x: 160, y: 80,  scale: 1.1 },
      makeup:  { x: 160, y: 152, scale: 1.05 },
      jewelry: { x: 160, y: 238, scale: 1.05 },
      clothes: { x: 160, y: 330, scale: 1.05 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <path d="M232 380 Q282 352 272 305" stroke="#e0e0e0" stroke-width="20" fill="none" stroke-linecap="round"/>
      <g class="baseshoes">
        <ellipse cx="130" cy="458" rx="27" ry="14" fill="#f5f5f5"/>
        <ellipse cx="190" cy="458" rx="27" ry="14" fill="#f5f5f5"/>
      </g>
      <ellipse cx="160" cy="358" rx="88" ry="102" fill="#f5f5f5"/>
      <!-- dalmatian spots -->
      <circle cx="120" cy="320" r="13" fill="#37474f"/>
      <circle cx="205" cy="350" r="16" fill="#37474f"/>
      <circle cx="150" cy="410" r="11" fill="#37474f"/>
      <circle cx="220" cy="300" r="9"  fill="#37474f"/>
      <ellipse cx="116" cy="440" rx="21" ry="27" fill="#f5f5f5"/>
      <ellipse cx="204" cy="440" rx="21" ry="27" fill="#f5f5f5"/>
      <!-- floppy black ears -->
      <path d="M100 88 Q68 126 82 178 Q102 188 116 148 Z" fill="#37474f"/>
      <path d="M220 88 Q252 126 238 178 Q218 188 204 148 Z" fill="#37474f"/>
      <circle cx="160" cy="140" r="66" fill="#f5f5f5"/>
      <circle cx="132" cy="120" r="18" fill="#37474f"/>
      <circle cx="136" cy="130" r="10" fill="#fff"/>
      <circle cx="138" cy="132" r="5.5" fill="EYEC"/>
      <circle cx="186" cy="130" r="10" fill="#fff"/>
      <circle cx="188" cy="132" r="5.5" fill="EYEC"/>
      <ellipse cx="160" cy="168" rx="30" ry="22" fill="#fff"/>
      <circle cx="196" cy="176" r="8" fill="#37474f"/>
      <ellipse cx="160" cy="156" rx="12" ry="9" fill="#33261d"/>
      <path d="M138 172 Q160 186 182 172" stroke="#33261d" stroke-width="4" fill="none" stroke-linecap="round"/>
    `
  },

  bunny: {
    name: "Marshmallow",
    neckY: 256,
    headY: 212,
    fur: "#f7f3ee",
    anchors: {
      hats:    { x: 160, y: 54,  scale: 1.05 },
      hair:    { x: 160, y: 64,  scale: 1.05 },
      makeup:  { x: 160, y: 160, scale: 1.05 },
      jewelry: { x: 160, y: 244, scale: 1.05 },
      clothes: { x: 160, y: 332, scale: 1.05 },
      shoes:   { x: 160, y: 456, scale: 1.0 }
    },
    svg: `
      <!-- ears -->
      <ellipse cx="132" cy="55" rx="20" ry="52" fill="#f7f3ee" transform="rotate(-8 132 55)"/>
      <ellipse cx="188" cy="55" rx="20" ry="52" fill="#f7f3ee" transform="rotate(8 188 55)"/>
      <ellipse cx="132" cy="58" rx="10" ry="38" fill="#ffc9d4" transform="rotate(-8 132 58)"/>
      <ellipse cx="188" cy="58" rx="10" ry="38" fill="#ffc9d4" transform="rotate(8 188 58)"/>
      <!-- feet (hidden when wearing shoes) -->
      <g class="baseshoes">
        <ellipse cx="130" cy="456" rx="30" ry="15" fill="#f7f3ee"/>
        <ellipse cx="190" cy="456" rx="30" ry="15" fill="#f7f3ee"/>
      </g>
      <!-- body -->
      <ellipse cx="160" cy="358" rx="84" ry="100" fill="#f7f3ee"/>
      <ellipse cx="160" cy="385" rx="50" ry="62" fill="#fff"/>
      <ellipse cx="118" cy="438" rx="19" ry="25" fill="#f7f3ee"/>
      <ellipse cx="202" cy="438" rx="19" ry="25" fill="#f7f3ee"/>
      <!-- head -->
      <circle cx="160" cy="150" r="62" fill="#f7f3ee"/>
      <circle cx="138" cy="140" r="7" fill="EYEC"/>
      <circle cx="182" cy="140" r="7" fill="EYEC"/>
      <path d="M153 158 L160 166 L167 158 Z" fill="#ff8a9d"/>
      <!-- buck teeth -->
      <rect x="150" y="170" width="20" height="16" rx="4" fill="#fff" stroke="#d8cfc4" stroke-width="2"/>
      <path d="M160 170 V186" stroke="#d8cfc4" stroke-width="2"/>
      <path d="M112 156 h-30 M114 168 h-26" stroke="#b9aa99" stroke-width="3" stroke-linecap="round"/>
      <path d="M208 156 h30 M206 168 h26" stroke="#b9aa99" stroke-width="3" stroke-linecap="round"/>
    `
  },

  bear: {
    name: "Waffles",
    neckY: 256,
    headY: 210,
    fur: "#8d6e63",
    anchors: {
      hats:    { x: 160, y: 66,  scale: 1.15 },
      hair:    { x: 160, y: 76,  scale: 1.15 },
      makeup:  { x: 160, y: 150, scale: 1.1 },
      jewelry: { x: 160, y: 240, scale: 1.1 },
      clothes: { x: 160, y: 335, scale: 1.1 },
      shoes:   { x: 160, y: 458, scale: 1.05 }
    },
    svg: `
      <g class="baseshoes">
        <ellipse cx="128" cy="458" rx="29" ry="15" fill="#8d6e63"/>
        <ellipse cx="192" cy="458" rx="29" ry="15" fill="#8d6e63"/>
      </g>
      <ellipse cx="160" cy="360" rx="92" ry="102" fill="#8d6e63"/>
      <ellipse cx="160" cy="388" rx="54" ry="64" fill="#d7ccc8"/>
      <ellipse cx="112" cy="438" rx="22" ry="28" fill="#8d6e63"/>
      <ellipse cx="208" cy="438" rx="22" ry="28" fill="#8d6e63"/>
      <!-- ears -->
      <circle cx="108" cy="82" r="24" fill="#8d6e63"/>
      <circle cx="212" cy="82" r="24" fill="#8d6e63"/>
      <circle cx="108" cy="82" r="12" fill="#d7ccc8"/>
      <circle cx="212" cy="82" r="12" fill="#d7ccc8"/>
      <!-- head -->
      <circle cx="160" cy="142" r="68" fill="#8d6e63"/>
      <circle cx="136" cy="128" r="7" fill="EYEC"/>
      <circle cx="184" cy="128" r="7" fill="EYEC"/>
      <ellipse cx="160" cy="170" rx="34" ry="26" fill="#d7ccc8"/>
      <ellipse cx="160" cy="160" rx="13" ry="10" fill="#33261d"/>
      <path d="M160 170 Q160 180 148 182 M160 170 Q160 180 172 182" stroke="#33261d" stroke-width="4" fill="none" stroke-linecap="round"/>
    `
  },

  elephant: {
    name: "Peanut",
    neckY: 250,
    headY: 206,
    fur: "#90a4ae",
    anchors: {
      hats:    { x: 160, y: 62,  scale: 1.15 },
      hair:    { x: 160, y: 72,  scale: 1.15 },
      makeup:  { x: 160, y: 136, scale: 1.05 },
      jewelry: { x: 160, y: 238, scale: 1.1 },
      clothes: { x: 160, y: 338, scale: 1.1 },
      shoes:   { x: 160, y: 460, scale: 1.05 }
    },
    svg: `
      <!-- big ears -->
      <ellipse cx="80"  cy="150" rx="48" ry="64" fill="#90a4ae"/>
      <ellipse cx="240" cy="150" rx="48" ry="64" fill="#90a4ae"/>
      <ellipse cx="82"  cy="152" rx="30" ry="46" fill="#cfd8dc"/>
      <ellipse cx="238" cy="152" rx="30" ry="46" fill="#cfd8dc"/>
      <!-- legs -->
      <rect x="112" y="400" width="40" height="58" rx="16" fill="#90a4ae"/>
      <rect x="168" y="400" width="40" height="58" rx="16" fill="#90a4ae"/>
      <g class="baseshoes">
        <ellipse cx="132" cy="458" rx="24" ry="12" fill="#cfd8dc"/>
        <ellipse cx="188" cy="458" rx="24" ry="12" fill="#cfd8dc"/>
      </g>
      <!-- body -->
      <ellipse cx="160" cy="350" rx="92" ry="96" fill="#90a4ae"/>
      <ellipse cx="160" cy="378" rx="52" ry="58" fill="#cfd8dc"/>
      <!-- head -->
      <circle cx="160" cy="140" r="66" fill="#90a4ae"/>
      <circle cx="134" cy="126" r="8" fill="EYEC"/>
      <circle cx="186" cy="126" r="8" fill="EYEC"/>
      <circle cx="136" cy="123" r="3" fill="#fff"/>
      <circle cx="188" cy="123" r="3" fill="#fff"/>
      <!-- trunk -->
      <path d="M160 158 Q166 210 152 244 Q142 266 158 272" stroke="#90a4ae" stroke-width="28" fill="none" stroke-linecap="round"/>
      <path d="M150 180 h20 M148 206 h22 M146 230 h20" stroke="#78909c" stroke-width="4" stroke-linecap="round"/>
      <!-- cheeks smile -->
      <path d="M118 160 q8 10 18 8 M202 160 q-8 10 -18 8" stroke="#78909c" stroke-width="4" fill="none" stroke-linecap="round"/>
    `
  },

  lizard: {
    name: "Ziggy",
    neckY: 245,
    headY: 212,
    fur: "#7cb342",
    anchors: {
      hats:    { x: 160, y: 78,  scale: 1.0 },
      hair:    { x: 160, y: 88,  scale: 1.0 },
      makeup:  { x: 160, y: 168, scale: 1.0 },
      jewelry: { x: 160, y: 240, scale: 1.0 },
      clothes: { x: 160, y: 330, scale: 1.0 },
      shoes:   { x: 160, y: 455, scale: 1.0 }
    },
    svg: `
      <!-- tail -->
      <path d="M225 400 Q300 390 292 330 Q288 296 262 305 Q276 318 270 340 Q262 366 225 372" fill="#7cb342"/>
      <!-- feet (hidden when wearing shoes) -->
      <g class="baseshoes">
        <path d="M118 442 l-14 16 M130 446 l-2 18 M142 442 l10 16" stroke="#558b2f" stroke-width="9" stroke-linecap="round"/>
        <path d="M178 442 l-10 16 M190 446 l2 18 M202 442 l14 16" stroke="#558b2f" stroke-width="9" stroke-linecap="round"/>
      </g>
      <!-- body -->
      <ellipse cx="160" cy="345" rx="74" ry="98" fill="#7cb342"/>
      <ellipse cx="160" cy="368" rx="46" ry="66" fill="#dcedc8"/>
      <path d="M124 300 h14 M138 330 h14 M124 360 h14" stroke="#558b2f" stroke-width="5" stroke-linecap="round"/>
      <!-- bulgy eyes on top -->
      <circle cx="128" cy="102" r="24" fill="#7cb342"/>
      <circle cx="192" cy="102" r="24" fill="#7cb342"/>
      <circle cx="128" cy="100" r="14" fill="#fff"/>
      <circle cx="192" cy="100" r="14" fill="#fff"/>
      <circle cx="130" cy="102" r="7" fill="EYEC"/>
      <circle cx="194" cy="102" r="7" fill="EYEC"/>
      <!-- head -->
      <ellipse cx="160" cy="160" rx="62" ry="52" fill="#7cb342"/>
      <circle cx="140" cy="152" r="4" fill="#558b2f"/>
      <circle cx="180" cy="152" r="4" fill="#558b2f"/>
      <!-- wide grin + tongue -->
      <path d="M118 172 Q160 200 202 172" stroke="#33261d" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M160 188 q4 18 -4 24 l6 2 q10 -10 4 -28 Z" fill="#e53935"/>
    `
  },

  fish: {
    name: "Bubbles",
    neckY: 300,
    headY: 300,
    fur: "#29b6f6",
    anchors: {
      hats:    { x: 160, y: 116, scale: 1.1 },
      hair:    { x: 160, y: 126, scale: 1.1 },
      makeup:  { x: 160, y: 232, scale: 1.1 },
      jewelry: { x: 160, y: 312, scale: 1.0 },
      clothes: { x: 160, y: 352, scale: 1.0 },
      shoes:   { x: 160, y: 462, scale: 1.0 }
    },
    svg: `
      <!-- bubbles -->
      <circle cx="252" cy="90"  r="10" fill="none" stroke="#81d4fa" stroke-width="4"/>
      <circle cx="276" cy="60"  r="7"  fill="none" stroke="#81d4fa" stroke-width="4"/>
      <circle cx="240" cy="130" r="5"  fill="none" stroke="#81d4fa" stroke-width="4"/>
      <!-- tail fin (it stands on it!) -->
      <path d="M160 400 L108 470 Q160 448 212 470 Z" fill="#0288d1"/>
      <!-- side fins -->
      <path d="M72 280 Q40 300 58 330 Q84 322 96 300 Z" fill="#0288d1"/>
      <path d="M248 280 Q280 300 262 330 Q236 322 224 300 Z" fill="#0288d1"/>
      <!-- body -->
      <ellipse cx="160" cy="270" rx="94" ry="140" fill="#29b6f6"/>
      <!-- scales on lower half -->
      <g stroke="#0288d1" stroke-width="4" fill="none">
        <path d="M110 330 q12 14 24 0 M146 334 q12 14 24 0 M182 330 q12 14 24 0"/>
        <path d="M128 362 q12 14 24 0 M164 366 q12 14 24 0"/>
      </g>
      <!-- face -->
      <circle cx="124" cy="216" r="16" fill="#fff"/>
      <circle cx="196" cy="216" r="16" fill="#fff"/>
      <circle cx="127" cy="219" r="8" fill="EYEC"/>
      <circle cx="199" cy="219" r="8" fill="EYEC"/>
      <path d="M136 262 Q160 282 184 262" stroke="#01579b" stroke-width="6" fill="none" stroke-linecap="round"/>
      <ellipse cx="106" cy="252" rx="10" ry="7" fill="#81d4fa"/>
      <ellipse cx="214" cy="252" rx="10" ry="7" fill="#81d4fa"/>
    `
  },

  parrot: {
    name: "Mango",
    neckY: 232,
    headY: 210,
    fur: "#e53935",
    anchors: {
      hats:    { x: 160, y: 72,  scale: 1.0 },
      hair:    { x: 160, y: 82,  scale: 1.0 },
      makeup:  { x: 160, y: 148, scale: 1.0 },
      jewelry: { x: 160, y: 232, scale: 1.0 },
      clothes: { x: 160, y: 326, scale: 1.0 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <!-- tail feathers -->
      <path d="M138 400 Q128 470 118 496 L138 480 Z" fill="#e53935"/>
      <path d="M160 405 Q160 478 160 502 L172 480 Z" fill="#fdd835"/>
      <path d="M182 400 Q192 470 202 496 L206 470 Z" fill="#1e88e5"/>
      <!-- feet (hidden when wearing shoes) -->
      <g class="baseshoes">
        <path d="M132 440 v18 m0 0 l-12 10 m12 -10 l0 14 m0 -14 l12 10" stroke="#f57f17" stroke-width="8" stroke-linecap="round" fill="none"/>
        <path d="M188 440 v18 m0 0 l-12 10 m12 -10 l0 14 m0 -14 l12 10" stroke="#f57f17" stroke-width="8" stroke-linecap="round" fill="none"/>
      </g>
      <!-- body -->
      <ellipse cx="160" cy="330" rx="74" ry="96" fill="#e53935"/>
      <ellipse cx="160" cy="352" rx="44" ry="62" fill="#ffca28"/>
      <!-- wings -->
      <path d="M92 280 Q64 340 92 396 Q116 380 118 320 Z" fill="#43a047"/>
      <path d="M228 280 Q256 340 228 396 Q204 380 202 320 Z" fill="#1e88e5"/>
      <!-- head -->
      <circle cx="160" cy="150" r="60" fill="#e53935"/>
      <!-- eye patches -->
      <circle cx="134" cy="138" r="17" fill="#fff"/>
      <circle cx="186" cy="138" r="17" fill="#fff"/>
      <circle cx="137" cy="141" r="7" fill="EYEC"/>
      <circle cx="189" cy="141" r="7" fill="EYEC"/>
      <!-- beak -->
      <path d="M138 168 Q160 156 182 168 Q184 194 160 202 Q136 194 138 168 Z" fill="#f9a825"/>
      <path d="M144 190 Q160 200 176 190 Q170 208 160 208 Q150 208 144 190 Z" fill="#f57f17"/>
      <!-- head feathers -->
      <path d="M148 94 Q144 74 154 68 M160 92 Q160 70 168 66 M172 94 Q176 74 184 72" stroke="#c62828" stroke-width="6" fill="none" stroke-linecap="round"/>
    `
  },

  cow: {
    name: "Moolissa",
    fur: "#f7f4ef",
    neckY: 260,
    headY: 210,
    anchors: {
      hats:    { x: 160, y: 68,  scale: 1.1 },
      hair:    { x: 160, y: 78,  scale: 1.1 },
      makeup:  { x: 160, y: 152, scale: 1.05 },
      jewelry: { x: 160, y: 242, scale: 1.05 },
      clothes: { x: 160, y: 332, scale: 1.05 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <path d="M238 396 Q286 372 276 322" stroke="#f7f4ef" stroke-width="14" fill="none" stroke-linecap="round"/>
      <path d="M272 316 q14 12 4 26 q-12 4 -14 -12 Z" fill="#33261d"/>
      <g class="baseshoes">
        <ellipse cx="132" cy="458" rx="26" ry="14" fill="#33261d"/>
        <ellipse cx="188" cy="458" rx="26" ry="14" fill="#33261d"/>
      </g>
      <ellipse cx="160" cy="360" rx="88" ry="100" fill="#f7f4ef"/>
      <!-- patches -->
      <path d="M108 320 q26 -18 40 6 q-10 30 -38 22 q-14 -14 -2 -28 Z" fill="#33261d"/>
      <path d="M198 396 q28 -14 34 12 q-14 26 -38 12 q-8 -14 4 -24 Z" fill="#33261d"/>
      <ellipse cx="160" cy="404" rx="40" ry="46" fill="#ffd9e0"/>
      <circle cx="146" cy="426" r="5" fill="#e59aa8"/>
      <circle cx="174" cy="426" r="5" fill="#e59aa8"/>
      <!-- ears -->
      <ellipse cx="86" cy="150" rx="26" ry="16" fill="#f7f4ef" transform="rotate(-20 86 150)"/>
      <ellipse cx="234" cy="150" rx="26" ry="16" fill="#f7f4ef" transform="rotate(20 234 150)"/>
      <!-- horns -->
      <path d="M112 96 q-16 -22 -2 -30 q10 6 12 24 Z" fill="#e8d9b8"/>
      <path d="M208 96 q16 -22 2 -30 q-10 6 -12 24 Z" fill="#e8d9b8"/>
      <circle cx="160" cy="148" r="62" fill="#f7f4ef"/>
      <path d="M118 108 q22 -16 44 -2 q-18 20 -44 2 Z" fill="#33261d"/>
      <circle cx="136" cy="140" r="8" fill="EYEC"/>
      <circle cx="184" cy="140" r="8" fill="EYEC"/>
      <circle cx="139" cy="136" r="3" fill="#fff"/>
      <circle cx="187" cy="136" r="3" fill="#fff"/>
      <!-- muzzle -->
      <ellipse cx="160" cy="180" rx="42" ry="28" fill="#ffd9e0"/>
      <ellipse cx="146" cy="174" rx="6" ry="8" fill="#e59aa8"/>
      <ellipse cx="174" cy="174" rx="6" ry="8" fill="#e59aa8"/>
      <path d="M138 192 Q160 204 182 192" stroke="#c98793" stroke-width="4" fill="none" stroke-linecap="round"/>
    `
  },

  horse: {
    name: "Biscuit Jr.",
    fur: "#a1662f",
    neckY: 258,
    headY: 214,
    anchors: {
      hats:    { x: 160, y: 62,  scale: 1.05 },
      hair:    { x: 160, y: 74,  scale: 1.05 },
      makeup:  { x: 160, y: 156, scale: 1.0 },
      jewelry: { x: 160, y: 242, scale: 1.05 },
      clothes: { x: 160, y: 332, scale: 1.05 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <!-- tail -->
      <path d="M240 350 q46 10 44 66 q-16 12 -26 -6 q6 -34 -22 -40 Z" fill="#5a3a1a"/>
      <g class="baseshoes">
        <ellipse cx="132" cy="458" rx="25" ry="14" fill="#4a3220"/>
        <ellipse cx="188" cy="458" rx="25" ry="14" fill="#4a3220"/>
      </g>
      <ellipse cx="160" cy="358" rx="84" ry="100" fill="#a1662f"/>
      <ellipse cx="160" cy="392" rx="48" ry="58" fill="#c98a4b"/>
      <!-- ears -->
      <path d="M124 92 q-6 -34 8 -36 q12 10 10 38 Z" fill="#a1662f"/>
      <path d="M196 92 q6 -34 -8 -36 q-12 10 -10 38 Z" fill="#a1662f"/>
      <path d="M128 92 q-2 -22 4 -26 q6 8 4 26 Z" fill="#e0a89a"/>
      <path d="M192 92 q2 -22 -4 -26 q-6 8 -4 26 Z" fill="#e0a89a"/>
      <!-- head + long muzzle -->
      <ellipse cx="160" cy="140" rx="54" ry="60" fill="#a1662f"/>
      <ellipse cx="160" cy="190" rx="38" ry="34" fill="#c98a4b"/>
      <!-- mane -->
      <path d="M160 82 q-38 6 -44 46 q-8 40 6 66 q-24 -34 -14 -76 Q118 76 160 74 Q202 76 212 118 q10 42 -14 76 q14 -26 6 -66 q-6 -40 -44 -46 Z" fill="#5a3a1a"/>
      <circle cx="132" cy="136" r="8" fill="EYEC"/>
      <circle cx="188" cy="136" r="8" fill="EYEC"/>
      <circle cx="135" cy="132" r="3" fill="#fff"/>
      <circle cx="191" cy="132" r="3" fill="#fff"/>
      <ellipse cx="146" cy="186" rx="6" ry="8" fill="#8d5a2b"/>
      <ellipse cx="174" cy="186" rx="6" ry="8" fill="#8d5a2b"/>
      <path d="M142 206 Q160 216 178 206" stroke="#8d5a2b" stroke-width="4" fill="none" stroke-linecap="round"/>
    `
  },

  pig: {
    name: "Truffle",
    fur: "#f7a8bd",
    neckY: 258,
    headY: 208,
    anchors: {
      hats:    { x: 160, y: 74,  scale: 1.1 },
      hair:    { x: 160, y: 84,  scale: 1.1 },
      makeup:  { x: 160, y: 152, scale: 1.05 },
      jewelry: { x: 160, y: 242, scale: 1.05 },
      clothes: { x: 160, y: 332, scale: 1.05 },
      shoes:   { x: 160, y: 458, scale: 1.0 }
    },
    svg: `
      <!-- curly tail -->
      <path d="M240 372 q26 -6 24 -24 q-2 -16 -16 -12 q-10 4 -6 14" stroke="#f7a8bd" stroke-width="10" fill="none" stroke-linecap="round"/>
      <g class="baseshoes">
        <ellipse cx="132" cy="458" rx="25" ry="14" fill="#e08aa0"/>
        <ellipse cx="188" cy="458" rx="25" ry="14" fill="#e08aa0"/>
      </g>
      <ellipse cx="160" cy="360" rx="88" ry="98" fill="#f7a8bd"/>
      <ellipse cx="160" cy="388" rx="52" ry="58" fill="#ffc9d8"/>
      <ellipse cx="116" cy="438" rx="20" ry="26" fill="#f7a8bd"/>
      <ellipse cx="204" cy="438" rx="20" ry="26" fill="#f7a8bd"/>
      <!-- floppy ears -->
      <path d="M108 104 q-14 -30 10 -34 q22 6 22 40 q-18 8 -32 -6 Z" fill="#f091a8"/>
      <path d="M212 104 q14 -30 -10 -34 q-22 6 -22 40 q18 8 32 -6 Z" fill="#f091a8"/>
      <circle cx="160" cy="146" r="64" fill="#f7a8bd"/>
      <circle cx="134" cy="134" r="8" fill="EYEC"/>
      <circle cx="186" cy="134" r="8" fill="EYEC"/>
      <circle cx="137" cy="130" r="3" fill="#fff"/>
      <circle cx="189" cy="130" r="3" fill="#fff"/>
      <!-- snout -->
      <ellipse cx="160" cy="176" rx="34" ry="24" fill="#f091a8"/>
      <ellipse cx="148" cy="176" rx="7" ry="10" fill="#c96b82"/>
      <ellipse cx="172" cy="176" rx="7" ry="10" fill="#c96b82"/>
      <path d="M128 196 Q160 210 192 196" stroke="#c96b82" stroke-width="4" fill="none" stroke-linecap="round"/>
    `
  },

  frog: {
    name: "Hopscotch",
    fur: "#66bb6a",
    neckY: 252,
    headY: 214,
    anchors: {
      hats:    { x: 160, y: 66,  scale: 1.05 },
      hair:    { x: 160, y: 78,  scale: 1.05 },
      makeup:  { x: 160, y: 166, scale: 1.0 },
      jewelry: { x: 160, y: 238, scale: 1.0 },
      clothes: { x: 160, y: 330, scale: 1.0 },
      shoes:   { x: 160, y: 452, scale: 1.0 }
    },
    svg: `
      <!-- back legs -->
      <path d="M96 380 q-26 30 -6 60 q16 20 44 8" stroke="#66bb6a" stroke-width="26" fill="none" stroke-linecap="round"/>
      <path d="M224 380 q26 30 6 60 q-16 20 -44 8" stroke="#66bb6a" stroke-width="26" fill="none" stroke-linecap="round"/>
      <g class="baseshoes">
        <path d="M104 448 q-16 8 -14 18 q14 6 22 -2 q10 8 20 0 q8 8 20 -2" stroke="#4c9a50" stroke-width="10" fill="none" stroke-linecap="round"/>
        <path d="M216 448 q16 8 14 18 q-14 6 -22 -2 q-10 8 -20 0 q-8 8 -20 -2" stroke="#4c9a50" stroke-width="10" fill="none" stroke-linecap="round"/>
      </g>
      <ellipse cx="160" cy="346" rx="86" ry="94" fill="#66bb6a"/>
      <ellipse cx="160" cy="376" rx="54" ry="58" fill="#dcedc8"/>
      <!-- spots -->
      <circle cx="106" cy="308" r="11" fill="#4c9a50"/>
      <circle cx="216" cy="330" r="9" fill="#4c9a50"/>
      <!-- bulging eyes on top -->
      <circle cx="118" cy="96" r="34" fill="#66bb6a"/>
      <circle cx="202" cy="96" r="34" fill="#66bb6a"/>
      <circle cx="118" cy="92" r="20" fill="#fff"/>
      <circle cx="202" cy="92" r="20" fill="#fff"/>
      <circle cx="120" cy="94" r="10" fill="EYEC"/>
      <circle cx="204" cy="94" r="10" fill="EYEC"/>
      <!-- wide head -->
      <ellipse cx="160" cy="160" rx="76" ry="58" fill="#66bb6a"/>
      <circle cx="132" cy="140" r="5" fill="#4c9a50"/>
      <circle cx="188" cy="140" r="5" fill="#4c9a50"/>
      <path d="M100 172 Q160 216 220 172" stroke="#3f7d43" stroke-width="6" fill="none" stroke-linecap="round"/>
    `
  }
};
