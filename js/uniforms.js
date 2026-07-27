/**
 * Complete uniforms — one drop dresses the whole character.
 *
 * A uniform is just a map of slot -> item id, so everything downstream (draw
 * order, anchors, tapping a piece to take it off, photos, saved looks) works
 * exactly as it does for single items. Pieces that only exist as part of a
 * uniform are defined here as ordinary wardrobe items with `hidden: true` and
 * appended to ITEMS — hidden items never show up in the drawers.
 *
 * Art conventions are the same as wardrobe.js: centered on (0,0), roughly a
 * 140x140 box, tops keep their sleeves short so the character's own arms show.
 */

const UNIFORM_PARTS = [

  /* ---------------- police ---------------- */
  {
    id: "u_policeshirt", category: "clothes", hidden: true, name: "Police Shirt",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#1f3b73"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#1f3b73"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#2f5aa8"/>
      <path d="M-26 -56 L0 -28 L26 -56 L14 -62 Q0 -54 -14 -62 Z" fill="#1f3b73"/>
      <path d="M0 -28 L8 -20 L5 18 L-5 18 L-8 -20 Z" fill="#152a52"/>
      <rect x="-44" y="-54" width="20" height="9" rx="4" fill="#152a52"/>
      <rect x="24" y="-54" width="20" height="9" rx="4" fill="#152a52"/>
      <rect x="-40" y="-8" width="22" height="18" rx="3" fill="#2a4d8f"/>
      <rect x="-40" y="-10" width="22" height="7" rx="3" fill="#1f3b73"/>
      <rect x="18" y="-8" width="22" height="18" rx="3" fill="#2a4d8f"/>
      <rect x="18" y="-10" width="22" height="7" rx="3" fill="#1f3b73"/>
      <circle cx="0" cy="30" r="3.5" fill="#152a52"/>
      <circle cx="0" cy="48" r="3.5" fill="#152a52"/>
    `
  },
  {
    id: "u_policepants", category: "bottoms", hidden: true, name: "Police Trousers",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#2f5aa8"/>
      <path d="M-31 -20 L-35 56" stroke="#ffd54f" stroke-width="4" fill="none"/>
      <path d="M31 -20 L35 56" stroke="#ffd54f" stroke-width="4" fill="none"/>
      <rect x="-35" y="-32" width="70" height="12" rx="5" fill="#22314a"/>
      <rect x="-9" y="-31" width="18" height="10" rx="3" fill="#ffd54f"/>
    `
  },
  {
    id: "u_policeboots", category: "shoes", hidden: true, name: "Duty Boots",
    svg: `
      <path d="M-3 -12 h-22 v14 q-14 3 -16 10 q0 6 8 6 h33 Z" fill="#2b2b2b"/>
      <path d="M3 -12 h22 v14 q14 3 16 10 q0 6 -8 6 h-33 Z" fill="#2b2b2b"/>
      <rect x="-27" y="-28" width="24" height="17" rx="4" fill="#1c1c1c"/>
      <rect x="3" y="-28" width="24" height="17" rx="4" fill="#1c1c1c"/>
      <rect x="-27" y="-22" width="24" height="5" fill="#5a5a5a"/>
      <rect x="3" y="-22" width="24" height="5" fill="#5a5a5a"/>
      <path d="M-40 15 h37 M40 15 h-37" stroke="#000" stroke-width="4"/>
    `
  },
  {
    id: "u_policestar", category: "badges", hidden: true, name: "Sheriff Star",
    svg: `
      <path d="M0 -26 l7 16 17 2 -13 12 4 17 -15 -9 -15 9 4 -17 -13 -12 17 -2 Z"
            fill="#cfd8dc" stroke="#90a4ae" stroke-width="2.5"/>
      <circle cx="0" cy="2" r="7" fill="#1f3b73"/>
      <circle cx="0" cy="2" r="3" fill="#ffd54f"/>
    `
  },
  {
    id: "u_walkie", category: "held", hidden: true, name: "Walkie-Talkie",
    svg: `
      <rect x="4" y="-36" width="6" height="20" rx="3" fill="#1c1c1c"/>
      <circle cx="7" cy="-38" r="4" fill="#e53935"/>
      <rect x="-14" y="-18" width="28" height="56" rx="6" fill="#2b2b2b"/>
      <rect x="-9" y="-12" width="18" height="12" rx="2" fill="#8fd14f"/>
      <g fill="#5a5a5a">
        <rect x="-9" y="6" width="18" height="4" rx="2"/>
        <rect x="-9" y="15" width="18" height="4" rx="2"/>
        <rect x="-9" y="24" width="18" height="4" rx="2"/>
      </g>
    `
  },

  /* ---------------- astronaut ---------------- */
  {
    id: "u_astropants", category: "bottoms", hidden: true, name: "Space Trousers",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#f5f5f5" stroke="#dfe4e8" stroke-width="2"/>
      <rect x="-32" y="18" width="27" height="10" rx="3" fill="#ff8a3d"/>
      <rect x="5" y="18" width="27" height="10" rx="3" fill="#ff8a3d"/>
      <path d="M-34 40 h26 M8 40 h26" stroke="#b0bec5" stroke-width="3"/>
      <rect x="-35" y="-32" width="70" height="12" rx="5" fill="#90a4ae"/>
      <rect x="-9" y="-31" width="18" height="10" rx="3" fill="#cfd8dc"/>
    `
  },
  {
    /* not hidden: the astronaut suit already has its own chest panel, so the
       patch is more useful as a normal stamp anyone can wear */
    id: "u_missionpatch", category: "badges", name: "Mission Patch",
    svg: `
      <circle cx="0" cy="0" r="24" fill="#1a2a6c" stroke="#ffd54f" stroke-width="3"/>
      <path d="M0 -15 q8 9 8 17 l-8 6 -8 -6 q0 -8 8 -17 Z" fill="#eceff1"/>
      <path d="M-8 4 l-7 10 7 -3 Z" fill="#e53935"/>
      <path d="M8 4 l7 10 -7 -3 Z" fill="#e53935"/>
      <circle cx="0" cy="-1" r="3.5" fill="#3aa0ff"/>
      <g fill="#ffd54f">
        <circle cx="-15" cy="-11" r="2"/><circle cx="15" cy="-13" r="2"/><circle cx="-14" cy="12" r="2"/>
      </g>
    `
  },

  /* ---------------- sneaky thief ---------------- */
  {
    id: "u_thiefbeanie", category: "hats", hidden: true, name: "Sneaky Beanie",
    svg: `
      <path d="M-42 14 Q-44 -32 0 -32 Q44 -32 42 14 Z" fill="#37474f"/>
      <rect x="-46" y="8" width="92" height="17" rx="8" fill="#263238"/>
      <path d="M-28 -10 q28 -10 56 0" stroke="#455a64" stroke-width="3" fill="none"/>
      <path d="M-30 4 q30 -10 60 0" stroke="#455a64" stroke-width="3" fill="none"/>
    `
  },
  {
    id: "u_thiefmask", category: "makeup", hidden: true, name: "Bandit Mask",
    svg: `
      <path d="M-50 -14 Q0 -22 50 -14 L50 6 Q0 14 -50 6 Z" fill="#263238"/>
      <ellipse cx="-21" cy="-4" rx="11" ry="7.5" fill="#ffffff" opacity="0.92"/>
      <ellipse cx="21" cy="-4" rx="11" ry="7.5" fill="#ffffff" opacity="0.92"/>
    `
  },
  {
    id: "u_thiefshirt", category: "clothes", hidden: true, name: "Stripey Top",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#eceff1"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#eceff1"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#f5f5f5"/>
      <g stroke="#2b2b2b" stroke-width="9" fill="none">
        <path d="M-46 -34 Q0 -46 46 -34"/>
        <path d="M-48 -12 Q0 -24 48 -12"/>
        <path d="M-49 10 Q0 -2 49 10"/>
        <path d="M-50 32 Q0 20 50 32"/>
        <path d="M-51 54 Q0 42 51 54"/>
      </g>
      <path d="M-62 -22 q-3 10 0 18 l20 -6 q-2 -6 0 -12 Z" fill="#2b2b2b"/>
      <path d="M62 -22 q3 10 0 18 l-20 -6 q2 -6 0 -12 Z" fill="#2b2b2b"/>
    `
  },
  {
    id: "u_thiefpants", category: "bottoms", hidden: true, name: "Sneaky Trousers",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#37474f"/>
      <rect x="-35" y="-32" width="70" height="12" rx="5" fill="#263238"/>
      <rect x="-9" y="-31" width="18" height="10" rx="3" fill="#90a4ae"/>
      <path d="M-37 48 h29 M8 48 h29" stroke="#263238" stroke-width="5"/>
    `
  },
  {
    id: "u_swagbag", category: "held", hidden: true, name: "Loot Sack",
    svg: `
      <path d="M-28 46 Q-36 6 -16 -12 L16 -12 Q36 6 28 46 Q0 54 -28 46 Z"
            fill="#e8dcc0" stroke="#c8b78f" stroke-width="2"/>
      <path d="M-18 -12 q18 -9 36 0 l-4 10 q-14 -6 -28 0 Z" fill="#b39b6a"/>
      <path d="M-13 -14 q-6 -9 1 -12" fill="none" stroke="#e8dcc0" stroke-width="8" stroke-linecap="round"/>
      <path d="M13 -14 q6 -9 -1 -12" fill="none" stroke="#e8dcc0" stroke-width="8" stroke-linecap="round"/>
      <path d="M0 4 V42" stroke="#8d6e63" stroke-width="4" stroke-linecap="round"/>
      <path d="M9 13 q0 -6 -9 -6 q-9 0 -9 7 q0 6 9 8 q9 2 9 8 q0 7 -9 7 q-9 0 -9 -6"
            stroke="#8d6e63" stroke-width="4" fill="none" stroke-linecap="round"/>
    `
  },

  /* ---------------- chef ---------------- */
  {
    id: "u_chefjacket", category: "clothes", hidden: true, name: "Chef Jacket",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#eceff1"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#eceff1"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#eef1f3"/>
      <path d="M4 -58 Q26 -56 45 -52 L52 58 Q28 64 3 66 Z" fill="#fafafa"/>
      <path d="M4 -58 L3 66" stroke="#dde3e7" stroke-width="2" fill="none"/>
      <g fill="#dfe6ea" stroke="#c6d0d6" stroke-width="1.5">
        <circle cx="14" cy="-28" r="4"/><circle cx="14" cy="-4" r="4"/>
        <circle cx="14" cy="20" r="4"/><circle cx="14" cy="44" r="4"/>
        <circle cx="34" cy="-24" r="4"/><circle cx="34" cy="0" r="4"/>
        <circle cx="34" cy="24" r="4"/><circle cx="34" cy="48" r="4"/>
      </g>
      <path d="M-26 -58 Q0 -42 26 -58 L22 -44 Q0 -30 -22 -44 Z" fill="#e53935"/>
      <circle cx="0" cy="-40" r="6" fill="#c62828"/>
    `
  },
  {
    id: "u_chefpants", category: "bottoms", hidden: true, name: "Checky Trousers",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#f5f5f5"/>
      <g stroke="#37474f" stroke-width="3" fill="none" opacity="0.85">
        <path d="M-28 -22 L-31 54"/><path d="M-19 -22 L-21 54"/><path d="M-10 -22 L-11 54"/>
        <path d="M28 -22 L31 54"/><path d="M19 -22 L21 54"/><path d="M10 -22 L11 54"/>
        <path d="M-33 -16 H33"/><path d="M-33 -6 H33"/><path d="M-34 4 H34"/>
        <path d="M-35 16 H-3 M3 16 H35"/><path d="M-35 26 H-4 M4 26 H35"/>
        <path d="M-36 36 H-5 M5 36 H36"/><path d="M-36 46 H-6 M6 46 H36"/>
      </g>
      <rect x="-35" y="-32" width="70" height="12" rx="5" fill="#cfd8dc"/>
    `
  },
  {
    id: "u_pan", category: "held", hidden: true, name: "Frying Pan",
    svg: `
      <rect x="-6" y="-16" width="12" height="58" rx="6" fill="#3a2c22"/>
      <ellipse cx="0" cy="-24" rx="31" ry="21" fill="#2b2b2b"/>
      <ellipse cx="0" cy="-27" rx="25" ry="16" fill="#4a4a4a"/>
      <ellipse cx="-1" cy="-27" rx="16" ry="10" fill="#fdfdfd"/>
      <circle cx="2" cy="-27" r="5.5" fill="#ffb300"/>
    `
  },

  /* ---------------- clown ---------------- */
  {
    id: "u_clownsuit", category: "clothes", hidden: true, name: "Clown Suit",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#3ecf5a"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#3ecf5a"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#ffe921"/>
      <g>
        <circle cx="-30" cy="-26" r="6" fill="#e53935"/>
        <circle cx="28" cy="-30" r="6" fill="#3aa0ff"/>
        <circle cx="-24" cy="10" r="6" fill="#3aa0ff"/>
        <circle cx="30" cy="6" r="6" fill="#e53935"/>
        <circle cx="-32" cy="42" r="6" fill="#9b59ff"/>
        <circle cx="26" cy="44" r="6" fill="#3ecf5a"/>
        <circle cx="-2" cy="52" r="6" fill="#e53935"/>
      </g>
      <g fill="#ff6fb5">
        <circle cx="-34" cy="-50" r="13"/><circle cx="-16" cy="-56" r="13"/>
        <circle cx="2" cy="-58" r="13"/><circle cx="20" cy="-55" r="13"/>
        <circle cx="36" cy="-48" r="13"/>
      </g>
      <circle cx="0" cy="-16" r="8" fill="#3aa0ff"/>
      <circle cx="0" cy="14" r="8" fill="#e53935"/>
    `
  },
  {
    id: "u_clownpants", category: "bottoms", hidden: true, name: "Baggy Clown Pants",
    svg: `
      <path d="M-38 -26 H38 L46 58 H6 L0 12 L-6 58 H-46 Z" fill="#3aa0ff"/>
      <g stroke="#ffffff" stroke-width="7" fill="none">
        <path d="M-30 -20 L-35 54"/><path d="M-16 -20 L-18 54"/>
        <path d="M30 -20 L35 54"/><path d="M16 -20 L18 54"/>
      </g>
      <rect x="-40" y="-32" width="80" height="13" rx="6" fill="#e53935"/>
      <circle cx="0" cy="-25" r="8" fill="#ffe921"/>
    `
  },
  {
    id: "u_balloons", category: "held", hidden: true, name: "Balloons",
    svg: `
      <g stroke="#b0844a" stroke-width="2" fill="none">
        <path d="M-20 -26 Q-10 6 0 44"/><path d="M0 -38 Q-2 4 0 44"/><path d="M20 -28 Q10 6 0 44"/>
      </g>
      <ellipse cx="-20" cy="-44" rx="14" ry="17" fill="#e53935"/>
      <ellipse cx="20" cy="-46" rx="14" ry="17" fill="#3aa0ff"/>
      <ellipse cx="0" cy="-56" rx="14" ry="17" fill="#ffe921"/>
      <g fill="#ffffff" opacity="0.55">
        <ellipse cx="-24" cy="-50" rx="4" ry="6"/><ellipse cx="16" cy="-52" rx="4" ry="6"/>
        <ellipse cx="-4" cy="-62" rx="4" ry="6"/>
      </g>
    `
  },

  /* ---------------- magician ---------------- */
  {
    id: "u_tophat", category: "hats", hidden: true, name: "Magic Top Hat",
    /* the stage clips anything much above y=-40, so the rabbit climbs out onto
       the brim instead of poking through the top where it would be cut off */
    svg: `
      <path d="M-30 24 L-30 -38 Q0 -44 30 -38 L30 24 Z" fill="#2b2b2b"/>
      <ellipse cx="0" cy="-38" rx="30" ry="8" fill="#1c1c1c"/>
      <rect x="-30" y="0" width="60" height="15" fill="#c62828"/>
      <circle cx="-20" cy="8" r="5" fill="#ffd54f"/>
      <ellipse cx="0" cy="24" rx="52" ry="12" fill="#1c1c1c"/>
      <g>
        <ellipse cx="46" cy="0" rx="7" ry="16" fill="#f5f5f5" transform="rotate(14 46 0)"/>
        <ellipse cx="61" cy="4" rx="7" ry="16" fill="#f5f5f5" transform="rotate(30 61 4)"/>
        <ellipse cx="46" cy="0" rx="3.5" ry="9" fill="#ffc1d8" transform="rotate(14 46 0)"/>
        <ellipse cx="61" cy="4" rx="3.5" ry="9" fill="#ffc1d8" transform="rotate(30 61 4)"/>
        <circle cx="54" cy="24" r="14" fill="#fafafa"/>
        <circle cx="49" cy="21" r="2.5" fill="#2b2b2b"/><circle cx="59" cy="21" r="2.5" fill="#2b2b2b"/>
        <circle cx="54" cy="27" r="3" fill="#ffb3c9"/>
      </g>
    `
  },
  {
    id: "u_magiccape", category: "clothes", hidden: true, name: "Magician's Cape",
    svg: `
      <path d="M-42 -50 Q0 -62 42 -50 L72 64 Q0 82 -72 64 Z" fill="#151515"/>
      <path d="M-34 -48 L-54 62 Q-30 68 -25 22 Z" fill="#a01c1c"/>
      <path d="M34 -48 L54 62 Q30 68 25 22 Z" fill="#a01c1c"/>
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#fafafa"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#fafafa"/>
      <path d="M-44 -50 Q0 -64 44 -50 L48 56 Q0 70 -48 56 Z" fill="#fafafa"/>
      <path d="M-24 -56 L0 -30 L24 -56 L13 -62 Q0 -53 -13 -62 Z" fill="#151515"/>
      <g fill="#2b2b2b">
        <circle cx="0" cy="0" r="3.5"/><circle cx="0" cy="20" r="3.5"/><circle cx="0" cy="40" r="3.5"/>
      </g>
    `
  },
  {
    id: "u_dressshoes", category: "shoes", hidden: true, name: "Shiny Shoes",
    svg: `
      <path d="M-4 -9 h-20 v9 q-15 2 -18 8 q-1 7 7 7 h35 Z" fill="#1c1c1c"/>
      <path d="M4 -9 h20 v9 q15 2 18 8 q1 7 -7 7 h-35 Z" fill="#1c1c1c"/>
      <rect x="-24" y="-10" width="19" height="5" rx="2" fill="#3a3a3a"/>
      <rect x="5" y="-10" width="19" height="5" rx="2" fill="#3a3a3a"/>
      <ellipse cx="-28" cy="4" rx="7" ry="3" fill="#6a6a6a" opacity="0.6"/>
      <ellipse cx="28" cy="4" rx="7" ry="3" fill="#6a6a6a" opacity="0.6"/>
    `
  },

  /* ---------------- firefighter ---------------- */
  {
    id: "u_firecoat", category: "clothes", hidden: true, name: "Bunker Coat",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#c9a05a"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#c9a05a"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#dcb877"/>
      <path d="M-26 -56 L0 -30 L26 -56 L14 -62 Q0 -54 -14 -62 Z" fill="#5b4a2e"/>
      <g fill="none" stroke-width="6">
        <path d="M-49 6 Q0 -6 49 6" stroke="#f0f0f0"/>
        <path d="M-50 20 Q0 8 50 20" stroke="#ffe921"/>
      </g>
      <path d="M-62 -20 q-3 8 0 14 l20 -6 q-2 -4 0 -8 Z" fill="#f0f0f0"/>
      <path d="M62 -20 q3 8 0 14 l-20 -6 q2 -4 0 -8 Z" fill="#f0f0f0"/>
      <rect x="-3" y="-30" width="6" height="88" fill="#b08e4c"/>
      <rect x="-40" y="32" width="24" height="18" rx="3" fill="#c9a05a"/>
      <rect x="16" y="32" width="24" height="18" rx="3" fill="#c9a05a"/>
    `
  },
  {
    id: "u_firepants", category: "bottoms", hidden: true, name: "Bunker Trousers",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#dcb877"/>
      <path d="M-36 40 h28 M8 40 h28" stroke="#f0f0f0" stroke-width="6"/>
      <path d="M-36 50 h28 M8 50 h28" stroke="#ffe921" stroke-width="6"/>
      <rect x="-35" y="-32" width="70" height="12" rx="5" fill="#5b4a2e"/>
      <rect x="-9" y="-31" width="18" height="10" rx="3" fill="#ffe921"/>
    `
  },
  {
    id: "u_fireaxe", category: "held", hidden: true, name: "Fire Axe",
    svg: `
      <rect x="-4" y="-24" width="8" height="70" rx="4" fill="#8d6e63"/>
      <path d="M-4 -44 q-24 4 -26 16 q0 12 26 14 Z" fill="#e53935"/>
      <path d="M-4 -40 q-18 4 -20 12 q0 9 20 11 Z" fill="#c62828"/>
      <path d="M4 -42 q14 3 14 14 q0 10 -14 12 Z" fill="#b0bec5"/>
    `
  },

  /* ---------------- pirate captain ---------------- */
  {
    id: "u_eyepatch", category: "makeup", hidden: true, name: "Eye Patch",
    svg: `
      <path d="M-40 -22 Q0 -30 42 -16" stroke="#2b2b2b" stroke-width="4" fill="none"/>
      <ellipse cx="-21" cy="-4" rx="17" ry="14" fill="#1c1c1c"/>
      <ellipse cx="-24" cy="-9" rx="6" ry="4" fill="#3a3a3a"/>
    `
  },
  {
    id: "u_piratecoat", category: "clothes", hidden: true, name: "Captain's Coat",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#8e1f1f"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#8e1f1f"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#a52a2a"/>
      <path d="M-28 -56 L0 -22 L28 -56 L15 -62 Q0 -53 -15 -62 Z" fill="#c9a227"/>
      <path d="M-16 -46 q16 12 32 0 l-3 14 q-13 8 -26 0 Z" fill="#f5f5f5"/>
      <g fill="#ffd54f">
        <circle cx="-15" cy="-4" r="4"/><circle cx="15" cy="-4" r="4"/>
        <circle cx="-15" cy="14" r="4"/><circle cx="15" cy="14" r="4"/>
      </g>
      <path d="M-52 30 Q0 44 52 30 L52 44 Q0 58 -52 44 Z" fill="#3a2c22"/>
      <rect x="-11" y="32" width="22" height="18" rx="4" fill="#ffd54f"/>
      <path d="M-62 -18 q-3 8 0 14 l20 -6 q-2 -4 0 -8 Z" fill="#c9a227"/>
      <path d="M62 -18 q3 8 0 14 l-20 -6 q2 -4 0 -8 Z" fill="#c9a227"/>
      <g transform="translate(-42 -56)">
        <path d="M-6 8 q-12 14 -4 22 q7 -8 10 -18 Z" fill="#e53935"/>
        <ellipse cx="0" cy="0" rx="12" ry="15" fill="#3ecf5a"/>
        <circle cx="1" cy="-14" r="9" fill="#3ecf5a"/>
        <path d="M7 -15 q9 2 2 8 Z" fill="#ffb300"/>
        <circle cx="4" cy="-17" r="2.2" fill="#1c1c1c"/>
      </g>
    `
  },
  {
    id: "u_piratepants", category: "bottoms", hidden: true, name: "Sea Legs",
    svg: `
      <path d="M-33 -26 H33 L37 50 H8 L0 12 L-8 50 H-37 Z" fill="#37474f"/>
      <path d="M-39 46 h32 v10 h-32 Z M7 46 h32 v10 h-32 Z" fill="#263238"/>
      <path d="M-22 -14 V44 M22 -14 V44" stroke="#2b3840" stroke-width="3"/>
    `
  },
  {
    id: "u_pirateboots", category: "shoes", hidden: true, name: "Buckle Boots",
    svg: `
      <path d="M-3 -10 h-22 v14 q-14 3 -16 10 q0 6 8 6 h33 Z" fill="#5d4037"/>
      <path d="M3 -10 h22 v14 q14 3 16 10 q0 6 -8 6 h-33 Z" fill="#5d4037"/>
      <path d="M-31 -26 L-3 -26 L-3 -6 L-27 -6 Z" fill="#795548"/>
      <path d="M31 -26 L3 -26 L3 -6 L27 -6 Z" fill="#795548"/>
      <rect x="-23" y="2" width="16" height="6" rx="2" fill="#3a2c22"/>
      <rect x="7" y="2" width="16" height="6" rx="2" fill="#3a2c22"/>
      <rect x="-17" y="1" width="7" height="8" rx="2" fill="#ffd54f"/>
      <rect x="10" y="1" width="7" height="8" rx="2" fill="#ffd54f"/>
    `
  },
  {
    id: "u_cutlass", category: "held", hidden: true, name: "Cutlass",
    svg: `
      <path d="M-3 26 L-3 -48 q13 8 15 24 q3 18 -8 30 Z" fill="#dfe6ea" stroke="#a8b4bc" stroke-width="2"/>
      <rect x="-14" y="24" width="28" height="8" rx="4" fill="#c9a227"/>
      <rect x="-5" y="30" width="10" height="22" rx="4" fill="#5d4037"/>
      <circle cx="0" cy="54" r="6" fill="#c9a227"/>
    `
  },

  /* ---------------- luchador ---------------- */
  {
    id: "u_luchamask", category: "makeup", hidden: true, name: "Lucha Mask",
    svg: `
      <path d="M-45 -28 Q0 -38 45 -28 Q47 8 34 15 Q16 19 6 6 Q0 0 -6 6 Q-16 19 -34 15 Q-47 8 -45 -28 Z" fill="#e53935"/>
      <ellipse cx="-21" cy="-5" rx="13" ry="9" fill="#ffffff" opacity="0.95"/>
      <ellipse cx="21" cy="-5" rx="13" ry="9" fill="#ffffff" opacity="0.95"/>
      <path d="M0 -34 l5 11 12 2 -9 8 2 12 -10 -6 -10 6 2 -12 -9 -8 12 -2 Z" fill="#ffd54f"/>
      <path d="M-36 4 q-6 6 -4 12 M36 4 q6 6 4 12" stroke="#ffd54f" stroke-width="3.5" fill="none"/>
    `
  },
  {
    id: "u_luchasinglet", category: "clothes", hidden: true, name: "Champion Singlet",
    svg: `
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#e53935"/>
      <path d="M-45 -52 Q0 -66 45 -52 L44 -32 Q0 -46 -44 -32 Z" fill="#c62828"/>
      <path d="M0 -22 l9 19 21 3 -15 15 4 21 -19 -10 -19 10 4 -21 -15 -15 21 -3 Z"
            fill="#ffd54f" stroke="#f9a825" stroke-width="2"/>
      <path d="M-52 42 Q0 56 52 42" stroke="#ffd54f" stroke-width="7" fill="none"/>
    `
  },
  {
    id: "u_luchatights", category: "bottoms", hidden: true, name: "Champion Tights",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#e53935"/>
      <path d="M-31 -20 L-35 54" stroke="#ffd54f" stroke-width="5" fill="none"/>
      <path d="M31 -20 L35 54" stroke="#ffd54f" stroke-width="5" fill="none"/>
      <rect x="-35" y="-32" width="70" height="12" rx="5" fill="#ffd54f"/>
    `
  },
  {
    id: "u_luchaboots", category: "shoes", hidden: true, name: "Wrestling Boots",
    svg: `
      <path d="M-3 -12 h-22 v14 q-14 3 -16 10 q0 6 8 6 h33 Z" fill="#c62828"/>
      <path d="M3 -12 h22 v14 q14 3 16 10 q0 6 -8 6 h-33 Z" fill="#c62828"/>
      <rect x="-27" y="-28" width="24" height="17" rx="4" fill="#e53935"/>
      <rect x="3" y="-28" width="24" height="17" rx="4" fill="#e53935"/>
      <rect x="-27" y="-22" width="24" height="5" fill="#ffd54f"/>
      <rect x="3" y="-22" width="24" height="5" fill="#ffd54f"/>
      <path d="M-40 15 h37 M40 15 h-37" stroke="#8d1c1c" stroke-width="4"/>
    `
  },
  {
    id: "u_champbelt", category: "held", hidden: true, name: "Champion Belt",
    svg: `
      <path d="M-30 14 q-5 20 1 34 M30 14 q5 20 -1 34" stroke="#3a2c22" stroke-width="10" fill="none"/>
      <rect x="-32" y="-16" width="64" height="30" rx="7" fill="#3a2c22"/>
      <ellipse cx="0" cy="-1" rx="21" ry="18" fill="#ffd54f" stroke="#f9a825" stroke-width="2"/>
      <path d="M0 -13 l4 8 9 1 -7 7 2 9 -8 -5 -8 5 2 -9 -7 -7 9 -1 Z" fill="#c9a227"/>
      <circle cx="-24" cy="-1" r="4.5" fill="#ffd54f"/><circle cx="24" cy="-1" r="4.5" fill="#ffd54f"/>
    `
  },

  /* ---------------- ninja ---------------- */
  {
    id: "u_ninjahood", category: "hats", hidden: true, name: "Ninja Hood",
    svg: `
      <path d="M40 8 q24 6 28 28 q-18 -4 -30 -14 Z" fill="#1c1c1c"/>
      <path d="M-44 22 Q-46 -32 0 -32 Q46 -32 44 22 Q0 32 -44 22 Z" fill="#22282c"/>
      <path d="M-44 6 Q0 -4 44 6" stroke="#2f383e" stroke-width="3" fill="none"/>
      <path d="M-46 18 Q0 28 46 18 L46 27 Q0 37 -46 27 Z" fill="#1c1c1c"/>
    `
  },
  {
    id: "u_ninjamask", category: "makeup", hidden: true, name: "Ninja Wrap",
    /* two bands with a slit between them, so the character's own eyes show */
    svg: `
      <path d="M-47 -24 Q0 -34 47 -24 L47 -10 L-47 -10 Z" fill="#22282c"/>
      <path d="M-47 8 L47 8 L47 20 Q0 32 -47 20 Z" fill="#22282c"/>
      <path d="M40 10 q10 4 14 14" stroke="#22282c" stroke-width="6" fill="none"/>
    `
  },
  {
    id: "u_ninjagi", category: "clothes", hidden: true, name: "Ninja Gi",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#1c1c1c"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#1c1c1c"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#2b333a"/>
      <path d="M2 -60 Q26 -57 45 -52 L52 58 Q26 66 -8 66 Z" fill="#22282c"/>
      <path d="M-26 -56 L0 -26 L26 -56 L14 -62 Q0 -53 -14 -62 Z" fill="#1c1c1c"/>
      <path d="M-52 28 Q0 42 52 28 L52 42 Q0 56 -52 42 Z" fill="#c62828"/>
      <rect x="24" y="30" width="17" height="17" rx="4" fill="#a01c1c"/>
    `
  },
  {
    id: "u_ninjapants", category: "bottoms", hidden: true, name: "Ninja Trousers",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#22282c"/>
      <g stroke="#39434a" stroke-width="3.5">
        <path d="M-37 40 h29"/><path d="M-37 49 h29"/><path d="M8 40 h29"/><path d="M8 49 h29"/>
      </g>
      <rect x="-35" y="-32" width="70" height="12" rx="5" fill="#1c1c1c"/>
    `
  },
  {
    id: "u_shuriken", category: "held", hidden: true, name: "Throwing Star",
    svg: `
      <path d="M0 -32 L11 -11 L32 0 L11 11 L0 32 L-11 11 L-32 0 L-11 -11 Z"
            fill="#cfd8dc" stroke="#78909c" stroke-width="2.5"/>
      <circle cx="0" cy="0" r="6" fill="#546e7a"/>
    `
  },

  /* ---------------- banana suit ---------------- */
  {
    id: "u_bananasuit", category: "clothes", hidden: true, name: "Banana Body",
    svg: `
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#ffe921"/>
      <path d="M-45 -52 Q0 -66 45 -52 L44 -34 Q0 -48 -44 -34 Z" fill="#ffd54f"/>
      <g stroke="#f0c419" stroke-width="5" fill="none">
        <path d="M-28 -30 q-8 42 -4 74"/>
        <path d="M28 -30 q8 42 4 74"/>
        <path d="M0 -34 V66"/>
      </g>
      <path d="M-11 62 q11 14 22 0 q-11 7 -22 0 Z" fill="#8d6e63"/>
    `
  },
  {
    id: "u_bananatights", category: "bottoms", hidden: true, name: "Banana Legs",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#ffe921"/>
      <path d="M-22 -14 V52 M22 -14 V52" stroke="#f0c419" stroke-width="3"/>
      <rect x="-35" y="-32" width="70" height="11" rx="5" fill="#ffd54f"/>
    `
  },

  /* ---------------- detective ---------------- */
  {
    id: "u_deerstalker", category: "hats", hidden: true, name: "Detective Hat",
    svg: `
      <ellipse cx="-47" cy="8" rx="14" ry="18" fill="#a97a4a"/>
      <ellipse cx="47" cy="8" rx="14" ry="18" fill="#a97a4a"/>
      <path d="M-42 16 Q-44 -32 0 -32 Q44 -32 42 16 Z" fill="#b98a5a"/>
      <g stroke="#8a6238" stroke-width="2.5" fill="none" opacity="0.9">
        <path d="M-28 -26 V14"/><path d="M-10 -30 V16"/><path d="M8 -30 V16"/><path d="M26 -26 V14"/>
        <path d="M-40 -10 H40"/><path d="M-42 4 H42"/>
      </g>
      <path d="M-48 16 Q0 26 48 16 L48 26 Q0 36 -48 26 Z" fill="#a97a4a"/>
    `
  },
  {
    id: "u_trenchcoat", category: "clothes", hidden: true, name: "Trench Coat",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#c8a06a"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#c8a06a"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#d9b779"/>
      <path d="M4 -58 Q26 -56 45 -52 L52 58 Q28 64 3 66 Z" fill="#e2c48c"/>
      <path d="M-28 -56 L0 -24 L28 -56 L15 -62 Q0 -53 -15 -62 Z" fill="#c8a06a"/>
      <path d="M-52 26 Q0 40 52 26 L52 38 Q0 52 -52 38 Z" fill="#a97a4a"/>
      <rect x="-10" y="28" width="20" height="16" rx="3" fill="#8a6238"/>
      <g fill="#a97a4a">
        <circle cx="20" cy="-16" r="4"/><circle cx="20" cy="4" r="4"/>
        <circle cx="38" cy="-13" r="4"/><circle cx="38" cy="7" r="4"/>
      </g>
    `
  },
  {
    id: "u_magnifier", category: "held", hidden: true, name: "Magnifying Glass",
    svg: `
      <circle cx="0" cy="-24" r="21" fill="#d6ecff" opacity="0.8"/>
      <circle cx="0" cy="-24" r="21" fill="none" stroke="#90a4ae" stroke-width="7"/>
      <path d="M-12 -33 q6 -7 15 -7" stroke="#ffffff" stroke-width="4" fill="none" stroke-linecap="round"/>
      <rect x="-5" y="-4" width="10" height="48" rx="5" fill="#8d6e63"/>
      <rect x="-7" y="38" width="14" height="10" rx="4" fill="#5d4037"/>
    `
  },

  /* ---------------- scuba diver ---------------- */
  {
    id: "u_wetsuit", category: "clothes", hidden: true, name: "Wetsuit",
    svg: `
      <rect x="44" y="-48" width="24" height="66" rx="12" fill="#546e7a"/>
      <rect x="48" y="-56" width="16" height="11" rx="4" fill="#37474f"/>
      <rect x="44" y="-30" width="24" height="6" fill="#ffe921"/>
      <path d="M46 -34 q-16 6 -22 20" stroke="#37474f" stroke-width="5" fill="none"/>
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#1c2833"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#1c2833"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#22303f"/>
      <path d="M-49 24 Q0 38 49 24" stroke="#3aa0ff" stroke-width="7" fill="none"/>
      <rect x="-3" y="-52" width="6" height="70" fill="#37474f"/>
      <circle cx="0" cy="20" r="5" fill="#90a4ae"/>
    `
  },
  {
    id: "u_wetsuitpants", category: "bottoms", hidden: true, name: "Wetsuit Legs",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#22303f"/>
      <path d="M-31 -18 L-35 52" stroke="#3aa0ff" stroke-width="4" fill="none"/>
      <path d="M31 -18 L35 52" stroke="#3aa0ff" stroke-width="4" fill="none"/>
      <rect x="-35" y="-32" width="70" height="12" rx="5" fill="#1c2833"/>
    `
  },

  /* ---------------- farmer ---------------- */
  {
    id: "u_strawhat", category: "hats", hidden: true, name: "Straw Hat",
    svg: `
      <path d="M-30 20 Q-32 -30 0 -32 Q32 -30 30 20 Z" fill="#dbb865"/>
      <ellipse cx="0" cy="20" rx="57" ry="15" fill="#e6c67a"/>
      <ellipse cx="0" cy="18" rx="57" ry="13" fill="#dcbb6c"/>
      <path d="M-31 2 Q0 12 31 2 L31 14 Q0 24 -31 14 Z" fill="#8d6e63"/>
      <g stroke="#cfa955" stroke-width="2" fill="none">
        <path d="M-50 16 q50 12 100 0"/><path d="M-44 24 q44 8 88 0"/>
      </g>
    `
  },
  {
    id: "u_dungarees", category: "clothes", hidden: true, name: "Dungarees",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#c0392b"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#c0392b"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#cb4335"/>
      <g stroke="#f5f5f5" stroke-width="2.5" opacity="0.55" fill="none">
        <path d="M-24 -58 V70"/><path d="M0 -62 V72"/><path d="M24 -58 V70"/>
        <path d="M-50 -22 H50"/><path d="M-51 2 H51"/><path d="M-52 26 H52"/>
      </g>
      <path d="M-30 -26 L-38 -54 L-26 -58 L-18 -28 Z" fill="#3f6ea5"/>
      <path d="M30 -26 L38 -54 L26 -58 L18 -28 Z" fill="#3f6ea5"/>
      <path d="M-28 -26 H28 L33 60 Q0 70 -33 60 Z" fill="#3f6ea5"/>
      <circle cx="-25" cy="-24" r="4" fill="#ffd54f"/>
      <circle cx="25" cy="-24" r="4" fill="#ffd54f"/>
      <rect x="-13" y="-10" width="26" height="20" rx="3" fill="#35608f"/>
    `
  },
  {
    id: "u_dungareepants", category: "bottoms", hidden: true, name: "Denim Legs",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#3f6ea5"/>
      <path d="M-22 -14 V52 M22 -14 V52" stroke="#35608f" stroke-width="3"/>
      <path d="M-37 48 h29 M8 48 h29" stroke="#35608f" stroke-width="5"/>
      <rect x="-35" y="-32" width="70" height="11" rx="5" fill="#35608f"/>
    `
  },
  {
    id: "u_pitchfork", category: "held", hidden: true, name: "Pitchfork",
    svg: `
      <rect x="-4" y="-18" width="8" height="66" rx="4" fill="#a1734a"/>
      <g stroke="#b0bec5" stroke-width="6" stroke-linecap="round">
        <path d="M-18 -46 v28"/><path d="M0 -50 v32"/><path d="M18 -46 v28"/>
      </g>
      <rect x="-23" y="-22" width="46" height="9" rx="4" fill="#90a4ae"/>
    `
  },

  /* ---------------- race car driver ---------------- */
  {
    id: "u_racehelmet", category: "hats", hidden: true, name: "Racing Helmet",
    svg: `
      <path d="M-42 18 Q-44 -34 0 -34 Q44 -34 42 18 Z" fill="#e53935"/>
      <path d="M-9 16 L-9 -33 Q0 -35 9 -33 L9 16 Z" fill="#fafafa"/>
      <path d="M-44 -4 Q0 -14 44 -4 L44 12 Q0 22 -44 12 Z" fill="#1c1c1c"/>
      <path d="M-40 0 Q0 -8 40 0 L40 6 Q0 14 -40 6 Z" fill="#4a5b6b"/>
      <path d="M-44 14 Q0 24 44 14 L44 24 Q0 34 -44 24 Z" fill="#c62828"/>
    `
  },
  {
    id: "u_racesuit", category: "clothes", hidden: true, name: "Racing Suit",
    svg: `
      <path d="M-46 -50 Q-68 -36 -62 -4 L-42 -10 Q-48 -32 -38 -46 Z" fill="#e53935"/>
      <path d="M46 -50 Q68 -36 62 -4 L42 -10 Q48 -32 38 -46 Z" fill="#e53935"/>
      <path d="M-45 -52 Q0 -66 45 -52 L52 58 Q0 74 -52 58 Z" fill="#e53935"/>
      <path d="M-45 -52 Q0 -66 45 -52 L44 -32 Q0 -46 -44 -32 Z" fill="#fafafa"/>
      <path d="M-50 -12 Q0 -24 50 -12 L50 0 Q0 -12 -50 0 Z" fill="#1e88e5"/>
      <path d="M-22 -56 Q0 -46 22 -56 L18 -44 Q0 -36 -18 -44 Z" fill="#1c1c1c"/>
      <rect x="-38" y="12" width="22" height="13" rx="3" fill="#ffe921"/>
      <rect x="16" y="12" width="22" height="13" rx="3" fill="#fafafa"/>
      <rect x="-13" y="34" width="26" height="13" rx="3" fill="#3ecf5a"/>
    `
  },
  {
    id: "u_racepants", category: "bottoms", hidden: true, name: "Racing Trousers",
    svg: `
      <path d="M-33 -26 H33 L37 58 H8 L0 12 L-8 58 H-37 Z" fill="#e53935"/>
      <path d="M-31 -20 L-35 54" stroke="#fafafa" stroke-width="5" fill="none"/>
      <path d="M31 -20 L35 54" stroke="#fafafa" stroke-width="5" fill="none"/>
      <rect x="-35" y="-32" width="70" height="12" rx="5" fill="#1c1c1c"/>
      <rect x="-9" y="-31" width="18" height="10" rx="3" fill="#b0bec5"/>
    `
  },
  {
    id: "u_trophy", category: "held", hidden: true, name: "Winner's Trophy",
    svg: `
      <path d="M-20 -42 q-15 0 -15 11 q0 12 16 14" fill="none" stroke="#f9a825" stroke-width="5"/>
      <path d="M20 -42 q15 0 15 11 q0 12 -16 14" fill="none" stroke="#f9a825" stroke-width="5"/>
      <path d="M-20 -46 H20 V-22 Q20 -2 0 0 Q-20 -2 -20 -22 Z" fill="#ffd54f" stroke="#f9a825" stroke-width="2"/>
      <path d="M0 -36 l4 8 9 1 -7 7 2 9 -8 -5 -8 5 2 -9 -7 -7 9 -1 Z" fill="#fff8e1"/>
      <rect x="-5" y="0" width="10" height="14" fill="#f9a825"/>
      <rect x="-19" y="14" width="38" height="10" rx="3" fill="#8d6e63"/>
      <rect x="-23" y="24" width="46" height="11" rx="3" fill="#6d4c41"/>
    `
  }
];

/* hidden pieces join the normal catalog so every render path already knows
   how to draw, scale and remove them */
ITEMS.push(...UNIFORM_PARTS);

/**
 * The uniforms themselves. `worn` is a slot -> item id map; applying a uniform
 * clears every other slot (hair and beards are kept — a police cow should keep
 * its hairdo). Anything not listed is simply left empty.
 */
const UNIFORMS = [
  {
    id: "police", name: "Police Officer", emoji: "🚓",
    worn: {
      hats: "policecap", glasses: "sunglasses", clothes: "u_policeshirt",
      badges: "u_policestar", bottoms: "u_policepants", shoes: "u_policeboots",
      held: "u_walkie"
    },
    quips: [
      "Stop! In the name of silly!",
      "Pull over — that outfit is TOO cool.",
      "Officer Giggles reporting for duty!",
      "Beep boop — this is car 54, send snacks."
    ]
  },
  {
    id: "astronaut", name: "Astronaut", emoji: "🚀",
    worn: {
      hats: "astrohelmet", clothes: "astronaut",
      bottoms: "u_astropants", shoes: "rocket", held: "flag"
    },
    quips: [
      "One small step for a silly person!",
      "Houston, we have a fashion statement.",
      "To the moon and back before dinner!",
      "Zero gravity, one hundred percent style."
    ]
  },
  {
    id: "thief", name: "Sneaky Thief", emoji: "🦝",
    worn: {
      hats: "u_thiefbeanie", makeup: "u_thiefmask", clothes: "u_thiefshirt",
      bottoms: "u_thiefpants", shoes: "sneakers", held: "u_swagbag"
    },
    quips: [
      "Tiptoe... tiptoe... TIPTOE!",
      "I'm only stealing the last cookie.",
      "Shhhhh! You never saw me.",
      "Sneaky sneaky — oh no, squeaky shoes!"
    ]
  },
  {
    id: "chef", name: "Head Chef", emoji: "👨‍🍳",
    worn: {
      hats: "chefhat", makeup: "mustache", clothes: "u_chefjacket",
      bottoms: "u_chefpants", shoes: "crocs", held: "u_pan"
    },
    quips: [
      "Bon appé-silly!",
      "Today's special: pancakes. Tomorrow's too.",
      "Mamma mia, that's a spicy outfit!",
      "I said a PINCH of salt, not a punch!"
    ]
  },
  {
    id: "clown", name: "Circus Clown", emoji: "🤡",
    worn: {
      hats: "clownhat", makeup: "nose", clothes: "u_clownsuit",
      bottoms: "u_clownpants", shoes: "clown", held: "u_balloons"
    },
    quips: [
      "HONK HONK!",
      "Ladies and gentlemen... TA-DAAA!",
      "My shoes are bigger than my feelings.",
      "Twenty of me fit in one tiny car!"
    ]
  },
  {
    id: "magician", name: "Magician", emoji: "🎩",
    worn: {
      hats: "u_tophat", makeup: "mustache", clothes: "u_magiccape",
      jewelry: "bowtie", bottoms: "trousers", shoes: "u_dressshoes",
      held: "wand"
    },
    quips: [
      "Abraca-DABRA!",
      "Nothing up my sleeve... except my arm.",
      "For my next trick: finding my socks.",
      "Is this your card? No? ...Is this?"
    ]
  },
  {
    id: "firefighter", name: "Firefighter", emoji: "🚒",
    worn: {
      hats: "firehat", clothes: "u_firecoat", bottoms: "u_firepants",
      shoes: "u_policeboots", held: "u_fireaxe"
    },
    quips: [
      "Somebody call a hero? ...No? I'll wait.",
      "WEE-OOO WEE-OOO!",
      "Stand back! I'm rescuing this cat.",
      "Sliding down the pole is the best bit."
    ]
  },
  {
    id: "pirate", name: "Pirate Captain", emoji: "🏴‍☠️",
    worn: {
      hats: "pirate", makeup: "u_eyepatch", clothes: "u_piratecoat",
      jewelry: "hoops", bottoms: "u_piratepants", shoes: "u_pirateboots",
      held: "u_cutlass"
    },
    quips: [
      "Yo ho ho and a bottle of... juice!",
      "ARRRR! Where be me treasure?",
      "Walk the plank, ye scallywag!",
      "X marks the spot. What spot? THAT spot!"
    ]
  },
  {
    id: "luchador", name: "Luchador", emoji: "🤼",
    worn: {
      makeup: "u_luchamask", clothes: "u_luchasinglet", bottoms: "u_luchatights",
      shoes: "u_luchaboots", held: "u_champbelt"
    },
    quips: [
      "EL CHAMPIOOOON!",
      "Nobody knows who I am. It's me.",
      "Prepare for the FLYING ELBOW!",
      "The mask never comes off. Not even in the bath."
    ]
  },
  {
    id: "ninja", name: "Ninja", emoji: "🥷",
    worn: {
      hats: "u_ninjahood", makeup: "u_ninjamask", clothes: "u_ninjagi",
      bottoms: "u_ninjapants", shoes: "u_policeboots", held: "u_shuriken"
    },
    quips: [
      "You cannot see me. (I am right here.)",
      "Silent as a shadow! ...oops, creaky floor.",
      "I have been standing here for an hour.",
      "Ninja vanish! ...in a minute."
    ]
  },
  {
    id: "banana", name: "Banana Suit", emoji: "🍌",
    worn: {
      hats: "banana", clothes: "u_bananasuit", bottoms: "u_bananatights",
      shoes: "sneakers"
    },
    quips: [
      "I am a banana. That is the whole plan.",
      "Do NOT let anyone peel me.",
      "This is my formal wear.",
      "I'm ap-PEEL-ing, don't you think?"
    ]
  },
  {
    id: "detective", name: "Detective", emoji: "🕵️",
    worn: {
      hats: "u_deerstalker", makeup: "mustache", clothes: "u_trenchcoat",
      bottoms: "trousers", shoes: "u_dressshoes", held: "u_magnifier"
    },
    quips: [
      "Elementary, my dear whoever-you-are!",
      "AHA! A clue! ...it's a crumb.",
      "The case of the missing sock: SOLVED.",
      "I have deduced that it is Tuesday."
    ]
  },
  {
    id: "scuba", name: "Scuba Diver", emoji: "🤿",
    worn: {
      makeup: "snorkel", clothes: "u_wetsuit", bottoms: "u_wetsuitpants",
      shoes: "flippers"
    },
    quips: [
      "Glub glub! Down we go!",
      "I found a fish. It found me first.",
      "Under the sea, nobody hears you burp.",
      "Flippers are terrible for walking. Worth it."
    ]
  },
  {
    id: "farmer", name: "Farmer", emoji: "🚜",
    worn: {
      hats: "u_strawhat", clothes: "u_dungarees", bottoms: "u_dungareepants",
      shoes: "rainyellow", held: "u_pitchfork"
    },
    quips: [
      "Up at dawn! ...well, nine-ish.",
      "E-I-E-I-OOOOH!",
      "These are my best boots. They're also my only boots.",
      "The chickens are in charge, really."
    ]
  },
  {
    id: "racer", name: "Race Car Driver", emoji: "🏎️",
    worn: {
      hats: "u_racehelmet", clothes: "u_racesuit", bottoms: "u_racepants",
      shoes: "sneakers", held: "u_trophy"
    },
    quips: [
      "VROOOOM! Coming through!",
      "First place! Again! Sorry, everyone.",
      "I only have two speeds: fast and FASTER.",
      "Pit stop for a snack, please."
    ]
  }
];

/* extra jokes for when a particular animal wears a particular uniform,
   keyed "uniformId:characterId" (same idea as COMBO_QUIPS in main.js) */
const UNIFORM_COMBOS = {
  "police:cow":      ["MOO-lice! Pull over!", "This is the mooooo-bile unit."],
  "police:dog":      ["WOOF! Police dog, for real this time!", "I sniffed out the cookies."],
  "police:dog2":     ["Arf! Nobody move!", "I have a badge AND a wagging tail."],
  "police:cat":      ["I do not take orders. I AM the law.", "Purr-otect and serve."],
  "police:pig":      ["Oink! Officer Bacon on patrol!", "Nobody make a snort joke."],
  "astronaut:cat":   ["First cat on the moon. Obviously.", "Zero gravity? More napping room."],
  "astronaut:fish":  ["Space is just very dry water.", "Blub blub... in SPACE!"],
  "astronaut:dog":   ["First dog in space! Again!", "Do they have sticks up there?"],
  "astronaut:frog":  ["One HOP for froggy-kind!", "Ribbit... over."],
  "thief:cat":       ["I steal socks. It's a hobby.", "Nobody saw me. Nobody ever does."],
  "thief:dog":       ["I stole the sock! I'm SO sorry! Here it is!", "Worst thief ever. Too honest."],
  "thief:parrot":    ["SQUAWK! I stole the crackers!", "Pieces of eight! And a biscuit."],
  "thief:bear":      ["Just the honey. Only the honey.", "This sack is 100% picnic baskets."],
  "chef:pig":        ["...let's cook VEGETABLES today.", "Oink! Chef's salad, please!"],
  "chef:cow":        ["Today we're making... milkshakes!", "MOO cuisine!"],
  "chef:bear":       ["Everything on the menu is honey.", "Rawr! Order up!"],
  "chef:cat":        ["The special is fish. Always fish.", "I licked it. It's mine now."],
  "clown:elephant":  ["I AM the circus!", "TOOOOT! That was my nose, not the horn."],
  "clown:horse":     ["Neiiigh! Send in the clowns!", "I can juggle. With hooves."],
  "clown:cat":       ["I refuse to be funny. ...HONK.", "The nose stays. I like the nose."],
  "clown:frog":      ["Ribbit! HONK! Ribbit! HONK!", "I hop, therefore I'm funny."],
  "magician:bunny":  ["Wait — I'm supposed to come OUT of the hat!", "Magic bunny, no hat needed."],
  "magician:cat":    ["I made your homework disappear.", "Abraca-DABRA. Now feed me."],
  "magician:parrot": ["SQUAWK! Is this your card?!", "Pretty bird! Pretty MAGIC bird!"],
  "magician:lizard": ["Now you see me... now you still see me.", "Blep. That's the whole trick."],

  "firefighter:dog2":   ["A dalmatian firefighter! It's my DESTINY!", "I've trained my whole life for this."],
  "firefighter:dog":    ["WOOF! I ride on the truck!", "I rescued the cat. He was fine. He was annoyed."],
  "firefighter:cat":    ["I am usually the one being rescued.", "I'll be up the tree if you need me."],
  "firefighter:cow":    ["MOO-ve aside, coming through!", "Where's the fire? ...the barn?! MY BARN?"],
  "firefighter:elephant": ["I brought my own hose!", "TOOOOT! Stand back, everyone!"],
  "pirate:parrot":      ["I'm the captain AND the parrot!", "SQUAWK! Pieces of eight! I said that to me!"],
  "pirate:fish":        ["Walk the plank? I LIVE down there.", "Blub! ARRR! Blub!"],
  "pirate:cat":         ["Purr-ate of the seven seas!", "The ship's mine now. So is the sunny spot."],
  "pirate:dog":         ["ARF! I mean... ARRRR!", "I buried the treasure. I forgot where. Sorry."],
  "pirate:lizard":      ["Blep. ARRR. Blep.", "I sunbathe on the poop deck. It's the name, not the deck."],
  "luchador:pig":       ["EL PORKO! The people's champion!", "Oink! I mean... ¡AY CARAMBA!"],
  "luchador:bear":      ["I don't even need the mask, honestly.", "RAWR! ...too much?"],
  "luchador:cat":       ["I fight nobody. I nap on the mat.", "The mask makes my whiskers itch."],
  "luchador:cow":       ["EL MOO-CHACHO!", "My finishing move is sitting on people."],
  "luchador:bunny":     ["My move is the flying hop!", "Thump thump! That's my entrance music."],
  "ninja:cat":          ["I was already a ninja. You just noticed.", "Sneaking is 90% of my day."],
  "ninja:cow":          ["Silent... deadly... MOOOOO. Dang.", "The bell gives me away every time."],
  "ninja:elephant":     ["Sneaky! ...ish.", "Nobody suspects the enormous ninja."],
  "ninja:frog":         ["I hop without a sound. Mostly.", "Ribbit — I mean, nothing. You heard nothing."],
  "ninja:dog":          ["I'm hiding! I'M HIDING! LOOK HOW HIDDEN I AM!", "Worst ninja. Waggiest ninja."],
  "banana:bear":        ["Is this an outfit or a snack?", "I keep trying to eat my own sleeve."],
  "banana:parrot":      ["SQUAWK! I'M A BANANA!", "Pretty bird! Pretty... fruit?"],
  "banana:cat":         ["I have never been so insulted.", "Take it off. TAKE IT OFF."],
  "banana:pig":         ["Oink! Fruit salad!", "I'd rather be a sausage roll."],
  "banana:elephant":    ["The biggest banana in the world.", "TOOOOT! Bananas are my favourite!"],
  "detective:dog":      ["I sniff out ALL the clues!", "The nose knows. The nose ALWAYS knows."],
  "detective:cat":      ["The butler did it. Now feed me.", "I solved it hours ago. I was napping."],
  "detective:parrot":   ["SQUAWK! I have a witness statement!", "I repeat everything I hear. Very useful."],
  "detective:pig":      ["I followed my snout to the truffles.", "Case closed. Also, lunch."],
  "scuba:fish":         ["But... I already breathe water?!", "Blub! Now I'm a fish in a fish suit."],
  "scuba:cat":          ["Water. WATER. Get it OFF.", "I refuse. Absolutely not. No."],
  "scuba:elephant":     ["I brought my own snorkel, thanks.", "Pawoo! Underwater trumpet!"],
  "scuba:frog":         ["Finally, a job I'm qualified for!", "Ribbit! Swimming is my whole thing!"],
  "scuba:dog":          ["I do the doggy paddle. Obviously.", "WOOF! ...blub blub blub."],
  "farmer:cow":         ["Wait — am I the farmer or the cow?", "I'm milking myself. This is confusing."],
  "farmer:pig":         ["This is MY farm now. New rules: more mud.", "Oink! Breakfast is at all times!"],
  "farmer:horse":       ["I usually PULL the tractor.", "Neigh! Promotion!"],
  "farmer:dog":         ["Sheepdog! Best job on the farm!", "I herded the chickens. They're cross."],
  "farmer:parrot":      ["Old MacDonald had a SQUAWK!", "E-I-E-I-SQUAWK!"],
  "racer:horse":        ["I'm already fast. This is showing off.", "Neiiigh-scar champion!"],
  "racer:frog":         ["Ribbit! VROOM! Ribbit! VROOM!", "I hop the last lap. It's quicker."],
  "racer:lizard":       ["I do zero to blep in one second.", "Fast car, slow lizard."],
  "racer:cat":          ["I already race around the house at 3am.", "Zoomies: now with a trophy."],
  "racer:elephant":     ["Finding a car my size was the hard part.", "TOOT TOOT! That's the horn AND me."]
};
