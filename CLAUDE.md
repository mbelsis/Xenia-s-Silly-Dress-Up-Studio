# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Xenia's Silly Dress-Up Studio — a drag-and-drop dress-up game for kids aged
9–11.
Players drag hats, clothes, shoes, jewelry, and makeup from a cabinet onto a
character (kid, cat, or dog). See `DESIGN.md` for the full game design,
wardrobe/character rosters, and roadmap. Planned deployment target is
iPhone/iPad via a Capacitor wrap of this web app.

## Running

No build step, no dependencies. Serve the folder and open it:

```bash
python3 -m http.server 8321   # then open http://localhost:8321
```

(Opening `index.html` directly via `file://` also works in a normal browser.)

Syntax check after editing JS: `node --check js/<file>.js`

## Architecture

Plain HTML/CSS/vanilla JS, loaded as classic scripts (no modules) in this
order: `js/backgrounds.js` → `js/characters.js` → `js/wardrobe.js` →
`js/uniforms.js` → `js/photo.js` → `js/music.js` → `js/main.js`. The data files
define the globals `BACKGROUNDS`, `CHARACTERS`, `ITEMS`, `CATEGORIES`,
`UNIFORMS`, and `UNIFORM_COMBOS` that `main.js` consumes; `photo.js` defines
the `PhotoStudio` module.

The core idea that makes one wardrobe fit every character:

- **Characters** (`js/characters.js`) are inline SVGs in a `320x520` viewBox,
  each defining `anchors` — per-slot `{x, y, scale}` coordinates for `hats`,
  `makeup`, `jewelry`, `clothes`, `shoes`.
- **Items** (`js/wardrobe.js`) are SVG fragments drawn centered on `(0,0)` in
  roughly a `140x140` box. Equipping an item wraps it in
  `<g transform="translate(anchor) scale(anchor.scale)">`, so the same duck hat
  fits both the kid's and the cat's head. New items/characters must follow
  these conventions or they will render misplaced. On top of the per-character
  anchor scale, `SLOT_SCALE` in `main.js` applies a per-category multiplier
  (clothes 1.55×, shoes 1.35×, …) so items are sized to actually cover the
  body — tune fit there, not by redrawing items.
- **Backgrounds** (`js/backgrounds.js`) are full-viewBox SVG scenes drawn as
  the first group inside the stage SVG, so they appear behind the character
  and are automatically included in photo exports.
- **Hair and Beards** are colorable categories: their SVGs use the literal
  token `HAIRC` as fill/stroke color; `itemArt()` in `main.js` swaps it for
  `state.itemColors[category]` at render time (or `url(#rainbowHair)`, a
  gradient defined in a hidden SVG in `index.html`). Each colorable drawer has
  its own color; the swatch row shows for any tab present in
  `state.itemColors`. Hair draws under hats; beards draw over makeup.
- **Bottoms, Beards, Glasses, and Held slots have no per-character anchors** —
  `slotAnchor()` in `main.js` derives them from the clothes/makeup anchors, so
  new characters only need the original six anchors. Bottoms draw under tops
  so a tuxedo top and shorts can be worn together; held items draw last (in
  front of everything) at the character's right hand. `slotAnchor()` may also
  return a `scaleY` (rendered as `scale(sx sy)`): bottoms use it to squash
  vertically on animals, whose legs are too short for a full-height trouser —
  without it the hem swallows the shoes entirely. It never stretches, so
  humans render unchanged.
- **Uniforms** (`js/uniforms.js`): a complete outfit — hat, top, bottoms,
  shoes and props — applied in one drop. A uniform is only a slot → item id
  map, so everything downstream (draw order, tapping a piece to remove it,
  photos, saved looks) works unchanged; applying one clears every other slot
  except hair and beards. Pieces that exist only inside a uniform are ordinary
  items marked `hidden: true` and pushed onto `ITEMS` — `renderGrid()` and
  Surprise Me filter them out, so they never clutter the drawers. The cabinet
  card composes the real part art into a head-to-toe stack (`uniformArt()`),
  so a card can never disagree with what you get. `activeUniform()` derives
  which uniform is on from the worn slots rather than storing it, so removing
  one piece correctly drops the "wearing it" ring. Uniform cards accept a tap
  as well as a drag — six garments is a lot to drag. `UNIFORM_COMBOS` in
  uniforms.js is keyed `"uniformId:characterId"` for animal-specific jokes
  (the cow police officer, the pig chef, the bunny magician).
- **Fur colors**: animals declare `fur: "<default main color>"` — no token
  needed; `charArt()` string-replaces every occurrence of that literal with
  the selected color (`state.furColors`). Accent colors are untouched. The
  skin/fur picker row shows 🖐️ skin tones for `skin` characters and 🐾 fur
  colors for `fur` characters.
- **Skin tones & eye colors**: human characters declare `skin: "<default>"`
  and use the `SKINC` token for skin fills; every character's pupils use the
  `EYEC` token (default `#33261d`, overridable via `eyes:` on the character).
  `charArt()` swaps both tokens per character (`state.skinTones` /
  `state.eyeColors`). The skin picker only shows for characters with `skin`;
  the eye picker shows for everyone.
