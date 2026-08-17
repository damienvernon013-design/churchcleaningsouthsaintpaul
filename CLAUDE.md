# churchcleaningsouthsaintpaul.com

Static microsite (43 pages, plain HTML/CSS, no build step) deployed on Vercel.

## Structure

- Static pages: home, core pages, `/services/`, `/service-areas/` (8 towns x cross-linked service pages), `/resources/`
- `styles.css` — single stylesheet, Theme B ("Warm & Local")
- `form.js` — client-side handler for all three quote/contact forms (home, `/contact/`, `/request-a-quote/`); submits via fetch to `/api/contact`
- `api/contact.js` — Vercel serverless function (Node). Proxies form submissions to the CRM PushLead API server-side so the CRM Bearer token never reaches the client.

## Contact form / CRM integration

- Endpoint: `POST /api/contact` (local), forwards to `https://thequotemasters.com/crm_api/api.php?action=push_lead`
- Auth token lives in the `CRM_API_TOKEN` environment variable (set in Vercel project settings — Production/Preview/Development). Never hardcode it in source.
- See `.env.example` for the required variable name.
- UTM source is captured client-side from `?utm_source=` query param (falls back to `document.referrer`) and passed through to the CRM payload.

## Conventions

- No hardcoded secrets — anything CRM/API related must come from `process.env`.
- No testing/CI configured for this repo (per project decision — CRM integration is not covered by automated tests).
- Deploy is via Vercel's Git integration (already connected) — pushing to `main` triggers a deploy. No Vercel CLI usage needed.
