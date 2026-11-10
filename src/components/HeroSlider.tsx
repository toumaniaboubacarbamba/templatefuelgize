"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

const cards = [
  { title: "Exploration And Development", img: "/images/card-exploration.webp" },
  { title: "Production And Operations", img: "/images/card-production.webp" },
  { title: "Transportation And Distribution", img: "/images/card-transportation.webp" },
  { title: "Marketing And Sales", img: "/images/card-marketing.webp" },
  { title: "Shipping And Logistics", img: "/images/card-shipping.webp" },
  { title: "Refining And Processing", img: "/images/card-refinery.webp" },
];

export default function HeroSlider() {
  const swiper = useRef<SwiperType | null>(null);
  return (
    <div className="relative mt-14 pb-14">
      <button aria-label="Previous" onClick={() => swiper.current?.slidePrev()}
        className="absolute left-5 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center bg-brand"><ChevronLeft size={18} /></button>
      <button aria-label="Next" onClick={() => swiper.current?.slideNext()}
        className="absolute right-5 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center bg-brand"><ChevronRight size={18} /></button>

      <Swiper onSwiper={(s) => (swiper.current = s)} modules={[Autoplay]} rewind autoplay={{ delay: 4000 }}
        slidesPerView={4.3} spaceBetween={20} slidesOffsetBefore={100} className="!overflow-hidden">
        {cards.map((c) => (
          <SwiperSlide key={c.title}>
            <a href="#" className="relative flex h-[265px] items-end bg-cover bg-center p-6 text-white"
              style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,0) 60%), url(${c.img})` }}>
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
