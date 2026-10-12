# Maison de Parfum

A premium perfume e-commerce storefront built with Next.js. The app includes a luxury storefront, product catalog, shopping cart, Stripe checkout integration, and deployment-ready structure.

## Features
- Luxury landing page and product showcase
- Product detail pages and category filters
- Cart with local storage persistence
- Backend API for product and checkout endpoints
- Stripe checkout session support with graceful demo mode
- Premium responsive design for desktop and mobile

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Stripe setup

1. Create a Stripe account.
2. Add your Stripe secret key to `.env.local`:

```bash
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

3. Restart the dev server.

When Stripe is not configured, the app falls back to a demo checkout flow so the UX still works without a live key.

## Deployment

This project is ready to deploy to Vercel.

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Add the same environment variables in the Vercel dashboard.
4. Deploy.

## Tech stack
- Next.js 14
- React
- TypeScript
- Stripe

## Project structure
- `app/` – routes and UI pages
- `app/api/` – backend endpoints
- `data/` – product catalog
- `lib/` – Stripe configuration and helpers

## Notes
The app uses demo asset data and mock product records to keep the storefront fully functional without a database setup. If you want, we can extend this into a MongoDB-backed storefront with admin management and user authentication next.
