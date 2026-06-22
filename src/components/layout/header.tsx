import Link from "next/link";
import { Heart, LogIn, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#eaded8] bg-[#fffaf7]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:px-8 lg:px-10">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 text-sm font-semibold"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#bd5b47] text-white">
            <Heart size={17} fill="currentColor" />
          </span>
          <span className="truncate">Wedding Card</span>
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            href="/login"
            variant="ghost"
            className="hidden sm:inline-flex"
          >
            <LogIn size={16} className="mr-2" />
            로그인
          </Button>
          <Button href="/invitations/new">
            <Sparkles size={16} className="mr-2" />
            만들기
          </Button>
        </div>
      </div>
    </header>
  );
}
