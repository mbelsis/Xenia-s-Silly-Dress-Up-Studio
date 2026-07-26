# Silly Dress-Up Studio — Game Design Document

## 1. Overview

| | |
|---|---|
| **Working title** | Silly Dress-Up Studio |
| **Genre** | Casual dress-up / creativity sandbox |
| **Audience** | Kids aged 9–11 (playable by younger kids too) |
| **Tone** | Funny, silly, colorful — the joy comes from ridiculous combinations |
| **Platforms** | Web browser first (mouse + touch), then iPhone/iPad via Capacitor |
| **Session length** | 2–10 minutes, no fail states, no timers, no score pressure |

## 2. Core Concept

The player picks a character (a kid, a cat, a dog — more later) and dresses them
up by dragging items out of a big wardrobe cabinet onto the character. The
cabinet has tabbed drawers: **Hats, Clothes, Shoes, Jewelry, Makeup**.

The fun is in the mismatch: a cat in clown shoes and a wizard hat, a kid wearing
a banana-peel hat and a macaroni necklace. The game rewards silliness with
reactions — the character bounces, giggles via a speech bubble, and silly
sound effects play.

## 3. Gameplay

### 3.1 Core loop
1. Pick a character from the character shelf.
2. Open a drawer (tab) in the cabinet: Hats / Clothes / Shoes / Jewelry / Makeup.
3. **Drag** an item with the mouse (or finger on iPad) and **drop** it onto the character.
4. The item snaps to the right spot (hat → head, shoes → feet, etc.).
5. Character reacts with a bounce, a funny comment, and a sound.
6. Click a worn item to take it off. Mix, match, laugh, repeat.

### 3.2 Controls
- **Drag & drop** — primary interaction, works with mouse and touch (pointer events).
- **Click/tap a worn item** — removes it.
- **Surprise Me! button** — dresses the character in a random (usually ridiculous) full outfit.
- **Skin tone picker** — for human characters, a swatch row under the
  character: six realistic tones plus alien green and frosty blue. Each
  character remembers their own tone.
- **Eye color picker** — for every character: 7 colors, per-character.
- **Eye & mouth shape pickers** — eye shapes for everyone (round, happy,
  wide, sleepy, star, heart); mouth shapes for humans (smile, laugh,
  surprised, tongue out, frown).
- **Photo options** — next to the Photo button: pick the name-text color and
  toggle the ⭐ stars on/off.
- **Worn items replace painted-on basics** — tops hide the base shirt, bottoms
  hide the base trousers (revealing bare legs), shoes hide the base
  shoes/paws. No double-clothing anywhere.
- **Background picker** — a row of buttons under the character: no background,
  Party, Beach, Space, Meadow, Playground Park, Kitchen, Poster Wall, Under
  the Sea, Theater Stage.
- **Fur color picker** — animals get a 🐾 swatch row (in place of the human
  skin-tone row): brown, dark brown, black, gray, white, orange, golden, plus
  pink and blue. Accent colors (ears, spots, stripes) stay, so a recolored
  animal still reads as itself. The scene shows live behind the
  character and is included in saved photos.
- **Photo! button** — saves the dressed-up character (with a starry name
  plate). With a scene it saves a JPG; with no background it saves a
  transparent PNG.
- **Reset button** — undresses the character back to basics.
- **💃 Dance button** — the character boogies in time with the music (one cycle
  = two beats at the Jukebox tempo). Starts the music if it was off.
- **💬 Say... button** — type what the character says. The typed line stays in
  the speech bubble instead of fading, suppresses the automatic quips, and is
  drawn into saved photos as a proper speech bubble.
- **🔀 Head Swap** — puts another character's head on this body: the host is
  kept from the torso down, the donor from the torso up, and the two chins are
  lined up (`headY`/`neckY` per character). Press again for a new head, ↩️ to
  give it back.
- **🌦️ Weather picker** — rain (with puddles if rain boots are on), snow,
  rising bubbles, or confetti drifting over the scene. Animated with CSS and
  baked into photos at the moment the picture is taken.
- **Tickle** — tapping the character anywhere that isn't clothing makes them
  wiggle, giggle and squeal ("Stop it! ...do it again!"). Tapping a worn item
  still takes it off.
