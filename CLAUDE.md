# Wedding Card Design — CLAUDE.md

## 프로젝트 개요

예비 신랑·신부가 10분 안에 모바일 청첩장을 만들고 공유할 수 있는 웹앱.

- 제작자: 로그인 후 청첩장 생성·편집·공유
- 하객: 공개 링크로 접속해 예식 정보 확인, 방명록 작성, 계좌 복사, 지도 열기

## 기술 스택

| 영역 | 도구 |
|---|---|
| 프레임워크 | Next.js 15 App Router |
| UI | React 19, Tailwind CSS 4, Framer Motion, lucide-react |
| 상태 관리 | Zustand (`src/store/editor-store.ts`) |
| 폼·검증 | React Hook Form + Zod |
| 백엔드 | Supabase Auth, PostgreSQL, Storage |
| 패키지 매니저 | yarn |

## 디렉터리 구조

```
src/
  app/
    page.tsx                  # 랜딩 페이지
    login/page.tsx            # 로그인
    invitations/new/page.tsx  # 편집기 (현재 정적 UI)
    sample/page.tsx           # 샘플 청첩장
  components/
    ui/button.tsx             # 공용 버튼
    layout/header.tsx         # 전역 헤더
    layout/footer.tsx         # 전역 푸터
    invitation/
      invitation-preview.tsx  # 모바일 미리보기 컴포넌트
  lib/
    types.ts                  # 핵심 타입 (Invitation, InvitationSection 등)
    constants.ts              # templates, sectionOptions, mvpFeatures
    utils.ts                  # 유틸 함수
    sample-data.ts            # 목업 데이터
    supabase/
      client.ts               # 브라우저용 Supabase 클라이언트
      server.ts               # 서버 컴포넌트용 Supabase 클라이언트
  store/
    editor-store.ts           # Zustand 편집기 상태 (templateId, visibleSections)
supabase/                     # 마이그레이션 등 DB 관련 파일
docs/
  PRODUCT_PLAN.md             # 제품 기획 (플로우, MVP/Beta/출시 범위)
  DATABASE.md                 # Supabase 테이블 스키마
```

## 핵심 타입

```ts
// src/lib/types.ts
type SectionType = "banner" | "gallery" | "carousel" | "map" | "account" | "guestbook" | "music" | "schedule" | "share";
type TemplateId = "simple" | "romantic" | "classic" | "modern" | "flower";

type Invitation = { id, slug, title, groomName, brideName, weddingDate, venueName, venueAddress, greeting, heroImageUrl, templateId, themeColor, isPublished }
type InvitationSection = { id, invitationId, type: SectionType, order, isVisible, content }
type GuestbookEntry = { id, invitationId, name, message, isHidden, createdAt }
```

## 데이터베이스 테이블 (Supabase)

`profiles` · `invitations` · `invitation_sections` · `invitation_images` · `guestbook_entries` · `accounts` · `rsvps`

자세한 스키마는 [docs/DATABASE.md](docs/DATABASE.md) 참고.

## 개발 범위 (단계별)

| 단계 | 주요 기능 |
|---|---|
| MVP | 로그인, 청첩장 CRUD, 템플릿 5종, 이미지 업로드, 지도, 계좌, 방명록, 공유 링크, 공개 페이지 |
| Beta | RSVP, 음악, QR, 방문 통계, 섹션 순서 변경, 카카오톡 공유 |
| 정식 | 결제, 프리미엄 템플릿, 관리자 페이지, 커스텀 URL |

## 현재 구현 상태

- 랜딩 페이지 완성 (정적)
- 편집기 UI 구조 완성 (`/invitations/new`) — 아직 정적, Supabase 연동 없음
- `useEditorStore` — templateId, visibleSections 상태 관리 준비됨 (편집기에 아직 연결 안 됨)
- Supabase 클라이언트 설정 완료, 실제 DB 연동은 미구현

## 환경 변수

`.env.example`을 복사해 `.env.local`에 Supabase URL·anon key 등을 채울 것.

## 개발 명령어

```bash
yarn dev          # 개발 서버
yarn build        # 빌드
yarn typecheck    # 타입 체크
yarn lint         # ESLint
yarn format       # Prettier
```

## 코드 컨벤션

- 컴포넌트: `src/components/` 하위, 기능별 하위 폴더로 분류
- 색상 팔레트: `#bd5b47` (포인트 레드), `#746965` (텍스트 서브), `#eaded8` (보더), `#6f8978` (그린 아이콘)
- 서버 컴포넌트 기본, 클라이언트 상호작용 필요 시 `"use client"` 추가
- Tailwind 4 사용 (`@tailwindcss/postcss`)
