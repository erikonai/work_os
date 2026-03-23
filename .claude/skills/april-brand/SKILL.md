---
name: april-brand
description: Create April-branded presentations, decks, one-pagers, proposals, and formal documents that follow April's brand guidelines. Use when asked to make a slide deck, presentation, pitch, partner doc, or any formal output representing April.
allowed-tools: WebFetch, Read, Write, Bash
argument-hint: [topic or document title]
---

# april Brand Document & Presentation Skill

You are creating a formal document or presentation on behalf of april. Everything you produce must strictly follow the brand guidelines below.

## Brand Identity

**april** (always lowercase) is an AI platform for creating tax alpha, embedded into modern financial platforms. Tone is professional, modern, and sophisticated — authoritative but not stiff. Write clearly and confidently.

**CRITICAL:** The company name is always written as **april** (lowercase) — never "April", never "APRIL". This applies everywhere: slide titles, headers, body text, footers, and file names.

Current positioning: *"The AI platform for creating tax alpha"*
Alternative tagline: *"Embedding tax in every financial decision"*

---

## Brand Colors

Always use these exact values. Never invent colors.

### Dark Backgrounds — the visual foundation of april decks
| Name | Hex | Use |
|------|-----|-----|
| Brand Purple | `#210F4B` | **Primary** cover slides, section dividers, dark content slides — the definitive april background |
| Dark Charcoal | `#3A3B4D` | Alternative cover variant (wealth/product-specific decks) |
| Deep Navy | `#1A2040` | Table headers, strong horizontal rules, data table fills |

### Light Backgrounds — for content slides
| Name | Hex | Use |
|------|-----|-----|
| White | `#FFFFFF` | Primary content slide background |
| Light Gray | `#EAEBED` | Section fills, alternating rows, column backgrounds, agenda blocks |

### Brand Accent Colors — used selectively, never as large background fills
| Name | Hex | Use |
|------|-----|-----|
| Grapril (brand purple) | `#5E00FF` | Logo mark, stat numbers, accent text, the "april" wordmark color, key highlights |
| Medium Purple | `#7B5CFF` | Secondary accent, the 3D "a" icon, subtle highlights on dark slides |
| Light Lilac | `#CBC9E6` | Very subtle tints, inline text accents on dark backgrounds |

**Color hierarchy for presentations:**
1. Dark slides: use Brand Purple `#210F4B` for covers and section dividers (primary); Dark Charcoal `#3A3B4D` as an alternative cover variant
2. Light slides: use White for content; Light Gray `#EAEBED` for section/block fills
3. Grapril `#5E00FF` is for the logo, stat numbers, and accent text — **never as a slide background**
4. Medium Purple `#7B5CFF` for secondary accents on dark slides
5. Deep Navy `#1A2040` for table headers and strong rules only

**Colors removed from the palette (do NOT use):**
- Mustard / yellow `#E9CD62` — not part of the current brand
- Beige `#F0EBE3` — replaced by white and light gray
- Hunter Green — removed
- Tuscan Red — removed

---

## Typography

### Fonts
**Inter is the only typeface in the april brand.** Use it at all sizes and weights.

- **Display/Headlines:** Inter — large sizes (2rem–4rem), weight 300–400 (light/regular) for elegance on dark slides; weight 600–700 (semibold/bold) for emphasis on light slides
- **Body / UI text:** Inter — 400 weight, 0.9rem–1.1rem
- **Monospace / code:** Inconsolata — for API snippets, code blocks, technical content only

Font weights in use: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

Load via Google Fonts when generating HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@300;400;600;700&family=Inconsolata:wght@400;500&display=swap" rel="stylesheet">
```

### Typography rules
- **Large display headlines (cover, breaker):** Inter or Inter Tight, 300–400 weight, ~2.8rem–3.5rem — elegant and light on dark backgrounds
- **Content slide titles:** Inter Tight, 600 weight, 1.8rem–2.2rem
- **Eyebrow labels:** Inter, 700 weight, uppercase, 0.65rem, letter-spacing 0.12em — e.g. "TAXPAYER RESULTS", "B2B2C GTM"
- **Body text:** Inter 400, ~0.9rem
- **Stat numbers:** Inter 700, 2.5rem–3.5rem, Grapril `#5E00FF`
- **Footer:** Inter 500, 0.62rem
- Bold and italic emphasis in Inter is supported and encouraged for headline variety

