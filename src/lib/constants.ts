import type { SectionType, TemplateId } from "@/lib/types";

export const templates: Array<{
  id: TemplateId;
  label: string;
  description: string;
}> = [
  { id: "simple", label: "심플형", description: "여백과 정보 전달 중심의 기본 템플릿" },
  { id: "romantic", label: "감성형", description: "사진과 문장을 부드럽게 보여주는 템플릿" },
  { id: "classic", label: "클래식형", description: "격식 있는 청첩장 톤에 맞춘 템플릿" },
  { id: "modern", label: "모던형", description: "선명한 대비와 간결한 구성의 템플릿" },
  { id: "flower", label: "플라워형", description: "따뜻한 색감과 장식 요소를 더한 템플릿" }
];

export const sectionOptions: Array<{
  type: SectionType;
  label: string;
  description: string;
}> = [
  { type: "banner", label: "메인 배너", description: "대표 이미지, 제목, 부제목을 설정합니다." },
  { type: "gallery", label: "갤러리", description: "여러 장의 사진을 업로드하고 순서를 바꿉니다." },
  { type: "carousel", label: "카라솔", description: "선택한 사진을 슬라이드 형태로 보여줍니다." },
  { type: "map", label: "지도", description: "예식장 위치와 길찾기 버튼을 제공합니다." },
  { type: "account", label: "계좌번호", description: "신랑, 신부, 부모님 계좌를 복사할 수 있습니다." },
  { type: "guestbook", label: "방명록", description: "하객의 축하 메시지를 받고 관리합니다." },
  { type: "music", label: "음악", description: "BGM을 선택하거나 파일을 등록합니다." },
  { type: "schedule", label: "일정", description: "예식 시간과 D-day를 안내합니다." },
  { type: "share", label: "공유", description: "카카오톡 공유, 링크 복사, QR을 준비합니다." }
];

export const mvpFeatures = [
  {
    title: "제작자 편집",
    description: "기본 정보, 템플릿, 섹션 노출 여부를 하나의 편집 플로우에서 관리합니다."
  },
  {
    title: "공개 청첩장",
    description: "하객이 모바일에서 바로 확인할 수 있는 공개 페이지와 OG 메타를 제공합니다."
  },
  {
    title: "하객 인터랙션",
    description: "방명록, 계좌 복사, 지도 열기, 공유 기능을 모바일 UX에 맞춥니다."
  },
  {
    title: "확장 구조",
    description: "RSVP, 음악, 통계, 결제, 관리자 기능을 단계적으로 붙일 수 있게 나눕니다."
  }
];
