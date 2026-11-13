"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Eyebrow, Title, container } from "./ui";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { t: "Oil & Gas Production", img: "prod-1" }, { t: "Offshore Logistics", img: "prod-2" }, { t: "Refinery Operations", img: "prod-3" },
  { t: "Field Engineering", img: "achievements" }, { t: "Storage & Transport", img: "svc-6" }, { t: "Energy Distribution", img: "svc-7" },
];

export default function Production() {
  const sw = useRef<SwiperType | null>(null);
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <Eyebrow center>Production</Eyebrow>
        <Title className="mt-5 !text-[56px]">Fueling Your Success: Oil &amp; Gas Solutions</Title>
      </div>
      <div className="relative mt-14">
        <button aria-label="Previous" onClick={() => sw.current?.slidePrev()} className="absolute left-7 top-[150px] z-10 hidden lg:grid h-10 w-10 place-items-center bg-mist"><ChevronLeft size={16} /></button>
        <button aria-label="Next" onClick={() => sw.current?.slideNext()} className="absolute right-7 top-[150px] z-10 hidden lg:grid h-10 w-10 place-items-center bg-mist"><ChevronRight size={16} /></button>
        <div className={`${container} dots`}>
          <Swiper onSwiper={(s) => (sw.current = s)} modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1} spaceBetween={20} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }}>
            {slides.map((s) => (
              <SwiperSlide key={s.t}>
                <div className="flex h-[340px] items-end bg-cover bg-center p-6 text-white"
                  style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,0) 55%), url(/images/${s.img}.webp)` }}>
                  <h3 className="text-[22px] font-bold">{s.t}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
