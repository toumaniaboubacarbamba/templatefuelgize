"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PostCard, { posts } from "./PostCard";
import { container } from "./ui";
import "swiper/css";

export default function BlogCarousel() {
  const sw = useRef<SwiperType | null>(null);
  return (
    <div className="relative mt-12">
      <button aria-label="Previous" onClick={() => sw.current?.slidePrev()} className="absolute left-7 top-[140px] z-10 hidden lg:grid h-10 w-10 place-items-center bg-white/15 text-white"><ChevronLeft size={16} /></button>
      <button aria-label="Next" onClick={() => sw.current?.slideNext()} className="absolute right-7 top-[140px] z-10 hidden lg:grid h-10 w-10 place-items-center bg-white/15 text-white"><ChevronRight size={16} /></button>
      <div className={`${container} text-white`}>
        <Swiper onSwiper={(s) => (sw.current = s)} slidesPerView={1} spaceBetween={20} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3, spaceBetween: 30 }, 1280: { slidesPerView: 4, spaceBetween: 30 } }}>
          {posts.map((p) => (
            <SwiperSlide key={p.title}><PostCard post={p} stack /></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}