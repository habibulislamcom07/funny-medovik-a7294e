# AGENTS.md — Developer & AI Agent Guidelines for CalcVora

This document serves as the architectural reference for AI agents and human developers maintaining and extending **CalcVora** (hosted at `CalcVora.online`).

---

## 1. Core Architectural Mandate

CalcVora is an ultra-fast, multi-tool calculator website built for deployment on **Netlify (Free Tier)**.

### Budget & Build Minute Constraints:
- **Zero Heavy Build Pipelines:** The project uses plain HTML5, CSS3, and Vanilla JavaScript.
- **Do NOT Scaffold 100+ Tools at Once:** Netlify free tier allowances can easily be consumed by massive multi-file builds. Tools must be added **one by one** as needed.
- **Pure Client-Side Computation:** Every tool computes values inside the user's browser. Do NOT introduce Netlify Functions, Node.js server dependencies, or client bundlers (Webpack/Vite/Rollup) without explicit directive.

---

## 2. Directory Structure

```
/
├── index.html                  # Homepage (directory of live tools + categories)
├── about.html                  # About page
├── contact.html                # Contact page with Netlify Forms integration
├── privacy-policy.html         # Legal Privacy Policy (GDPR/CCPA compliant)
├── terms.html                  # Terms of Service & professional disclaimers
├── sitemap.xml                 # XML sitemap (only contains live pilot pages)
├── robots.txt                  # Search crawler configuration
├── netlify.toml                # Netlify redirects, headers, publish directory
├── assets/
│   ├── css/style.css           # Global design system & responsive styling
│   ├── js/common.js            # Shared UI logic (search, themes, modals, clipboard)
│   └── img/                    # Icons and brand assets
├── tools/                      # Dedicated tool folders (ONE tool = ONE folder)
│   ├── age-calculator/index.html
│   ├── emi-calculator/index.html
│   ├── bmi-calculator/index.html
│   ├── percentage-calculator/index.html
│   └── gst-calculator/index.html
└── templates/
    └── tool-template.html      # Reusable master template for new tools
```

---

## 3. Tool Creation Protocol (One Tool at a Time)

When instructed to add a new tool:

1. **Copy the Master Template:**
   Duplicate `/templates/tool-template.html` into a new folder under `/tools/<tool-slug>/index.html`. Never merge multiple tools into one file.
2. **Implement Required SEO Elements:**
   - `<title>`: 55–60 characters in length (`[Tool Name] Online – [Primary Keyword] | CalcVora`).
   - `<meta name="description">`: 150–160 characters.
   - Canonical URL tag pointing to `https://calcvora.online/tools/<tool-slug>/`.
   - Open Graph + Twitter Card tags.
   - Schema.org JSON-LD graph containing:
     - `WebApplication` (or `SoftwareApplication`)
     - `BreadcrumbList`
     - `FAQPage` containing **exactly 5 FAQs**.
3. **Follow the Standard Content Hierarchy:**
   1. `<h1>` Tool Title
   2. Short Intro Paragraph
   3. The Interactive Calculator Widget (HTML form + output cards)
   4. `<h2>` "How to Use" (step-by-step guidance)
   5. `<h2>` "How It Works" (transparent mathematical formula box)
   6. `<h2>` Frequently Asked Questions (exactly 5 accordions matching the JSON-LD schema)
   7. `<h2>` You May Also Like (3–4 links to sibling tools)
   8. Responsive ad slots (`top-banner`, `mid-content`, `bottom-banner`, `sidebar`)
4. **Update System Files:**
   - Add clean redirect rule in `netlify.toml`:
     ```toml
     [[redirects]]
       from = "/<tool-slug>"
       to = "/tools/<tool-slug>/"
       status = 301
     ```
   - Add `<url>` entry to `sitemap.xml`.
   - Add card in `index.html` under the matching category filter.

---

## 4. Coding & Design Conventions

- **CSS & Design System:**
  - Modify `/assets/css/style.css` for site-wide visual adjustments.
  - Colors are managed via CSS custom properties (`--bg-body`, `--bg-surface`, `--accent-cyan`, `--accent-emerald`, etc.).
  - Avoid AI aesthetic clichés: no oversaturated neon glows, no generic unstyled inputs. Use the custom range sliders, segment toggles, and formatted monospace numerical outputs (`font-family: var(--font-mono)`).
- **JavaScript Execution:**
  - Shared behaviors (toast notifications, clipboard copy, theme toggle, print, share, premium modal) are exposed on `window.CalcVora`.
  - Tool-specific calculation logic must be enclosed in an IIFE (`(function(){ ... })();`) at the bottom of the tool's `index.html`.
- **Forms & Backend:**
  - `contact.html` uses **Netlify Forms** (`data-netlify="true"`). If any form attributes are changed, run `node /opt/buildhome/.agents/skills/netlify-forms/scripts/enable.cjs` to ensure form detection remains active.

---

## 5. Monetization Preservation

Do not remove the `.ad-slot` container elements or the `[data-action="open-premium"]` triggers. They serve as zero-layout-shift placeholders for future Google AdSense and premium paywall integrations.
