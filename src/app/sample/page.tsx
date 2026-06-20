import { InvitationPreview } from "@/components/invitation/invitation-preview";
import { sampleInvitation } from "@/lib/sample-data";

export default function SamplePage() {
  return (
    <main className="grid min-h-[calc(100svh-64px)] place-items-center px-5 py-10">
      <InvitationPreview invitation={sampleInvitation} />
    </main>
  );
}
