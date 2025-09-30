
# SarosFlow - Next.js scaffold (auto-generated)

This project was generated from Stitch-exported HTML screens and packaged into a minimal Next.js scaffold for rapid handoff.

## What is included
- Next.js app with pages:
  - `/` (Landing page)
  - `/app` (Dashboard) - renders original Dashboard HTML
  - `/app/strategy` - renders original Strategy HTML
  - `/app/analytics` - renders original Analytics HTML
  - `/app/settings` - renders original Settings HTML
- Basic Header / Sidebar components and Tailwind CDN included in globals for quick load.
- Wallet adapter dependencies listed in package.json (boilerplate only).

## How to run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

Note: The Stitch HTML is injected into pages using `dangerouslySetInnerHTML` to preserve layout quickly.
For production use, a developer should refactor the HTML into React components and integrate the Saros DLMM SDK.