---

## Slide Layout Conventions

### Cover slide (primary style)
- Background: Brand Purple `#210F4B`
- Top-left: "april" wordmark in white (Inter Bold)
- Left side (lower half): Large Inter Light/Regular headline in white, ~3rem
- Subtitle line below headline: Inter 300, ~1rem, white at 70% opacity
- Right side: Product screenshot or 3D visual (floating/perspective mockup)
- Bottom-left: "Month Year | Highly Confidential" in small Inter, opacity 0.5
- **Concentric circle arcs** in background: 5–6 rings, centered right-of-center, drawn as strokes at ~rgba(255,255,255,0.07), expanding outward — signature visual element

### Cover slide (alternative / charcoal variant)
- Background: Dark Charcoal `#3A3B4D`
- Same layout as primary cover — use for wealth/product-specific decks
- Also has concentric circle arcs (same treatment)

### Section divider / breaker slides
- Background: Brand Purple `#210F4B`
- Right side: 3D tile/icon imagery (the april "a" icon app grid, stack of cards, etc.)
- Bottom-left: Large Inter Light headline in white (2–4 lines), ~2.8rem
- Footer: standard footer

### Content slides — light (most common)
- Background: White `#FFFFFF`
- Eyebrow: small Inter uppercase label above title
- Title: Playfair Display, large (1.8–2.5rem), black
- Content area often has Light Gray `#EAEBED` section blocks/columns
- Bullets use → arrow prefix (not •)
- Footer: standard footer

### Content slides — white with columns (3-up)
- White slide with three equal columns
- Each column: rounded card with Light Gray bg, header in bold caps inside a pill/capsule shape
- Body text + arrow bullets below

### Data / table slides
- White background
- Table header row: Deep Navy `#1A2040` with white text, Inter 500
- Alternating rows: white / very light gray
- Left column: lighter-weight label text (category)
- Right columns: bold key results/data

### Stats slide
- White or Light Gray background
- Large stat numbers in Grapril `#5E00FF`, Inter Bold
- Descriptive label below each stat in Inter regular
- Icons (outline/thin style) next to or above each stat

### Testimonial / quote slide
- Light Gray `#EAEBED` background
- Centered quote box with rounded border in Medium Purple `#7B5CFF`
- Large quotation mark " " in Grapril as decoration
- Quote text in Playfair Display italic

### Standard footer (all slides)
```
april    CONFIDENTIAL AND PROPRIETARY    [slide number]
```
- "april" lowercase, Inter 600, Grapril `#5E00FF`
- "CONFIDENTIAL AND PROPRIETARY": Inter 500, uppercase, `#666`, letter-spacing 0.08em
- Slide number: Inter 400, right-aligned, `#999`
- Positioned at bottom, 24px from edges

---

## Images & Assets

When the document needs images or visual assets, fetch them from April's website rather than using placeholder images or external stock.

**How to get assets:**
1. Use WebFetch on relevant April pages to find image URLs
2. Useful pages to check: `https://www.getapril.com`, `https://www.getapril.com/about`, `https://www.getapril.com/products`
3. Use actual `<img src="...">` URLs found on those pages
4. If no specific image is available, use brand-colored geometric shapes, gradients, or CSS-only visuals rather than broken image links

**Never** use placeholder services (placehold.it, picsum, etc.) — use CSS backgrounds with brand colors instead.

---

## Output Format Rules

Choose the output format based on context:

