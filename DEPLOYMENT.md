# Deployment checklist

## 1. GitHub

1. Create a new GitHub repository.
2. Add it as the remote:

```bash
git remote add origin git@github.com:YOUR_USER/sigurnost-borvin.git
git push -u origin main
```

## 2. Supabase

1. Create a new Supabase project.
2. Open SQL Editor and run `supabase/schema.sql`.
3. Copy these values into Vercel Environment Variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

Keep `SUPABASE_SERVICE_ROLE_KEY` server-side only. Do not expose it in client components.

## 3. OpenAI

Add:

```bash
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-5.5
```

The admin AI endpoint uses the OpenAI Responses API from a server route.

## 4. Admin

Add:

```bash
ADMIN_PASSWORD=...
ADMIN_SESSION_SECRET=...
```

Generate `ADMIN_SESSION_SECRET` as a long random string.

## 5. Vercel

1. Import the GitHub repository into Vercel.
2. Framework preset: Next.js.
3. Build command: `pnpm build`.
4. Install command: `pnpm install`.
5. Add all variables from `.env.example`.
6. Set `NEXT_PUBLIC_SITE_URL` to the production domain.

## 6. SEO checks

After deploy, verify:

- `/sitemap.xml`
- `/robots.txt`
- page title and description for every main route
- Google Search Console ownership
- Open Graph preview with the production domain
