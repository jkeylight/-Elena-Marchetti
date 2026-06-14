# ELENA MARCHETTI — "CINEMA"
## Project Update Log

> Every change to the project is recorded here. Each entry documents what changed, why, which files were touched, and how to reference it later.

---

### VERSION 1.0 — INITIAL BUILD
**Date:** June 14, 2026
**Status:** ✅ ACTIVE

#### Summary
Complete initial build of the Elena Marchetti "CINEMA" portfolio — a horizontal-scrolling film-strip fashion website with cinematic aesthetics, film gate jitter, dust particles, and a film leader countdown loader.

---

#### Files Created

| File | Purpose | Size (est.) |
|------|---------|-------------|
| `elena-marchetti/index.html` | Main HTML document — 16 film frames, hero, intermission, archive, credits | ~8KB |
| `elena-marchetti/css/main.css` | Foundation styles — reset, custom properties, grain, cursor, header, menu, footer | ~4KB |
| `elena-marchetti/css/sections.css` | Scene-specific styles — loader, sprocket rows, film frames, hero, intermission, campaigns, archive, credits, jitter animation | ~7KB |
| `elena-marchetti/js/app.js` | Master init — Lenis smooth scroll, GSAP ScrollTrigger, credits vertical roll, menu overlay, image scroll reveal | ~4KB |
| `elena-marchetti/js/cursor.js` | Custom cursor — ivory dot + ring with lerp 0.08, grow on interactive hover | ~1KB |
| `elena-marchetti/js/dust.js` | Floating film dust particles — 25 random CSS-animated particles | ~0.5KB |
| `elena-marchetti/js/loader.js` | Film leader countdown — 5→1 with flash, sequential GSAP timeline | ~1KB |
| `elena-marchetti/js/horizontalscroll.js` | Horizontal scroll engine — GSAP ScrollTrigger pin/scrub, frame navigation | ~2KB |
| `elena-marchetti/js/archive.js` | Archive hover reveal — background image fades in on row hover | ~1.5KB |

#### Architecture Decisions
- **GSAP 3.12.5** for all animations (loaded via CDN)
- **Lenis 1.1.18** for smooth scroll (loaded via CDN)
- **No build step** — vanilla JS, no bundler, no npm
- **Lenis disabled on mobile** (`window.innerWidth <= 1000`)
- **Custom cursor disabled on mobile**
- **Images use picsum.photos placeholders** — not final editorial images

#### CSS Custom Properties
```css
--filmblack: #0D0B09
--ivory: #F0E4CF
--sepia: #8B6914
--amber: #1A120B
--dust-color: #A89070
--sprocket: #1a1610
--line: rgba(240,228,207,0.08)
```

#### Key Features Implemented
- Film leader countdown loader (5→1 with flash)
- Horizontal filmstrip with 16 frames (1 hero + 8 editorial + 1 intermission + 5 campaign + 1 archive)
- Film gate jitter animation on all editorial/campaign images
- Jitter pauses on hover ("projector focuses")
- Floating dust particles (25 particles, random positions)
- Film grain overlay (SVG noise texture)
- Sprocket rows (top/bottom) that appear during horizontal scroll
- Custom cursor with dot + ring, lerp 0.08
- Menu overlay with GSAP slide-in animation
- Archive section with hover-to-reveal background images
- Credits vertical roll (film credit style)
- Responsive: mobile cursor off, sprocket rows hidden, menu adapts

#### Scene Breakdown
| Scene | Frame Index | Type | Description |
|-------|------------|------|-------------|
| 00 | 0 | Hero | Full-bleed portrait, name overlay |
| 01-08 | 1-8 | Editorial | 8 editorial frames with labels |
| 09 | 9 | Intermission | Godard quote |
| 10-14 | 10-14 | Campaign | 5 campaign frames (Valentino, D&G, Gucci, Fendi, Armani) |
| 15 | 15 | Archive | 8 archive rows with hover reveal |
| — | 16+ | Credits | Vertical scroll credits roll |

#### External Dependencies
| Library | Version | CDN |
|---------|---------|-----|
| GSAP | 3.12.5 | cdnjs.cloudflare.com |
| ScrollTrigger | 3.12.5 | cdnjs.cloudflare.com |
| Lenis | 1.1.18 | unpkg.com |

---

### VERSION TRACKING TEMPLATE
**Use this format for all future updates:**

```markdown
### VERSION X.X — [TITLE]
**Date:** YYYY-MM-DD
**Status:** ✅ ACTIVE | ⚠️ NEEDS TESTING | ❌ ROLLED BACK

#### Summary
Brief description of what changed and why.

#### Files Modified
| File | Change Type | What Changed |
|------|-------------|--------------|
| path/to/file.js | MODIFIED | Description of modification |
| path/to/new-file.js | CREATED | Description of new file |
| path/to/old-file.js | DELETED | Reason for deletion |

#### Before → After
Key behavioral or visual changes.

#### Rollback Reference
See `ROLLBACK-LOG.md` → Version X.X for revert instructions.
```

---

*Last updated: June 14, 2026*
