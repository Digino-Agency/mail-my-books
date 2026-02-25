# Mail My Books - Marketing Site

Production-ready single-page marketing website for **Mail My Books**, a UK CIS bookkeeping service focused on self-employed tradespeople.

Built with React + Vite + Tailwind CSS and configured for static deployment on Netlify with Netlify Forms.

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- PostCSS + Autoprefixer
- Netlify (static hosting + form handling)

## Features

- Single-page layout with smooth scroll anchor navigation
- Sticky header with logo, section links, and WhatsApp CTA
- Mobile-first responsive design
- Nunito Sans typography via Google Fonts
- Brand color system in Tailwind config
- Marketing sections:
  - Hero
  - How it works
  - Pricing
  - MTD explainer
  - FAQ (accessible accordion)
  - Contact form
- Netlify Forms support:
  - `netlify` + `data-netlify="true"`
  - hidden `form-name` field
  - honeypot spam field
  - optional reCAPTCHA block (commented)
- Client-side success state on form submit

## Project Structure

```text
mail-my-books/
|-- public/
|   |-- mail-my-books-logo.png
|   |-- tradie-taking-photos.png
|-- src/
|   |-- components/
|   |   |-- Contact.jsx
|   |   |-- FAQ.jsx
|   |   |-- Footer.jsx
|   |   |-- Header.jsx
|   |   |-- Hero.jsx
|   |   |-- HowItWorks.jsx
|   |   |-- Icons.jsx
|   |   |-- MTDSection.jsx
|   |   |-- Pricing.jsx
|   |-- config/
|   |   |-- site.js
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
|-- index.html
|-- netlify.toml
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
```

## Local Development

### 1) Install dependencies

```bash
npm install
```

### 2) Run dev server

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`).

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Deployment (Netlify)

This project already includes [netlify.toml](./netlify.toml):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Netlify UI settings

- Build command: `npm run build`
- Publish directory: `dist`

### Deploy steps

1. Push project to your Git provider.
2. Create a new Netlify site from that repo.
3. Confirm build command and publish directory above.
4. Deploy.

## Netlify Form Setup

Contact form is in `src/components/Contact.jsx` and includes:

- `name="contact"`
- `method="POST"`
- `action="/"`
- `netlify`
- `data-netlify="true"`
- `data-netlify-honeypot="bot-field"`
- `<input type="hidden" name="form-name" value="contact" />`

### Spam protection

- Honeypot field included (`bot-field`).
- Optional reCAPTCHA block is present but commented out:

```jsx
{/* Optional Netlify reCAPTCHA block
<div data-netlify-recaptcha="true"></div>
*/}
```

If you enable reCAPTCHA, uncomment this block and configure it in Netlify.

## Branding and Content Updates

### Logo

- Primary logo path: `public/mail-my-books-logo.png`
- Used in header and footer.

### WhatsApp number

Replace the placeholder WhatsApp number in these files:

- `src/config/site.js`

Current placeholder:

```text
https://wa.me/447000000000?... 
```

### Email address

Current contact email:

```text
hello@mailmybooks.co.uk
```

Update in `src/config/site.js` if needed.
Note: email is configured for contact operations but currently hidden as a front-end CTA by design.

### Service scope

This offer is CIS sole trader focused:

- No VAT
- No payroll
- No limited company accounts

## Design System

Tailwind theme extensions are in `tailwind.config.js`.

Brand palette:

- Primary: `#0F5B4F`
- Primary hover: `#0B463D`
- Accent: `#F59E0B`
- Accent hover: `#D97706`
- Text: `#111827`
- Muted: `#6B7280`
- Background: `#FFFFFF`
- Alt background: `#F9FAFB`
- Borders: `#E5E7EB`

Reusable utility classes live in `src/index.css` (`.container-site`, `.btn-primary`, `.btn-accent`, `.section-title`).

## Accessibility Notes

- Semantic sectioning and headings used across page
- Keyboard-friendly FAQ accordion with `aria-expanded` / `aria-controls`
- Focus styles enabled on CTA/button elements
- Sufficient color contrast for key text and controls

## Performance Notes

- Vite production build outputs optimized static assets
- Minimal runtime dependencies
- Mobile-first responsive styles
- Optimized for Lighthouse-friendly static deployment

## Troubleshooting

### Form submissions not appearing in Netlify

- Confirm the deployed HTML contains the full Netlify form attributes.
- Ensure `form-name` hidden input exactly matches `name="contact"`.
- Confirm site is deployed from latest commit.
- Submit once from production URL to initialize form detection if needed.

### Build fails locally

- Ensure Node.js LTS is installed.
- Delete `node_modules` and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

(Windows PowerShell equivalent)

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - production build
- `npm run preview` - preview production build locally

## License

Private project for Mail My Books.
