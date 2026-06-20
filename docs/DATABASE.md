# Supabase 데이터 구조

초기 MVP는 Supabase Auth, PostgreSQL, Storage를 기준으로 설계한다.

## Tables

### profiles

- id uuid primary key, auth.users 참조
- name text
- email text
- provider text
- created_at timestamptz

### invitations

- id uuid primary key
- user_id uuid references profiles(id)
- slug text unique
- title text
- groom_name text
- bride_name text
- wedding_date timestamptz
- wedding_hall text
- address text
- template_id text
- theme_color text
- is_published boolean
- created_at timestamptz
- updated_at timestamptz

### invitation_sections

- id uuid primary key
- invitation_id uuid references invitations(id)
- type text
- sort_order integer
- is_visible boolean
- content jsonb

### invitation_images

- id uuid primary key
- invitation_id uuid references invitations(id)
- section_id uuid references invitation_sections(id)
- image_url text
- sort_order integer

### guestbook_entries

- id uuid primary key
- invitation_id uuid references invitations(id)
- name text
- message text
- password_hash text
- is_hidden boolean
- created_at timestamptz

### accounts

- id uuid primary key
- invitation_id uuid references invitations(id)
- side text
- bank_name text
- account_number text
- holder_name text

### rsvps

- id uuid primary key
- invitation_id uuid references invitations(id)
- name text
- attendance text
- meal boolean
- companion_count integer
- message text
- created_at timestamptz
