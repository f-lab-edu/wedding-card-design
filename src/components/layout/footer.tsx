import Link from "next/link";
import { Heart, Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#eaded8] bg-white/72">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[minmax(0,1fr)_180px_180px] md:px-8 lg:px-10">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold"
          >
            <span className="grid size-9 place-items-center rounded-full bg-[#bd5b47] text-white">
              <Heart size={17} fill="currentColor" />
            </span>
            Wedding Card
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#746965]">
            사진, 지도, 방명록, 계좌번호까지 한 번에 담는 모바일 청첩장 제작
            서비스입니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#746965]">
            <span className="inline-flex items-center gap-1">
              <Mail size={15} />
              hello@wedding-card.local
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={15} />
              Seoul, Korea
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#eaded8] px-5 py-4 text-center text-xs text-[#746965]">
        © {year} Wedding Card Design. All rights reserved.
      </div>
    </footer>
  );
}
