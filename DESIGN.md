---
name: The Quvoh
description: A warm rustic single-page site for a private kubo stay in Arayat, Pampanga, led by real dusk photography.
colors:
  terracotta-orange: "#B54724"
  terracotta-pressed: "#963A1D"
  foliage-green: "#3E5142"
  wood-brown: "#5A3E2B"
  warm-cream: "#FAF7F2"
  bamboo-sand: "#E6D5B8"
  sand-soft: "#F2EADB"
  hairline: "#D8C7AB"
  deep-charcoal: "#23251F"
  muted-text: "#5E594E"
  error-brick: "#A3301F"
  field-white: "#FFFFFF"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Figtree, sans-serif"
    fontSize: "64px"
    fontWeight: 600
    lineHeight: "68px"
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bricolage Grotesque, Figtree, sans-serif"
    fontSize: "52px"
    fontWeight: 600
    lineHeight: "56px"
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, Figtree, sans-serif"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: "32px"
    letterSpacing: "-0.01em"
  price:
    fontFamily: "Bricolage Grotesque, Figtree, sans-serif"
    fontSize: "56px"
    fontWeight: 600
    lineHeight: "60px"
    letterSpacing: "-0.02em"
  body-large:
    fontFamily: "Figtree, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: "30px"
  body:
    fontFamily: "Figtree, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "26px"
  label:
    fontFamily: "Figtree, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "24px"
  caption:
    fontFamily: "Figtree, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "21px"
rounded:
  input: "12px"
  photo: "20px"
  panel-large: "28px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "80px"
  section-mobile: "80px"
  section-tablet: "112px"
  section-desktop: "140px"
components:
  button-primary:
    backgroundColor: "{colors.terracotta-orange}"
    textColor: "{colors.warm-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
    height: "52px"
  button-primary-pressed:
    backgroundColor: "{colors.terracotta-pressed}"
    textColor: "{colors.warm-cream}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.foliage-green}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
    height: "52px"
  rate-card-home:
    backgroundColor: "{colors.sand-soft}"
    textColor: "{colors.deep-charcoal}"
    rounded: "{rounded.photo}"
    padding: "36px"
  rate-card-away:
    backgroundColor: "{colors.foliage-green}"
    textColor: "{colors.warm-cream}"
    rounded: "{rounded.photo}"
    padding: "36px"
  input:
    backgroundColor: "{colors.field-white}"
    textColor: "{colors.deep-charcoal}"
    rounded: "{rounded.input}"
    padding: "14px 16px"
  social-link:
    backgroundColor: "{colors.sand-soft}"
    textColor: "{colors.deep-charcoal}"
    rounded: "{rounded.pill}"
    padding: "14px 24px 14px 20px"
    height: "52px"
---

# Design System: The Quvoh

## Overview

**Creative North Star: "The Lit Kubo at Dusk"**

The site opens on the courtyard after sunset, string bulbs on, pool lit, and then settles into a warm rustic reading room: Warm Cream pages, Bamboo Sand sections, and Foliage Green panels that echo the bamboo and leaves in the photographs. Terracotta Orange appears only where a guest should act.

Density is moderate: generous section rhythm, large real photographs at their true proportions, and short copy blocks. The type is a characterful grotesk for display with a humanist sans for reading, so the page feels friendly and local rather than resort-formal. Contrast comes from committed surfaces (green panels, a charcoal footer, dark photo scrims) so the palette never goes soft or all-beige.

The palette is pinned by the project owner. Rejected: a night-indigo palette; split heroes with pill chips; photos boxed small.

**Key Characteristics:**
- Warm Cream page ground with Bamboo Sand alternate sections and sand-soft cards.
- Foliage Green carries panels, the weekend rate card, icons, secondary actions, and focus rings.
- Terracotta Orange only for inquiry buttons, the active nav link, and the extra-guest fee.
- Real photographs at true aspect ratios (1:1 and 3:4), 20 px corners, text over photos on Deep Charcoal scrims.
- Deep Charcoal footer anchors the close; pill controls, 12 px white inputs.

