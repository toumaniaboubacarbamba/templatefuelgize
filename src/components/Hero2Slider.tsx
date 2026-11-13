"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

const cards = [
  { title: "Exploration And Development", img: "svc-1" },
  { title: "Production And Operations", img: "svc-2" },
  { title: "Transportation And Distribution", img: "svc-3" },
  { title: "Marketing And Sales", img: "svc-4" },
  { title: "Research And Innovation", img: "svc-7" },
  { title: "Environmental Management", img: "svc-5" },
  { title: "Workforce Development & Training", img: "svc-8" },
  { title: "Digital Transformation & Technology", img: "svc-6" },
];

export default function Hero2Slider() {
  const swiper = useRef<SwiperType | null>(null);
  return (
    <div className="relative mt-14 pb-14">
      <button aria-label="Previous" onClick={() => swiper.current?.slidePrev()}
        className="absolute left-5 top-1/2 z-10 hidden md:grid h-9 w-9 -translate-y-1/2 place-items-center bg-brand"><ChevronLeft size={18} /></button>
      <button aria-label="Next" onClick={() => swiper.current?.slideNext()}
        className="absolute right-5 top-1/2 z-10 hidden md:grid h-9 w-9 -translate-y-1/2 place-items-center bg-brand"><ChevronRight size={18} /></button>

      <Swiper onSwiper={(s) => (swiper.current = s)} modules={[Autoplay]} rewind autoplay={{ delay: 4000 }}
        slidesPerView={1.2} spaceBetween={16} slidesOffsetBefore={24}
        breakpoints={{ 640: { slidesPerView: 2.2, slidesOffsetBefore: 40 }, 1024: { slidesPerView: 3.2, slidesOffsetBefore: 60 }, 1280: { slidesPerView: 4.3, slidesOffsetBefore: 100, spaceBetween: 20 } }} className="!overflow-hidden">
        {cards.map((c) => (
          <SwiperSlide key={c.title}>
            <a href="#" className="relative flex h-[265px] items-end bg-cover bg-center p-6 text-white"
              style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,0) 60%), url(/images/${c.img}.webp)` }}>
              <div>
                <span className="text-[12px] font-bold uppercase">Oil &amp; Gas</span>
                <h3 className="mt-1 text-[22px] font-bold leading-7">{c.title}</h3>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}