- **😄 Giggle-o-meter** — a bar under the stage that fills the sillier the look
  gets. Ridiculous items (banana hat, clown shoes, rubber chicken) score far
  more than sensible ones, with bonuses for rainbow hair, a swapped head, alien
  skin, star or heart eyes, a stuck-out tongue, dancing, confetti, a typed
  line, and tickling. Fill it to 100% and the whole stage erupts in confetti
  with a fanfare and a "MAXIMUM SILLY!!!" — the face on the meter goes
  😐 → 🙂 → 😄 → 😆 → 🤣 on the way up.
- **💾 Save Look** — keeps the whole picture (character, every worn item,
  colours, background, weather, swapped head and typed line) as a little
  thumbnail card under the stage. Tap a card to wear that look again, ✕ to
  throw it out. Up to 12, stored in localStorage — the first thing in the game
  that survives closing the browser.
- **Seasonal drawer** — an extra cabinet drawer that appears on its own at the
  right time of year and disappears afterwards: 🌞 Summer (Jun–Sep), 🎃
  Halloween (mid Oct–Nov 2), 🎄 Holidays (Dec–Jan 6), 🐣 Spring (mid Mar–Apr).
  Seasonal items declare a `slot`, so a Santa hat still lands on the head.
- **Item voices** — each item makes its own noise when it goes on: clown shoes
  squeak, the clown nose honks, the propeller whirrs, rocket boots roar, the
  duck quacks, the boombox plays a riff, the carrot crunches. Tickling an
  animal gets that animal's own sound — a moo, a ribbit, an oink, a SQUAWK.
- **🎵 Music button** — toggles the background music (on by default, choice
  remembered). The tune is generated live: a C–G–Am–F progression with a
  melody that random-walks a pentatonic scale, so it stays in tune and never
  repeats exactly. It starts on the first tap (browser rule) and hushes when
  the game is in the background.

### 3.3 Slots (where items snap)
| Cabinet drawer | Snaps to |
|---|---|
| Hats | Head |
| Hair | Crown of head (renders under the hat) |
| Beards | Chin (renders over makeup) |
| Tops | Body/torso |
| Bottoms | Hips (renders under the top, so both show) |
| Shoes | Feet |
| Jewelry | Neck |
| Makeup | Face |
| Glasses | Eyes (over makeup and beards) |
| Hold It | Hand/paw (drawn in front of everything) |

The Hair drawer also shows a **color palette** — 4 normal-ish colors plus
silly ones (pink, purple, blue, green, and rainbow). Picking a color recolors
the wig instantly, wherever it's worn.

One item per slot; dropping a new hat replaces the old hat.

### 3.4 What makes it funny
- **Silly items**: propeller beanie, rubber-duck hat, banana-peel hat, clown nose,
  macaroni necklace, rocket boots, dinosaur onesie, giant clown shoes.
- **Reactions**: every equip triggers a character bounce animation + a randomized
  speech-bubble quip ("The duck approves!", "Is that... spaghetti?!").
- **Cross-species comedy**: the same wardrobe works on people AND animals —
  a cat in a tutu is inherently funny to a 10-year-old.
- **Sound**: short cartoon "boing"/"pop" synthesized sounds on drop.

## 4. Characters (initial roster)

| Character | Description |
|---|---|
| **Zoe** | A cheerful kid with a big smile — the "normal" baseline that makes silly outfits pop |
| **Leo** | A freckled boy with spiky hair, striped tee and sneakers |
| **Mia** | A girl with bouncy pigtails, bows, and a heart dress |
| **Tom** | A clean-shaven man in a polo — the beardless counterpart to Max |
| **Sofia** | A woman with long brown hair, lashes, and an orange wrap dress |
| **Granny Rose** | A grandma with a gray bun, pink glasses, shawl, and a long skirt |
| **Max** | A bearded lumberjack dad — extra funny in a tutu and rainbow pigtails |
| **Grandpa Joe** | Bald, glasses, fluffy white beard and a cardigan — dignity ready to be ruined |
| **Sir Fluffington** | A round, unimpressed orange cat — deadpan reactions to ridiculous outfits |
| **Mochi** | A happy gray cat with big green eyes |
| **Biscuit** | A goofy dog with a floppy tongue — enthusiastically loves everything |
| **Spot** | A dalmatian with an eye patch |
| **Marshmallow** | A buck-toothed bunny with long ears |
| **Waffles** | A big cuddly brown bear |
| **Peanut** | An elephant with giant ears and a wrinkly trunk |
| **Ziggy** | A grinning lizard with bulgy eyes and a curly tail |
| **Bubbles** | A fish who stands on its tail fin — shoes on a fish are peak comedy |
| **Mango** | A parrot with rainbow tail feathers |
| **Pip** | A toddler with a big head, one curl and a onesie |
| **Nia** | A girl with a huge curly afro |
| **Ravi** | A teen with an undercut and a topknot |
| **Elena** | A woman with a neat bun and glasses |
| **Moolissa** | A cow with patches and little horns |
| **Biscuit Jr.** | A horse with a flowing mane |
| **Truffle** | A pig with a curly tail and a snout |
| **Hopscotch** | A frog with bulging eyes and webbed feet |