## Colors

The six pinned colours plus a few derived tints for legibility and state.

### Primary
- **Terracotta Orange** (terracotta-orange): primary inquiry buttons, active nav link and underline, the extra-guest fee value and border. Warm Cream text on it is 5.0:1.
- **Terracotta Pressed** (terracotta-pressed): pressed primary button only.

### Secondary
- **Foliage Green** (foliage-green): secondary buttons, amenity and fact icons, availability labels, focus rings, the walkthrough panel, the weekend rate card. 8.0:1 on cream; Bamboo Sand text on it is 5.9:1.

### Tertiary
- **Wood Brown** (wood-brown): rate prices on light cards (8.1:1 on sand-soft).

### Neutral
- **Warm Cream** (warm-cream): page ground, text on green, terracotta, charcoal, and photos.
- **Bamboo Sand** (bamboo-sand): Amenities and Rates section grounds; secondary text on green and charcoal.
- **Sand Soft** (sand-soft): cards, panels, table rows, social buttons.
- **Hairline** (hairline): borders and rules on light surfaces.
- **Deep Charcoal** (deep-charcoal): body text (14.5:1 on cream, 10.7:1 on sand), footer, photo scrims, lightbox backdrop.
- **Muted Text** (muted-text): captions and secondary text (6.5:1 on cream, 4.8:1 on sand).
- **Error Brick** (error-brick): field errors (7.0:1 on white).
- **Field White** (field-white): inputs and the logo card only.

### Named Rules
**The Terracotta Means Act Rule.** Terracotta Orange marks what a guest should do or must not miss: inquiry buttons, the current section, the extra-guest fee. Never decoration.

**The No Soft Page Rule.** Every long scroll includes committed surfaces (a green panel, the charcoal footer, a photo scrim). A page of only cream and sand has failed.

## Typography

**Display Font:** Bricolage Grotesque (fallback Figtree, sans-serif)
**Body Font:** Figtree (fallback sans-serif)

**Character:** A warm, slightly quirky grotesk for headings and prices over a clear humanist sans for everything a guest must read.

### Hierarchy
- **Display** (600, 64px desktop / 54px tablet / 40px mobile): hero headline, two lines at most on desktop.
- **Headline** (600, 52px desktop / 46px tablet / 36px mobile): section headings.
- **Title** (500, 22 to 26px): rate names, the form group label.
- **Price** (600, 56px): rate amounts with the peso symbol, Wood Brown on light cards and cream on green.
- **Body Large** (400, 19px / 30px): hero and section intros, about 60ch measure.
- **Body** (400, 16px / 26px): table details and general copy.
- **Label** (600, 16px / 24px): buttons and emphasised labels. Nav links 500 at 15px.
- **Caption** (400, 14px / 21px): photo captions and notes in Muted Text.

### Named Rules
**The No Kicker Rule.** Headings stand alone. No small uppercase labels above headings.

## Layout

Single page with anchor sections: Home, About (with walkthrough), Amenities, Gallery, Rates, Location, Contact, Footer. Desktop content is 1280 px inside 1440 (80 px sides); tablet 40 px sides at 768; mobile 20 px sides at 390. Section padding is 140 px desktop, 112 px tablet, 80 px mobile, on an 8 px scale.

Surface rhythm down the page: dusk photo hero, cream About with a green walkthrough panel, sand Amenities, cream Gallery, sand Rates, cream Location, Contact over the courtyard photo with a charcoal scrim, charcoal Footer.

Desktop hero is full-bleed photography at 880 px with copy bottom-left and a ruled facts band. Tablet keeps the full-bleed hero with a menu button. Mobile uses a 470 px photo with the headline over its lower edge and both actions above the 844 px fold. Gallery is masonry by true aspect ratio (three, two, one columns). Amenities is a three-column table on desktop and tablet, stacked labelled entries on mobile. Rate cards sit side by side on desktop and tablet, stacked on mobile.

