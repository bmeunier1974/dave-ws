---
name: Dave & co
description: Warm taupe showroom world for a South Shore construction and renovation contractor.
colors:
  espresso: "#2f221d"
  espresso-deep: "#1f1613"
  bark: "#5b463c"
  taupe: "#8a6c5d"
  taupe-light: "#b39686"
  sand: "#ece4dc"
  sand-deep: "#ddd1c5"
  mist: "#f6f2ee"
  white: "#fffdfb"
  ink-soft: "#62514a"
  on-dark-soft: "#d9cbc0"
  line: "rgb(47 34 29 / 0.16)"
  line-on-dark: "rgb(255 253 251 / 0.2)"
typography:
  display:
    fontFamily: "Libre Caslon Display, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(3.4rem, 7.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Libre Caslon Display, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(2.6rem, 5.6vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 1.05
  title:
    fontFamily: "Libre Caslon Display, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(1.75rem, 3vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.05
  quote:
    fontFamily: "Libre Caslon Display, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(1.35rem, 2vw, 1.7rem)"
    fontWeight: 400
    lineHeight: 1.3
  card-title:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.2vw, 1.85rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
  label-small:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.06em"
rounded:
  pill: "999px"
  l: "28px"
  m: "20px"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  max: "82rem"
  section: "clamp(5rem, 11vw, 9rem)"
  section-compact: "clamp(3.5rem, 7vw, 5rem)"
  head-gap: "clamp(2.5rem, 5vw, 4rem)"
  split-gap: "clamp(2.5rem, 6vw, 6rem)"
  mosaic-gap: "clamp(0.75rem, 1.4vw, 1.25rem)"
components:
  button-primary:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.9rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.bark}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.espresso}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.9rem"
    height: "3.25rem"
  button-light-hover:
    backgroundColor: "{colors.sand}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.9rem"
    height: "3.25rem"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.espresso}"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "2.25rem"
  chip-selected:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.white}"
  caption-pill:
    backgroundColor: "{colors.white}"
    textColor: "{colors.espresso}"
    typography: "{typography.label-small}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.9rem"
  room-card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.l}"
    padding: "1.6rem 1.6rem 1.25rem"
    width: "27rem"
  wall-card:
    backgroundColor: "{colors.taupe}"
    textColor: "{colors.white}"
    rounded: "{rounded.l}"
    padding: "1.75rem 1.5rem"
  contact-card:
    backgroundColor: "{colors.bark}"
    textColor: "{colors.white}"
    rounded: "{rounded.l}"
    padding: "clamp(1.75rem, 3vw, 2.5rem)"
---

# Design System: Dave & co

## Overview

**Creative North Star: "The Showroom Plate"**

A home-builder showroom page, pinned to the owner's reference image: a warm finished room fills the screen, a giant uppercase serif names the place, and one white card floats over the photo. The photo is the plate; every fact (licence, services, proofs, contact) sits on an even, quiet pad of sand, mist, taupe or espresso below it. Nothing is cool, nothing is loud.

Density is low and the rhythm is long: big section bands, hairline-ruled lists, photos with soft corners. Information is plain sans; atmosphere is a high-contrast display serif. The site is bilingual with French primary, and both pages share one stylesheet and identical markup structure.

**Key Characteristics:**
- Full-bleed warm interior photo under a sand veil, with a single floating white card.
- Uppercase Libre Caslon Display headings; Albert Sans for every fact.
- Pill actions and chips in espresso; 28px containers; 20px photo corners.
- Sections alternate solid colour fields: sand, mist, taupe, sand, espresso, espresso-deep.
- Hairline rules (16% espresso, or 20% white on dark) structure lists instead of boxes.
- An authored, labelled wall cross-section as the one illustration.

## Colors

One warm brown family from near-black espresso to off-white; no second hue.

### Primary
- **Espresso** (`espresso`): body text, filled pill buttons, selected chips, selection highlight, the contact band, `theme-color`. The voice of action.
- **Bark** (`bark`): hover state of espresso buttons; fill of the contact card inside the espresso band.

