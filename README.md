# CalcVora.online — Multi-Tool Calculator & Utility Platform

CalcVora is a fast, lightweight, and privacy-preserving multi-tool calculator and utility platform designed for **CalcVora.online** and deployed on **Netlify**.

The architecture is built to scale to **100+ individual calculator tools**, each housed in its own dedicated static folder and file, fully SEO-optimized with Schema.org JSON-LD, and ready for ad and premium monetization.

---

## Key Features

- **Netlify Free Tier Budget Friendly**: 100% static client-side execution (HTML5, CSS3, Vanilla JS). Zero server-side build overhead, zero serverless function compute charges, and instantaneous load times.
- **Client-Side Privacy**: All mathematical computations run entirely in the visitor's web browser. Personal dates, financial numbers, and health metrics are never transmitted over the wire or stored on remote servers.
- **Full SEO & Schema.org Optimization**:
  - Unique titles (55–60 characters) and meta descriptions (150–160 characters).
  - Open Graph and Twitter Card tags.
  - JSON-LD structured data for `WebApplication`, `BreadcrumbList`, and `FAQPage` (5 FAQs per tool).
  - Clean semantic HTML (`h1`, `h2`), breadcrumb navigation, and related tools cross-linking.
- **Monetization-Ready**:
  - Pre-allocated, non-intrusive ad slot containers (`top-banner`, `mid-content`, `bottom-banner`, `sidebar`).
  - "Go Ad-Free / CalcVora Pro" UI hooks with preview modal.
  - Contextual affiliate / recommended card modules.
- **5 Live Pilot Tools**:
  1. **Age Calculator** (`/tools/age-calculator/`): Exact chronological age (years, months, days, hours), next birthday countdown, days lived.
  2. **EMI Calculator** (`/tools/emi-calculator/`): Monthly loan installments, reducing balance interest, visual principal-to-interest gauge, and annual amortization schedule.
  3. **BMI Calculator** (`/tools/bmi-calculator/`): Metric and Imperial units, color-coded WHO classification gauge, and healthy weight targets.
  4. **Percentage Calculator** (`/tools/percentage-calculator/`): 4 calculation modes (portion, proportion ratio, % change increase/decrease, add/subtract discounts).
  5. **GST Calculator** (`/tools/gst-calculator/`): Inclusive and exclusive tax calculations, 5%/12%/18%/28% slabs, custom rates, and CGST/SGST itemization.

---

## File Structure

```
/
├── index.html                  # Homepage (search, categories, live directory)
├── about.html                  # About CalcVora, mission & architecture
├── contact.html                # Netlify Forms contact + CalcVora@gmail.com
├── privacy-policy.html         # GDPR/CCPA privacy policy
├── terms.html                  # Terms of service & professional disclaimers
├── sitemap.xml                 # XML sitemap for search engines
├── robots.txt                  # Search bot instructions
├── netlify.toml                # Clean URL redirects & HTTP security headers
├── README.md                   # Project documentation
├── AGENTS.md                   # Architecture & instructions for future AI agents
├── assets/
│   ├── css/style.css           # Shared design system & responsive UI
│   ├── js/common.js            # Shared nav, search, theme, FAQs, copy utilities
│   └── img/
│       └── favicon.svg         # SVG brand logo and favicon
├── tools/
│   ├── age-calculator/index.html
│   ├── emi-calculator/index.html
│   ├── bmi-calculator/index.html
│   ├── percentage-calculator/index.html
│   └── gst-calculator/index.html
└── templates/
    └── tool-template.html      # Master reusable blueprint for future tools
```

---

## How to Add a New Tool (Scaling to 100+ Tools)

To keep build times near zero and preserve Netlify free tier allowances, new tools are created one-by-one:

1. **Duplicate the Template**:
   ```bash
   cp -r templates/tool-template.html tools/my-new-tool/index.html
   ```

2. **Replace Placeholders in `tools/my-new-tool/index.html`**:
   - `{{TOOL_NAME}}` — e.g., "Compound Interest Calculator"
   - `{{TOOL_SLUG}}` — e.g., "compound-interest-calculator"
   - `{{CATEGORY_NAME}}` / `{{CATEGORY_SLUG}}` — e.g., "Finance" / "finance"
   - `{{META_TITLE}}` — 55–60 char SEO title
   - `{{META_DESCRIPTION}}` — 150–160 char SEO description
   - `{{CALCULATOR_UI}}` — HTML form inputs and results pane
   - `{{CALCULATOR_LOGIC}}` — Vanilla JS calculation script
   - `{{HOW_TO_USE_STEPS}}` — 3-step guide
   - `{{FORMULA_EXPLANATION}}` — Math formula box and explanation
   - `{{FAQ_1_Q}}` ... `{{FAQ_5_A}}` — Exactly 5 FAQs (also in JSON-LD)
   - `{{RELATED_TOOLS_HTML}}` — Links to 3–4 existing tools

3. **Register Clean URL in `netlify.toml`**:
   ```toml
   [[redirects]]
     from = "/my-new-tool"
     to = "/tools/my-new-tool/"
     status = 301
   ```

4. **Update `sitemap.xml`**:
   Add the new tool's canonical URL entry.

5. **Link on Homepage (`index.html`)**:
   Add or update the tool card under the appropriate category.

---

## Local Development

Because CalcVora is a purely static web application, you can run it locally with any static web server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node / npx
npx serve .

# Using Netlify CLI
netlify dev --port 8889
```

Open `http://localhost:8080` (or `http://localhost:8889`) in your browser.

---

## Contact & Support

- **Brand**: CalcVora
- **Domain**: [CalcVora.online](https://calcvora.online)
- **Email**: [CalcVora@gmail.com](mailto:CalcVora@gmail.com)
