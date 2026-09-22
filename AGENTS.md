# AGENTS.md — Calcify Project Guide

> **Purpose:** This file documents coding rules, design conventions, and workflow guidelines for anyone (human or AI assistant) working on the Calcify codebase. Following these rules ensures consistency, privacy, and quality across all 150+ tools.

---

## 1. Project Overview

**Calcify** is a free, fast, private, and SEO-friendly online calculator platform hosting 150+ tools across 8 categories (Finance, Health, Math, Converters, Text, Date, Developer, Everyday).

**Live site:** https://calcvora.online
**Hosting:** Vercel (static, CDN-backed)
**Contact:** mediaprojects.official@gmail.com

---

## 2. Core Principles (Non-Negotiable)

1. **Privacy first** — Every calculation runs client-side. No data leaves the browser.
2. **Speed** — Every page must load in under 1 second on 4G.
3. **Zero dependencies** — No frameworks, no npm, no build tools.
4. **Mobile-first** — Beautiful from 320px to 4K.
5. **SEO-ready** — Every page ships with full schema, meta, and FAQ markup.
6. **Free forever** — Core tools must never be paywalled.

---

## 3. File Naming Rules

| Type | Rule | Example |
|------|------|---------|
| Tool pages | `tools/tool-name.html` (kebab-case, flat file) | `tools/emi-calculator.html` |
| Legal pages | `page-name.html` (root) | `privacy.html` |
| CSS | `css/style.css` | Single global stylesheet |
| JS | `js/main.js`, `js/i18n.js` | Global scripts only |
| Template | `templates/tool-template.html` | Master template |

**Never use folder structure for tools** — always flat files like `tools/emi-calculator.html`, not `tools/emi-calculator/index.html`.

---

## 4. Tech Stack (Locked)

- **HTML5** — Semantic, accessible markup
- **TailwindCSS** — Loaded via CDN, configured inline in `<head>`
- **Vanilla JavaScript** — ES5-compatible syntax for maximum browser support
- **Google Fonts** — Inter + Plus Jakarta Sans only
- **Vercel** — Static hosting

**Do NOT add:** React, Vue, Angular, Svelte, jQuery, Bootstrap, Webpack, Vite, npm, or any build step.

---

## 5. Design System

### Colors
- **Primary accent:** `#4f46e5` (Indigo 600)
- **Gradient:** `#4f46e5 → #7c3aed → #0ea5e9`
- **Background (light):** `#ffffff`
- **Background (dark):** `#020617` (Slate 950)
- **Text (light):** `#1e293b` (Slate 800)
- **Text (dark):** `#e2e8f0` (Slate 200)

### Typography
- **Body font:** Inter
- **Display font:** Plus Jakarta Sans (for headings, brand name)
- **Base size:** 16px (15px on mobile)

### Components
- **Border radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-soft`, `shadow-card`, `shadow-pop` (custom Tailwind config)
- **Transitions:** 200ms ease-in-out (default)

### Dark Mode
- **Default:** Dark mode ON for new visitors
- **Storage key:** `calcify-theme` (`dark` or `light`)
- **Toggle:** Sun/Moon icon in header

---

## 6. Required Page Structure

Every tool page MUST include, in this exact order:

1. `<head>` — SEO meta, Open Graph, Twitter, hreflang, favicon, fonts, Tailwind config, theme bootstrap
2. Header — sticky, with logo, nav, language switcher, theme toggle, mobile menu
3. Top banner ad slot
4. Breadcrumb navigation
5. Tool hero — badge, H1, subtitle
6. Calculator UI — input panel + result panel
7. In-content ad slot
8. About section — 550–600 words of original content
9. How to Use — 5 numbered steps
10. FAQ — exactly 7 questions with FAQ Schema
11. Affiliate box — Amazon + Flipkart + Hostinger
12. Related tools — exactly 6 cards
13. Premium CTA — dark gradient card
14. Newsletter signup
15. Footer ad slot
16. Footer — brand, categories, popular tools, company links
17. Back-to-top button
18. Scripts — i18n.js, main.js, tool-specific JS

---

## 7. SEO Rules (Per Tool Page)

| Element | Requirement |
|---------|-------------|
| Title | 50–60 characters |
| Meta description | 150–160 characters |
| H1 | Exactly one per page |
| Word count | 550–600 words of original content |
| FAQ | Exactly 7 questions (no more, no less) |
| Schema | `WebApplication`, `BreadcrumbList`, `FAQPage` |
| OG image | `https://calcvora.online/assets/og-cover.png` |
| Canonical | Full URL of the page |
| Hreflang | en, hi, es, ar + x-default |

