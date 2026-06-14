# ELENA MARCHETTI — "CINEMA"
## Rollback Log

> Every reversible change is documented here with exact before/after states. If something breaks, use this log to revert specific changes without affecting the rest of the project.

---

### ROLLBACK REFERENCE: VERSION 1.0 — INITIAL BUILD
**Date:** June 14, 2026
**Risk Level:** 🟢 LOW (baseline — no prior state to revert to)

Since this is the initial build, there is nothing to roll back to. This entry establishes the **baseline state** for all future rollbacks.

#### Baseline File Hashes (for future comparison)
> Record MD5 hashes after each version for quick integrity checks.

```
index.html:        [RUN CHECKSUM AFTER FIRST CHANGE]
css/main.css:      [RUN CHECKSUM AFTER FIRST CHANGE]
css/sections.css:  [RUN CHECKSUM AFTER FIRST CHANGE]
js/app.js:         [RUN CHECKSUM AFTER FIRST CHANGE]
js/cursor.js:      [RUN CHECKSUM AFTER FIRST CHANGE]
js/dust.js:        [RUN CHECKSUM AFTER FIRST CHANGE]
js/loader.js:      [RUN CHECKSUM AFTER FIRST CHANGE]
js/horizontalscroll.js: [RUN CHECKSUM AFTER FIRST CHANGE]
js/archive.js:     [RUN CHECKSUM AFTER FIRST CHANGE]
```

#### Baseline Structure
```
elena-marchetti/
├── index.html                    ← 16 film frames + credits
├── css/
│   ├── main.css                  ← foundation, components
│   └── sections.css              ← scene-specific styles
├── js/
│   ├── app.js                    ← master init
│   ├── cursor.js                 ← custom cursor
│   ├── dust.js                   ← dust particles
│   ├── loader.js                 ← film leader countdown
│   ├── horizontalscroll.js       ← horizontal scroll engine
│   └── archive.js                ← archive hover reveal
├── PROJECT-UPDATE-LOG.md         ← changelog
└── ROLLBACK-LOG.md               ← this file
```

---

## HOW TO USE THIS LOG

### Step 1: Identify the Change
Find the version entry in `PROJECT-UPDATE-LOG.md` that introduced the change you want to revert.

### Step 2: Find the Rollback Entry
Locate the matching version entry below. Each entry lists:
- **Files affected** — which files were modified
- **Before state** — the exact content (or description) to restore
- **After state** — what the change produced
- **Revert command** — specific instructions to undo

### Step 3: Execute the Rollback
Follow the revert instructions. Test the site in browser after each file revert.

---

## ROLLBACK TEMPLATE

**Use this format for all future rollbacks:**

```markdown
### ROLLBACK: VERSION X.X — [TITLE]
**Date:** YYYY-MM-DD
**Reason:** Why this rollback is needed
**Risk Level:** 🟢 LOW | 🟡 MEDIUM | 🔴 HIGH

#### Files Affected
| File | Change Type | Rollback Action |
|------|-------------|-----------------|
| path/to/file.js | MODIFIED | Restore previous version (see Before state) |
| path/to/new-file.js | CREATED | Delete file |
| path/to/old-file.js | DELETED | Restore from Version X.X baseline |

#### Before State (what to restore)
\`\`\`
[Paste the exact content that was in the file BEFORE the change]
\`\`\`

#### After State (what to undo)
\`\`\`
[Paste the content that the change introduced]
\`\`\`

#### Revert Steps
1. [Step-by-step instructions to undo]
2. [Continue...]

#### Verification
- [ ] Load site in browser
- [ ] Check [specific feature]
- [ ] Test on mobile
- [ ] No console errors
```

---

## QUICK ROLLBACK CHECKLIST

Before executing any rollback, confirm:

- [ ] You have identified the exact version that introduced the change
- [ You have a backup of the current state (copy the file)
- [ ] You understand what the rollback will affect
- [ ] You have tested the site after the rollback

---

## EMERGENCY: FULL PROJECT RESTORE

If the project becomes completely broken, restore the baseline Version 1.0 state:

1. Delete all files in `elena-marchetti/`
2. Recreate the folder structure from the Baseline Structure above
3. Rebuild each file using the content documented in `PROJECT-UPDATE-LOG.md` → Version 1.0
4. Verify in browser: loader plays, horizontal scroll works, archive hover reveals images

> **Note:** Since Version 1.0 uses placeholder images (picsum.photos), the site will function with or without final editorial images. The layout, animations, and interactions are all self-contained in the CSS/JS.

---

*Last updated: June 14, 2026*