**📷 Add Your Own** — the shelf has a button to build a character from a
photo: pick a picture, drag/zoom to frame the face, slide **Photo ↔ Drawing**
to choose how illustrated it looks, name it, and it joins the shelf with a
full body that wears every wardrobe item. The filter smooths with an
edge-preserving (bilateral) pass, bands only brightness so hues and skin tone
survive, and fades outlines in softly — a face still looks like that face. Photo characters persist in
localStorage and can be removed with the ✕ on their thumbnail.

**Privacy:** the picture is read locally with FileReader, processed on a
canvas, and stored only in this browser. It is never uploaded anywhere — which
also keeps the App Store kids-category review simple.

All characters can be renamed (click the name tag under the character); custom
names persist in localStorage. Future roster ideas: a penguin, a llama, a
grandma, a robot.

## 5. Wardrobe (initial items)

- **Hats**: Propeller Beanie, Wizard Hat, Pirate Hat, Rubber Duck, Banana Peel,
  Fish Bowl, Carrot Top, Honey Pot, Royal Crown, Party Hat, Chef Hat, Sombrero,
  Baseball Cap, Sport Visor, Bucket Hat, Floppy Sun Hat, Clown Hair, Space
  Helmet, Pilot Cap, Police Cap, Fire Helmet
- **Hair**: Spiky Punk, Mega Afro, Princess Waves, Mighty Mohawk, Bouncy
  Pigtails, Swoosh Quiff, Short Bob, Long & Straight, Super-Long Locks, Curly
  Cascade, Mega Curls — each in 9 colors including rainbow
- **Glasses**: Smart Specs, Cool Shades, Heart Glasses, Star Glasses,
  Lightning Glasses
- **Hold It** (hand-held items): Boombox, Game Tablet, Happy Flag, Triple Ice
  Cream, Magic Wand, Rubber Chicken, Giant Lollipop
- **Beards**: Full Beard, Goatee, Wizard Beard — colorable like hair, with
  their own color choice (green wizard beard on the cat: yes)
- **Tops**: Fancy Tuxedo, Soccer Jersey, Leather Jacket, Astronaut Suit,
  Knight Armor, Princess Gown, Summer Sundress, Fairy Dress (with wings!),
  Pop-Star Sparkle, Blue / Red / White / Pink / Gray T-Shirts, Flamingo Party
  Shirt, Cozy Hoodie, Denim Jacket, Sailor Stripes, Polka-Dot Blouse, Flower
  Blouse, Reindeer Sweater, Superhero Suit, Ballet Tutu, Dino Onesie, Hawaiian
  Shirt, Royal Robe
- **Stamps** (chest logos drawn over the top): Gold Star, Big Heart,
  Lightning Bolt, Smiley, Soccer Ball, Electric Guitar, Rockin' Drum, Music
  Notes, ROCK! Stamp, Robot Buddy, Pizza Slice, Tiny Dino, Cupcake, Peace
  Sign, Cat Face, Flying Saucer, Little Crown, Mini Rainbow
- **Bottoms** (worn together with a top!): Beach Shorts, Basketball Shorts,
  Running Shorts, Soccer Shorts, Blue Jeans, Ripped Jeans, Jean Shorts, Smart
  Trousers, Tracksuit Pants, Pajama Pants, Fancy Pants, Grass Skirt, Denim
  Skirt, Plaid Skirt, Polka-Dot Skirt, Rainbow Leggings, Mermaid Tail —
  tuxedo top + beach shorts is the intended look
- **Shoes**: Giant Clown Shoes, Rocket Boots, Bunny Slippers, Swim Flippers,
  Strappy Sandals, Comfy Crocs, Cool Sneakers, Pink Sneakers, Ruby Heels,
  Cowboy Boots, Snow Boots, Ballet Flats, Rain Boots (yellow / pink / blue)