## Elevation & Depth

Flat surfaces separated by tone. The only shadow is a soft terracotta-tinted shadow under primary buttons; depth elsewhere comes from photographs and scrims.

### Shadow Vocabulary
- **Action shadow** (`box-shadow: 0 6px 18px rgba(181,71,36,0.18)`): primary button at rest; up to 0.28 opacity on hover.

### Named Rules
**The Flat Surfaces Rule.** Cards and panels never cast shadows; they separate by colour.

## Shapes

Interactive controls are full pills. Photographs and cards use 20 px corners; large panels (walkthrough, contact) use 28 px; inputs and textareas use 12 px. The logo sits on a white rounded card with a hairline. Borders are 1 to 1.5 px.

## Components

### Buttons
- **Shape:** full pill (999px), 52 px tall.
- **Primary:** Terracotta Orange with Warm Cream label, 28 px side padding.
- **Hover / Focus:** hover deepens the shadow; pressed uses Terracotta Pressed and scales to 0.97 over 140 ms ease-out; focus shows a Foliage Green ring.
- **Secondary:** transparent with a Foliage Green outline and label; over photos the outline and label are Warm Cream.
- **Ghost:** charcoal text with a green arrow for low-emphasis actions such as Edit details.

### Cards / Containers
- **Rate cards:** identical structure in two colourways, Home (sand-soft, Wood Brown price) and Away (Foliage Green, cream price), 20 px corners, three check lines.
- **Detail frames:** cream on the sand section; the extra-guest frame is sand-soft with a terracotta border and value.
- **Walkthrough panel:** Foliage Green, 28 px corners, cream heading, sand copy.
- **Contact panel:** sand-soft, 28 px corners, over the courtyard photo with a charcoal scrim.

### Inputs / Fields
- **Style:** white fill, 1.5 px hairline stroke, 12 px corners, label above at 15px medium, trailing icon.
- **Focus:** Foliage Green stroke plus a soft green ring.
- **Error:** Error Brick stroke, icon and message below, plus a summary above the form.

### Navigation
- **Desktop:** transparent header over the hero with cream links; the active link has a terracotta underline; terracotta primary button right.
- **Tablet and mobile:** logo lockup and a translucent charcoal pill menu button. The open menu is a full-screen Warm Cream overlay with 32px charcoal links, the current section in terracotta, a Close pill, the primary button, and social links.

### Gallery Tile
Photo with a locked true aspect ratio (Square or Portrait), caption below in Muted Text, enlarge control top right. Opening a photo shows it on a Deep Charcoal backdrop with a cream caption and a cream Close pill (fade 280 ms, cubic-bezier(0.23, 1, 0.32, 1)).

### Amenity Row
Green Phosphor icon, charcoal name, green availability, charcoal details; rows alternate sand-soft and cream on the sand section; mobile stacks Availability and Details as labelled lines.

## Do's and Don'ts

### Do:
- **Do** keep Terracotta Orange for inquiry actions, the current section, and the extra-guest fee.
- **Do** use Foliage Green panels and the Deep Charcoal footer so the page keeps contrast.
- **Do** place photographs at their true 1:1 or 3:4 proportions with 20 px corners and a caption naming the real subject.
- **Do** keep the base rate, the 4-guest inclusion, the ₱250 extra-guest fee, and the 8-guest cap equally visible at every breakpoint.
- **Do** put text over photos in Warm Cream on a Deep Charcoal scrim.

### Don't:
- **Don't** introduce colours outside the six pinned colours and their listed tints.
- **Don't** use terracotta text smaller than 26 px on sand-soft (4.5:1).
- **Don't** put small uppercase kickers above headings.
- **Don't** crop property photos into wide panoramas or overlay text pills on photos.
- **Don't** show "Message sent" or "Booking confirmed"; an inquiry stays a draft until the guest sends it.