### Secondary
- **Taupe** (`taupe`): the "behind the wall" card in the hero foot and the full "Pourquoi" band; the opening guillemet on quotes; scrollbar thumb. White text on it is the only pairing.
- **Taupe Light** (`taupe-light`): bullet dots in the contact list, on dark.

### Neutral
- **Sand** (`sand`): page ground; hero veil colour; light-button hover.
- **Sand Deep** (`sand-deep`): placeholder fill behind photos while they load.
- **Mist** (`mist`): the work mosaic band, a half-step lighter than sand.
- **Warm White** (`white`): floating card, caption pills, text on taupe and espresso. Never pure #fff.
- **Ink Soft** (`ink-soft`): secondary text on light grounds (ledes, descriptions, citations).
- **On-Dark Soft** (`on-dark-soft`): secondary text and labels on espresso and espresso-deep.
- **Espresso Deep** (`espresso-deep`): privacy band and footer; the dusk at the foot of the hero.
- **Line / Line on Dark**: every hairline divider.

### Named Rules
**The Warm Only Rule.** Every colour sits in the 40-70 degree brown hue band. A cool grey, blue or red anywhere breaks the world.

**The Espresso Action Rule.** Filled actions are espresso pills on light grounds and warm-white pills on dark grounds. No other colour carries a call to action.

## Typography

**Display Font:** Libre Caslon Display, 400 only, self-hosted (fallback Didot, Bodoni 72, Georgia)
**Body Font:** Albert Sans variable, self-hosted, used at 400 / 500 / 600 (fallback Helvetica Neue, Arial)

**Character:** A razor-thin high-contrast serif for the showroom voice, a round geometric sans for the plain facts.

### Hierarchy
- **Display** (hero h1): uppercase, three short stacked lines, centred in the left hero column.
- **Headline** (section h2): uppercase. One larger place-name use exists (territory, up to 9.5rem, line-height 0.85) as the page's second giant word.
- **Title** (service names): sentence case, inside the ruled service list.
- **Quote**: display serif in sentence case for testimonials.
- **Card Title**: sans 500 for headings inside cards (room card, wall card). Cards speak in the fact voice.
- **Body / Body Small**: 1.0625rem running text; 0.9375rem for descriptions and captions. Measures held at 30-44ch; privacy text 70ch.
- **Label**: uppercase 600 tracked caps for buttons and caps links; Label Small for caption pills, contact field names and the licence label.

### Named Rules
**The Two Voices Rule.** Caslon is for headings and quotes only, always weight 400. Numbers, the licence, card titles, labels and every fact are Albert Sans (the licence number uses tabular figures).

**The Slash Tagline Rule.** A short tagline under a display title is framed by slashes ("/ Construction et rénovation /"), drawn by CSS, never typed into the text.

## Layout

Centred wrap of `max` width with a fluid `gutter`. Sections are full-width colour bands with `section` vertical padding (privacy uses `section-compact`). Section heads are a two-column grid: headline left, a short ink-soft line pushed right and bottom-aligned. Two-part sections (why us, territory, contact) use asymmetric splits around 0.9/1.1 with `split-gap`.

The hero fills at least the viewport (min 46rem): nav row (logo, centred links, EN + phone), a two-column body (title / room card), and a three-column foot (taupe wall card bleeding off the left edge and the hero bottom, licence centre, uppercase promise right).

The work mosaic is a 12-column grid: one 7x2 lead tile, then 5- and 4-span tiles. Services are a ruled three-column list (name, description, thumbnail).

Responsive: at 960px every split stacks, the nav links drop to a second row, the room card centres below the title, and the hero foot gets its own dusk gradient pad with the wall card spanning full width. At 560px the phone number gives way to an espresso "Appeler" call pill in the nav, the hero foot is one column, and mosaic tiles go full width.

## Elevation & Depth

Flat colour fields by default; depth comes from the photo and the band changes. Exactly one object is lifted.

### Shadow Vocabulary
- **Floating card** (`box-shadow: 0 30px 60px -24px rgb(31 22 19 / 0.45), 0 2px 6px rgb(31 22 19 / 0.08)`): the room card over the hero photo only.

### Named Rules
**The One Floating Object Rule.** Only the card that hovers over the hero photo casts a shadow. Cards on solid bands (wall card, contact card) are flat.

