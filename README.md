# ELENA MARCHETTI — "CINEMA"

> A horizontal-scrolling film-strip fashion portfolio. The viewport is a film strip. Vertical scroll drives horizontal movement. The entire site is cinema.

![Cinema](https://img.shields.io/badge/STATUS-PRODUCTION-green) ![HTML](https://img.shields.io/badge/HTML5-Done-orange) ![CSS](https://img.shields.io/badge/CSS3-Film_Grain-blue) ![JS](https://img.shields.io/badge/JavaScript-GSAP-yellow)

---

## The Concept

Elena Marchetti — an Italian international runway model discovered at 19 in a Rome cinema. Her portfolio is not a website. It is a film. The viewer forgets they're scrolling and feels like they're watching a movie.

**Emotion:** Nostalgia. Seduction. The beauty of imperfection — dust on the lens, grain in the shadow, the warmth of analog.

**Archetype:** Cinematic Glamour

---

## Features

- 🎬 **Film Leader Countdown** — 5... 4... 3... 2... 1... with scratches and dust particles
- 🎞️ **Horizontal Filmstrip** — Vertical scroll translates to horizontal movement (GSAP ScrollTrigger)
- 📷 **Film Gate Jitter** — Subtle CSS animation mimicking analog projector instability (pauses on hover)
- ✨ **Dust Particles** — Floating film dust across the viewport
- 🎞️ **Film Grain Overlay** — SVG noise texture at 6% opacity
- 🔲 **Sprocket Rows** — Top/bottom film sprocket decorations
- 🖱️ **Custom Cursor** — Ivory dot + ring with lerp 0.08, grows on interactive elements
- 📋 **Full-Screen Menu** — GSAP-animated overlay with section navigation
- 🖼️ **Archive Hover Reveal** — Background images fade in on row hover
- 🎬 **Film Credits Roll** — Vertical credit scroll at the end (traditional film style)
- 📱 **Mobile Responsive** — Cursor disabled, sprocket rows hidden, menu adapts

---

## Scenes

| Scene | Frames | Description |
|-------|--------|-------------|
| **00 — Hero** | 1 | Full-bleed portrait with name overlay |
| **01-08 — Editorial** | 8 | Cinematic editorial frames (Fountain, Fiat, Fitting Room, Cafe, Balcony, Cinema Seat, Galleria, Staircase) |
| **09 — Intermission** | 1 | Godard quote title card |
| **10-14 — Campaigns** | 5 | Valentino, Dolce & Gabbana, Gucci, Fendi, Armani Privé |
| **15 — Archive** | 1 | 8 archive rows with hover-to-reveal background |
| **16 — Endcard** | 1 | The Departure |
| **Credits** | — | Vertical film credit roll |

---

## Tech Stack

| Library | Version | Purpose |
|---------|---------|---------|
| [GSAP](https://greensock.com/gsap/) | 3.12.5 | Animation engine, ScrollTrigger |
| [Lenis](https://lenis.darkroom.engineering/) | 1.1.18 | Smooth scroll (lerp 0.06) |
| Instrument Serif | — | Display typography (movie credits feel) |
| Lora | — | Body typography |

No build step. No bundler. No npm. Pure vanilla HTML/CSS/JS with CDN-loaded libraries.

---

## Project Structure

```
elena-marchetti/
├── index.html                 ← Main document (17 frames + credits)
├── css/
│   ├── main.css               ← Foundation, components, shared styles
│   └── sections.css           ← Scene-specific styles
├── js/
│   ├── app.js                 ← Master init, menu, credits roll
│   ├── cursor.js              ← Custom cursor (ivory dot + ring)
│   ├── dust.js                ← Floating film particles
│   ├── loader.js              ← Film leader countdown 5→1
│   ├── horizontalscroll.js    ← Horizontal scroll engine
│   └── archive.js             ← Archive hover reveal
├── images/
│   ├── hero/                  ← Hero portrait
│   ├── reel1/                 ← Editorial frames (1-8)
│   ├── reel2/                 ← Campaign frames (1-5)
│   ├── archive/               ← Archive images (1-8)
│   └── endcard/               ← Closing image
├── PROJECT-UPDATE-LOG.md      ← Version history & change log
└── ROLLBACK-LOG.md            ← Rollback instructions & baseline
```

---

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/jkeylight/-Elena-Marchetti.git
   ```

2. Open `elena-marchetti/index.html` in a browser.

3. Scroll to experience the film.

---

## Color System

```css
--filmblack: #0D0B09;   /* Deep warm black — the cinema screen */
--ivory: #F0E4CF;       /* Warm ivory — the projector light */
--sepia: #8B6914;       /* Gold sepia — the vintage filter */
--amber: #1A120B;       /* Dark amber — deep shadows */
--dust-color: #A89070;  /* Dust — floating particles */
--sprocket: #1a1610;    /* Film sprocket holes */
```

Everything through a warm sepia filter. Like Kodak Tri-X 400 processed in warm-tone developer.

---

## Image Collection

| Section | Images | Dimensions | Subject |
|---------|--------|------------|---------|
| Hero | 1 | 1200 × 1600 | Cinema foyer, light beam, Valentino gown |
| Reel 1 (Editorial) | 8 | 1200 × 900 | Roman scenes — fountain, Fiat, cafe, balcony, cinema, galleria, staircase |
| Reel 2 (Campaigns) | 5 | 1400 × 1000 | Valentino, D&G, Gucci, Fendi, Armani |
| Archive | 8 | 1200 × 900 | Film canisters, ticket stubs, backstage, Polaroids, projector |
| Endcard | 1 | 1400 × 1000 | The Departure |

**Total: 23 images** — all shot in warm sepia monochrome, 35mm Kodak Tri-X 400 film aesthetic.

---

## Performance Metrics

- Film gate jitter: 24fps (41.6ms steps)
- Lenis smooth scroll: lerp 0.06
- Cursor ring lerp: 0.08
- Dust particles: 25 floating elements
- Loader timing: 0.6s per number (5 numbers) + flash
- Mobile: cursor off, sprocket rows hidden, Lenis disabled

---

## Credits

- **Concept & Creative Direction:** LOOKBOOK STUDIO
- **Model:** ELENA MARCHETTI
- **Built with love by:** Empathy Studio

---

## License

© Norman James. All rights reserved.
