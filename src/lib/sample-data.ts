import type { Invitation } from "@/lib/types";

export const sampleInvitation: Invitation = {
  id: "sample",
  slug: "jun-young-and-mina",
  title: "OO과 OO의 결혼식",
  groomName: "OO",
  brideName: "OO",
  weddingDate: "2026-10-24T12:30:00+09:00",
  weddingDateLabel: "2026.10.24 SAT 12:30",
  venueName: "라움 웨딩홀 3층 그레이스홀",
  venueAddress: "서울 강남구 언주로 564",
  greeting:
    "서로의 계절을 함께 걸어가려 합니다. 소중한 날에 따뜻한 마음으로 함께해 주세요.",
  heroImageUrl:
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80",
  templateId: "romantic",
  themeColor: "#bd5b47",
  isPublished: true
};
