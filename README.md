# College Website Demo

A responsive college website demo built with Next.js, ready to deploy on Vercel with Neon Postgres backend storage.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
copy .env.local.example .env.local
```

3. Add your Neon Postgres connection string to `.env.local`:

```bash
DATABASE_URL=postgresql://username:password@host:port/database
```

4. Run locally:

```bash
npm run dev
```

## Deployment

### Vercel

1. Push this project into a Git repository.
2. Create a new Vercel project and connect the repository.
3. In the Vercel dashboard, add this environment variable:

- `DATABASE_URL` = your Neon Postgres connection string

4. Deploy the project.

### Neon setup

- Create a Neon Postgres database in your Neon dashboard.
- Use the provided connection string for `DATABASE_URL`.
- The application will create the `contact_enquiries` table automatically when the first form submission arrives.

## Project structure

- `app/` — Next.js pages and API routes
- `app/api/contact/route.ts` — contact form backend API
- `lib/db.ts` — Neon Postgres helper
- `public/images/` — local demo SVG assets
- `vercel.json` — Vercel deployment config

## Notes

- Keep `.env.local` private and do not commit it.
- The API route is server-side and stores enquiries in Neon.