| Request type | Output format |
|---|---|
| "slide deck", "presentation", "deck" | Self-contained HTML with slide layout |
| "one-pager", "fact sheet", "overview" | Self-contained HTML, single scrollable page |
| "proposal", "formal document", "report" | Self-contained HTML or well-structured Markdown |
| "email", "message" | Plain text or Markdown |
| Ambiguous | Ask, or default to HTML |

**For HTML output:**
- Self-contained single file (inline CSS, no external dependencies except Google Fonts)
- Responsive layout
- Print-friendly when possible (`@media print`)
- Write the file to disk using the Write tool with a descriptive filename

---

## HTML Slide Deck Template

When creating a slide deck, use this structure as the base:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Title] | april</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@300;400;600;700&family=Inconsolata:wght@400;500&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', sans-serif; background: #CACBCE; color: #000; }

    .deck { width: 100%; }
    .slide {
      width: 100%; aspect-ratio: 16/9; max-width: 1280px; margin: 0 auto 2rem;
      display: flex; flex-direction: column; justify-content: center;
      padding: 60px 80px; position: relative; overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.15);
    }

    /* Slide themes */
    .slide-cover     { background: #210F4B; color: #fff; }        /* Brand Purple — primary covers & section dividers */
    .slide-cover-alt { background: #3A3B4D; color: #fff; }        /* Dark Charcoal — alternative cover variant */
    .slide-white     { background: #fff; color: #000; }           /* White — primary content */
    .slide-light     { background: #EAEBED; color: #000; }        /* Light gray — neutral content */

    /* Typography — Inter only */
    h1 { font-family: 'Inter', sans-serif; font-size: 3rem; font-weight: 300; line-height: 1.12; }
    h2 { font-family: 'Inter Tight', sans-serif; font-size: 2rem; font-weight: 600; margin-bottom: 1.5rem; line-height: 1.2; }
    h3 { font-family: 'Inter', sans-serif; font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; }
    p  { font-size: 1rem; font-weight: 400; line-height: 1.6; }

    /* Concentric circle arcs — inline SVG inside the slide div */
    .circles-svg {
      position: absolute; inset: 0;
      width: 100%; height: 100%;
      pointer-events: none; z-index: 0; overflow: visible;
    }

    /* Eyebrow label above titles */
    .eyebrow {
      font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em;
      text-transform: uppercase; margin-bottom: 0.75rem; color: #666;
    }
    .eyebrow-light { color: rgba(255,255,255,0.6); }

    /* Stat numbers */
    .stat { font-size: 3rem; font-weight: 700; color: #5E00FF; font-family: 'Inter', sans-serif; }
    .stat-label { font-size: 0.85rem; font-weight: 400; color: #555; margin-top: 0.25rem; }

    /* Section fills */
    .section-fill {
      background: #EAEBED; border-radius: 12px; padding: 2rem;
    }
    .section-fill-dark {
      background: rgba(255,255,255,0.08); border-radius: 12px;
      padding: 2rem; border: 1px solid rgba(255,255,255,0.1);
    }

    /* Card with pill header (3-column layout) */
    .card-pill {
      background: #EAEBED; border-radius: 16px; padding: 1.5rem;
      border: 1px solid rgba(0,0,0,0.08);
    }
    .pill-header {
      display: inline-block; border: 1.5px solid #000; border-radius: 999px;
      padding: 0.3rem 1rem; font-size: 0.75rem; font-weight: 700;
      letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1rem;
    }

    /* Grid layouts */
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
    .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; }

    /* Table */
    .data-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
    .data-table th {
      background: #1A2040; color: #fff; padding: 0.75rem 1rem;
      text-align: left; font-weight: 500;
    }
    .data-table td { padding: 0.75rem 1rem; border-bottom: 1px solid #eee; vertical-align: top; }
    .data-table tr:nth-child(even) td { background: #F5F5F7; }
    .data-table .label-col { font-size: 0.8rem; color: #777; font-weight: 400; }
    .data-table .bold-cell { font-weight: 700; }

    /* Arrow bullets */
    .arrow-list { list-style: none; padding: 0; }
    .arrow-list li { padding: 0.3rem 0 0.3rem 1.5rem; position: relative; font-size: 0.9rem; line-height: 1.5; }
    .arrow-list li::before { content: '→'; position: absolute; left: 0; color: #5E00FF; font-weight: 600; }

    /* Accent bar */
    .accent-bar { width: 40px; height: 3px; background: #7B5CFF; margin-bottom: 1.5rem; border-radius: 2px; }

    /* Logo / wordmark */
    .logo {
      font-family: 'Inter', sans-serif; font-size: 1.4rem;
      font-weight: 700; color: #5E00FF; letter-spacing: -0.02em;
    }
    .logo-light { color: #fff; }

    /* Standard footer */
    .slide-footer {
      position: absolute; bottom: 20px; left: 40px; right: 40px;
      display: flex; justify-content: space-between; align-items: center;
    }
    .footer-left { display: flex; align-items: center; gap: 1rem; }
    .footer-confidential {
      font-size: 0.62rem; font-weight: 500; letter-spacing: 0.08em;
      text-transform: uppercase; color: #999;
    }
    .footer-confidential-light { color: rgba(255,255,255,0.4); }
    .footer-num { font-size: 0.72rem; color: #999; font-weight: 400; }
    .footer-num-light { color: rgba(255,255,255,0.4); }

    /* Radial circle bg (decorative, for dark slides) */
    .radial-bg::before {
      content: '';
      position: absolute; top: 50%; right: -10%; transform: translateY(-50%);
      width: 70%; aspect-ratio: 1;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%);
      pointer-events: none;
    }
  </style>
</head>
<body>
  <div class="deck">

    <!-- COVER SLIDE — bg #210F4B with SVG concentric rings -->
    <div class="slide slide-cover">
      <!-- Concentric rings: SVG circles centered at ~62% x, 50% y -->
      <svg class="circles-svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <circle cx="930" cy="450" r="190" fill="none" stroke="rgba(255,255,255,0.13)" stroke-width="1.3"/>
        <circle cx="930" cy="450" r="330" fill="none" stroke="rgba(255,255,255,0.11)" stroke-width="1.3"/>
        <circle cx="930" cy="450" r="470" fill="none" stroke="rgba(255,255,255,0.09)" stroke-width="1.3"/>
        <circle cx="930" cy="450" r="615" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="1.3"/>
        <circle cx="930" cy="450" r="760" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1.3"/>
        <circle cx="930" cy="450" r="910" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1.3"/>
      </svg>
      <div style="position:absolute; top:40px; left:60px; z-index:1;">
        <span class="logo logo-light">april</span>
      </div>
      <div style="max-width: 48%; position:relative; z-index:1; margin-top:2rem;">
        <h1 style="color:#fff;">[Deck Title]</h1>
        <p style="margin-top:1.5rem; color:rgba(255,255,255,0.65); font-size:0.9rem; font-weight:300;">[Subtitle]</p>
      </div>
      <p style="position:absolute; bottom:44px; left:68px; font-size:0.75rem; color:rgba(255,255,255,0.4); z-index:1;">
        Month Year | Highly Confidential
      </p>
    </div>

    <!-- SECTION DIVIDER SLIDE — same #210F4B bg -->
    <div class="slide slide-cover" style="justify-content:flex-end; padding-bottom:64px;">
      <div style="max-width: 50%; position:relative; z-index:1;">
        <h1 style="color:#fff; font-size:2.8rem; font-weight:300;">[Section Title]</h1>
      </div>
      <div class="slide-footer">
        <div class="footer-left">
          <span class="logo" style="font-size:0.9rem; color:#fff;">april</span>
          <span class="footer-confidential footer-confidential-light">Confidential and Proprietary</span>
        </div>
      </div>
    </div>

    <!-- CONTENT SLIDE — white -->
    <div class="slide slide-white">
      <div class="eyebrow">Eyebrow Label Here</div>
      <h2>[Slide Headline]</h2>
      <div class="grid-3">
        <div class="section-fill">
          <h3>Topic 1</h3>
          <ul class="arrow-list">
            <li>Point one goes here</li>
            <li>Point two goes here</li>
          </ul>
        </div>
        <div class="section-fill">
          <h3>Topic 2</h3>
          <ul class="arrow-list">
            <li>Point one goes here</li>
            <li>Point two goes here</li>
          </ul>
        </div>
        <div class="section-fill">
          <h3>Topic 3</h3>
          <ul class="arrow-list">
            <li>Point one goes here</li>
            <li>Point two goes here</li>
          </ul>
        </div>
      </div>
      <div class="slide-footer">
        <div class="footer-left">
          <span class="logo" style="font-size:0.9rem;">april</span>
          <span class="footer-confidential">Confidential and Proprietary</span>
        </div>
        <span class="footer-num">1</span>
      </div>
    </div>

    <!-- STATS SLIDE -->
    <div class="slide slide-white">
      <div class="eyebrow">Key Results</div>
      <h2>[Stats Headline]</h2>
      <div class="grid-3" style="margin-top: 2rem;">
        <div>
          <div class="stat">63</div>
          <div class="stat-label">NPS score</div>
        </div>
        <div>
          <div class="stat">22 min</div>
          <div class="stat-label">Median time to file</div>
        </div>
        <div>
          <div class="stat">30%</div>
          <div class="stat-label">Filers who switched from TurboTax</div>
        </div>
      </div>
      <div class="slide-footer">
        <div class="footer-left">
          <span class="logo" style="font-size:0.9rem;">april</span>
          <span class="footer-confidential">Confidential and Proprietary</span>
        </div>
        <span class="footer-num">2</span>
      </div>
    </div>

    <!-- DATA TABLE SLIDE -->
    <div class="slide slide-white">
      <h2>[Table Title]</h2>
      <table class="data-table" style="margin-top:1.5rem;">
        <thead>
          <tr>
            <th></th>
            <th>Column A</th>
            <th>Column B</th>
            <th>Column C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-col">Row label</td>
            <td class="bold-cell">Key result</td>
            <td>Supporting detail here</td>
            <td>Additional context</td>
          </tr>
        </tbody>
      </table>
      <div class="slide-footer">
        <div class="footer-left">
          <span class="logo" style="font-size:0.9rem;">april</span>
          <span class="footer-confidential">Confidential and Proprietary</span>
        </div>
        <span class="footer-num">3</span>
      </div>
    </div>

  </div>
</body>
</html>
```

---

## Content & Messaging Guidelines

- **Lead with value** — what does this mean for the partner/user, not just what april does
- **Use concrete language** — specific numbers, outcomes, and capabilities over vague claims
- **april's current positioning**: AI platform for tax alpha, embedded B2B2C model, serving financial platforms (banking, wealth, payroll, SMB)
- **Key differentiators to reference when relevant**: embedded-first approach, partner white-labeling, multiple product types (Filing, Paycheck Optimization, Consulting, Equity Planner, Tax Insights), compliance (IRS 7216), data-in/data-out architecture, aprilOS no-code platform
- **Avoid:** "revolutionary", "game-changing", "cutting-edge", "seamless" (overused) — use specific language instead
- **Capitalize** product names: Filing, Paycheck Optimization, Paycheck Estimation, Consulting, Transcription, Equity Planner, Tax Insights
- **Bullet style:** use → arrows for lists, not • dots, in styled HTML slides
- **Eyebrow text:** short uppercase label above the headline (e.g. "TAXPAYER RESULTS", "EMBEDDED MODEL", "B2B2C GTM")

---

## Process

1. Clarify the audience and purpose if not obvious (partner pitch? internal BOD? client-facing?)
2. Outline the structure before writing content (ask for feedback if needed)
3. Fetch relevant images/assets from getapril.com using WebFetch
4. Generate the document using the brand guidelines above
5. Write the output to a file using the Write tool
6. Tell the user the filename and how to open it