**The Veil Rule.** Type over a photo sits on a sand veil (gradient from sand toward transparent) where the type is, and white type sits on an espresso-deep dusk at the foot. Keep veils soft enough that the room still reads.

## Shapes

Three radii and nothing between them: full pills for anything you press or that labels a photo, 28px for containers, 20px for photo frames. A card anchored to an edge rounds only its free corner (the wall card: top-right only). Service thumbnails start softer and round further on row hover. Lists are open and ruled with hairlines, never boxed.

## Components

### Buttons
- **Shape:** full pill (`rounded.pill`), 3.25rem tall; the mobile nav call pill is 2.5rem.
- **Primary:** espresso fill, warm white Label text, 1px border matching the fill.
- **Hover / Focus:** fill shifts to bark over 0.3s on the `ease-out` curve; active presses down 1px; focus is a 2px currentColor outline offset 3px.
- **Light:** warm white fill with espresso text, used on espresso; hover goes sand.
- **Ghost:** transparent with a 20% white hairline, used beside Light on dark; hover brightens the border to white.
- **Caps link:** Label type underlined; the underline thickens to 2px on hover.

### Chips
- **Style:** transparent pill with a hairline border, 0.8125rem / 500 sans.
- **State:** hover darkens the border to espresso; selected is an espresso fill with white text. Backed by native radios, so keyboard selection and a 2px espresso focus ring come for free.

### Cards / Containers
- **Corner Style:** 28px (`rounded.l`).
- **Background:** warm white at 94% over the photo (room card); taupe (wall card); bark inside espresso (contact card).
- **Shadow Strategy:** room card only, see Elevation & Depth.
- **Internal Padding:** about 1.6-2.5rem.

### Navigation
Sits on the hero photo with no bar. Uppercase tracked brand with a two-block house mark; plain links that underline on hover; a hairline-separated "EN" link; the phone as a caps link (call pill on small screens).

### Room Card (signature)
Floating white card: room chips, a sans card title, a short ink-soft line and a 3:2 photo frame. Choosing a chip wipes the new photo in from left to right with a clip-path over 0.9s while the image settles from 1.06 to 1 scale; the outgoing photo is held until the wipe ends. Reduced motion makes the swap instant. Each photo carries a caption pill.

### Wall Cross-Section (signature)
Flat, labelled section through an exterior wall: six vertical layers (gypsum, vapour barrier, insulation, sheathing, membrane, brick) in muted plaster, insulation pink, wood and brick tones, with white leader lines, dots and sans labels on taupe. The same drawing appears small in the hero wall card and nudges up with a slight tilt on hover. These illustration tones live only in the drawing.

### Proof List
Ruled list on taupe: a 1.5px-stroke line icon (drawn per proof, round caps) in a 2.25rem column, then the fact.

### Work Mosaic
Mixed-size photo tiles with 20px corners on mist, each with a caption pill naming the room type; the photo scales to 1.04 on hover over 1.2s.

## Do's and Don'ts

### Do:
- **Do** keep every colour inside the espresso-to-sand family and use the tokens as named.
- **Do** set headings in uppercase Libre Caslon Display 400 and every fact, number and card title in Albert Sans.
- **Do** make actions espresso pills (warm white on dark), with bark on hover.
- **Do** separate list items with hairlines (`line`, or `line-on-dark` on dark bands) rather than boxes.
- **Do** put type over photos only on a sand veil or an espresso-deep dusk.
- **Do** use the `ease-out` curve (cubic-bezier(0.16, 1, 0.3, 1)) for every transition and drop motion under reduced-motion.
- **Do** show the licence as plain text, "Licence RBQ" label plus the number in tabular figures.

### Don't:
- **Don't** add a second shadowed card; only the hero's floating card is lifted.
- **Don't** use bold or italic Caslon, or Caslon for small text.
- **Don't** use an RBQ logo or a Quebec flag.
- **Don't** introduce the contractor defaults the world was chosen against: a blue hard-hat header, stock icon cards, a red "free quote" banner.
- **Don't** use pure white (#fff) or neutral grey; use the warm white and soft ink tokens.
