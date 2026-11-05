# KenyaMatch - Location-Based Dating for Kenya

A Next.js starter for a Kenya-focused online dating app with location-based matching.

## Features (MVP Scaffold)

- Landing page with Kenyan localization
- Discover page with browser Geolocation + mock nearby profiles
- Profile setup
- Login / Signup forms
- County filters (Nairobi, Mombasa, Kisumu, Kiambu, etc.)
- Responsive Tailwind UI

## Tech Stack

- **Frontend**: Next.js (App Router) + TypeScript + Tailwind CSS
- **Hosting**: Netlify
- **Source**: GitHub
- **Recommended Backend** (to add): Supabase (Auth, Postgres, Realtime, Storage) or Firebase

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Netlify

1. Push this repo to GitHub (already done if using the connected flow).
2. In Netlify: New site from Git → select this repo.
3. Build command: `npm run build`
4. Publish directory: `.next` (or let Netlify auto-detect with the Next.js adapter).

The `netlify.toml` is included.

## Next Steps for Production

1. **Auth**: Integrate Supabase Auth or NextAuth.
2. **Database**: Store profiles, locations, matches, messages.
3. **Location**: Store lat/lng, calculate distance with Haversine formula or PostGIS.
4. **Matching Algorithm**: Mutual likes → matches.
5. **Real-time Chat**: Supabase Realtime or Socket.io.
6. **Photo Uploads**: Supabase Storage or Cloudinary.
7. **Payments**: M-Pesa (Daraja API) for premium.
8. **Safety**: Report/block system.
9. **Notifications**: Push or email.

## Localization Ideas

- County / town matching
- Sheng language support
- Modes: Student, Professional, Church
- Tribe, religion, lifestyle filters

Built as a starting point for a Kenya dating platform.
