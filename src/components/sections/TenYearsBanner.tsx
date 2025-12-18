"use client";

import Image from "next/image";

export function TenYearsBanner() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#061f42] py-2 md:py-2">
      <div className="mx-auto flex max-w-6xl justify-center">
        <div className="w-full max-w-[140px] md:max-w-[180px] lg:max-w-[220px]">
          <Image
            src="/images/home/10-yil.png"
            alt="Ness Fuarcılık - 10. yıl"
            width={350}
            height={100}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
