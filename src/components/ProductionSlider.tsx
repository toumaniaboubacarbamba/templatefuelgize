"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { container } from "./ui";
import "swiper/css";

const slides = [
  { t: "Natural Gas Production", img: "svc-3" },
  { t: "Crude Oil Production", img: "svc-1" },
  { t: "Refined Products", img: "svc-5" },
  { t: "LNG Shipping", img: "svc-7" },
];

export default function ProductionSlider() {
  const sw = useRef<SwiperType | null>(null);
  return (
    <div className="relative mt-12">
      <button aria-label="Previous" onClick={() => sw.current?.slidePrev()} className="absolute left-7 top-1/2 z-10 hidden lg:grid h-10 w-10 -translate-y-1/2 place-items-center bg-brand text-white"><ChevronLeft size={16} /></button>
      <button aria-label="Next" onClick={() => sw.current?.slideNext()} className="absolute right-7 top-1/2 z-10 hidden lg:grid h-10 w-10 -translate-y-1/2 place-items-center bg-brand text-white"><ChevronRight size={16} /></button>
      <div className={container}>
        <Swiper onSwiper={(s) => (sw.current = s)} slidesPerView={1} spaceBetween={20} breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 30 } }}>
          {slides.map((s) => (
            <SwiperSlide key={s.t}>
              <a href="#" className="flex h-[360px] items-end bg-cover bg-center p-8 text-white"
                style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,.7), rgba(0,0,0,0) 60%), url(/images/${s.img}.webp)` }}>
                <div>
                  <h3 className="text-[22px] font-bold">{s.t}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-[14px] font-bold">Read More <Plus size={13} /></span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}