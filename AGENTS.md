
# AGENTS.md

Static project documentation for Calcify.

## About

Calcify is a free online calculator platform with 150+ tools.
Built with HTML, TailwindCSS, and Vanilla JavaScript.
Hosted on Vercel.

Live: https://calcvora.online
Contact: mediaprojects.official@gmail.com

## File Naming

- Tool pages: tools/tool-name.html (kebab-case, flat file)
- Legal pages: page-name.html (root)
- No folders for tools
- Always .html extension

## Tech Stack

- HTML5
- TailwindCSS (via CDN)
- Vanilla JavaScript (ES5 compatible)
- Google Fonts (Inter + Plus Jakarta Sans)
- Vercel for hosting

Do not add React, Vue, Angular, npm, or build tools.

## Design

- Primary color: #4f46e5
- Background dark: #020617
- Background light: #ffffff
- Font sans: Inter
- Font display: Plus Jakarta Sans
- Default theme: dark
- Storage key: calcify-theme

## Page Structure

Every tool page must include:

1. Head with SEO meta and schema
2. Header with logo, nav, language switcher, theme toggle
3. Top ad slot
4. Breadcrumb
5. Tool hero with H1
6. Calculator UI
7. In-content ad slot
8. About section (550-600 words)
9. How to Use (5 steps)
10. FAQ (exactly 7 questions)
11. Affiliate box
12. Related tools (6 cards)
13. Premium CTA
14. Newsletter
15. Footer ad slot
16. Footer
17. Back to top button
18. Scripts

## SEO Rules

- Title: 50-60 characters
- Meta description: 150-160 characters
- Word count: 550-600 words
- FAQ: exactly 7 questions
- Schema: WebApplication, BreadcrumbList, FAQPage
- OG image: https://calcvora.online/assets/og-cover.png
- Canonical URL on every page
- Hreflang for en, hi, es, ar

## Code Style

- 2 space indentation
- Semicolons always
- Single quotes for JS strings
- Double quotes for HTML attributes
- camelCase for functions
- kebab-case for filenames

## Accessibility

- Semantic HTML
- aria-label on icon buttons
- aria-hidden on decorative SVGs
- Focus outlines
- Skip to content link
- Keyboard navigation

## Privacy

- All calculations client-side
- No server calls for calculations
- No cookies except theme and language
- No user accounts
- No data collection

## Ads

- Non-intrusive only
- Labelled as Advertisement
- AdSense compliant
- Only in designated slots
- Affiliate disclosure required

## Adding a New Tool

1. Copy templates/tool-template.html
2. Rename to tools/new-tool.html
3. Replace all placeholders
4. Test on mobile and desktop
5. Test in dark and light mode
6. Commit to GitHub

## Do Not

- Use frameworks
- Add npm or build tools
- Use folders for tools
- Copy content from other sites
- Add tracking beyond Google Analytics
- Break the Indigo and Slate theme
- Use external icon libraries
- Add auto-playing media

## Contact

mediaprojects.official@gmail.com
