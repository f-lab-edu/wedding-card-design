import { Eye, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InvitationPreview } from "@/components/invitation/invitation-preview";
import { sectionOptions, templates } from "@/lib/constants";
import { sampleInvitation } from "@/lib/sample-data";

export default function NewInvitationPage() {
  return (
    <main>
      <header className="border-b border-[#eaded8] bg-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-10">
          <div>
            <p className="text-xs font-semibold text-[#bd5b47]">Invitation editor</p>
            <h1 className="text-xl font-semibold">새 청첩장 만들기</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary">
              <Eye size={16} className="mr-2" />
              미리보기
            </Button>
            <Button>
              <Save size={16} className="mr-2" />
              저장
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-10">
        <section className="space-y-6">
          <div className="rounded-lg border border-[#eaded8] bg-white p-5">
            <h2 className="text-lg font-semibold">기본 정보</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {["신랑 이름", "신부 이름", "예식 날짜", "예식장명", "예식장 주소", "연락처"].map(
                (label) => (
                  <label key={label} className="grid gap-2 text-sm font-semibold">
                    {label}
                    <input
                      className="h-11 rounded-md border border-[#eaded8] px-3 outline-none focus:border-[#bd5b47]"
                      placeholder={`${label} 입력`}
                    />
                  </label>
                )
              )}
            </div>
          </div>

          <div className="rounded-lg border border-[#eaded8] bg-white p-5">
            <h2 className="text-lg font-semibold">템플릿</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {templates.map((template) => (
                <label
                  key={template.id}
                  className="rounded-lg border border-[#eaded8] p-4 transition hover:border-[#bd5b47]"
                >
                  <input className="mr-2" type="radio" name="template" defaultChecked={template.id === "romantic"} />
                  <span className="font-semibold">{template.label}</span>
                  <p className="mt-2 text-sm leading-6 text-[#746965]">{template.description}</p>
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#eaded8] bg-white p-5">
            <h2 className="text-lg font-semibold">섹션 구성</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {sectionOptions.map((section) => (
                <label
                  key={section.type}
                  className="flex items-start gap-3 rounded-lg border border-[#eaded8] p-4"
                >
                  <input
                    className="mt-1"
                    type="checkbox"
                    defaultChecked={["banner", "gallery", "map", "account", "guestbook", "share"].includes(
                      section.type
                    )}
                  />
                  <span>
                    <span className="block font-semibold">{section.label}</span>
                    <span className="mt-1 block text-sm leading-6 text-[#746965]">{section.description}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        </section>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <InvitationPreview invitation={sampleInvitation} />
        </aside>
      </div>
    </main>
  );
}