- **Jewelry**: Pearl Necklace, Gold Medal, Fancy Bow Tie, Macaroni Necklace,
  Star Pendant, Gold Studs, Silver Hoops, Long Chandeliers, Cherry Danglers
  (earrings snap to the ears), Charm Bracelet, Gold Watch, Sport Watch (worn
  on the wrist), Bone Collar, Fish Skeleton, Peanut Garland
- **Makeup**: Rosy Cheeks, Clown Nose, Star Face Paint, Curly Mustache,
  Snorkel Mask, Kitty Whiskers, Lipstick, Freckles, Sparkle Glitter, Blue Eye
  Shadow, Game-Day Stripes, Butterfly Paint, Superhero Mask, Vampire Fangs,
  Brave Band-Aid, Mighty Unibrow, Beauty Mark
- **Hair additions**: Sleek Side Part, Straight with Bangs (long straight
  styles)

**Animal-specific reactions**: any character can wear anything, but when the
*right* animal wears a themed item there's a special quip — the cat with the
fish bowl on its head ("So close... yet so far away!"), the dog with the bone
collar ("DO NOT eat your necklace."), the bunny with the carrot hat, the bear
with the honey pot, the fish with the snorkel ("But... I already breathe
water?!"), the elephant with the peanut garland.

All art is hand-drawn inline SVG — no image files, crisp at any screen size,
tiny download, easy to recolor.

## 6. Screens & Layout

Single-screen game (no menus to get lost in):

```
+----------------------------------------------------------+
|  🎩 Silly Dress-Up Studio        [Surprise Me!] [Reset]  |
+------------+---------------------------------+-----------+
| Character  |                                 |  CABINET  |
| shelf      |          STAGE                  | [tabs:    |
| (thumbnails|   (selected character,          |  Hats     |
|  to switch |    speech bubble above)         |  Clothes  |
|  character)|                                 |  Shoes    |
|            |                                 |  Jewelry  |
|            |                                 |  Makeup]  |
|            |                                 | item grid |
+------------+---------------------------------+-----------+
```

Big touch targets (min ~64px), high-contrast bright palette, rounded friendly
shapes, playful font.

## 7. Technical Design

### 7.1 Stack
- **Plain HTML + CSS + vanilla JavaScript** — no build step, no dependencies.
  Open `index.html` in any browser to play.
- **Inline SVG** for characters and items. Each character defines **anchor
  points** (head, face, neck, torso, feet); items are drawn centered on an
  origin and get translated/scaled to the active character's anchors. This is
  what lets one wardrobe fit both a kid and a cat.
- **Pointer Events** for dragging — one code path for mouse, touch, and pencil.
- **Web Audio API** for synthesized sound effects (no audio files).

### 7.2 File structure
```
index.html        — layout: shelf, stage, cabinet, toolbar
css/style.css     — kid-friendly theme, animations (bounce, wobble)
js/characters.js  — character SVGs + per-character anchor points
js/wardrobe.js    — item catalog: SVG art, category, per-item scale
js/main.js        — state, rendering, drag & drop, reactions, sounds
```

### 7.3 State model
```js
state = {
  characterId: "cat",
  worn: { hats: "duck", clothes: null, shoes: "clown", jewelry: null, makeup: "nose" }
}
```
Rendering is a pure function of state: switching characters keeps the outfit on
(instant comedy — the dog inherits the tutu).

### 7.4 Path to iPhone/iPad
1. The game is a static web app → wrap it with **Capacitor** (`npx cap add ios`).
2. Pointer events already handle touch; layout is responsive.
3. iPad-specific pass: test drag targets at tablet size, lock landscape.
4. Ship via Xcode to TestFlight → App Store (Kids category, no ads, no
   data collection — keeps App Store kids-policy review simple).

## 8. Roadmap

- **v0.1 (this build)**: 3 characters, 22 items, drag & drop, reactions,
  Surprise Me!, Reset, sounds.
- **v0.2**: Save/load outfits (localStorage), photo-booth button that downloads
  a PNG of the outfit, more characters and items.
- **v0.3**: "Giggle Meter" — the sillier the combo, the fuller the meter, with a
  confetti burst at max. Item unlocks to add light progression.
- **v1.0 (iOS)**: Capacitor wrap, iPad layout polish, App Store submission.

## 9. Design Principles (for kids 9–11)

- No reading required to play (icons + pictures), but quips reward readers.
- No failure, no timers, no scores that make a kid feel judged.
- Every interaction gives immediate, exaggerated feedback.
- Nothing to buy, no links out, no data collected.