---

## 8. Code Style

- **Indentation:** 2 spaces
- **Semicolons:** Always
- **JS quotes:** Single quotes for strings
- **HTML attributes:** Double quotes
- **CSS class order:** Layout → Spacing → Typography → Colors → Effects
- **Comments:** Use `/* ... */` for complex logic
- **Function naming:** camelCase (JS), kebab-case (files)

---

## 9. Accessibility Requirements

Every page must include:

- Semantic HTML (`<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`)
- `aria-label` on icon-only buttons
- `aria-hidden="true"` on decorative SVGs
- Focus-visible outlines on interactive elements
- Skip-to-content link
- Alt text on images
- Keyboard navigation support

---

## 10. Privacy & Security

- **No server-side calls** for calculations
- **No cookies** beyond theme and language preference
- **No third-party trackers** except Google Analytics (if enabled)
- **No user accounts** for free tools
- **No data collection** from calculator inputs
- **HTTPS only** (handled by Vercel)

---

## 11. Monetization Rules

Ads and affiliate content must be:

- **Non-intrusive** — no pop-ups, no auto-play, no overlays
- **Clearly labelled** — "Advertisement" or "Disclosure" text visible
- **AdSense-compliant** — follow Google's policies strictly
- **Positioned** in the designated slots only (top, in-content, sidebar, footer)

**Affiliate disclosure** must appear on every page containing affiliate links.

---

## 12. Adding a New Tool (Workflow)

1. Copy `templates/tool-template.html`
2. Rename to `tools/new-tool-name.html`
3. Replace all `{{PLACEHOLDER}}` values:
   - `{{TOOL_TITLE}}`, `{{TOOL_SLUG}}`, `{{CATEGORY}}`
   - `{{META_DESCRIPTION}}`, `{{TOOL_SUBTITLE}}`
   - `{{ABOUT_PARAGRAPH_1/2/3}}` (550–600 words total)
   - `{{HOW_TO_STEP_1...5}}` (5 steps)
   - `{{FAQ_1...7}}` (exactly 7 Q&A pairs)
   - `{{CALCULATOR_UI}}` (input HTML)
   - `{{CALCULATOR_JS}}` (calculation logic)
   - `{{RELATED_TOOLS}}` (6 cards)
4. Test on mobile + desktop + dark mode
5. Commit to GitHub → Vercel auto-deploys

---

## 13. Testing Checklist

Before committing any tool, verify:

- [ ] Calculation is mathematically correct
- [ ] Works on 320px mobile width
- [ ] Works in dark and light mode
- [ ] All inputs update the result live
- [ ] Copy result button works
- [ ] Reset button works
- [ ] Language switcher works (EN/HI/ES/AR)
- [ ] Theme toggle works
- [ ] No console errors
- [ ] Ad slots visible
- [ ] Footer links correct
- [ ] Back-to-top works
- [ ] Newsletter validates email

---

## 14. Do NOT

- ❌ Use frameworks (React, Vue, etc.)
- ❌ Add npm, package.json, or build tools
- ❌ Use folder structure for tools (use flat files)
- ❌ Copy content from other websites
- ❌ Add tracking beyond Google Analytics
- ❌ Break the Indigo/Slate theme
- ❌ Remove existing ad slots or affiliate boxes
- ❌ Change the header/footer structure between tools
- ❌ Use external icon libraries (use inline SVG)
- ❌ Add auto-playing media

---

## 15. Communication & Support

**For contributors and collaborators:**

- **Email:** mediaprojects.official@gmail.com
- **Subject prefix:** `[Calcify]`
- **Response time:** 1–2 business days

**For AI assistants:**

- Follow all rules in this file
- Preserve the exact design system
- Never change file paths or naming conventions
- Always validate output against the testing checklist

---

**Last updated:** 2026
**Maintained by:** Calcify
