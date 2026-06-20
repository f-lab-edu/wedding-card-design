create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  email text,
  provider text,
  created_at timestamptz not null default now()
);

create table if not exists public.invitations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  slug text not null unique,
  title text not null,
  groom_name text not null,
  bride_name text not null,
  wedding_date timestamptz not null,
  wedding_hall text not null,
  address text not null,
  template_id text not null default 'simple',
  theme_color text not null default '#bd5b47',
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.invitation_sections (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references public.invitations(id) on delete cascade,
  type text not null,
  sort_order integer not null default 0,
  is_visible boolean not null default true,
  content jsonb not null default '{}'::jsonb
);

create table if not exists public.invitation_images (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references public.invitations(id) on delete cascade,
  section_id uuid references public.invitation_sections(id) on delete set null,
  image_url text not null,
  sort_order integer not null default 0
);

create table if not exists public.guestbook_entries (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references public.invitations(id) on delete cascade,
  name text not null,
  message text not null,
  password_hash text,
  is_hidden boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.accounts (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references public.invitations(id) on delete cascade,
  side text not null,
  bank_name text not null,
  account_number text not null,
  holder_name text not null
);

create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references public.invitations(id) on delete cascade,
  name text not null,
  attendance text not null,
  meal boolean,
  companion_count integer not null default 0,
  message text,
  created_at timestamptz not null default now()
);
