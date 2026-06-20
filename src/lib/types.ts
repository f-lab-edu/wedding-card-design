export type SectionType =
  | "banner"
  | "gallery"
  | "carousel"
  | "map"
  | "account"
  | "guestbook"
  | "music"
  | "schedule"
  | "share";

export type TemplateId = "simple" | "romantic" | "classic" | "modern" | "flower";

export type Invitation = {
  id: string;
  slug: string;
  title: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  weddingDateLabel: string;
  venueName: string;
  venueAddress: string;
  greeting: string;
  heroImageUrl: string;
  templateId: TemplateId;
  themeColor: string;
  isPublished: boolean;
};

export type InvitationSection = {
  id: string;
  invitationId: string;
  type: SectionType;
  order: number;
  isVisible: boolean;
  content: Record<string, unknown>;
};

export type GuestbookEntry = {
  id: string;
  invitationId: string;
  name: string;
  message: string;
  isHidden: boolean;
  createdAt: string;
};
