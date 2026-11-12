"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, Factory, Container, Truck, Building2 } from "lucide-react";
import { container } from "./ui";
import "swiper/css";
import "swiper/css/pagination";

const icons = [Factory, Truck, Building2, Container];
const slides = Array.from({ length: 7 }, (_, i) => icons[i % icons.length]);

export default function ServiceIncluded() {
  const sw = useRef<SwiperType | null>(null);
  return (
    <div className="relative mt-12">
      <button aria-label="Previous" onClick={() => sw.current?.slidePrev()} className="absolute left-7 top-[60px] z-10 grid h-10 w-10 place-items-center bg-mist"><ChevronLeft size={16} /></button>
      <button aria-label="Next" onClick={() => sw.current?.slideNext()} className="absolute right-7 top-[60px] z-10 grid h-10 w-10 place-items-center bg-mist"><ChevronRight size={16} /></button>
      <div className={`${container} dots`}>
        <Swiper onSwiper={(s) => (sw.current = s)} modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={4} spaceBetween={30}>
          {slides.map((Icon, i) => (
            <SwiperSlide key={i}>
              <div className="text-center">
                <Icon size={56} strokeWidth={1.1} className="mx-auto text-brand" />
                <h3 className="mt-5 text-[18px] font-bold">Exploration &amp; Development</h3>
                <p className="mx-auto mt-3 max-w-[260px] text-[13px] leading-5">From exploration and production to transportation and refining.</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}