"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { container } from "./ui";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { t: "Production And Operations", img: "svc-2" },
  { t: "Digital Transformation & Technology", img: "svc-6" },
  { t: "Exploration And Development", img: "svc-1" },
  { t: "Marketing And Sales", img: "svc-4" },
  { t: "Research And Innovation", img: "svc-7" },
  { t: "Environmental Management", img: "svc-5" },
];

export default function ServicesSlider() {
  const sw = useRef<SwiperType | null>(null);
  return (
    <div className="relative mt-12">
      <button aria-label="Previous" onClick={() => sw.current?.slidePrev()} className="absolute left-7 top-[190px] z-10 hidden lg:grid h-10 w-10 place-items-center bg-mist"><ChevronLeft size={16} /></button>
      <button aria-label="Next" onClick={() => sw.current?.slideNext()} className="absolute right-7 top-[190px] z-10 hidden lg:grid h-10 w-10 place-items-center bg-mist"><ChevronRight size={16} /></button>
      <div className={`${container} dots`}>
        <Swiper onSwiper={(s) => (sw.current = s)} modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1} spaceBetween={20} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }}>
          {slides.map((s) => (
            <SwiperSlide key={s.t}>
              <a href="/services/transportation-and-distribution" className="flex h-[394px] items-end bg-cover bg-center p-6 text-white"
                style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,.1) 65%), url(/images/${s.img}.webp)` }}>
                <div>
                  <span className="text-[12px] font-bold uppercase">Oil &amp; Gas</span>
                  <h3 className="mt-2 text-[22px] font-bold leading-7">{s.t}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold">Learn More <Plus size={13} /></span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}