import {
  CalendarDays,
  Copy,
  GalleryHorizontalEnd,
  Heart,
  MapPin,
  MessageCircle,
  Music,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InvitationPreview } from "@/components/invitation/invitation-preview";
import { mvpFeatures, sectionOptions } from "@/lib/constants";
import { sampleInvitation } from "@/lib/sample-data";

const flow = ["로그인", "템플릿 선택", "섹션 편집", "미리보기", "공유"];

const iconMap = {
  banner: Heart,
  gallery: GalleryHorizontalEnd,
  carousel: GalleryHorizontalEnd,
  map: MapPin,
  account: Copy,
  guestbook: MessageCircle,
  music: Music,
  schedule: CalendarDays,
  share: Share2
};

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-8 md:min-h-[calc(100svh-64px)] md:grid-cols-[minmax(0,1fr)_420px] md:px-8 lg:px-10">
        <div className="flex flex-col justify-center gap-10 py-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#bd5b47]">Mobile invitation builder</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
              10분 안에 완성하는 나만의 모바일 청첩장
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#746965] md:text-lg">
              사진, 음악, 지도, 계좌번호, 방명록, 공유 링크까지 한 흐름에서 편집하는 제작자
              중심의 청첩장 웹앱입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/invitations/new" size="lg">
                청첩장 만들기
              </Button>
              <Button href="/sample" variant="secondary" size="lg">
                샘플 보기
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-5">
            {flow.map((item, index) => (
              <div key={item} className="border-t border-[#eaded8] pt-3">
                <p className="font-mono text-xs text-[#bd5b47]">0{index + 1}</p>
                <p className="mt-1 text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <InvitationPreview invitation={sampleInvitation} />
        </div>
      </section>

      <section id="mvp-sections" className="scroll-mt-20 border-y border-[#eaded8] bg-white/62">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[280px_1fr] md:px-8 lg:px-10">
          <div>
            <p className="text-sm font-semibold text-[#bd5b47]">MVP Sections</p>
            <h2 className="mt-3 text-2xl font-semibold">처음부터 필요한 편집 단위</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectionOptions.map((section) => {
              const Icon = iconMap[section.type];

              return (
                <div key={section.type} className="rounded-lg border border-[#eaded8] bg-white p-4">
                  <Icon size={20} className="text-[#6f8978]" />
                  <h3 className="mt-4 font-semibold">{section.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#746965]">{section.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-12 md:px-8 lg:px-10">
        <div className="grid gap-3 md:grid-cols-4">
          {mvpFeatures.map((feature) => (
            <div key={feature.title} className="rounded-lg border border-[#eaded8] bg-white p-5">
              <p className="font-semibold">{feature.title}</p>
              <p className="mt-2 text-sm leading-6 text-[#746965]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
