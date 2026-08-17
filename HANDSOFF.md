# Handoff — churchcleaningsouthsaintpaul.com

## Status: READY TO LAUNCH

## What was done

- Wired the three on-site quote/contact forms (home, `/contact/`, `/request-a-quote/`) to a new Vercel serverless function, `api/contact.js`, which submits leads to the CRM `push_lead` API server-side.
- CRM Bearer token is read from the `CRM_API_TOKEN` environment variable — never hardcoded, never committed. Set it in Vercel Project Settings → Environment Variables before the form will work in production.
- Added UTM source capture (`?utm_source=` query param, falling back to `document.referrer`) — passed through to the CRM lead payload's `utm_source` field.
- Removed a stray malformed directory left over from a brace-expansion mistake (`{about,contact,...}`).
- Added `.gitignore` and `.env.example`.
- Audited all pages for placeholder tokens, `{{ }}` template markers, and lorem ipsum — none found (see `QA.md`, previously passed).
- Confirmed no hardcoded secrets, API keys, or tokens anywhere in the committed codebase.

## Required manual step before go-live

- In the Vercel dashboard for this project, add environment variable `CRM_API_TOKEN` with the token value (see the CRM-QM API doc provided separately — do not commit it to the repo). Apply to Production (and Preview if desired).

## Not done / explicitly out of scope

- No automated tests — per instruction, this integration is not covered by CI/testing.
- No CLI-based Vercel deploy checks — the repo is already connected to Vercel's Git integration; pushing to `main` triggers the deploy automatically.

## Notes

- The CRM API expects a single `industry` code and `zip`; both are currently hardcoded in `api/contact.js` (industry `23`, zip `55075` — South Saint Paul) since this microsite only serves one metro/vertical.
- Form errors surface inline to the user with a fallback to call the business phone number.
