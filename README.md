# Cam Wells Paving — Next.js Website

Migration from WordPress to Next.js 14 + Tailwind + Railway.

**Live site:** https://camwellspaving.com.au  
**Client:** Cam Wells (sompav@optusnet.com.au) | 0407 334 139  
**Agency:** Bully Marketing (angrybullymarketing@gmail.com)

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Railway** deployment (auto-deploy from main)

## Pages

| Route | Title | SEO Target |
|-------|-------|-----------|
| `/` | Driveways Melbourne | driveways melbourne |
| `/brick-paving-melbourne/` | Brick Paving Melbourne | brick paving melbourne |
| `/concrete-driveways-melbourne/` | Concrete Driveways Melbourne | concrete driveways melbourne |
| `/driveway-paving-melbourne/` | Driveway Paving Melbourne | driveway paving melbourne |
| `/exposed-aggregate-concrete-driveways-melbourne/` | Exposed Aggregate Concrete Driveways Melbourne | exposed aggregate concrete driveways melbourne |
| `/exposed-aggregate-concreters/` | Exposed Aggregate Concreters | exposed aggregate concreters |
| `/cam-wells-paving-portfolio/` | Portfolio | cam wells paving portfolio |
| `/about-us/` | About Cam Wells Paving | about us |
| `/contact-us/` | Contact | free quote |
| `/terms-and-conditions/` | Terms & Conditions | — |

## Dev

```bash
npm install
npm run dev
```

## Railway Deployment

1. Create new Railway service → connect to `StrategyCentral/camwells-paving`
2. Set `PORT` env var (Railway injects automatically)
3. Start command: `npm start`
4. Build command: `npm run build`
5. Point custom domain: `camwellspaving.com.au`

## SEO Notes

- All canonical URLs preserved from WordPress
- `trailingSlash: true` in next.config.js to match WP URL structure
- Google verification tag in layout.tsx
- Sitemap auto-generated at `/sitemap.xml`
- Robots.txt at `/robots.txt`

## Phase 2 — SEO Silos (To Build)

Topic clusters for deep SEO:
1. Driveways Melbourne hub + suburb pages
2. Brick Paving Melbourne hub
3. Exposed Aggregate hub + Mornington Peninsula pages
4. Concrete Driveways hub
5. Local area pages (Bayside, Mornington Peninsula, Glen Waverley, etc.)
