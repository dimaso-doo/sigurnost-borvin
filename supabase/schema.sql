create extension if not exists pgcrypto;

create table if not exists public.content_drafts (
  id uuid primary key default gen_random_uuid(),
  source text not null default 'admin_ai_chat',
  prompt text not null,
  response text not null,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  content_key text not null unique,
  locale text not null default 'sr',
  value jsonb not null,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.content_drafts enable row level security;
alter table public.site_content enable row level security;

create policy "Service role manages content drafts"
  on public.content_drafts
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

create policy "Service role manages site content"
  on public.site_content
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

create policy "Published site content is readable"
  on public.site_content
  for select
  using (published = true);
