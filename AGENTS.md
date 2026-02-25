# AGENTS.md

## Project Purpose
Build and maintain a production-ready single-page marketing website for **Mail My Books**, a UK CIS bookkeeping service targeting self-employed tradespeople under CIS who want a no-faff process.
This service is **CIS-only** and explicitly does **not** cover VAT, payroll, or limited companies.

## Tech Stack and Runtime Rules
- Use **React + Vite**.
- Use **Tailwind CSS**.
- Keep it a **single-page** website with smooth scrolling between anchored sections.
- No backend/API requirement for core site behavior.
- Deployment target: **Netlify**.

## Brand and Visual Rules
- Primary font: **Nunito Sans** (Google Fonts).
- Palette:
  - Primary: `#0F5B4F`
  - Primary hover: `#0B463D`
  - Accent: `#F59E0B`
  - Accent hover: `#D97706`
  - Text: `#111827`
  - Muted text: `#6B7280`
  - Background: `#FFFFFF`
  - Alt background: `#F9FAFB`
  - Borders: `#E5E7EB`
- Keep tone friendly, blunt, slightly cheeky, but professional.
- Mobile-first and responsive.
- Lighthouse-friendly performance choices.

## Asset Rules
- Main logo path: `/public/mail-my-books-logo.png`.
- Use logo in:
  - Header (left)
  - Footer (smaller)
- Current hero image path: `/public/tradie-taking-photos.png`.
- Favicon may be omitted unless explicitly requested.

## Required Sections (Single Page)
1. Hero
2. How it works (3-step workflow)
3. Pricing
4. MTD for Income Tax explainer
5. FAQ (accessible accordion)
6. Contact / Get started
7. Footer

## Header Requirements
- Sticky header.
- Anchor links: `How it works`, `Pricing`, `MTD`, `FAQ`, `Contact`.
- Prominent `WhatsApp Us` CTA.

## Section Content Requirements
### Hero
- Headline: `CIS tax and bookkeeping. Snap it. Send it. Sorted.`
- Subheadline: `We help UK tradies under CIS get their rebate sorted fast, and keep their books tidy all year.`
- CTAs: `Get Started`, `WhatsApp Us`
- Trust line: `UK-based. Straight-talking. No faff.`
- Offer badge: `£129 if paid in full by 30 April`

### How It Works
- Step 1: `Snap it`
- Step 2: `Send it`
- Step 3: `Sorted`
- Emphasize minimal effort for client.

### Pricing
- Card 1: `One-off Tax Return` - `£199`
  - Last year sorted
  - CIS deductions included
  - Clear list of what we need
  - Submitted to HMRC
- Card 2: `Memory Insurance` - `£15/month`
  - Keep this year tidy
  - Monthly check-in
  - Avoid the January panic
- Offer line: `£129 if paid in full by 30 April`
- Referral line: `£20 referral cash after full payment or 6 monthly payments`

### MTD
Keep wording careful and non-committal. Include:
- Digital records + quarterly updates + year-end final declaration explanation.
- Clarification that quarterly updates are for tracking; CIS rebates are typically finalized after year-end submission.
- Timeline thresholds currently shown:
  - `>£50k` from April 2026
  - `>£30k` from April 2027
  - `£20k+` from April 2028
- Disclaimer:
  - `We do not provide tax advice. We provide bookkeeping and submission support based on information you give us.`

### FAQ
Maintain short FAQs, including:
- What do you need from me?
- How do I send my docs?
- How long does it take?
- Do you deal with VAT, payroll, or limited companies? (No)
- Can you help if I've lost receipts? (Yes)
- Mileage vs vehicle expenses (careful wording)
- Will I get a rebate? (Depends on circumstances)

### Contact
- Netlify form fields:
  - Full name (required)
  - Mobile number (required)
  - Email (required)
  - Are you CIS? (Yes/No)
  - Rough annual income band (Under 30k / 30-50k / 50k+)
  - Message
- Include on-page success state after submit.
- Include WhatsApp CTA and `hello@mailmybooks.co.uk`.
- Privacy line:
  - `We only use your details to respond about your bookkeeping. No spam.`
- Include a clear scope reminder:
  - `No VAT, no payroll, no limited companies.`

## Netlify Form Requirements
Form must include:
- `<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">`
- Hidden input:
  - `<input type="hidden" name="form-name" value="contact" />`
- Honeypot field for spam protection.
- Include optional reCAPTCHA block as commented markup only (not required to run).

## Accessibility and UX Requirements
- FAQ accordion must be keyboard-friendly and use proper `aria-*` attributes.
- Preserve smooth anchor scrolling.
- Buttons/interactive elements should have visible focus states.

## Deployment Requirements
- `netlify.toml` must define:
  - Build command: `npm run build`
  - Publish directory: `dist`
- Deploy steps to preserve:
  1. `npm install`
  2. `npm run build`
  3. Publish `dist`

## Current Component Layout
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/HowItWorks.jsx`
- `src/components/Pricing.jsx`
- `src/components/MTDSection.jsx`
- `src/components/FAQ.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`
- `src/components/Icons.jsx`

## Change Management Notes for Future Agents
- Keep content and tone aligned with UK CIS tradies.
- Do not introduce backend dependencies unless explicitly requested.
- Keep Netlify Forms static-compatible.
- Avoid replacing brand palette unless asked.
- Validate with `npm run build` after UI/content edits.

## Commit Message Convention
- Use Conventional Commits format:
  - `<type>(<scope>): <summary>`
- Preferred types for this repo:
  - `feat`, `fix`, `docs`, `refactor`, `style`, `chore`
- Keep summary imperative and concise (roughly 50-72 chars).
- Good examples:
  - `feat(site): launch single-page Mail My Books marketing site`
  - `fix(contact): handle Netlify form errors and loading state`
  - `docs(repo): sync README and AGENTS with current scope`
