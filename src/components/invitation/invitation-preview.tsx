import Image from "next/image";
import { CalendarDays, Copy, MapPin, MessageCircle, Share2 } from "lucide-react";
import type { Invitation } from "@/lib/types";

type InvitationPreviewProps = {
  invitation: Invitation;
};

export function InvitationPreview({ invitation }: InvitationPreviewProps) {
  return (
    <article className="w-full max-w-[380px] overflow-hidden rounded-[28px] border border-[#eaded8] bg-[#fffaf7] shadow-2xl shadow-[#bd5b47]/10">
      <div className="relative aspect-[4/5]">
        <Image
          src={invitation.heroImageUrl}
          alt={`${invitation.groomName} ${invitation.brideName} 모바일 청첩장 대표 이미지`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/8 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-7 text-white">
          <p className="text-sm">We invite you</p>
          <h2 className="mt-2 text-4xl font-semibold">
            {invitation.groomName} & {invitation.brideName}
          </h2>
          <p className="mt-3 flex items-center gap-2 text-sm">
            <CalendarDays size={16} />
            {invitation.weddingDateLabel}
          </p>
        </div>
      </div>
      <div className="space-y-5 p-6">
        <section>
          <p className="text-center text-sm leading-7 text-[#746965]">{invitation.greeting}</p>
        </section>
        <section className="rounded-lg bg-white p-4">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <MapPin size={16} className="text-[#bd5b47]" />
            {invitation.venueName}
          </p>
          <p className="mt-2 text-sm text-[#746965]">{invitation.venueAddress}</p>
        </section>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "계좌", icon: Copy },
            { label: "방명록", icon: MessageCircle },
            { label: "공유", icon: Share2 }
          ].map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className="flex h-16 flex-col items-center justify-center gap-1 rounded-md border border-[#eaded8] bg-white text-xs font-semibold"
                type="button"
              >
                <Icon size={17} className="text-[#6f8978]" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
}