- **Eye & mouth shapes**: `charArt()` rewrites the `EYEC` pupil circles into
  the selected eye shape (regex on cx/cy/r, so per-character eye geometry is
  preserved). Humans have a literal `MOUTHC` placeholder inside a positioned
  `<g>`; it's replaced with the selected `MOUTH_SHAPES` entry. The mouth
  picker only shows when the character's svg contains `MOUTHC`.
- **Earrings** are jewelry items whose art is pre-offset to the ears
  (`translate(±52 -60)` relative to the neck anchor); watches/bracelets are
  pre-offset to the wrists (`translate(±54 104)`). Items whose art lies
  outside the default cabinet preview box can set `preview: "x y w h"` to
  override the thumbnail/ghost viewBox.
- **Worn items replace painted-on basics**: base trousers, shirt, and shoes
  are wrapped in `<g class="pants">`, `<g class="baseshirt">`, and
  `<g class="baseshoes">` respectively, and stripped from the SVG string when
  the matching slot is worn (string removal, not CSS, so photo exports match
  the stage). New characters must follow this wrapping convention.
- **Tops must be short-sleeved**: item sleeve paths end around chest height so
  the character's own (skin-toned) arms stay visible — don't draw full-length
  sleeves on clothes items.
- **State** (`js/main.js`) is a single object: `characterId`, active cabinet
  `tab`, `worn` (one item id or null per slot), and `names` (custom character
  names — the only persisted state, stored in localStorage under
  `dressup-names`; falls back to the default name in `CHARACTERS`). Rendering is a pure
  function of state — `renderCharacter()` rebuilds the stage SVG from base
  character + worn items in a fixed draw order (shoes → clothes → jewelry →
  makeup → hats). The outfit intentionally persists across character switches.
- **Drag & drop** uses Pointer Events with `setPointerCapture` on the item
  grid (one code path for mouse and touch — required for the iPad target).
  A drop anywhere on the stage equips the item into its category's slot.
- Sounds are synthesized with the Web Audio API; the only asset files are the
  app icons — all art is inline SVG strings.
- **Music** (`js/music.js`): `Jukebox` owns the single shared `AudioContext`
  (`Jukebox.context()` — `playSound()` in main.js uses it too, since Safari
  caps the number of contexts). The tune is scheduled ahead with a 25 ms
  lookahead timer; no audio files. Preference persists under `dressup-music`.
- **Installable app**: `manifest.webmanifest` + `sw.js` + `icons/`. The service
  worker is network-first with a 2.5 s timeout and cache fallback, so updates
  appear immediately when online and the game still opens offline. Bump
  `CACHE` in sw.js when the file list changes. See INSTALL.md.
- **Combo quips**: `COMBO_QUIPS` in `main.js` is keyed `"itemId:characterId"`
  and takes priority over per-item and generic quips — used for
  animal-specific jokes (cat + fish bowl, dog + bone collar, …).
- **Head swap**: each character declares `headY` (bottom of the head) and
  `neckY` (top of the torso). The host is clipped below `neckY`, the donor
  above its own `neckY`, and the donor is shifted so the two `headY` lines
  meet. Note the animals are drawn with heads floating above their bodies —
  that gap is the existing art style, not a swap artifact.
- **Weather** particles are SVG elements animated by CSS classes
  (`.wx-drop` etc.). Because an exported SVG carries no stylesheet, the photo
  export bakes each particle's computed transform *and* paint properties onto
  the clone — do the same for any new CSS-styled stage element.
- **Photo booth**: the Photo button clones the stage SVG (background scene
  included), injects the shared defs from `#shared-defs` (so gradient hair
  renders), draws the typed speech bubble on the canvas, rasterizes via
  blob-URL → Image → canvas, and downloads a file
  named after the character — JPG when a scene is selected, transparent PNG
  when the background is "none".

- **Photo characters** (`js/photo.js`): `PhotoStudio` reads a picture with
  FileReader, frames it on a canvas, applies the illustration filter
  (bilateral smoothing → luminance-only banding → soft Sobel edge inking,
  scaled by a 0–1 strength slider), exports a 256px square JPEG data
  URL, and registers a runtime entry in `CHARACTERS` whose svg holds a
  `PHOTOSRC` placeholder plus the standard body/anchors. `charArt()` swaps
  `PHOTOSRC` **last**, after the SKINC/EYEC/MOUTHC passes — base64 can contain
  those token letters. Entries persist in localStorage under `dressup-photos`.
  Characters with `.photo` hide the eye-colour/eye-shape pickers (the face is
  in the picture). Nothing is ever uploaded — keep it that way.

## Constraints

- Keep it dependency-free and buildless unless a change genuinely requires
  tooling (the Capacitor iOS wrap comes later, per DESIGN.md roadmap).
- Kids product: no external links, no data collection, no ads; interactions
  need big touch targets and immediate visual/audio feedback.
