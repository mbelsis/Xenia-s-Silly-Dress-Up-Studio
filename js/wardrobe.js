/**
 * Wardrobe catalog.
 * Every item is drawn centered on (0,0) in roughly a 140x140 box, so it can be
 * translated to any character's anchor point and scaled to fit.
 * Categories match the slots: hats, clothes, shoes, jewelry, makeup.
 */

const CATEGORIES = [
  { id: "hats",    label: "🎩 Hats" },
  { id: "hair",    label: "💇 Hair" },
  { id: "beards",  label: "🧔 Beards" },
  { id: "clothes", label: "👕 Tops" },
  { id: "badges",  label: "🏷️ Stamps" },
  { id: "bottoms", label: "🩳 Bottoms" },
  { id: "shoes",   label: "👟 Shoes" },
  { id: "jewelry", label: "💎 Jewelry" },
  { id: "makeup",  label: "🎨 Makeup" },
  { id: "glasses", label: "🕶️ Glasses" },
  { id: "held",    label: "🎁 Hold It" }
];

const ITEMS = [

  /* ---------------- HATS (anchor: top of head) ---------------- */
  {
    id: "propeller", category: "hats", name: "Propeller Beanie",
    svg: `
      <path d="M-45 20 Q-45 -35 0 -35 Q45 -35 45 20 Z" fill="#e53935"/>
      <path d="M-45 20 Q0 8 45 20 L45 28 Q0 16 -45 28 Z" fill="#fdd835"/>
      <path d="M-15 -32 Q-45 -55 -55 -40 Q-35 -30 -8 -38 Z" fill="#42a5f5"/>
      <path d="M15 -32 Q45 -55 55 -40 Q35 -30 8 -38 Z" fill="#66bb6a"/>
      <rect x="-3" y="-48" width="6" height="16" fill="#8d6e63"/>
      <circle cx="0" cy="-50" r="7" fill="#ff7043"/>
    `
  },
  {
    id: "wizard", category: "hats", name: "Wizard Hat",
    svg: `
      <path d="M0 -85 L38 22 L-38 22 Z" fill="#5e35b1"/>
      <ellipse cx="0" cy="22" rx="52" ry="12" fill="#4527a0"/>
      <path d="M-9 -30 l6 12 13 2 -9 9 2 13 -12 -6 -12 6 2 -13 -9 -9 13 -2 Z" fill="#ffd54f"/>
      <circle cx="14" cy="0" r="4" fill="#ffd54f"/>
      <circle cx="-16" cy="10" r="3" fill="#ffd54f"/>
    `
  },
  {
    id: "pirate", category: "hats", name: "Pirate Hat",
    svg: `
      <path d="M-55 15 Q-60 -8 -30 -20 Q0 -50 30 -20 Q60 -8 55 15 Q30 2 0 4 Q-30 2 -55 15 Z" fill="#3e2723"/>
      <circle cx="0" cy="-16" r="9" fill="#fff"/>
      <path d="M-8 -4 q8 8 16 0 M-9 -6 l-4 8 M9 -6 l4 8" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M-55 15 Q0 -2 55 15" stroke="#ffd54f" stroke-width="4" fill="none"/>
    `
  },
  {
    id: "duck", category: "hats", name: "Rubber Duck",
    svg: `
      <ellipse cx="0" cy="8" rx="34" ry="24" fill="#ffe921"/>
      <circle cx="20" cy="-16" r="18" fill="#ffe921"/>
      <path d="M34 -16 q18 0 16 8 q-8 6 -18 2 Z" fill="#ff9800"/>
      <circle cx="24" cy="-20" r="4" fill="#33261d"/>
      <path d="M-30 0 q-12 -4 -8 -16 q10 2 12 10 Z" fill="#ffd400"/>
    `
  },
  {
    id: "banana", category: "hats", name: "Banana Peel",
    svg: `
      <path d="M0 -20 Q-6 -46 4 -50 Q14 -44 10 -20 Z" fill="#c0a12b"/>
      <path d="M0 -22 Q-50 -12 -55 25 Q-30 12 -12 0 Z" fill="#ffe135"/>
      <path d="M0 -22 Q50 -12 55 25 Q30 12 12 0 Z" fill="#ffe135"/>
      <path d="M0 -22 Q-8 20 0 34 Q8 20 0 -22 Z" fill="#fff176"/>
    `
  },

  {
    id: "fishbowl", category: "hats", name: "Fish Bowl",
    svg: `
      <path d="M-40 18 Q-48 -32 0 -36 Q48 -32 40 18 Z" fill="#b3e5fc" opacity="0.55"/>
      <ellipse cx="0" cy="18" rx="42" ry="10" fill="#81d4fa" opacity="0.7"/>
      <path d="M-36 -2 Q0 8 36 -2" stroke="#4fc3f7" stroke-width="3" fill="none"/>
      <ellipse cx="-6" cy="-12" rx="13" ry="8" fill="#ff7043"/>
      <path d="M6 -12 L18 -20 L18 -4 Z" fill="#ff7043"/>
      <circle cx="-12" cy="-14" r="2.5" fill="#33261d"/>
      <path d="M-30 -22 Q-26 -30 -14 -31" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8"/>
    `
  },
  {
    id: "carrot", category: "hats", name: "Carrot Top",
    svg: `
      <path d="M0 -52 Q16 -18 7 20 Q0 26 -7 20 Q-16 -18 0 -52 Z" fill="#fb8c00"/>
      <path d="M-7 -20 h14 M-8 -6 h16 M-7 8 h14" stroke="#ef6c00" stroke-width="3" stroke-linecap="round"/>
      <path d="M0 22 q-16 4 -22 18 M0 22 q-2 12 -4 20 M0 22 q14 6 18 18" stroke="#43a047" stroke-width="7" fill="none" stroke-linecap="round"/>
    `
  },
  {
    id: "honeypot", category: "hats", name: "Honey Pot",
    svg: `
      <path d="M-28 -16 Q-38 0 -30 22 Q0 32 30 22 Q38 0 28 -16 Z" fill="#c98c3a"/>
      <rect x="-30" y="-26" width="60" height="14" rx="7" fill="#8d6e63"/>
      <path d="M-12 -12 q0 14 -5 14 q-5 0 -5 -8 M8 -12 q0 10 4 10 q5 0 5 -12" stroke="#ffc107" stroke-width="6" fill="none" stroke-linecap="round"/>
      <text x="0" y="12" font-size="13" text-anchor="middle" fill="#5d4037" font-family="sans-serif" font-weight="bold">HUNNY</text>
      <circle cx="40" cy="-38" r="7" fill="#ffe921"/>
      <path d="M34 -38 h12" stroke="#33261d" stroke-width="2.5"/>
      <ellipse cx="36" cy="-46" rx="5" ry="3.5" fill="#b3e5fc" opacity="0.8"/>
      <ellipse cx="45" cy="-46" rx="5" ry="3.5" fill="#b3e5fc" opacity="0.8"/>
    `
  },

  {
    id: "crown", category: "hats", name: "Royal Crown",
    svg: `
      <path d="M-40 22 L-46 -28 L-22 -6 L0 -34 L22 -6 L46 -28 L40 22 Z" fill="#ffd54f"/>
      <rect x="-42" y="16" width="84" height="12" rx="6" fill="#f9a825"/>
      <circle cx="-46" cy="-30" r="6" fill="#e53935"/>
      <circle cx="0" cy="-36" r="6" fill="#3aa0ff"/>
      <circle cx="46" cy="-30" r="6" fill="#3ecf5a"/>
      <circle cx="0" cy="0" r="6" fill="#e53935"/>
    `
  },
  {
    id: "partyhat", category: "hats", name: "Party Hat",
    svg: `
      <path d="M0 -62 L26 24 L-26 24 Z" fill="#9b59ff"/>
      <path d="M-9 -32 Q0 -26 9 -32 L12 -18 Q0 -12 -12 -18 Z" fill="#ffe921"/>
      <path d="M-16 -4 Q0 2 16 -4 L19 10 Q0 16 -19 10 Z" fill="#3ecf5a"/>
      <circle cx="0" cy="-64" r="8" fill="#ff6fb5"/>
      <path d="M-24 28 Q0 36 24 28" stroke="#7b3ff2" stroke-width="6" fill="none"/>
    `
  },
  {
    id: "chefhat", category: "hats", name: "Chef Hat",
    svg: `
      <path d="M-34 20 L-34 -8 Q-52 -12 -46 -30 Q-40 -46 -22 -40 Q-16 -58 0 -56 Q16 -58 22 -40 Q40 -46 46 -30 Q52 -12 34 -8 L34 20 Z" fill="#fdfdfd"/>
      <rect x="-36" y="16" width="72" height="14" rx="6" fill="#e0e0e0"/>
      <path d="M-12 -6 V14 M12 -6 V14" stroke="#e0e0e0" stroke-width="4"/>
    `
  },
  {
    id: "sombrero", category: "hats", name: "Sombrero",
    svg: `
      <ellipse cx="0" cy="14" rx="62" ry="18" fill="#e0a02e"/>
      <ellipse cx="0" cy="10" rx="62" ry="16" fill="#f2c94c"/>
      <path d="M-24 8 Q-24 -34 0 -34 Q24 -34 24 8 Z" fill="#e0a02e"/>
      <path d="M-24 2 Q0 12 24 2" stroke="#c62828" stroke-width="6" fill="none"/>
      <g fill="#c62828"><circle cx="-46" cy="16" r="3.5"/><circle cx="-18" cy="22" r="3.5"/><circle cx="18" cy="22" r="3.5"/><circle cx="46" cy="16" r="3.5"/></g>
    `
  },

  {
    id: "cap", category: "hats", name: "Baseball Cap",
    svg: `
      <path d="M-42 18 Q-44 -30 0 -32 Q44 -30 42 18 Z" fill="#e53935"/>
      <path d="M-6 -32 Q0 -40 6 -32 Z" fill="#c62828"/>
      <circle cx="0" cy="-34" r="5" fill="#c62828"/>
      <path d="M30 8 Q62 8 66 20 Q64 28 34 24 Z" fill="#c62828"/>
      <path d="M0 -30 V16 M-24 -24 Q-20 -6 -22 16 M24 -24 Q20 -6 22 16" stroke="#c62828" stroke-width="3" fill="none"/>
    `
  },
  {
    id: "visor", category: "hats", name: "Sport Visor",
    svg: `
      <path d="M-42 6 Q-44 -8 -30 -10 L30 -10 Q44 -8 42 6 L42 14 Q0 6 -42 14 Z" fill="#3ecf5a"/>
      <path d="M-30 10 Q0 2 30 10 Q40 24 28 30 Q0 20 -28 30 Q-40 24 -30 10 Z" fill="#2ba647"/>
      <path d="M-14 -4 h28" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
    `
  },
  {
    id: "bucket", category: "hats", name: "Bucket Hat",
    svg: `
      <path d="M-30 -2 Q-32 -34 0 -36 Q32 -34 30 -2 Z" fill="#5c8bd6"/>
      <path d="M-52 14 Q-40 -4 -30 -2 L30 -2 Q40 -4 52 14 Q54 22 44 22 Q0 12 -44 22 Q-54 22 -52 14 Z" fill="#4a7ac2"/>
      <path d="M-30 -8 Q0 -2 30 -8" stroke="#3d66a3" stroke-width="4" fill="none"/>
    `
  },
  {
    id: "sunhat", category: "hats", name: "Floppy Sun Hat",
    svg: `
      <path d="M-28 0 Q-30 -34 0 -36 Q30 -34 28 0 Z" fill="#f2c94c"/>
      <path d="M-60 10 Q-40 -6 -28 0 L28 0 Q40 -6 60 10 Q64 22 52 24 Q30 12 0 14 Q-30 12 -52 24 Q-64 22 -60 10 Z" fill="#ffd97a"/>
      <path d="M-28 -6 Q0 2 28 -6" stroke="#ff6fb5" stroke-width="7" fill="none"/>
      <circle cx="24" cy="-10" r="6" fill="#ff6fb5"/>
    `
  },

  {
    id: "clownhat", category: "hats", name: "Clown Hair",
    svg: `
      <g fill="#e53935">
        <circle cx="-46" cy="6" r="22"/><circle cx="46" cy="6" r="22"/>
        <circle cx="-54" cy="26" r="16"/><circle cx="54" cy="26" r="16"/>
        <circle cx="-30" cy="-8" r="16"/><circle cx="30" cy="-8" r="16"/>
      </g>
      <path d="M0 -56 L20 -14 L-20 -14 Z" fill="#3aa0ff"/>
      <path d="M-22 -14 h44 v8 h-44 Z" fill="#ffe921"/>
      <circle cx="0" cy="-60" r="8" fill="#3ecf5a"/>
    `
  },
  {
    id: "astrohelmet", category: "hats", name: "Space Helmet",
    svg: `
      <circle cx="0" cy="16" r="62" fill="#cfe8ff" opacity="0.55"/>
      <circle cx="0" cy="16" r="62" fill="none" stroke="#eceff1" stroke-width="10"/>
      <path d="M-62 16 a62 62 0 0 1 62 -62" stroke="#ffffff" stroke-width="8" fill="none" opacity="0.9"/>
      <rect x="-70" y="52" width="140" height="18" rx="9" fill="#b0bec5"/>
      <rect x="-16" y="-56" width="32" height="12" rx="6" fill="#90a4ae"/>
      <circle cx="-52" cy="-14" r="8" fill="#ffd54f"/>
    `
  },
  {
    id: "pilotcap", category: "hats", name: "Pilot Cap",
    svg: `
      <path d="M-44 14 Q-46 -26 0 -28 Q46 -26 44 14 Z" fill="#2b3a55"/>
      <rect x="-46" y="10" width="92" height="14" rx="7" fill="#1c2740"/>
      <path d="M-30 22 Q0 26 30 22 Q52 34 40 42 Q0 32 -40 42 Q-52 34 -30 22 Z" fill="#1c2740"/>
      <path d="M-14 -8 l6 10 12 -14 12 14 6 -10" stroke="#ffd54f" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="0" cy="-4" r="6" fill="#ffd54f"/>
    `
  },
  {
    id: "policecap", category: "hats", name: "Police Cap",
    svg: `
      <path d="M-44 12 Q-46 -24 0 -26 Q46 -24 44 12 Z" fill="#1f3b73"/>
      <rect x="-46" y="8" width="92" height="12" rx="6" fill="#152a52"/>
      <path d="M-32 20 Q0 24 32 20 Q54 32 42 40 Q0 30 -42 40 Q-54 32 -32 20 Z" fill="#152a52"/>
      <rect x="-16" y="-18" width="32" height="24" rx="4" fill="#eceff1"/>
      <path d="M0 -16 l4 8 9 1 -7 6 2 9 -8 -5 -8 5 2 -9 -7 -6 9 -1 Z" fill="#ffd54f"/>
    `
  },
  {
    id: "firehat", category: "hats", name: "Fire Helmet",
    svg: `
      <path d="M-52 20 Q-56 -14 0 -34 Q56 -14 52 20 Z" fill="#e53935"/>
      <path d="M-60 20 Q0 6 60 20 Q64 32 52 34 Q0 22 -52 34 Q-64 32 -60 20 Z" fill="#c62828"/>
      <path d="M0 -30 q10 0 12 12 l-24 0 q2 -12 12 -12 Z" fill="#ffd54f"/>
      <rect x="-14" y="-14" width="28" height="20" rx="4" fill="#ffe921"/>
      <text x="0" y="2" font-size="14" text-anchor="middle" fill="#c62828" font-family="sans-serif" font-weight="bold">1</text>
    `
  },

  /* ---------------- GLASSES (anchor: eyes) ---------------- */
  {
    id: "specs", category: "glasses", name: "Smart Specs",
    svg: `
      <circle cx="-21" cy="0" r="16" fill="#ffffff22" stroke="#5d4037" stroke-width="5"/>
      <circle cx="21" cy="0" r="16" fill="#ffffff22" stroke="#5d4037" stroke-width="5"/>
      <path d="M-5 0 H5 M-37 -2 L-50 -8 M37 -2 L50 -8" stroke="#5d4037" stroke-width="5" stroke-linecap="round"/>
    `
  },
  {
    id: "sunglasses", category: "glasses", name: "Cool Shades",
    svg: `
      <path d="M-40 -8 H40 L38 0 Q38 16 24 16 L12 16 Q2 16 0 4 Q-2 16 -12 16 L-24 16 Q-38 16 -38 0 Z" fill="#263238"/>
      <path d="M-32 -2 q6 -4 10 0" stroke="#78909c" stroke-width="3" fill="none"/>
      <path d="M10 -2 q6 -4 10 0" stroke="#78909c" stroke-width="3" fill="none"/>
      <path d="M-40 -6 L-52 -12 M40 -6 L52 -12" stroke="#263238" stroke-width="5" stroke-linecap="round"/>
    `
  },
  {
    id: "heartglasses", category: "glasses", name: "Heart Glasses",
    svg: `
      <path d="M-21 -8 Q-13 -18 -5 -8 Q0 -2 -8 8 L-21 18 L-34 8 Q-42 -2 -37 -8 Q-29 -18 -21 -8 Z" fill="#ff6fb5" opacity="0.85"/>
      <path d="M21 -8 Q13 -18 5 -8 Q0 -2 8 8 L21 18 L34 8 Q42 -2 37 -8 Q29 -18 21 -8 Z" fill="#ff6fb5" opacity="0.85"/>
      <path d="M-4 -4 H4 M-38 -6 L-50 -10 M38 -6 L50 -10" stroke="#e0245e" stroke-width="4" stroke-linecap="round"/>
    `
  },
  {
    id: "starglasses", category: "glasses", name: "Star Glasses",
    svg: `
      <path d="M-22 -18 l6 12 13 1 -10 9 3 13 -12 -7 -12 7 3 -13 -10 -9 13 -1 Z" fill="#ffe921" stroke="#f9a825" stroke-width="3"/>
      <path d="M22 -18 l6 12 13 1 -10 9 3 13 -12 -7 -12 7 3 -13 -10 -9 13 -1 Z" fill="#ffe921" stroke="#f9a825" stroke-width="3"/>
      <path d="M-6 -2 H6 M-40 -4 L-52 -8 M40 -4 L52 -8" stroke="#f9a825" stroke-width="4" stroke-linecap="round"/>
    `
  },
  {
    id: "boltglasses", category: "glasses", name: "Lightning Glasses",
    svg: `
      <circle cx="-21" cy="0" r="16" fill="#3aa0ff33" stroke="#3aa0ff" stroke-width="5"/>
      <circle cx="21" cy="0" r="16" fill="#3aa0ff33" stroke="#3aa0ff" stroke-width="5"/>
      <path d="M-5 0 H5 M-37 -2 L-50 -8 M37 -2 L50 -8" stroke="#3aa0ff" stroke-width="5" stroke-linecap="round"/>
      <path d="M-18 -10 L-26 2 L-20 2 L-26 12 L-14 0 L-20 0 Z" fill="#ffe921"/>
      <path d="M24 -10 L16 2 L22 2 L16 12 L28 0 L22 0 Z" fill="#ffe921"/>
    `
  },

  /* ---------------- HAIR (anchor: crown of head) ----------------
     Hair SVGs use the token HAIRC as their fill; main.js swaps it for the
     currently selected hair color (or the rainbow gradient) at render time. */
  {
    id: "punk", category: "hair", name: "Spiky Punk",
    svg: `
      <path d="M-52 34 L-58 -8 L-40 6 L-38 -34 L-22 -6 L-12 -44 L0 -10 L12 -44 L22 -6 L38 -34 L40 6 L58 -8 L52 34 Q0 12 -52 34 Z" fill="HAIRC"/>
    `
  },
  {
    id: "afro", category: "hair", name: "Mega Afro",
    svg: `
      <g fill="HAIRC">
        <circle cx="0" cy="-26" r="26"/><circle cx="-28" cy="-14" r="24"/><circle cx="28" cy="-14" r="24"/>
        <circle cx="-44" cy="12" r="20"/><circle cx="44" cy="12" r="20"/>
        <circle cx="-22" cy="4" r="24"/><circle cx="22" cy="4" r="24"/><circle cx="0" cy="0" r="27"/>
      </g>
    `
  },
  {
    id: "princess", category: "hair", name: "Princess Waves",
    svg: `
      <path d="M-54 30 Q-62 -28 0 -30 Q62 -28 54 30 Q28 8 0 10 Q-28 8 -54 30 Z" fill="HAIRC"/>
      <path d="M-54 24 Q-72 62 -58 110 Q-46 122 -38 104 Q-50 60 -42 28 Z" fill="HAIRC"/>
      <path d="M54 24 Q72 62 58 110 Q46 122 38 104 Q50 60 42 28 Z" fill="HAIRC"/>
    `
  },
  {
    id: "mohawk", category: "hair", name: "Mighty Mohawk",
    svg: `
      <path d="M-11 20 Q-17 -12 -12 -32 Q-6 -60 0 -64 Q6 -60 12 -32 Q17 -12 11 20 Z" fill="HAIRC"/>
      <path d="M-48 34 Q-52 4 -30 0 L-14 4 L-14 30 Z" fill="HAIRC"/>
      <path d="M48 34 Q52 4 30 0 L14 4 L14 30 Z" fill="HAIRC"/>
    `
  },
  {
    id: "pigtails", category: "hair", name: "Bouncy Pigtails",
    svg: `
      <path d="M-52 32 Q-58 -26 0 -28 Q58 -26 52 32 Q26 10 0 12 Q-26 10 -52 32 Z" fill="HAIRC"/>
      <circle cx="-58" cy="32" r="16" fill="HAIRC"/>
      <circle cx="58" cy="32" r="16" fill="HAIRC"/>
      <path d="M-58 44 q-8 28 4 44" stroke="HAIRC" stroke-width="13" fill="none" stroke-linecap="round"/>
      <path d="M58 44 q8 28 -4 44" stroke="HAIRC" stroke-width="13" fill="none" stroke-linecap="round"/>
    `
  },
  {
    id: "quiff", category: "hair", name: "Swoosh Quiff",
    svg: `
      <path d="M-50 30 Q-56 -16 -6 -24 Q-48 -32 -28 -50 Q14 -60 38 -40 Q58 -22 52 30 Q26 6 0 8 Q-26 6 -50 30 Z" fill="HAIRC"/>
    `
  },
  {
    id: "bob", category: "hair", name: "Short Bob",
    svg: `
      <path d="M-52 34 Q-60 -26 0 -28 Q60 -26 52 34 Q42 44 38 34 Q40 -2 26 -10 Q0 -16 -26 -10 Q-40 -2 -38 34 Q-42 44 -52 34 Z" fill="HAIRC"/>
    `
  },
  {
    id: "longhair", category: "hair", name: "Long & Straight",
    svg: `
      <path d="M-54 26 Q-62 -26 0 -28 Q62 -26 54 26 L58 96 Q46 106 42 92 L40 30 Q20 12 0 12 Q-20 12 -40 30 L-42 92 Q-46 106 -58 96 Z" fill="HAIRC"/>
    `
  },
  {
    id: "superlong", category: "hair", name: "Super-Long Locks",
    svg: `
      <path d="M-54 24 Q-62 -28 0 -30 Q62 -28 54 24 L60 148 Q48 166 40 146 Q46 100 38 40 Q18 16 0 16 Q-18 16 -38 40 Q-46 100 -40 146 Q-48 166 -60 148 Z" fill="HAIRC"/>
      <path d="M-60 148 q10 10 20 -2 M40 146 q10 12 20 2" stroke="#00000022" stroke-width="4" fill="none" stroke-linecap="round"/>
    `
  },
  {
    id: "curlylong", category: "hair", name: "Curly Cascade",
    svg: `
      <path d="M-52 26 Q-60 -28 0 -30 Q60 -28 52 26 Q26 6 0 8 Q-26 6 -52 26 Z" fill="HAIRC"/>
      <g fill="HAIRC">
        <circle cx="-50" cy="30" r="15"/><circle cx="-56" cy="54" r="14"/>
        <circle cx="-50" cy="78" r="13"/><circle cx="-57" cy="100" r="12"/>
        <circle cx="-49" cy="120" r="11"/>
        <circle cx="50" cy="30" r="15"/><circle cx="56" cy="54" r="14"/>
        <circle cx="50" cy="78" r="13"/><circle cx="57" cy="100" r="12"/>
        <circle cx="49" cy="120" r="11"/>
      </g>
    `
  },
  {
    id: "megacurls", category: "hair", name: "Mega Curls",
    svg: `
      <g fill="HAIRC">
        <circle cx="0" cy="-28" r="21"/><circle cx="-25" cy="-20" r="18"/><circle cx="25" cy="-20" r="18"/>
        <circle cx="-43" cy="-4" r="16"/><circle cx="43" cy="-4" r="16"/>
        <circle cx="-53" cy="18" r="15"/><circle cx="53" cy="18" r="15"/>
        <circle cx="-57" cy="44" r="14"/><circle cx="57" cy="44" r="14"/>
        <circle cx="-53" cy="70" r="14"/><circle cx="53" cy="70" r="14"/>
        <circle cx="-57" cy="96" r="13"/><circle cx="57" cy="96" r="13"/>
        <circle cx="-51" cy="120" r="12"/><circle cx="51" cy="120" r="12"/>
        <circle cx="-55" cy="142" r="11"/><circle cx="55" cy="142" r="11"/>
      </g>
    `
  },

  {
    id: "sleekpart", category: "hair", name: "Sleek Side Part",
    svg: `
      <path d="M-54 24 Q-62 -26 -8 -30 Q-30 -22 -34 -10 Q0 -18 40 -24 Q58 -14 54 24 L58 100 Q46 110 42 96 L40 28 Q20 12 0 12 Q-20 12 -40 28 L-42 96 Q-46 110 -58 100 Z" fill="HAIRC"/>
    `
  },
  {
    id: "bangs", category: "hair", name: "Straight with Bangs",
    svg: `
      <path d="M-54 26 Q-62 -26 0 -28 Q62 -26 54 26 L58 102 Q46 112 42 98 L40 30 Q34 18 28 30 L24 8 Q12 20 0 8 Q-12 20 -24 8 L-28 30 Q-34 18 -40 30 L-42 98 Q-46 112 -58 102 Z" fill="HAIRC"/>
      <path d="M-40 -8 Q0 4 40 -8" stroke="#00000018" stroke-width="4" fill="none"/>
    `
  },

  /* ---------------- BEARDS (anchor: chin) ----------------
     Beards are colorable like hair — they use the HAIRC token too, and get
     their own color from the palette shown on the Beards tab. */
  {
    id: "fullbeard", category: "beards", name: "Full Beard",
    svg: `
      <path d="M-42 -20 Q-44 28 0 38 Q44 28 42 -20 Q30 6 0 4 Q-30 6 -42 -20 Z" fill="HAIRC"/>
      <path d="M-17 -8 Q0 -17 17 -8 Q9 1 0 -3 Q-9 1 -17 -8 Z" fill="HAIRC"/>
    `
  },
  {
    id: "goatee", category: "beards", name: "Goatee",
    svg: `
      <path d="M-16 -10 Q0 -17 16 -10 L14 -3 Q0 -10 -14 -3 Z" fill="HAIRC"/>
      <path d="M-11 4 Q0 0 11 4 L9 28 Q0 35 -9 28 Z" fill="HAIRC"/>
    `
  },
  {
    id: "santabeard", category: "beards", name: "Wizard Beard",
    svg: `
      <path d="M-44 -18 Q-48 32 -30 58 Q-16 78 0 80 Q16 78 30 58 Q48 32 44 -18 Q28 8 0 6 Q-28 8 -44 -18 Z" fill="HAIRC"/>
      <path d="M-22 -10 Q0 -21 22 -10 Q12 2 0 -4 Q-12 2 -22 -10 Z" fill="HAIRC"/>
      <path d="M-24 26 q6 8 12 0 M6 34 q6 8 12 0 M-10 48 q6 8 12 0" stroke="#00000022" stroke-width="4" fill="none" stroke-linecap="round"/>
    `
  },

  /* ---------------- CLOTHES (anchor: torso center) ---------------- */
  {
    id: "tuxedo", category: "clothes", name: "Fancy Tuxedo",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#263238"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#263238"/>
      <path d="M-45 -52 Q0 -68 45 -52 L52 58 Q0 74 -52 58 Z" fill="#263238"/>
      <path d="M-22 -52 L0 -20 L22 -52 L16 54 Q0 60 -16 54 Z" fill="#fff"/>
      <path d="M-22 -52 L0 -20 L-14 -6 Q-27 -30 -22 -52 Z" fill="#37474f"/>
      <path d="M22 -52 L0 -20 L14 -6 Q27 -30 22 -52 Z" fill="#37474f"/>
      <path d="M-4 -38 L-17 -46 Q-21 -38 -17 -30 Z" fill="#e53935"/>
      <path d="M4 -38 L17 -46 Q21 -38 17 -30 Z" fill="#e53935"/>
      <rect x="-5" y="-43" width="10" height="10" rx="3" fill="#c62828"/>
      <circle cx="0" cy="-2" r="3" fill="#263238"/>
      <circle cx="0" cy="16" r="3" fill="#263238"/>
      <rect x="-40" y="-24" width="13" height="9" rx="2" fill="#ff6fb5"/>
    `
  },

  {
    id: "jersey", category: "clothes", name: "Soccer Jersey",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#1565c0"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#1565c0"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#1e88e5"/>
      <path d="M-14 -58 Q0 -48 14 -58 L10 -46 Q0 -38 -10 -46 Z" fill="#fff"/>
      <text x="0" y="22" font-size="46" text-anchor="middle" fill="#fff" font-family="sans-serif" font-weight="bold">10</text>
      <path d="M-52 58 Q0 74 52 58 L52 47 Q0 63 -52 47 Z" fill="#fff"/>
    `
  },
  {
    id: "leather", category: "clothes", name: "Leather Jacket",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#212121"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#212121"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#2b2b2b"/>
      <path d="M-12 -40 L0 -26 L12 -40 L10 -30 Q0 -22 -10 -30 Z" fill="#eceff1"/>
      <path d="M0 -24 V62" stroke="#b0bec5" stroke-width="4"/>
      <path d="M-22 -54 L0 -24 L-16 -12 Q-30 -34 -22 -54 Z" fill="#424242"/>
      <path d="M22 -54 L0 -24 L16 -12 Q30 -34 22 -54 Z" fill="#424242"/>
      <path d="M-38 20 l14 12 M24 20 l14 12" stroke="#b0bec5" stroke-width="3.5"/>
      <g fill="#b0bec5">
        <circle cx="-32" cy="-44" r="3"/><circle cx="-22" cy="-48" r="3"/>
        <circle cx="32" cy="-44" r="3"/><circle cx="22" cy="-48" r="3"/>
        <circle cx="4" cy="-18" r="3"/>
      </g>
    `
  },
  {
    id: "astronaut", category: "clothes", name: "Astronaut Suit",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#eceff1"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#eceff1"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#f5f5f5"/>
      <ellipse cx="0" cy="-52" rx="22" ry="9" fill="#90a4ae"/>
      <rect x="-16" y="-8" width="32" height="24" rx="5" fill="#b0bec5"/>
      <circle cx="-7" cy="4" r="4" fill="#e53935"/>
      <circle cx="7" cy="4" r="4" fill="#3ecf5a"/>
      <rect x="-12" y="-4" width="24" height="4" rx="2" fill="#37474f"/>
      <circle cx="-30" cy="-30" r="9" fill="#e53935"/>
      <path d="M-34 -30 h8 M-30 -34 v8" stroke="#fff" stroke-width="2.5"/>
      <path d="M-45 30 Q0 44 45 30" stroke="#90a4ae" stroke-width="5" fill="none"/>
      <path d="M32 -32 q10 4 8 14" stroke="#90a4ae" stroke-width="5" fill="none"/>
    `
  },
  {
    id: "knight", category: "clothes", name: "Knight Armor",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#90a4ae"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#90a4ae"/>
      <circle cx="-44" cy="-44" r="12" fill="#78909c"/>
      <circle cx="44" cy="-44" r="12" fill="#78909c"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#b0bec5"/>
      <path d="M-42 -20 Q0 -6 42 -20 M-44 8 Q0 22 44 8" stroke="#78909c" stroke-width="4" fill="none"/>
      <path d="M0 -30 L10 -14 L0 4 L-10 -14 Z" fill="#e53935" stroke="#ffd54f" stroke-width="3"/>
      <path d="M-52 58 Q0 74 52 58 L52 46 Q0 62 -52 46 Z" fill="#ffd54f"/>
      <g fill="#78909c">
        <circle cx="-34" cy="-40" r="2.5"/><circle cx="34" cy="-40" r="2.5"/>
        <circle cx="-38" cy="34" r="2.5"/><circle cx="38" cy="34" r="2.5"/>
      </g>
    `
  },
  {
    id: "gown", category: "clothes", name: "Princess Gown",
    svg: `
      <circle cx="-42" cy="-42" r="15" fill="#f48fb1"/>
      <circle cx="42" cy="-42" r="15" fill="#f48fb1"/>
      <path d="M-38 -52 Q0 -64 38 -52 L34 8 L-34 8 Z" fill="#ec407a"/>
      <path d="M-38 -52 Q0 -40 38 -52 L34 -40 Q0 -28 -34 -40 Z" fill="#ffd54f"/>
      <path d="M-34 6 Q-62 52 -70 62 L70 62 Q62 52 34 6 Z" fill="#f8bbd0"/>
      <path d="M-24 12 L-32 60 M0 14 L0 62 M24 12 L32 60" stroke="#f48fb1" stroke-width="4"/>
      <circle cx="0" cy="-16" r="5" fill="#ffd54f"/>
      <circle cx="-14" cy="0" r="3.5" fill="#ffd54f"/>
      <circle cx="14" cy="0" r="3.5" fill="#ffd54f"/>
    `
  },
  {
    id: "sundress", category: "clothes", name: "Summer Sundress",
    svg: `
      <path d="M-26 -58 L-18 -38 M26 -58 L18 -38" stroke="#fbc02d" stroke-width="5" stroke-linecap="round"/>
      <path d="M-30 -40 Q0 -50 30 -40 L28 4 L-28 4 Z" fill="#ffee58"/>
      <path d="M-28 2 Q-52 48 -58 58 L58 58 Q52 48 28 2 Z" fill="#fff176"/>
      <rect x="-30" y="-2" width="60" height="9" rx="4" fill="#ff9800"/>
      <g fill="#ff7043">
        <circle cx="-24" cy="34" r="6"/><circle cx="10" cy="44" r="6"/><circle cx="34" cy="30" r="6"/>
        <circle cx="-4" cy="-24" r="5"/>
      </g>
      <g fill="#fff">
        <circle cx="-24" cy="34" r="2.5"/><circle cx="10" cy="44" r="2.5"/><circle cx="34" cy="30" r="2.5"/><circle cx="-4" cy="-24" r="2"/>
      </g>
    `
  },
  {
    id: "fairy", category: "clothes", name: "Fairy Dress",
    svg: `
      <path d="M-30 -30 Q-78 -52 -72 -8 Q-68 24 -32 6 Z" fill="#b3e5fc" opacity="0.75"/>
      <path d="M30 -30 Q78 -52 72 -8 Q68 24 32 6 Z" fill="#b3e5fc" opacity="0.75"/>
      <path d="M-34 -26 Q-64 -10 -58 20 Q-52 36 -30 16 Z" fill="#e1f5fe" opacity="0.75"/>
      <path d="M34 -26 Q64 -10 58 20 Q52 36 30 16 Z" fill="#e1f5fe" opacity="0.75"/>
      <path d="M-32 -50 Q0 -62 32 -50 L30 14 L-30 14 Z" fill="#81c784"/>
      <path d="M-30 12 L-38 34 L-19 20 L-9 42 L0 20 L9 42 L19 20 L38 34 L30 12 Z" fill="#a5d6a7"/>
      <g fill="#ffe921">
        <circle cx="-16" cy="-20" r="3"/><circle cx="12" cy="-8" r="3"/><circle cx="-4" cy="2" r="2.5"/>
      </g>
    `
  },
  {
    id: "popstar", category: "clothes", name: "Pop-Star Sparkle",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#8e24aa"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#8e24aa"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 52 Q0 68 -52 52 Z" fill="#9c27b0"/>
      <path d="M0 -34 l7 14 15 2 -11 10 3 15 -14 -8 -14 8 3 -15 -11 -10 15 -2 Z" fill="#ffd54f"/>
      <g fill="#e1bee7">
        <circle cx="-30" cy="-30" r="2.5"/><circle cx="28" cy="-24" r="2.5"/><circle cx="-24" cy="20" r="2.5"/>
        <circle cx="34" cy="28" r="2.5"/><circle cx="-8" cy="36" r="2.5"/><circle cx="16" cy="-44" r="2.5"/>
      </g>
      <path d="M-52 52 L-46 70 M-32 58 L-28 74 M-12 62 L-10 78 M12 62 L10 78 M32 58 L28 74 M52 52 L46 70" stroke="#9c27b0" stroke-width="5" stroke-linecap="round"/>
    `
  },

  {
    id: "blueshirt", category: "clothes", name: "Blue T-Shirt",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#1e88e5"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#1e88e5"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#3aa0ff"/>
      <path d="M-14 -58 Q0 -48 14 -58 L10 -46 Q0 -38 -10 -46 Z" fill="#1e88e5"/>
      <rect x="-38" y="-30" width="16" height="13" rx="3" fill="#1e88e5"/>
    `
  },
  {
    id: "redshirt", category: "clothes", name: "Red T-Shirt",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#c62828"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#c62828"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#e53935"/>
      <path d="M-14 -58 Q0 -48 14 -58 L10 -46 Q0 -38 -10 -46 Z" fill="#fff"/>
      <path d="M-42 -6 Q0 6 42 -6" stroke="#c62828" stroke-width="4" fill="none"/>
    `
  },

  {
    id: "whiteshirt", category: "clothes", name: "White T-Shirt",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#e0e0e0"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#e0e0e0"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#f5f5f5"/>
      <path d="M-14 -58 Q0 -48 14 -58 L10 -46 Q0 -38 -10 -46 Z" fill="#e0e0e0"/>
    `
  },
  {
    id: "pinkshirt", category: "clothes", name: "Pink T-Shirt",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#e0669a"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#e0669a"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#ff8ab5"/>
      <path d="M-14 -58 Q0 -48 14 -58 L10 -46 Q0 -38 -10 -46 Z" fill="#e0669a"/>
      <path d="M-42 40 Q0 54 42 40" stroke="#e0669a" stroke-width="4" fill="none"/>
    `
  },
  {
    id: "grayshirt", category: "clothes", name: "Gray T-Shirt",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#757575"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#757575"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#9e9e9e"/>
      <path d="M-14 -58 Q0 -48 14 -58 L10 -46 Q0 -38 -10 -46 Z" fill="#757575"/>
      <rect x="-38" y="-30" width="16" height="13" rx="3" fill="#757575"/>
    `
  },
  {
    id: "flamingo", category: "clothes", name: "Flamingo Party Shirt",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#4dd0e1"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#4dd0e1"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#80deea"/>
      <path d="M-45 -52 L0 -22 L45 -52 L37 -60 L0 -36 L-37 -60 Z" fill="#4dd0e1"/>
      <g>
        <ellipse cx="-20" cy="10" rx="9" ry="7" fill="#ff6fb5"/>
        <path d="M-14 4 Q-8 -8 -16 -12" stroke="#ff6fb5" stroke-width="4" fill="none"/>
        <circle cx="-17" cy="-13" r="3.5" fill="#ff6fb5"/>
        <path d="M-20 17 v8 M-16 17 v8" stroke="#e0669a" stroke-width="2.5"/>
      </g>
      <g>
        <ellipse cx="24" cy="34" rx="9" ry="7" fill="#ff8ab5"/>
        <path d="M30 28 Q36 16 28 12" stroke="#ff8ab5" stroke-width="4" fill="none"/>
        <circle cx="27" cy="11" r="3.5" fill="#ff8ab5"/>
        <path d="M24 41 v8 M28 41 v8" stroke="#e0669a" stroke-width="2.5"/>
      </g>
    `
  },

  {
    id: "hoodie", category: "clothes", name: "Cozy Hoodie",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#78909c"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#78909c"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#90a4ae"/>
      <path d="M-30 -56 Q0 -40 30 -56 Q34 -48 28 -44 Q0 -30 -28 -44 Q-34 -48 -30 -56 Z" fill="#78909c"/>
      <path d="M-8 -40 q-2 14 -4 20 M8 -40 q2 14 4 20" stroke="#eceff1" stroke-width="4" stroke-linecap="round"/>
      <circle cx="-8" cy="-18" r="2.5" fill="#eceff1"/>
      <circle cx="8" cy="-18" r="2.5" fill="#eceff1"/>
      <path d="M-28 28 Q0 38 28 28 L26 48 Q0 56 -26 48 Z" fill="#78909c"/>
    `
  },
  {
    id: "denimjacket", category: "clothes", name: "Denim Jacket",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#4a6da0"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#4a6da0"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#5b7fb5"/>
      <path d="M-12 -44 L0 -30 L12 -44 L10 -34 Q0 -26 -10 -34 Z" fill="#eceff1"/>
      <path d="M-22 -54 L0 -28 L-16 -14 Q-30 -36 -22 -54 Z" fill="#4a6da0"/>
      <path d="M22 -54 L0 -28 L16 -14 Q30 -36 22 -54 Z" fill="#4a6da0"/>
      <path d="M0 -26 V64" stroke="#3d5a87" stroke-width="4"/>
      <rect x="-36" y="-6" width="18" height="14" rx="3" fill="#4a6da0" stroke="#3d5a87" stroke-width="2"/>
      <rect x="18" y="-6" width="18" height="14" rx="3" fill="#4a6da0" stroke="#3d5a87" stroke-width="2"/>
      <g fill="#f2c94c"><circle cx="6" cy="-14" r="2.5"/><circle cx="6" cy="4" r="2.5"/><circle cx="6" cy="22" r="2.5"/></g>
      <path d="M-52 46 Q0 62 52 46" stroke="#3d5a87" stroke-width="4" fill="none"/>
    `
  },
  {
    id: "sailor", category: "clothes", name: "Sailor Stripes",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#1a3a6b"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#1a3a6b"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#f5f5f5"/>
      <g stroke="#1a3a6b" stroke-width="7" fill="none">
        <path d="M-46 -34 Q0 -46 46 -34"/>
        <path d="M-48 -14 Q0 -26 48 -14"/>
        <path d="M-49 6 Q0 -6 49 6"/>
        <path d="M-50 26 Q0 14 50 26"/>
        <path d="M-51 46 Q0 34 51 46"/>
      </g>
      <path d="M-16 -58 Q0 -48 16 -58 L12 -44 Q0 -36 -12 -44 Z" fill="#1a3a6b"/>
    `
  },
  {
    id: "polkablouse", category: "clothes", name: "Polka-Dot Blouse",
    svg: `
      <circle cx="-42" cy="-42" r="14" fill="#e0245e"/>
      <circle cx="42" cy="-42" r="14" fill="#e0245e"/>
      <path d="M-42 -52 Q0 -64 42 -52 L48 58 Q0 72 -48 58 Z" fill="#ff6f91"/>
      <g fill="#fff">
        <circle cx="-24" cy="-30" r="4.5"/><circle cx="10" cy="-38" r="4.5"/><circle cx="30" cy="-16" r="4.5"/>
        <circle cx="-32" cy="2" r="4.5"/><circle cx="2" cy="-4" r="4.5"/><circle cx="34" cy="16" r="4.5"/>
        <circle cx="-18" cy="30" r="4.5"/><circle cx="14" cy="38" r="4.5"/><circle cx="-36" cy="42" r="4.5"/>
      </g>
      <path d="M-12 -54 L0 -42 L12 -54 L8 -40 Q0 -34 -8 -40 Z" fill="#fff"/>
      <path d="M-48 52 Q0 66 48 52" stroke="#e0245e" stroke-width="5" fill="none"/>
    `
  },
  {
    id: "flowerblouse", category: "clothes", name: "Flower Blouse",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#9575cd"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#9575cd"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#b39ddb"/>
      <g>
        <circle cx="-22" cy="-18" r="5" fill="#ffe921"/>
        <g fill="#fff"><circle cx="-29" cy="-18" r="4.5"/><circle cx="-15" cy="-18" r="4.5"/><circle cx="-22" cy="-25" r="4.5"/><circle cx="-22" cy="-11" r="4.5"/></g>
        <circle cx="-22" cy="-18" r="4" fill="#ffe921"/>
      </g>
      <g>
        <circle cx="22" cy="14" r="5" fill="#ffe921"/>
        <g fill="#fff"><circle cx="15" cy="14" r="4.5"/><circle cx="29" cy="14" r="4.5"/><circle cx="22" cy="7" r="4.5"/><circle cx="22" cy="21" r="4.5"/></g>
        <circle cx="22" cy="14" r="4" fill="#ffe921"/>
      </g>
      <g>
        <circle cx="-14" cy="40" r="4" fill="#ffe921"/>
        <g fill="#fff"><circle cx="-20" cy="40" r="3.5"/><circle cx="-8" cy="40" r="3.5"/><circle cx="-14" cy="34" r="3.5"/><circle cx="-14" cy="46" r="3.5"/></g>
        <circle cx="-14" cy="40" r="3" fill="#ffe921"/>
      </g>
    `
  },
  {
    id: "uglysweater", category: "clothes", name: "Reindeer Sweater",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#1b5e20"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#1b5e20"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#2e7d32"/>
      <path d="M-46 -38 Q0 -50 46 -38 M-51 40 Q0 54 51 40" stroke="#e53935" stroke-width="6" fill="none"/>
      <g stroke="#fff" stroke-width="2.5">
        <path d="M-38 -20 l5 5 m0 -5 l-5 5 M34 -26 l5 5 m0 -5 l-5 5 M-30 28 l5 5 m0 -5 l-5 5 M38 22 l5 5 m0 -5 l-5 5"/>
      </g>
      <circle cx="0" cy="6" r="16" fill="#8d6e63"/>
      <circle cx="0" cy="14" r="6" fill="#e53935"/>
      <circle cx="-6" cy="0" r="2.5" fill="#33261d"/>
      <circle cx="6" cy="0" r="2.5" fill="#33261d"/>
      <path d="M-9 -8 q-8 -8 -6 -16 m6 10 q-4 -4 -3 -9 M9 -8 q8 -8 6 -16 m-6 10 q4 -4 3 -9" stroke="#5d4037" stroke-width="3" fill="none" stroke-linecap="round"/>
    `
  },

  /* ---------------- STAMPS (anchor: chest, drawn over the top) ---------------- */
  {
    id: "starstamp", category: "badges", name: "Gold Star",
    svg: `
      <path d="M0 -24 l7 15 16 2 -12 11 3 16 -14 -8 -14 8 3 -16 -12 -11 16 -2 Z" fill="#ffd54f" stroke="#f9a825" stroke-width="2.5"/>
    `
  },
  {
    id: "heartstamp", category: "badges", name: "Big Heart",
    svg: `
      <path d="M0 -8 Q8 -26 19 -15 Q28 -5 13 10 L0 22 L-13 10 Q-28 -5 -19 -15 Q-8 -26 0 -8 Z" fill="#e0245e" stroke="#ad1a45" stroke-width="2.5"/>
    `
  },
  {
    id: "boltstamp", category: "badges", name: "Lightning Bolt",
    svg: `
      <path d="M6 -26 L-14 4 L-2 4 L-8 26 L14 -6 L2 -6 Z" fill="#ffe921" stroke="#f9a825" stroke-width="2.5" stroke-linejoin="round"/>
    `
  },
  {
    id: "smileystamp", category: "badges", name: "Smiley",
    svg: `
      <circle r="20" fill="#ffe921" stroke="#f9a825" stroke-width="2.5"/>
      <circle cx="-7" cy="-6" r="3" fill="#33261d"/>
      <circle cx="7" cy="-6" r="3" fill="#33261d"/>
      <path d="M-9 5 Q0 14 9 5" stroke="#33261d" stroke-width="3" fill="none" stroke-linecap="round"/>
    `
  },
  {
    id: "ballstamp", category: "badges", name: "Soccer Ball",
    svg: `
      <circle r="20" fill="#fff" stroke="#33261d" stroke-width="2.5"/>
      <path d="M0 -6 L6 -1 L4 6 L-4 6 L-6 -1 Z" fill="#33261d"/>
      <path d="M0 -6 V-20 M6 -1 L18 -6 M4 6 L12 16 M-4 6 L-12 16 M-6 -1 L-18 -6" stroke="#33261d" stroke-width="2"/>
    `
  },
  {
    id: "guitarstamp", category: "badges", name: "Electric Guitar",
    svg: `
      <path d="M-4 -26 L2 -22 L-6 4 Q6 2 8 12 Q10 24 -2 26 Q-16 28 -16 14 Q-16 6 -10 2 Z" fill="#e53935" stroke="#ad1a45" stroke-width="2"/>
      <path d="M-2 -26 L6 -30 L9 -24 L1 -21 Z" fill="#5d4037"/>
      <path d="M-4 -22 L-8 8" stroke="#ffd54f" stroke-width="1.5"/>
      <circle cx="-4" cy="16" r="3" fill="#ffd54f"/>
    `
  },
  {
    id: "drumstamp", category: "badges", name: "Rockin' Drum",
    svg: `
      <ellipse cx="0" cy="-8" rx="18" ry="7" fill="#eceff1" stroke="#90a4ae" stroke-width="2"/>
      <path d="M-18 -8 V12 Q0 20 18 12 V-8" fill="#e53935" stroke="#ad1a45" stroke-width="2"/>
      <path d="M-18 -4 L-6 10 M-6 -2 L6 12 M6 -2 L18 8" stroke="#ffd54f" stroke-width="2.5"/>
      <path d="M-14 -22 L-4 -10 M14 -22 L4 -10" stroke="#8d6e63" stroke-width="3" stroke-linecap="round"/>
      <circle cx="-15" cy="-23" r="3.5" fill="#eceff1"/>
      <circle cx="15" cy="-23" r="3.5" fill="#eceff1"/>
    `
  },
  {
    id: "notestamp", category: "badges", name: "Music Notes",
    svg: `
      <g fill="#5e35b1">
        <ellipse cx="-12" cy="14" rx="6" ry="4.5"/>
        <rect x="-8" y="-14" width="3" height="28"/>
        <ellipse cx="8" cy="18" rx="6" ry="4.5"/>
        <rect x="12" y="-10" width="3" height="28"/>
        <path d="M-5 -14 Q5 -18 15 -10 L15 -4 Q5 -12 -5 -8 Z"/>
      </g>
    `
  },
  {
    id: "rockstamp", category: "badges", name: "ROCK! Stamp",
    svg: `
      <path d="M-26 -12 H26 V12 H-26 Z" fill="#33232b" stroke="#ffd54f" stroke-width="2.5" transform="rotate(-6)"/>
      <text x="0" y="6" font-size="15" text-anchor="middle" fill="#ffe921" font-family="sans-serif" font-weight="bold" transform="rotate(-6)">ROCK!</text>
      <path d="M28 -18 L22 -8 L26 -8 L20 2" stroke="#ffe921" stroke-width="2.5" fill="none"/>
    `
  },
  {
    id: "robotstamp", category: "badges", name: "Robot Buddy",
    svg: `
      <rect x="-14" y="-12" width="28" height="24" rx="5" fill="#90a4ae" stroke="#546e7a" stroke-width="2"/>
      <circle cx="-6" cy="-3" r="3.5" fill="#4fc3f7"/>
      <circle cx="6" cy="-3" r="3.5" fill="#4fc3f7"/>
      <path d="M-6 6 H6" stroke="#37474f" stroke-width="2.5"/>
      <path d="M0 -12 V-20" stroke="#546e7a" stroke-width="2.5"/>
      <circle cx="0" cy="-22" r="3" fill="#e53935"/>
      <path d="M-14 -2 h-5 M14 -2 h5" stroke="#546e7a" stroke-width="2.5"/>
    `
  },
  {
    id: "pizzastamp", category: "badges", name: "Pizza Slice",
    svg: `
      <path d="M0 24 L-16 -14 Q0 -20 16 -14 Z" fill="#ffca28" stroke="#f57f17" stroke-width="2"/>
      <path d="M-17 -15 Q0 -22 17 -15 L15 -9 Q0 -15 -15 -9 Z" fill="#e0662e"/>
      <circle cx="-5" cy="-4" r="3.5" fill="#e53935"/>
      <circle cx="6" cy="0" r="3.5" fill="#e53935"/>
      <circle cx="-1" cy="10" r="3" fill="#e53935"/>
    `
  },
  {
    id: "dinostamp", category: "badges", name: "Tiny Dino",
    svg: `
      <path d="M-22 14 q-4 -18 10 -22 q2 -12 14 -12 q12 0 14 12 q10 4 8 14 l-6 8 h-8 l-2 -6 h-12 l-2 6 h-8 Z" fill="#66bb6a" stroke="#2e7d32" stroke-width="2"/>
      <path d="M-12 -8 l-4 -8 6 2 -2 -8 6 6" fill="#43a047"/>
      <circle cx="6" cy="-8" r="2.5" fill="#33261d"/>
      <path d="M22 6 q10 -2 12 -12" stroke="#2e7d32" stroke-width="4" fill="none" stroke-linecap="round"/>
    `
  },
  {
    id: "cupcakestamp", category: "badges", name: "Cupcake",
    svg: `
      <path d="M-16 0 h32 l-5 22 h-22 Z" fill="#f2c94c" stroke="#e0a02e" stroke-width="2"/>
      <path d="M-11 0 l-3 22 M0 0 v22 M11 0 l3 22" stroke="#e0a02e" stroke-width="2"/>
      <path d="M-18 0 q-2 -14 10 -14 q0 -12 12 -10 q10 -4 14 8 q10 4 2 16 Z" fill="#ff8ab5"/>
      <circle cx="4" cy="-20" r="4" fill="#e53935"/>
    `
  },
  {
    id: "peacestamp", category: "badges", name: "Peace Sign",
    svg: `
      <circle r="20" fill="none" stroke="#3ecf5a" stroke-width="5"/>
      <path d="M0 -20 V20 M0 4 L-13 17 M0 4 L13 17" stroke="#3ecf5a" stroke-width="5" fill="none"/>
    `
  },
  {
    id: "catstamp", category: "badges", name: "Cat Face",
    svg: `
      <path d="M-18 -6 L-22 -24 L-6 -14 Z" fill="#ef9a3c"/>
      <path d="M18 -6 L22 -24 L6 -14 Z" fill="#ef9a3c"/>
      <circle r="18" fill="#ef9a3c"/>
      <circle cx="-7" cy="-3" r="2.5" fill="#33261d"/>
      <circle cx="7" cy="-3" r="2.5" fill="#33261d"/>
      <path d="M-4 5 L0 9 L4 5" stroke="#33261d" stroke-width="2.5" fill="none"/>
      <path d="M-10 4 h-12 M10 4 h12" stroke="#33261d" stroke-width="2" stroke-linecap="round"/>
    `
  },
  {
    id: "ufostamp", category: "badges", name: "Flying Saucer",
    svg: `
      <path d="M-4 -20 a12 10 0 0 1 8 0 q10 4 10 10 h-28 q0 -6 10 -10 Z" fill="#b3e5fc"/>
      <ellipse cx="0" cy="-8" rx="24" ry="9" fill="#90a4ae" stroke="#607d8b" stroke-width="2"/>
      <circle cx="-14" cy="-8" r="2.5" fill="#ffe921"/>
      <circle cx="0" cy="-6" r="2.5" fill="#ff6fb5"/>
      <circle cx="14" cy="-8" r="2.5" fill="#3ecf5a"/>
      <path d="M-12 0 L-18 20 M12 0 L18 20" stroke="#ffe921" stroke-width="3" opacity="0.7"/>
    `
  },
  {
    id: "crownstamp", category: "badges", name: "Little Crown",
    svg: `
      <path d="M-20 12 L-24 -14 L-10 -4 L0 -18 L10 -4 L24 -14 L20 12 Z" fill="#ffd54f" stroke="#f9a825" stroke-width="2"/>
      <circle cx="0" cy="4" r="3" fill="#e53935"/>
      <circle cx="-11" cy="5" r="2.5" fill="#3aa0ff"/>
      <circle cx="11" cy="5" r="2.5" fill="#3ecf5a"/>
    `
  },
  {
    id: "rainbowstamp", category: "badges", name: "Mini Rainbow",
    svg: `
      <g fill="none" stroke-linecap="round">
        <path d="M-20 12 A20 20 0 0 1 20 12" stroke="#e53935" stroke-width="5"/>
        <path d="M-15 12 A15 15 0 0 1 15 12" stroke="#ffe921" stroke-width="5"/>
        <path d="M-10 12 A10 10 0 0 1 10 12" stroke="#3ecf5a" stroke-width="5"/>
        <path d="M-5 12 A5 5 0 0 1 5 12" stroke="#3aa0ff" stroke-width="5"/>
      </g>
      <ellipse cx="-20" cy="13" rx="6" ry="4" fill="#fff"/>
      <ellipse cx="20" cy="13" rx="6" ry="4" fill="#fff"/>
    `
  },

  /* ---------------- BOTTOMS (anchor: hips) ---------------- */
  {
    id: "shorts", category: "bottoms", name: "Beach Shorts",
    svg: `
      <path d="M-38 -22 H38 L45 28 H10 L0 -2 L-10 28 H-45 Z" fill="#26c6da"/>
      <rect x="-40" y="-30" width="80" height="12" rx="6" fill="#0097a7"/>
      <g fill="#ff7043">
        <circle cx="-22" cy="6" r="5"/><circle cx="-16" cy="-2" r="5"/><circle cx="-11" cy="7" r="5"/>
        <circle cx="24" cy="12" r="5"/><circle cx="30" cy="4" r="5"/>
      </g>
      <g fill="#ffee58"><circle cx="-16" cy="4" r="2.5"/><circle cx="27" cy="9" r="2.5"/></g>
    `
  },
  {
    id: "fancypants", category: "bottoms", name: "Fancy Pants",
    svg: `
      <path d="M-34 -22 H34 L39 54 H9 L0 8 L-9 54 H-39 Z" fill="#7b1fa2"/>
      <rect x="-36" y="-30" width="72" height="12" rx="6" fill="#4a148c"/>
      <g fill="#ffd54f">
        <path d="M-19 8 l3 6 6 1 -4 4 1 6 -6 -3 -5 3 1 -6 -5 -4 7 -1 Z"/>
        <path d="M18 28 l3 6 6 1 -4 4 1 6 -6 -3 -5 3 1 -6 -5 -4 7 -1 Z"/>
      </g>
    `
  },
  {
    id: "grassskirt", category: "bottoms", name: "Grass Skirt",
    svg: `
      <rect x="-42" y="-30" width="84" height="11" rx="5" fill="#8d6e63"/>
      <g stroke-linecap="round" fill="none">
        <path d="M-37 -20 L-42 36" stroke="#7cb342" stroke-width="8"/>
        <path d="M-28 -20 L-30 42" stroke="#558b2f" stroke-width="8"/>
        <path d="M-19 -20 L-18 38" stroke="#7cb342" stroke-width="8"/>
        <path d="M-10 -20 L-11 44" stroke="#558b2f" stroke-width="8"/>
        <path d="M0 -20 L1 40"    stroke="#7cb342" stroke-width="8"/>
        <path d="M10 -20 L11 44"  stroke="#558b2f" stroke-width="8"/>
        <path d="M19 -20 L20 38"  stroke="#7cb342" stroke-width="8"/>
        <path d="M28 -20 L31 42"  stroke="#558b2f" stroke-width="8"/>
        <path d="M37 -20 L42 36"  stroke="#7cb342" stroke-width="8"/>
      </g>
    `
  },
  {
    id: "polkaskirt", category: "bottoms", name: "Polka-Dot Skirt",
    svg: `
      <path d="M-34 -26 L34 -26 L52 36 Q0 46 -52 36 Z" fill="#e91e63"/>
      <g fill="#fff">
        <circle cx="-20" cy="-6" r="5"/><circle cx="8" cy="2" r="5"/>
        <circle cx="-4" cy="24" r="5"/><circle cx="30" cy="20" r="5"/>
        <circle cx="-34" cy="18" r="5"/><circle cx="22" cy="-14" r="4"/>
      </g>
      <rect x="-36" y="-32" width="72" height="10" rx="5" fill="#ad1457"/>
    `
  },
  {
    id: "leggings", category: "bottoms", name: "Rainbow Leggings",
    svg: `
      <g>
        <rect x="-33" y="-26" width="28" height="82" rx="10" fill="#e53935"/>
        <rect x="-33" y="-8"  width="28" height="14" rx="5" fill="#ffb142"/>
        <rect x="-33" y="6"   width="28" height="14" rx="5" fill="#ffe921"/>
        <rect x="-33" y="20"  width="28" height="14" rx="5" fill="#3ecf5a"/>
        <rect x="-33" y="34"  width="28" height="14" rx="5" fill="#3aa0ff"/>
        <rect x="-33" y="46"  width="28" height="10" rx="8" fill="#9b59ff"/>
      </g>
      <g>
        <rect x="5" y="-26" width="28" height="82" rx="10" fill="#e53935"/>
        <rect x="5" y="-8"  width="28" height="14" rx="5" fill="#ffb142"/>
        <rect x="5" y="6"   width="28" height="14" rx="5" fill="#ffe921"/>
        <rect x="5" y="20"  width="28" height="14" rx="5" fill="#3ecf5a"/>
        <rect x="5" y="34"  width="28" height="14" rx="5" fill="#3aa0ff"/>
        <rect x="5" y="46"  width="28" height="10" rx="8" fill="#9b59ff"/>
      </g>
      <rect x="-36" y="-32" width="72" height="10" rx="5" fill="#4a148c"/>
    `
  },
  {
    id: "bballshorts", category: "bottoms", name: "Basketball Shorts",
    svg: `
      <path d="M-40 -22 H40 L48 34 H10 L0 0 L-10 34 H-48 Z" fill="#7b1fa2"/>
      <rect x="-42" y="-30" width="84" height="11" rx="5" fill="#ffd54f"/>
      <path d="M-44 28 h32 M12 28 h32" stroke="#ffd54f" stroke-width="5"/>
      <circle cx="24" cy="4" r="7" fill="none" stroke="#ffd54f" stroke-width="3"/>
      <path d="M17 4 h14 M24 -3 v14" stroke="#ffd54f" stroke-width="2"/>
    `
  },
  {
    id: "runshorts", category: "bottoms", name: "Running Shorts",
    svg: `
      <path d="M-36 -22 H36 L42 20 L24 24 L0 -4 L-24 24 L-42 20 Z" fill="#3ecf5a"/>
      <rect x="-38" y="-30" width="76" height="11" rx="5" fill="#2ba647"/>
      <path d="M-42 20 L-30 8 M42 20 L30 8" stroke="#fff" stroke-width="4"/>
    `
  },
  {
    id: "soccershorts", category: "bottoms", name: "Soccer Shorts",
    svg: `
      <path d="M-38 -22 H38 L45 30 H10 L0 0 L-10 30 H-45 Z" fill="#f5f5f5"/>
      <rect x="-40" y="-30" width="80" height="11" rx="5" fill="#1e88e5"/>
      <path d="M-41 24 h30 M11 24 h30" stroke="#1e88e5" stroke-width="5"/>
      <path d="M-30 -8 l4 4 4 -4" stroke="#1e88e5" stroke-width="3" fill="none"/>
    `
  },
  {
    id: "jeans", category: "bottoms", name: "Blue Jeans",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#4a6da0"/>
      <rect x="-35" y="-32" width="70" height="11" rx="5" fill="#35507a"/>
      <path d="M-26 -14 q8 8 16 0 M10 -14 q8 8 16 0" stroke="#35507a" stroke-width="2.5" fill="none"/>
      <path d="M-8 58 L0 12 L8 58" stroke="#35507a" stroke-width="2.5" fill="none"/>
      <circle cx="0" cy="-27" r="3" fill="#ffd54f"/>
    `
  },
  {
    id: "trousers", category: "bottoms", name: "Smart Trousers",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#616e7a"/>
      <rect x="-35" y="-32" width="70" height="11" rx="5" fill="#49545e"/>
      <path d="M-22 -14 V52 M22 -14 V52" stroke="#49545e" stroke-width="2.5"/>
      <rect x="-6" y="-30" width="12" height="6" rx="2" fill="#37474f"/>
    `
  },
  {
    id: "tracksuit", category: "bottoms", name: "Tracksuit Pants",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#e53935"/>
      <rect x="-35" y="-32" width="70" height="11" rx="5" fill="#c62828"/>
      <path d="M-30 -18 L-34 54 M30 -18 L34 54" stroke="#fff" stroke-width="5"/>
      <path d="M-16 -26 q0 -6 6 -8 M10 -26 q0 -6 6 -8" stroke="#c62828" stroke-width="3" fill="none"/>
    `
  },
  {
    id: "pajama", category: "bottoms", name: "Pajama Pants",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#4db6ac"/>
      <rect x="-35" y="-32" width="70" height="11" rx="5" fill="#26a69a"/>
      <g fill="#fff9c4">
        <circle cx="-22" cy="-8" r="4.5"/><circle cx="-12" cy="26" r="4.5"/><circle cx="-28" cy="42" r="4.5"/>
        <circle cx="20" cy="-4" r="4.5"/><circle cx="14" cy="30" r="4.5"/><circle cx="30" cy="46" r="4.5"/>
      </g>
    `
  },
  {
    id: "rippedjeans", category: "bottoms", name: "Ripped Jeans",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#5b7fb5"/>
      <rect x="-35" y="-32" width="70" height="11" rx="5" fill="#3d5a87"/>
      <path d="M-29 12 q7 -3 14 0 M-27 16 q6 -2 11 0" stroke="#dce8f5" stroke-width="3" stroke-linecap="round"/>
      <path d="M16 30 q7 -3 13 0 M18 34 q5 -2 10 0" stroke="#dce8f5" stroke-width="3" stroke-linecap="round"/>
      <path d="M-8 58 L0 12 L8 58" stroke="#3d5a87" stroke-width="2.5" fill="none"/>
      <circle cx="0" cy="-27" r="3" fill="#ffd54f"/>
    `
  },
  {
    id: "jeanshorts", category: "bottoms", name: "Jean Shorts",
    svg: `
      <path d="M-36 -24 H36 L42 22 H9 L0 -4 L-9 22 H-42 Z" fill="#7396c9"/>
      <rect x="-38" y="-32" width="76" height="11" rx="5" fill="#4a6da0"/>
      <path d="M-40 18 q6 4 12 2 M40 18 q-6 4 -12 2" stroke="#dce8f5" stroke-width="3" stroke-linecap="round"/>
      <path d="M-28 -14 q7 7 14 0 M14 -14 q7 7 14 0" stroke="#4a6da0" stroke-width="2.5" fill="none"/>
      <circle cx="0" cy="-27" r="3" fill="#ffd54f"/>
    `
  },
  {
    id: "denimskirt", category: "bottoms", name: "Denim Skirt",
    svg: `
      <path d="M-32 -26 L32 -26 L46 34 Q0 44 -46 34 Z" fill="#5b7fb5"/>
      <rect x="-34" y="-32" width="68" height="10" rx="5" fill="#3d5a87"/>
      <path d="M0 -22 L0 38 M-24 -20 q4 26 6 52 M24 -20 q-4 26 -6 52" stroke="#3d5a87" stroke-width="2.5" fill="none"/>
      <path d="M-46 30 Q0 40 46 30" stroke="#dce8f5" stroke-width="3" fill="none"/>
      <circle cx="0" cy="-27" r="3" fill="#ffd54f"/>
    `
  },
  {
    id: "plaidskirt", category: "bottoms", name: "Plaid Skirt",
    svg: `
      <path d="M-32 -26 L32 -26 L48 32 Q0 42 -48 32 Z" fill="#c62828"/>
      <path d="M-20 -26 L-28 34 M0 -24 L0 38 M20 -26 L28 34" stroke="#8e1b1b" stroke-width="5"/>
      <path d="M-36 -8 L38 -8 M-42 14 L44 14" stroke="#8e1b1b" stroke-width="5"/>
      <path d="M-26 -26 L-35 33 M26 -26 L35 33" stroke="#ffd54f" stroke-width="2"/>
      <rect x="-34" y="-32" width="68" height="10" rx="5" fill="#8e1b1b"/>
    `
  },
  {
    id: "mermaid", category: "bottoms", name: "Mermaid Tail",
    svg: `
      <path d="M-34 -34 Q0 -44 34 -34 Q26 28 8 56 L-8 56 Q-26 28 -34 -34 Z" fill="#26a69a"/>
      <g stroke="#00897b" stroke-width="3.5" fill="none">
        <path d="M-26 -16 q9 10 18 0 M-8 -14 q9 10 18 0 M12 -16 q8 9 16 0"/>
        <path d="M-20 4 q9 10 18 0 M0 6 q9 10 18 0"/>
        <path d="M-13 26 q9 10 18 0"/>
      </g>
      <path d="M0 52 Q-30 66 -44 92 Q-14 88 0 70 Q14 88 44 92 Q30 66 0 52 Z" fill="#4db6ac"/>
      <path d="M-36 -36 Q0 -46 36 -36 L34 -26 Q0 -36 -34 -26 Z" fill="#80cbc4"/>
    `
  },
  {
    id: "hero", category: "clothes", name: "Superhero Suit",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#d32f2f"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#d32f2f"/>
      <path d="M-45 -52 Q0 -70 45 -52 L52 58 Q0 76 -52 58 Z" fill="#1e88e5"/>
      <path d="M0 -34 l9 16 18 2 -13 13 3 18 -17 -9 -17 9 3 -18 -13 -13 18 -2 Z" fill="#ffd54f"/>
      <path d="M-52 58 Q0 76 52 58 L52 44 Q0 62 -52 44 Z" fill="#d32f2f"/>
    `
  },
  {
    id: "tutu", category: "clothes", name: "Ballet Tutu",
    svg: `
      <path d="M-38 -55 Q0 -68 38 -55 L34 6 L-34 6 Z" fill="#f48fb1"/>
      <path d="M-34 6 L-70 52 L-38 44 L-20 62 L0 40 L20 62 L38 44 L70 52 L34 6 Z" fill="#f8bbd0"/>
      <path d="M-34 6 Q0 18 34 6" stroke="#ec407a" stroke-width="6" fill="none"/>
      <circle cx="0" cy="-42" r="6" fill="#ec407a"/>
    `
  },
  {
    id: "dino", category: "clothes", name: "Dino Onesie",
    svg: `
      <path d="M-48 -52 Q0 -72 48 -52 L56 62 Q0 80 -56 62 Z" fill="#66bb6a"/>
      <ellipse cx="0" cy="16" rx="30" ry="42" fill="#c5e1a5"/>
      <path d="M-48 -52 L-38 -66 L-28 -48 L-18 -66 L-8 -48 L2 -66 L12 -48" stroke="#2e7d32" stroke-width="5" fill="#43a047"/>
      <path d="M52 -20 l16 -8 -4 14 14 2 -10 10" stroke="#2e7d32" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    `
  },
  {
    id: "hawaii", category: "clothes", name: "Hawaiian Shirt",
    svg: `
      <path d="M-44 -50 Q-64 -36 -58 -6 L-40 -12 Q-46 -30 -36 -44 Z" fill="#26c6da"/>
      <path d="M44 -50 Q64 -36 58 -6 L40 -12 Q46 -30 36 -44 Z" fill="#26c6da"/>
      <path d="M-44 -52 Q0 -66 44 -52 L50 58 Q0 72 -50 58 Z" fill="#00acc1"/>
      <path d="M-44 -52 L0 -20 L44 -52 L36 -60 L0 -34 L-36 -60 Z" fill="#26c6da"/>
      <g fill="#ff7043">
        <circle cx="-22" cy="-10" r="7"/><circle cx="-14" cy="-20" r="7"/><circle cx="-8" cy="-8" r="7"/>
        <circle cx="20" cy="24" r="7"/><circle cx="28" cy="14" r="7"/><circle cx="34" cy="26" r="7"/>
      </g>
      <g fill="#ffee58">
        <circle cx="-15" cy="-13" r="4"/><circle cx="27" cy="21" r="4"/>
      </g>
    `
  },
  {
    id: "robe", category: "clothes", name: "Royal Robe",
    svg: `
      <path d="M-46 -54 Q0 -70 46 -54 L62 66 L-62 66 Z" fill="#8e24aa"/>
      <path d="M-46 -54 Q0 -38 46 -54 L54 -30 Q0 -12 -54 -30 Z" fill="#fff" />
      <g fill="#4a148c"><circle cx="-30" cy="-42" r="4"/><circle cx="0" cy="-36" r="4"/><circle cx="30" cy="-42" r="4"/></g>
      <path d="M-62 66 Q0 50 62 66 L62 54 Q0 38 -62 54 Z" fill="#fdd835"/>
      <path d="M0 -20 l6 12 12 2 -9 9 2 13 -11 -6 -11 6 2 -13 -9 -9 12 -2 Z" fill="#fdd835"/>
    `
  },

  /* ---------------- SHOES (anchor: between the feet) ---------------- */
  {
    id: "clown", category: "shoes", name: "Giant Clown Shoes",
    svg: `
      <g transform="translate(12 0)">
        <path d="M-8 -8 L-8 8 Q-8 22 -30 22 Q-66 22 -66 2 Q-66 -14 -40 -12 L-24 -10 Z" fill="#e53935"/>
        <ellipse cx="-56" cy="0" rx="12" ry="10" fill="#ffcdd2"/>
        <path d="M-24 -10 l-4 12" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
      </g>
      <g transform="translate(-12 0)">
        <path d="M8 -8 L8 8 Q8 22 30 22 Q66 22 66 2 Q66 -14 40 -12 L24 -10 Z" fill="#e53935"/>
        <ellipse cx="56" cy="0" rx="12" ry="10" fill="#ffcdd2"/>
        <path d="M24 -10 l4 12" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
      </g>
    `
  },
  {
    id: "rocket", category: "shoes", name: "Rocket Boots",
    svg: `
      <g transform="translate(9 0)">
        <path d="M-36 -22 L-12 -22 L-12 10 L-40 10 L-40 -6 Q-40 -22 -36 -22 Z" fill="#90a4ae"/>
        <rect x="-42" y="8" width="32" height="8" rx="4" fill="#546e7a"/>
        <path d="M-32 18 q6 16 12 0 q-2 22 -6 24 q-4 -2 -6 -24 Z" fill="#ff9800"/>
        <path d="M-28 18 q4 10 6 0" stroke="#ffee58" stroke-width="4" fill="none"/>
        <circle cx="-26" cy="-8" r="5" fill="#eceff1"/>
      </g>
      <g transform="translate(-9 0)">
        <path d="M36 -22 L12 -22 L12 10 L40 10 L40 -6 Q40 -22 36 -22 Z" fill="#90a4ae"/>
        <rect x="10" y="8" width="32" height="8" rx="4" fill="#546e7a"/>
        <path d="M20 18 q6 16 12 0 q-2 22 -6 24 q-4 -2 -6 -24 Z" fill="#ff9800"/>
        <path d="M24 18 q4 10 6 0" stroke="#ffee58" stroke-width="4" fill="none"/>
        <circle cx="26" cy="-8" r="5" fill="#eceff1"/>
      </g>
    `
  },
  {
    id: "bunny", category: "shoes", name: "Bunny Slippers",
    svg: `
      <g transform="translate(11 0)">
        <ellipse cx="-26" cy="4" rx="24" ry="15" fill="#f5f5f5"/>
        <path d="M-36 -8 Q-42 -34 -32 -34 Q-26 -30 -28 -10 Z" fill="#f5f5f5"/>
        <path d="M-22 -8 Q-16 -34 -26 -34 Q-30 -30 -30 -10 Z" fill="#ffc1cc"/>
        <circle cx="-32" cy="0" r="2.5" fill="#33261d"/><circle cx="-20" cy="0" r="2.5" fill="#33261d"/>
        <circle cx="-26" cy="5" r="3" fill="#ffc1cc"/>
      </g>
      <g transform="translate(-11 0)">
        <ellipse cx="26" cy="4" rx="24" ry="15" fill="#f5f5f5"/>
        <path d="M16 -8 Q10 -34 20 -34 Q26 -30 24 -10 Z" fill="#f5f5f5"/>
        <path d="M30 -8 Q36 -34 26 -34 Q22 -30 22 -10 Z" fill="#ffc1cc"/>
        <circle cx="20" cy="0" r="2.5" fill="#33261d"/><circle cx="32" cy="0" r="2.5" fill="#33261d"/>
        <circle cx="26" cy="5" r="3" fill="#ffc1cc"/>
      </g>
    `
  },
  {
    id: "flippers", category: "shoes", name: "Swim Flippers",
    svg: `
      <g transform="translate(12 0)">
        <path d="M-14 -14 L-30 -14 Q-38 -14 -40 -4 L-46 18 Q-24 26 -8 16 L-10 -8 Q-10 -14 -14 -14 Z" fill="#29b6f6"/>
        <path d="M-38 -2 L-42 14 M-30 0 L-32 16 M-22 0 L-22 16" stroke="#0288d1" stroke-width="3" stroke-linecap="round"/>
      </g>
      <g transform="translate(-12 0)">
        <path d="M14 -14 L30 -14 Q38 -14 40 -4 L46 18 Q24 26 8 16 L10 -8 Q10 -14 14 -14 Z" fill="#29b6f6"/>
        <path d="M38 -2 L42 14 M30 0 L32 16 M22 0 L22 16" stroke="#0288d1" stroke-width="3" stroke-linecap="round"/>
      </g>
    `
  },

  {
    id: "sandals", category: "shoes", name: "Strappy Sandals",
    svg: `
      <g transform="translate(11 0)">
        <ellipse cx="-26" cy="8" rx="24" ry="10" fill="#d7a86e"/>
        <path d="M-38 4 L-14 -6 M-36 -8 L-16 6" stroke="#8d6e63" stroke-width="4" stroke-linecap="round"/>
      </g>
      <g transform="translate(-11 0)">
        <ellipse cx="26" cy="8" rx="24" ry="10" fill="#d7a86e"/>
        <path d="M14 -6 L38 4 M16 6 L36 -8" stroke="#8d6e63" stroke-width="4" stroke-linecap="round"/>
      </g>
    `
  },
  {
    id: "crocs", category: "shoes", name: "Comfy Crocs",
    svg: `
      <g transform="translate(12 0)">
        <path d="M-48 8 Q-50 -8 -32 -10 L-14 -8 Q-6 -4 -8 6 Q-10 16 -26 16 Q-46 16 -48 8 Z" fill="#66bb6a"/>
        <g fill="#388e3c"><circle cx="-38" cy="-2" r="2.5"/><circle cx="-28" cy="-4" r="2.5"/><circle cx="-19" cy="-1" r="2.5"/></g>
        <path d="M-42 10 q10 8 22 2" stroke="#388e3c" stroke-width="3" fill="none"/>
      </g>
      <g transform="translate(-12 0)">
        <path d="M48 8 Q50 -8 32 -10 L14 -8 Q6 -4 8 6 Q10 16 26 16 Q46 16 48 8 Z" fill="#66bb6a"/>
        <g fill="#388e3c"><circle cx="38" cy="-2" r="2.5"/><circle cx="28" cy="-4" r="2.5"/><circle cx="19" cy="-1" r="2.5"/></g>
        <path d="M42 10 q-10 8 -22 2" stroke="#388e3c" stroke-width="3" fill="none"/>
      </g>
    `
  },
  {
    id: "sneakers", category: "shoes", name: "Cool Sneakers",
    svg: `
      <g transform="translate(13 0)">
        <path d="M-48 10 Q-50 -2 -38 -4 L-26 -12 Q-12 -14 -10 2 L-10 8 Q-10 16 -18 16 L-40 16 Q-48 16 -48 10 Z" fill="#fff" stroke="#e0e0e0" stroke-width="2"/>
        <path d="M-48 10 Q-30 4 -10 8" stroke="#3aa0ff" stroke-width="5" fill="none"/>
        <path d="M-36 -4 l4 6 M-28 -8 l4 7" stroke="#90a4ae" stroke-width="2.5"/>
      </g>
      <g transform="translate(-13 0)">
        <path d="M48 10 Q50 -2 38 -4 L26 -12 Q12 -14 10 2 L10 8 Q10 16 18 16 L40 16 Q48 16 48 10 Z" fill="#fff" stroke="#e0e0e0" stroke-width="2"/>
        <path d="M48 10 Q30 4 10 8" stroke="#3aa0ff" stroke-width="5" fill="none"/>
        <path d="M36 -4 l-4 6 M28 -8 l-4 7" stroke="#90a4ae" stroke-width="2.5"/>
      </g>
    `
  },
  {
    id: "pinksneakers", category: "shoes", name: "Pink Sneakers",
    svg: `
      <g transform="translate(13 0)">
        <path d="M-48 10 Q-50 -2 -38 -4 L-26 -12 Q-12 -14 -10 2 L-10 8 Q-10 16 -18 16 L-40 16 Q-48 16 -48 10 Z" fill="#ff8ab5" stroke="#e0669a" stroke-width="2"/>
        <path d="M-48 10 Q-30 4 -10 8" stroke="#fff" stroke-width="5" fill="none"/>
        <path d="M-36 -4 l4 6 M-28 -8 l4 7" stroke="#fff" stroke-width="2.5"/>
      </g>
      <g transform="translate(-13 0)">
        <path d="M48 10 Q50 -2 38 -4 L26 -12 Q12 -14 10 2 L10 8 Q10 16 18 16 L40 16 Q48 16 48 10 Z" fill="#ff8ab5" stroke="#e0669a" stroke-width="2"/>
        <path d="M48 10 Q30 4 10 8" stroke="#fff" stroke-width="5" fill="none"/>
        <path d="M36 -4 l-4 6 M28 -8 l-4 7" stroke="#fff" stroke-width="2.5"/>
      </g>
    `
  },
  {
    id: "heels", category: "shoes", name: "Ruby Heels",
    svg: `
      <g transform="translate(14 0)">
        <path d="M-46 4 Q-42 -10 -26 -12 L-12 -8 L-14 0 Q-26 4 -36 4 L-38 18 L-43 18 Z" fill="#e53935"/>
        <circle cx="-28" cy="-10" r="3.5" fill="#ff8a80"/>
      </g>
      <g transform="translate(-14 0)">
        <path d="M46 4 Q42 -10 26 -12 L12 -8 L14 0 Q26 4 36 4 L38 18 L43 18 Z" fill="#e53935"/>
        <circle cx="28" cy="-10" r="3.5" fill="#ff8a80"/>
      </g>
    `
  },
  {
    id: "cowboy", category: "shoes", name: "Cowboy Boots",
    svg: `
      <path d="M-3 -26 h-22 v22 q-16 2 -18 12 q0 6 8 6 h32 Z" fill="#a1662f"/>
      <path d="M3 -26 h22 v22 q16 2 18 12 q0 6 -8 6 h-32 Z" fill="#a1662f"/>
      <path d="M-22 -18 q10 6 20 0 M22 -18 q-10 6 -20 0" stroke="#7a4a1e" stroke-width="3" fill="none"/>
      <path d="M-12 -12 l4 8 -4 8 -4 -8 Z M12 -12 l4 8 -4 8 -4 -8 Z" fill="#ffd54f"/>
      <rect x="-42" y="12" width="16" height="5" fill="#7a4a1e"/>
      <rect x="26" y="12" width="16" height="5" fill="#7a4a1e"/>
    `
  },
  {
    id: "snowboots", category: "shoes", name: "Snow Boots",
    svg: `
      <path d="M-3 -14 h-22 v16 q-12 2 -14 10 q0 6 8 6 h28 Z" fill="#5c8bd6"/>
      <path d="M3 -14 h22 v16 q12 2 14 10 q0 6 -8 6 h-28 Z" fill="#5c8bd6"/>
      <rect x="-27" y="-24" width="22" height="12" rx="6" fill="#f5f5f5"/>
      <rect x="5" y="-24" width="22" height="12" rx="6" fill="#f5f5f5"/>
      <circle cx="-12" cy="0" r="2.5" fill="#fff"/><circle cx="12" cy="0" r="2.5" fill="#fff"/>
    `
  },
  {
    id: "flats", category: "shoes", name: "Ballet Flats",
    svg: `
      <g transform="translate(11 0)">
        <ellipse cx="-26" cy="6" rx="24" ry="10" fill="#f48fb1"/>
        <ellipse cx="-30" cy="4" rx="12" ry="5" fill="#fce4ec"/>
        <path d="M-14 0 l5 -4 l1 6 Z" fill="#ec407a"/>
      </g>
      <g transform="translate(-11 0)">
        <ellipse cx="26" cy="6" rx="24" ry="10" fill="#f48fb1"/>
        <ellipse cx="30" cy="4" rx="12" ry="5" fill="#fce4ec"/>
        <path d="M14 0 l-5 -4 l-1 6 Z" fill="#ec407a"/>
      </g>
    `
  },
  {
    id: "rainyellow", category: "shoes", name: "Yellow Rain Boots",
    svg: `
      <path d="M-3 -32 h-22 v30 q-14 2 -16 12 q0 6 8 6 h30 Z" fill="#fdd835"/>
      <path d="M3 -32 h22 v30 q14 2 16 12 q0 6 -8 6 h-30 Z" fill="#fdd835"/>
      <rect x="-27" y="-34" width="22" height="7" rx="3.5" fill="#f9a825"/>
      <rect x="5" y="-34" width="22" height="7" rx="3.5" fill="#f9a825"/>
      <path d="M-38 10 h24 M14 10 h24" stroke="#f9a825" stroke-width="4"/>
    `
  },
  {
    id: "rainpink", category: "shoes", name: "Pink Rain Boots",
    svg: `
      <path d="M-3 -32 h-22 v30 q-14 2 -16 12 q0 6 8 6 h30 Z" fill="#ff8ab5"/>
      <path d="M3 -32 h22 v30 q14 2 16 12 q0 6 -8 6 h-30 Z" fill="#ff8ab5"/>
      <rect x="-27" y="-34" width="22" height="7" rx="3.5" fill="#e0669a"/>
      <rect x="5" y="-34" width="22" height="7" rx="3.5" fill="#e0669a"/>
      <g fill="#fff"><circle cx="-14" cy="-10" r="3"/><circle cx="-8" cy="2" r="3"/><circle cx="14" cy="-10" r="3"/><circle cx="8" cy="2" r="3"/></g>
    `
  },
  {
    id: "rainblue", category: "shoes", name: "Blue Rain Boots",
    svg: `
      <path d="M-3 -32 h-22 v30 q-14 2 -16 12 q0 6 8 6 h30 Z" fill="#3aa0ff"/>
      <path d="M3 -32 h22 v30 q14 2 16 12 q0 6 -8 6 h-30 Z" fill="#3aa0ff"/>
      <rect x="-27" y="-34" width="22" height="7" rx="3.5" fill="#1e6fd0"/>
      <rect x="5" y="-34" width="22" height="7" rx="3.5" fill="#1e6fd0"/>
      <path d="M-14 -8 q4 6 0 12 M14 -8 q-4 6 0 12" stroke="#b3e5fc" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    `
  },

  /* ---------------- JEWELRY (anchor: neck) ---------------- */
  {
    id: "pearls", category: "jewelry", name: "Pearl Necklace",
    svg: `
      <g fill="#f8f4ff" stroke="#cfc3e8" stroke-width="1.5">
        <circle cx="-30" cy="2" r="7"/><circle cx="-18" cy="12" r="7"/><circle cx="0" cy="16" r="7"/>
        <circle cx="18" cy="12" r="7"/><circle cx="30" cy="2" r="7"/>
        <circle cx="-36" cy="-10" r="6"/><circle cx="36" cy="-10" r="6"/>
      </g>
      <circle cx="0" cy="30" r="9" fill="#b39ddb"/>
    `
  },
  {
    id: "medal", category: "jewelry", name: "Gold Medal",
    svg: `
      <path d="M-30 -14 L0 18 L30 -14" stroke="#d32f2f" stroke-width="10" fill="none"/>
      <circle cx="0" cy="28" r="18" fill="#fdd835" stroke="#f9a825" stroke-width="4"/>
      <text x="0" y="35" font-size="20" text-anchor="middle" fill="#f57f17" font-family="sans-serif" font-weight="bold">1</text>
    `
  },
  {
    id: "bowtie", category: "jewelry", name: "Fancy Bow Tie",
    svg: `
      <path d="M-4 0 L-36 -16 Q-44 0 -36 16 Z" fill="#7b1fa2"/>
      <path d="M4 0 L36 -16 Q44 0 36 16 Z" fill="#7b1fa2"/>
      <rect x="-8" y="-9" width="16" height="18" rx="5" fill="#9c27b0"/>
      <circle cx="-24" cy="0" r="3" fill="#e1bee7"/><circle cx="24" cy="0" r="3" fill="#e1bee7"/>
    `
  },
  {
    id: "macaroni", category: "jewelry", name: "Macaroni Necklace",
    svg: `
      <path d="M-38 -8 Q0 34 38 -8" stroke="#8d6e63" stroke-width="2.5" fill="none"/>
      <g fill="#ffcc4d" stroke="#e0a02e" stroke-width="2">
        <path d="M-34 -4 q8 -8 12 2 q-8 8 -12 -2 Z"/>
        <path d="M-18 8 q8 -8 12 2 q-8 8 -12 -2 Z"/>
        <path d="M-2 12 q8 -8 12 2 q-8 8 -12 -2 Z"/>
        <path d="M14 6 q8 -8 12 2 q-8 8 -12 -2 Z"/>
        <path d="M28 -6 q8 -8 12 2 q-8 8 -12 -2 Z"/>
      </g>
    `
  },

  {
    id: "studs", category: "jewelry", name: "Gold Studs",
    svg: `
      <g transform="translate(-52 -60)"><circle r="6" fill="#ffd54f" stroke="#f9a825" stroke-width="2"/></g>
      <g transform="translate(52 -60)"><circle r="6" fill="#ffd54f" stroke="#f9a825" stroke-width="2"/></g>
    `
  },
  {
    id: "hoops", category: "jewelry", name: "Silver Hoops",
    svg: `
      <g transform="translate(-52 -62)"><circle cy="8" r="11" fill="none" stroke="#cfd8dc" stroke-width="4"/></g>
      <g transform="translate(52 -62)"><circle cy="8" r="11" fill="none" stroke="#cfd8dc" stroke-width="4"/></g>
    `
  },
  {
    id: "chandeliers", category: "jewelry", name: "Long Chandeliers",
    svg: `
      <g transform="translate(-52 -60)">
        <circle r="4" fill="#ffd54f"/>
        <path d="M0 4 V18" stroke="#ffd54f" stroke-width="2.5"/>
        <path d="M0 18 L8 28 L0 42 L-8 28 Z" fill="#4fc3f7" stroke="#0288d1" stroke-width="2"/>
      </g>
      <g transform="translate(52 -60)">
        <circle r="4" fill="#ffd54f"/>
        <path d="M0 4 V18" stroke="#ffd54f" stroke-width="2.5"/>
        <path d="M0 18 L8 28 L0 42 L-8 28 Z" fill="#4fc3f7" stroke="#0288d1" stroke-width="2"/>
      </g>
    `
  },
  {
    id: "cherryear", category: "jewelry", name: "Cherry Danglers",
    svg: `
      <g transform="translate(-52 -60)">
        <circle r="4" fill="#ffd54f"/>
        <path d="M0 4 q-3 10 -7 14 M0 4 q5 9 8 14" stroke="#43a047" stroke-width="2.5" fill="none"/>
        <circle cx="-8" cy="22" r="6" fill="#e53935"/>
        <circle cx="9" cy="22" r="6" fill="#c62828"/>
      </g>
      <g transform="translate(52 -60)">
        <circle r="4" fill="#ffd54f"/>
        <path d="M0 4 q-3 10 -7 14 M0 4 q5 9 8 14" stroke="#43a047" stroke-width="2.5" fill="none"/>
        <circle cx="-8" cy="22" r="6" fill="#e53935"/>
        <circle cx="9" cy="22" r="6" fill="#c62828"/>
      </g>
    `
  },
  {
    id: "starpendant", category: "jewelry", name: "Star Pendant",
    svg: `
      <path d="M-30 -12 Q0 10 30 -12" stroke="#ffd54f" stroke-width="3" fill="none"/>
      <path d="M0 2 l5 10 11 1 -8 8 2 11 -10 -6 -10 6 2 -11 -8 -8 11 -1 Z" fill="#ffd54f" stroke="#f9a825" stroke-width="2"/>
    `
  },
  {
    id: "charms", category: "jewelry", name: "Charm Bracelet",
    preview: "41 58 52 52",
    svg: `
      <g transform="translate(67 84) rotate(-14) scale(0.7)">
        <ellipse rx="14" ry="7" fill="none" stroke="#ffd54f" stroke-width="4"/>
        <circle cx="-10" cy="7" r="4" fill="#e53935"/>
        <path d="M2 6 l3 5 -6 0 Z" fill="#3aa0ff"/>
        <circle cx="11" cy="5" r="3.5" fill="#3ecf5a"/>
      </g>
    `
  },
  {
    id: "goldwatch", category: "jewelry", name: "Gold Watch",
    preview: "41 58 52 52",
    svg: `
      <g transform="translate(67 84) rotate(-14) scale(0.7)">
        <rect x="-9" y="-18" width="18" height="36" rx="6" fill="#c9a34a"/>
        <circle r="11" fill="#fffde7" stroke="#f9a825" stroke-width="3.5"/>
        <path d="M0 0 L0 -6 M0 0 L4 3" stroke="#5d4037" stroke-width="2" stroke-linecap="round"/>
      </g>
    `
  },
  {
    id: "sportwatch", category: "jewelry", name: "Sport Watch",
    preview: "-93 58 52 52",
    svg: `
      <g transform="translate(-67 84) rotate(14) scale(0.7)">
        <rect x="-9" y="-18" width="18" height="36" rx="6" fill="#3aa0ff"/>
        <rect x="-9" y="-9" width="18" height="18" rx="4" fill="#263238"/>
        <text x="0" y="4" font-size="9" text-anchor="middle" fill="#3ecf5a" font-family="monospace" font-weight="bold">1:00</text>
      </g>
    `
  },
  {
    id: "bone", category: "jewelry", name: "Bone Collar",
    svg: `
      <path d="M-34 -8 Q0 12 34 -8" stroke="#e53935" stroke-width="9" fill="none" stroke-linecap="round"/>
      <g transform="translate(0 16)">
        <rect x="-15" y="-4" width="30" height="8" rx="4" fill="#fffdf5" stroke="#d8cfc4" stroke-width="2"/>
        <circle cx="-15" cy="-5" r="6" fill="#fffdf5" stroke="#d8cfc4" stroke-width="2"/>
        <circle cx="-15" cy="5"  r="6" fill="#fffdf5" stroke="#d8cfc4" stroke-width="2"/>
        <circle cx="15"  cy="-5" r="6" fill="#fffdf5" stroke="#d8cfc4" stroke-width="2"/>
        <circle cx="15"  cy="5"  r="6" fill="#fffdf5" stroke="#d8cfc4" stroke-width="2"/>
      </g>
    `
  },
  {
    id: "fishskel", category: "jewelry", name: "Fish Skeleton",
    svg: `
      <path d="M-36 -8 Q0 24 36 -8" stroke="#8d6e63" stroke-width="2.5" fill="none"/>
      <g transform="translate(2 20)" stroke="#90a4ae" stroke-width="3" fill="none">
        <circle cx="-22" cy="0" r="6"/>
        <circle cx="-23" cy="-1" r="1.5" fill="#90a4ae"/>
        <path d="M-16 0 H14"/>
        <path d="M-10 -6 V6 M-4 -7 V7 M2 -8 V8 M8 -7 V7"/>
        <path d="M14 0 L23 -8 L23 8 Z"/>
      </g>
    `
  },
  {
    id: "peanuts", category: "jewelry", name: "Peanut Garland",
    svg: `
      <path d="M-38 -8 Q0 28 38 -8" stroke="#8d6e63" stroke-width="2.5" fill="none"/>
      <g fill="#d7a86e" stroke="#b98753" stroke-width="2">
        <path transform="translate(-26 2) rotate(-24)"  d="M0 -9 Q6 -9 6 -3 Q6 1 2 2 Q6 4 5 10 Q4 15 0 15 Q-4 15 -5 10 Q-6 4 -2 2 Q-6 1 -6 -3 Q-6 -9 0 -9 Z"/>
        <path transform="translate(0 12)"               d="M0 -9 Q6 -9 6 -3 Q6 1 2 2 Q6 4 5 10 Q4 15 0 15 Q-4 15 -5 10 Q-6 4 -2 2 Q-6 1 -6 -3 Q-6 -9 0 -9 Z"/>
        <path transform="translate(26 2) rotate(24)"    d="M0 -9 Q6 -9 6 -3 Q6 1 2 2 Q6 4 5 10 Q4 15 0 15 Q-4 15 -5 10 Q-6 4 -2 2 Q-6 1 -6 -3 Q-6 -9 0 -9 Z"/>
      </g>
    `
  },

  /* ---------------- MAKEUP (anchor: center of face) ---------------- */
  {
    id: "snorkel", category: "makeup", name: "Snorkel Mask",
    svg: `
      <path d="M-30 2 h-14 M30 2 h14" stroke="#26c6da" stroke-width="5" stroke-linecap="round"/>
      <rect x="-30" y="-12" width="60" height="28" rx="13" fill="none" stroke="#26c6da" stroke-width="6"/>
      <rect x="-24" y="-7" width="48" height="18" rx="9" fill="#b2ebf2" opacity="0.55"/>
      <path d="M44 4 Q58 4 58 -12 L58 -38" stroke="#ff7043" stroke-width="9" fill="none" stroke-linecap="round"/>
      <rect x="51" y="-52" width="13" height="17" rx="6" fill="#ff7043"/>
    `
  },
  {
    id: "freckles", category: "makeup", name: "Freckles",
    svg: `
      <g fill="#c98c5a">
        <circle cx="-30" cy="8" r="2.5"/><circle cx="-22" cy="13" r="2.5"/><circle cx="-36" cy="14" r="2.5"/>
        <circle cx="-26" cy="19" r="2"/>
        <circle cx="30" cy="8" r="2.5"/><circle cx="22" cy="13" r="2.5"/><circle cx="36" cy="14" r="2.5"/>
        <circle cx="26" cy="19" r="2"/>
        <circle cx="-4" cy="4" r="2"/><circle cx="4" cy="4" r="2"/>
      </g>
    `
  },
  {
    id: "glitter", category: "makeup", name: "Sparkle Glitter",
    svg: `
      <g fill="#ffd54f">
        <path d="M-32 4 l2.5 5 5 .5 -4 3.5 1 5 -4.5 -2.5 -4.5 2.5 1 -5 -4 -3.5 5 -.5 Z"/>
        <path d="M34 10 l2 4 4 .5 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -.5 Z"/>
      </g>
      <g fill="#b39ddb">
        <circle cx="-22" cy="16" r="2"/><circle cx="-38" cy="14" r="2"/>
        <circle cx="24" cy="2" r="2"/><circle cx="40" cy="16" r="2"/>
      </g>
      <g fill="#4fc3f7"><circle cx="-28" cy="-2" r="2"/><circle cx="30" cy="22" r="2"/></g>
    `
  },
  {
    id: "eyeshadow", category: "makeup", name: "Blue Eye Shadow",
    svg: `
      <path d="M-36 -14 Q-22 -26 -8 -14" stroke="#7ec8e3" stroke-width="9" fill="none" stroke-linecap="round" opacity="0.8"/>
      <path d="M8 -14 Q22 -26 36 -14" stroke="#7ec8e3" stroke-width="9" fill="none" stroke-linecap="round" opacity="0.8"/>
    `
  },
  {
    id: "warpaint", category: "makeup", name: "Game-Day Stripes",
    svg: `
      <rect x="-40" y="4" width="22" height="7" rx="3" fill="#33261d"/>
      <rect x="18" y="4" width="22" height="7" rx="3" fill="#33261d"/>
      <rect x="-40" y="14" width="22" height="7" rx="3" fill="#e53935"/>
      <rect x="18" y="14" width="22" height="7" rx="3" fill="#e53935"/>
    `
  },
  {
    id: "butterflypaint", category: "makeup", name: "Butterfly Paint",
    svg: `
      <g transform="translate(-34 2)">
        <path d="M0 0 q-16 -18 -26 -6 q-8 12 8 18 q-12 8 -2 16 q12 8 20 -12 Z" fill="#9b59ff"/>
        <circle cx="-12" cy="2" r="3" fill="#ffe921"/>
        <circle cx="-6" cy="16" r="2.5" fill="#ffe921"/>
      </g>
      <g transform="translate(34 2) scale(-1 1)">
        <path d="M0 0 q-16 -18 -26 -6 q-8 12 8 18 q-12 8 -2 16 q12 8 20 -12 Z" fill="#ff6fb5"/>
        <circle cx="-12" cy="2" r="3" fill="#ffe921"/>
        <circle cx="-6" cy="16" r="2.5" fill="#ffe921"/>
      </g>
    `
  },
  {
    id: "heromask", category: "makeup", name: "Superhero Mask",
    svg: `
      <path d="M-42 -12 Q0 -24 42 -12 Q44 10 30 14 Q14 16 6 2 Q0 -4 -6 2 Q-14 16 -30 14 Q-44 10 -42 -12 Z" fill="#1e88e5"/>
      <ellipse cx="-22" cy="-2" rx="13" ry="9" fill="#ffffff" opacity="0.9"/>
      <ellipse cx="22" cy="-2" rx="13" ry="9" fill="#ffffff" opacity="0.9"/>
    `
  },
  {
    id: "fangs", category: "makeup", name: "Vampire Fangs",
    svg: `
      <path d="M-20 16 Q0 26 20 16 Q0 34 -20 16 Z" fill="#6d2a2a"/>
      <path d="M-11 20 l5 12 5 -12 Z" fill="#ffffff"/>
      <path d="M2 20 l5 12 5 -12 Z" fill="#ffffff"/>
    `
  },
  {
    id: "bandaid", category: "makeup", name: "Brave Band-Aid",
    svg: `
      <g transform="rotate(-18)">
        <rect x="-24" y="-6" width="48" height="16" rx="7" fill="#ffcc9e" stroke="#e0a97b" stroke-width="2"/>
        <rect x="-8" y="-6" width="16" height="16" fill="#f2b98a"/>
        <g fill="#e0a97b">
          <circle cx="-4" cy="-2" r="1.6"/><circle cx="2" cy="-2" r="1.6"/>
          <circle cx="-4" cy="5" r="1.6"/><circle cx="2" cy="5" r="1.6"/>
        </g>
      </g>
    `
  },
  {
    id: "unibrow", category: "makeup", name: "Mighty Unibrow",
    svg: `
      <path d="M-38 -16 Q-18 -28 0 -22 Q18 -28 38 -16 Q18 -20 0 -14 Q-18 -20 -38 -16 Z" fill="#33261d"/>
    `
  },
  {
    id: "beautymark", category: "makeup", name: "Beauty Mark",
    svg: `
      <circle cx="-22" cy="22" r="4" fill="#4a3728"/>
    `
  },
  {
    id: "lipstick", category: "makeup", name: "Lipstick",
    svg: `
      <path d="M-17 24 Q-9 13 -2 20 Q0 22 2 20 Q9 13 17 24 Q9 37 0 35 Q-9 37 -17 24 Z" fill="#e0245e"/>
      <path d="M-17 24 Q0 28 17 24" stroke="#ad1a45" stroke-width="2.5" fill="none"/>
    `
  },
  {
    id: "whiskerpaint", category: "makeup", name: "Kitty Whiskers",
    svg: `
      <ellipse cx="0" cy="6" rx="8" ry="6" fill="#ff8a9d"/>
      <path d="M-14 6 h-26 M-13 15 q-14 7 -26 3" stroke="#33261d" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M14 6 h26 M13 15 q14 7 26 3" stroke="#33261d" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    `
  },
  {
    id: "blush", category: "makeup", name: "Rosy Cheeks",
    svg: `
      <ellipse cx="-34" cy="10" rx="13" ry="9" fill="#ff8a9d" opacity="0.75"/>
      <ellipse cx="34" cy="10" rx="13" ry="9" fill="#ff8a9d" opacity="0.75"/>
    `
  },
  {
    id: "nose", category: "makeup", name: "Clown Nose",
    svg: `
      <circle cx="0" cy="6" r="14" fill="#e53935"/>
      <circle cx="-4" cy="1" r="5" fill="#ff8a80"/>
    `
  },
  {
    id: "starpaint", category: "makeup", name: "Star Face Paint",
    svg: `
      <path d="M-34 4 l4 8 9 1 -6 7 1 9 -8 -4 -8 4 1 -9 -6 -7 9 -1 Z" fill="#42a5f5"/>
      <path d="M34 0 l3 6 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1 Z" fill="#ffd54f"/>
    `
  },
  {
    id: "mustache", category: "makeup", name: "Curly Mustache",
    svg: `
      <path d="M0 16 Q-12 8 -24 14 Q-38 20 -44 10 Q-40 24 -26 22 Q-12 20 0 26 Q12 20 26 22 Q40 24 44 10 Q38 20 24 14 Q12 8 0 16 Z" fill="#33261d"/>
    `
  },

  /* ---------------- HELD (anchor: the character's hand/paw) ---------------- */
  {
    id: "boombox", category: "held", name: "Boombox",
    svg: `
      <path d="M-28 -38 Q0 -54 28 -38" stroke="#37474f" stroke-width="6" fill="none"/>
      <rect x="-42" y="-38" width="84" height="52" rx="8" fill="#37474f"/>
      <circle cx="-22" cy="-12" r="14" fill="#90a4ae"/><circle cx="-22" cy="-12" r="6" fill="#263238"/>
      <circle cx="22" cy="-12" r="14" fill="#90a4ae"/><circle cx="22" cy="-12" r="6" fill="#263238"/>
      <rect x="-9" y="-33" width="18" height="7" rx="3" fill="#90a4ae"/>
      <g fill="#9b59ff"><circle cx="-50" cy="-48" r="4"/><rect x="-47" y="-64" width="3" height="16"/></g>
      <g fill="#3aa0ff"><circle cx="48" cy="-54" r="4"/><rect x="51" y="-70" width="3" height="16"/></g>
    `
  },
  {
    id: "tablet", category: "held", name: "Game Tablet",
    svg: `
      <rect x="-26" y="-40" width="52" height="74" rx="8" fill="#37474f"/>
      <rect x="-20" y="-32" width="40" height="52" rx="4" fill="#4fc3f7"/>
      <rect x="-20" y="6" width="40" height="14" fill="#8bc34a"/>
      <circle cx="10" cy="-18" r="7" fill="#ffe921"/>
      <rect x="-8" y="0" width="9" height="9" fill="#e53935"/>
      <circle cx="0" cy="28" r="3.5" fill="#90a4ae"/>
    `
  },
  {
    id: "flag", category: "held", name: "Happy Flag",
    svg: `
      <rect x="-3" y="-58" width="6" height="112" rx="3" fill="#8d6e63"/>
      <circle cx="0" cy="-62" r="5" fill="#ffd54f"/>
      <rect x="3" y="-56" width="52" height="34" rx="4" fill="#ffe921"/>
      <circle cx="19" cy="-46" r="3.5" fill="#33261d"/>
      <circle cx="41" cy="-46" r="3.5" fill="#33261d"/>
      <path d="M19 -35 Q30 -27 41 -35" stroke="#33261d" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    `
  },
  {
    id: "icecream", category: "held", name: "Triple Ice Cream",
    svg: `
      <path d="M-14 4 L0 52 L14 4 Z" fill="#d7a86e"/>
      <path d="M-9 12 L9 20 M-6 26 L7 30" stroke="#b98753" stroke-width="2.5"/>
      <circle cx="0" cy="-2" r="16" fill="#f48fb1"/>
      <circle cx="-10" cy="-18" r="14" fill="#fff9c4"/>
      <circle cx="10" cy="-20" r="13" fill="#8d6e63"/>
      <circle cx="10" cy="-36" r="5" fill="#e53935"/>
      <path d="M-4 8 q0 8 -5 8" stroke="#f48fb1" stroke-width="5" fill="none" stroke-linecap="round"/>
    `
  },
  {
    id: "wand", category: "held", name: "Magic Wand",
    svg: `
      <rect x="-4" y="-26" width="8" height="72" rx="4" fill="#5e35b1"/>
      <path d="M0 -58 l7 14 15 2 -11 10 3 15 -14 -8 -14 8 3 -15 -11 -10 15 -2 Z" fill="#ffe921" stroke="#f9a825" stroke-width="2"/>
      <g fill="#ffd54f">
        <circle cx="-24" cy="-44" r="3"/><circle cx="26" cy="-30" r="3"/><circle cx="-18" cy="-14" r="2.5"/>
      </g>
    `
  },
  {
    id: "chicken", category: "held", name: "Rubber Chicken",
    svg: `
      <ellipse cx="2" cy="16" rx="18" ry="23" fill="#ffca28"/>
      <path d="M-2 0 Q-6 -24 0 -38" stroke="#ffca28" stroke-width="12" fill="none" stroke-linecap="round"/>
      <circle cx="0" cy="-44" r="11" fill="#ffca28"/>
      <path d="M-4 -56 q2 -8 8 -6 q-2 6 -8 6 Z" fill="#e53935"/>
      <path d="M10 -46 q12 2 10 8 q-8 2 -12 -4 Z" fill="#ff9800"/>
      <circle cx="4" cy="-47" r="2.5" fill="#33261d"/>
      <path d="M-4 38 l-3 14 m3 -14 l3 14 m6 -18 l4 13" stroke="#ff9800" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M-8 10 q8 6 16 0" stroke="#f9a825" stroke-width="3" fill="none"/>
    `
  },
  {
    id: "lollipop", category: "held", name: "Giant Lollipop",
    svg: `
      <rect x="-3" y="-2" width="6" height="56" rx="3" fill="#eceff1"/>
      <circle cx="0" cy="-20" r="22" fill="#ff6fb5"/>
      <path d="M0 -20 q12 -2 9 9 q-3 11 -14 8 q-11 -3 -8 -15 q3 -12 16 -9" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>
    `
  },

  /* ---------------- SEASONAL ----------------
     These live in their own drawer that only appears at the right time of
     year. `slot` says where they actually go on the character. */

  /* 🌞 summer */
  {
    id: "beachball", category: "seasonal", season: "summer", slot: "held", name: "Beach Ball",
    svg: `
      <circle r="30" fill="#fff"/>
      <path d="M0 -30 A30 30 0 0 1 26 15 L0 0 Z" fill="#e53935"/>
      <path d="M26 15 A30 30 0 0 1 -26 15 L0 0 Z" fill="#ffe921"/>
      <path d="M-26 15 A30 30 0 0 1 0 -30 L0 0 Z" fill="#3aa0ff"/>
      <circle r="30" fill="none" stroke="#e0e0e0" stroke-width="2"/>
    `
  },
  {
    id: "floatring", category: "seasonal", season: "summer", slot: "clothes", name: "Floaty Ring",
    svg: `
      <circle cy="10" r="54" fill="#ff7043"/>
      <path d="M0 -44 a44 44 0 0 1 38 22 l-14 8 a28 28 0 0 0 -24 -14 Z" fill="#fff"/>
      <path d="M-38 32 a44 44 0 0 1 -6 -22 h16 a28 28 0 0 0 4 14 Z" fill="#fff"/>
      <circle cy="10" r="26" fill="#b3e5fc" opacity="0.5"/>
    `
  },
  {
    id: "icelolly", category: "seasonal", season: "summer", slot: "held", name: "Ice Lolly",
    svg: `
      <rect x="-4" y="10" width="8" height="34" rx="3" fill="#d7a86e"/>
      <path d="M-16 -34 h32 q4 0 4 6 v34 q0 6 -6 6 h-28 q-6 0 -6 -6 v-34 q0 -6 4 -6 Z" fill="#ff6fb5"/>
      <path d="M-16 -12 h36 v10 h-36 Z" fill="#ffe921"/>
      <path d="M-16 4 h36 v8 h-36 Z" fill="#4dd0e1"/>
    `
  },
  {
    id: "suncream", category: "seasonal", season: "summer", slot: "makeup", name: "Sun Cream Nose",
    svg: `
      <ellipse cx="0" cy="2" rx="12" ry="9" fill="#ffffff"/>
      <circle cx="-4" cy="-2" r="3" fill="#f5f5f5"/>
    `
  },

  /* 🎃 halloween */
  {
    id: "witchhat", category: "seasonal", season: "halloween", slot: "hats", name: "Witch Hat",
    svg: `
      <path d="M4 -84 Q30 -20 40 20 L-40 20 Q-24 -24 4 -84 Z" fill="#2b1b3d"/>
      <ellipse cx="0" cy="20" rx="56" ry="13" fill="#1c1128"/>
      <path d="M-34 12 Q0 24 34 12 L34 2 Q0 14 -34 2 Z" fill="#7b1fa2"/>
      <circle cx="26" cy="6" r="7" fill="#ffb300"/>
    `
  },
  {
    id: "batwings", category: "seasonal", season: "halloween", slot: "clothes", name: "Bat Wings",
    svg: `
      <path d="M-16 -40 Q-60 -46 -84 -12 Q-64 -18 -58 -6 Q-46 -16 -40 -2 Q-30 -14 -18 -6 Z" fill="#2b1b3d"/>
      <path d="M16 -40 Q60 -46 84 -12 Q64 -18 58 -6 Q46 -16 40 -2 Q30 -14 18 -6 Z" fill="#2b1b3d"/>
      <path d="M-40 -50 Q0 -62 40 -50 L46 56 Q0 72 -46 56 Z" fill="#37474f"/>
      <path d="M-40 -50 Q0 -30 40 -50 L44 -30 Q0 -12 -44 -30 Z" fill="#2b1b3d"/>
    `
  },
  {
    id: "pumpkinbucket", category: "seasonal", season: "halloween", slot: "held", name: "Pumpkin Bucket",
    svg: `
      <path d="M-26 -6 q0 -14 26 -14 q26 0 26 14 q2 30 -26 30 q-28 0 -26 -30 Z" fill="#ff8a3d"/>
      <path d="M-26 -8 q26 10 52 0" stroke="#e0662e" stroke-width="3" fill="none"/>
      <path d="M-12 -2 l8 10 -8 0 Z M12 -2 l-8 10 8 0 Z" fill="#33261d"/>
      <path d="M-12 14 q12 8 24 0 q-12 -2 -24 0 Z" fill="#33261d"/>
      <path d="M-24 -14 q24 -22 48 0" stroke="#5d4037" stroke-width="5" fill="none"/>
    `
  },
  {
    id: "pumpkinstamp", category: "seasonal", season: "halloween", slot: "badges", name: "Pumpkin Stamp",
    svg: `
      <path d="M-18 0 q0 -12 18 -12 q18 0 18 12 q2 20 -18 20 q-20 0 -18 -20 Z" fill="#ff8a3d" stroke="#e0662e" stroke-width="2"/>
      <path d="M-8 2 l6 8 -6 0 Z M8 2 l-6 8 6 0 Z" fill="#33261d"/>
      <path d="M-8 12 q8 6 16 0 q-8 -2 -16 0 Z" fill="#33261d"/>
      <path d="M0 -12 q-2 -8 6 -10" stroke="#43a047" stroke-width="4" fill="none"/>
    `
  },

  /* 🎄 winter holidays */
  {
    id: "santahat", category: "seasonal", season: "winter", slot: "hats", name: "Santa Hat",
    svg: `
      <path d="M-42 12 Q-40 -34 4 -40 Q44 -34 36 6 Q30 30 44 34 Q20 42 8 24 Q-16 26 -42 12 Z" fill="#e53935"/>
      <ellipse cx="0" cy="20" rx="48" ry="13" fill="#fdfdfd"/>
      <circle cx="46" cy="34" r="13" fill="#fdfdfd"/>
    `
  },
  {
    id: "antlers", category: "seasonal", season: "winter", slot: "hats", name: "Reindeer Antlers",
    svg: `
      <path d="M-16 16 q-10 -30 -30 -38 m8 20 q-14 -4 -20 -14 m12 32 q-16 2 -24 -6" stroke="#8d6e63" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M16 16 q10 -30 30 -38 m-8 20 q14 -4 20 -14 m-12 32 q16 2 24 -6" stroke="#8d6e63" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M-24 22 Q0 12 24 22" stroke="#e53935" stroke-width="7" fill="none"/>
      <circle cx="-30" cy="20" r="6" fill="#ffe921"/>
      <circle cx="30" cy="20" r="6" fill="#ffe921"/>
    `
  },
  {
    id: "candycane", category: "seasonal", season: "winter", slot: "held", name: "Candy Cane",
    svg: `
      <path d="M-6 44 V-14 q0 -18 18 -18 q18 0 18 18" stroke="#fdfdfd" stroke-width="14" fill="none" stroke-linecap="round"/>
      <path d="M-6 44 V-14 q0 -18 18 -18 q18 0 18 18" stroke="#e53935" stroke-width="14" fill="none" stroke-linecap="round" stroke-dasharray="9 9"/>
    `
  },
  {
    id: "snowmanstamp", category: "seasonal", season: "winter", slot: "badges", name: "Snowman",
    svg: `
      <circle cy="8" r="14" fill="#fdfdfd" stroke="#dfe6ec" stroke-width="2"/>
      <circle cy="-12" r="10" fill="#fdfdfd" stroke="#dfe6ec" stroke-width="2"/>
      <circle cx="-3" cy="-14" r="1.8" fill="#33261d"/>
      <circle cx="3" cy="-14" r="1.8" fill="#33261d"/>
      <path d="M0 -10 l7 2 -7 2 Z" fill="#ff8a3d"/>
      <rect x="-10" y="-24" width="20" height="4" fill="#33261d"/>
      <rect x="-7" y="-34" width="14" height="11" fill="#33261d"/>
    `
  },

  /* 🐣 spring */
  {
    id: "bunnyears", category: "seasonal", season: "spring", slot: "hats", name: "Bunny Ears",
    svg: `
      <ellipse cx="-18" cy="-28" rx="13" ry="38" fill="#fdfdfd" transform="rotate(-12 -18 -28)"/>
      <ellipse cx="18" cy="-28" rx="13" ry="38" fill="#fdfdfd" transform="rotate(12 18 -28)"/>
      <ellipse cx="-18" cy="-26" rx="6" ry="26" fill="#ffc9d4" transform="rotate(-12 -18 -26)"/>
      <ellipse cx="18" cy="-26" rx="6" ry="26" fill="#ffc9d4" transform="rotate(12 18 -26)"/>
      <path d="M-34 12 Q0 22 34 12" stroke="#ff8ab5" stroke-width="8" fill="none"/>
    `
  },
  {
    id: "flowercrown", category: "seasonal", season: "spring", slot: "hats", name: "Flower Crown",
    svg: `
      <path d="M-46 12 Q0 -10 46 12" stroke="#7cb342" stroke-width="7" fill="none"/>
      <g>
        <circle cx="-34" cy="6" r="5" fill="#ff6fb5"/><circle cx="-34" cy="6" r="2" fill="#ffe921"/>
        <circle cx="-14" cy="-3" r="6" fill="#ffffff"/><circle cx="-14" cy="-3" r="2.5" fill="#ffe921"/>
        <circle cx="8" cy="-4" r="6" fill="#9b59ff"/><circle cx="8" cy="-4" r="2.5" fill="#ffe921"/>
        <circle cx="30" cy="5" r="5" fill="#ffb142"/><circle cx="30" cy="5" r="2" fill="#fff"/>
      </g>
    `
  },
  {
    id: "eggbasket", category: "seasonal", season: "spring", slot: "held", name: "Egg Basket",
    svg: `
      <path d="M-26 0 h52 l-6 30 q-20 8 -40 0 Z" fill="#d7a86e" stroke="#b9884f" stroke-width="2"/>
      <path d="M-26 0 q26 -30 52 0" stroke="#b9884f" stroke-width="5" fill="none"/>
      <ellipse cx="-11" cy="-2" rx="8" ry="10" fill="#ff8ab5"/>
      <ellipse cx="4" cy="-4" rx="8" ry="10" fill="#4dd0e1"/>
      <ellipse cx="16" cy="0" rx="7" ry="9" fill="#ffe921"/>
      <path d="M-26 6 h52" stroke="#b9884f" stroke-width="4"/>
    `
  },
  {
    id: "chickstamp", category: "seasonal", season: "spring", slot: "badges", name: "Baby Chick",
    svg: `
      <circle cy="4" r="15" fill="#ffe066"/>
      <circle cy="-12" r="10" fill="#ffe066"/>
      <circle cx="-3" cy="-14" r="2" fill="#33261d"/>
      <circle cx="4" cy="-14" r="2" fill="#33261d"/>
      <path d="M0 -10 l7 3 -7 3 Z" fill="#ff8a3d"/>
      <path d="M-6 18 v5 M6 18 v5" stroke="#ff8a3d" stroke-width="3" stroke-linecap="round"/>
    `
  }
];
