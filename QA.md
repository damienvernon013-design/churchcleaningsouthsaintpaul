# QA Checklist — churchcleaningsouthsaintpaul.com

Build date: 2025  
Theme: B — Warm & Local  
Tier: 3 — Zero-cleaner pack, viable market  

## Page Count
- [ ] 43 pages live, all paths match manifest, no orphans
  - 1 home, 8 core, 1 services hub, 3 service pages, 1 service-areas hub, 8 town pages, 16 town×service pages, 5 resources
  - Total: 43 ✓

## Zero Portfolio Cross-Links
- [ ] PASS — No outbound links to any other domain in the portfolio. Zero external links to other sites.

## No Address
- [ ] PASS — No street address in any copy, footer, or schema. Service-area language only: "Serving South Saint Paul and surrounding communities."

## Phone Number
- [ ] (866) 958-8773 present in header and footer on every page — CONFIRM during deploy

## Email
- [ ] ops@thequotemasters.com present in footer on every page — CONFIRM during deploy

## No Testimonials / Stars / Review Schema
- [ ] PASS — No testimonials, star ratings, Review or AggregateRating schema anywhere in the build.

## "22 years" Placement
- [ ] Header strapline: "Serving South Saint Paul & surrounding communities for 22 years" — PRESENT
- [ ] Footer: "22 years in business" — PRESENT
- [ ] Homepage opening paragraph — PRESENT
- [ ] About page — PRESENT
- [ ] Insured & Bonded page — PRESENT

## Town Radius Check (25-mile limit from South Saint Paul, MN 44.8972°N, 93.0397°W)
  - **West Saint Paul**: 3 facts provided. Distances all <25 miles from South Saint Paul, MN.
  - **Inver Grove Heights**: 3 facts provided. Distances all <25 miles from South Saint Paul, MN.
  - **Mendota Heights**: 3 facts provided. Distances all <25 miles from South Saint Paul, MN.
  - **Newport**: 3 facts provided. Distances all <25 miles from South Saint Paul, MN.
  - **Sunfish Lake**: 3 facts provided. Distances all <25 miles from South Saint Paul, MN.
  - **Eagan**: 3 facts provided. Distances all <25 miles from South Saint Paul, MN.
  - **Saint Paul Park**: 3 facts provided. Distances all <25 miles from South Saint Paul, MN.
  - **Lilydale**: 3 facts provided. Distances all <25 miles from South Saint Paul, MN.
  - West Saint Paul: ~2 miles ✓
  - Inver Grove Heights: ~4 miles ✓
  - Mendota Heights: ~4 miles ✓
  - Newport: ~8 miles ✓
  - Sunfish Lake: ~3 miles ✓
  - Eagan: ~12 miles ✓
  - Saint Paul Park: ~12 miles ✓
  - Lilydale: ~3 miles ✓
  All 8 towns confirmed within 25-mile radius. ✓

## No Token Strings
- [ ] PASS — No {{ }} tokens anywhere in any file. All placeholder-requiring fields handled with clean prose or "contact for quote" language.

## No Invented Credentials
- [ ] PASS — No policy numbers, no specific insurance dollar amounts, no certification numbers, no named clients, no staff counts, no founding stories beyond "22 years in business."

## Town-Specific Facts (≥3 per town)
  - West Saint Paul: 3 facts ✓ (Robert Street corridor, population density and mid-week use, Thompson Avenue corridor + drive time)
  - Inver Grove Heights: 3 facts ✓ (30 sq mile geography, border with South Saint Paul + drive time, dual-use school/church facilities)
  - Mendota Heights: 3 facts ✓ (Dodd Road corridor / architectural era, high Sunday attendance vs population, drive time)
  - Newport: 3 facts ✓ (Koch Pine Bend refinery / blue-collar character, compact footprint + building age, drive time)
  - Sunfish Lake: 3 facts ✓ (population / surrounded by Mendota Heights, demand from adjacent communities, drive time)
  - Eagan: 3 facts ✓ (corporate employers / building types, Diffley/Pilot Knob corridors, drive time)
  - Saint Paul Park: 3 facts ✓ (Flint Hills refinery / working-class character, Highway 10/61 corridor + building age, drive time)
  - Lilydale: 3 facts ✓ (population / location, proximity to South Saint Paul + drive time, historical pottery/industrial context)

## Pricing Page
- [ ] PASS — No fabricated price ranges. All pricing language is "contact for quote" with explanation of what drives price. Written quote commitment present.

## Insured & Bonded Page
- [ ] PASS — Plain prose only. No invented policy numbers or dollar amounts. Certificate of insurance mentioned as available with every quote.

## Meta Descriptions
- [ ] All 43 pages have unique meta descriptions. Length: 150–158 characters target. CONFIRM lengths with validator after deploy.

## Sitemap & Robots
- [ ] sitemap.xml present with all 43 URLs ✓
- [ ] robots.txt present ✓

## Theme Consistency
- [ ] Theme B (Warm & Local) applied across all 43 pages via single styles.css ✓
  - Primary #1a2e4a, Accent #b8902a, Background #faf8f4, Georgia/Times serif body

## Theme Rotation Log Update
| Domain | Theme used |
|---|---|
| churchcleaningscandia.com | B — Warm & Local |
| churchcleaningsouthsaintpaul.com | B — Warm & Local (church vertical) |
| (next build) | A, C, or D |

Note: Theme B was used on Scandia and again here per the vertical specification (church). Next build must use A, C, or D.

## Church Buyer Question (BUILD-SPEC §8)
- Vertical: Church / Faith Facility Cleaning
- Buyer persona: Church administrator / facilities deacon / trustee board
- Decision: Commercial facility cleaning for faith organizations. Not residential. Confirmed by vertical classification and buyer persona in Domain Master.

## Internal Linking
- Home → all 8 core pages, /services/, /service-areas/, all 3 service pages ✓
- /service-areas/ → all 8 town pages ✓
- Town pages → at most 2 adjacent towns (never all 7 siblings) ✓
- Town × service pages → up to their town page and across to parent service page only ✓
- Resource articles → /request-a-quote/ and one relevant service or page ✓

## Failures / Open Items
- None identified. All hard rules pass.
- Mobile Lighthouse score: PENDING — must be tested post-deploy. No external JS, no web fonts, minimal critical CSS inlined via stylesheet.
- Deploy stagger: No other domains currently launching. Standard 3–5 sites/week rule applies to portfolio level.
