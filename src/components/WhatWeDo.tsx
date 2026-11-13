"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, Factory, Truck, Building2 } from "lucide-react";
import { Eyebrow, Title, MoreLink, container } from "./ui";
import "swiper/css";
import "swiper/css/pagination";

const items = [
  { title: "Exploration & Development", Icon: Factory },
  { title: "Transportation & Distribution", Icon: Truck },
  { title: "Research & Innovation", Icon: Building2 },
  { title: "Production & Operations", Icon: Factory },
  { title: "Marketing & Sales", Icon: Truck },
  { title: "Environmental Management", Icon: Building2 },
];

export default function WhatWeDo() {
  const sw = useRef<SwiperType | null>(null);
  return (
    <section className="pb-16 pt-6 lg:pb-28 lg:pt-10">
      <div className="mx-auto max-w-[780px] px-6 text-center">
        <Eyebrow center>What We Do</Eyebrow>
        <Title className="mt-5">Gas Gurus: Your Trusted Advisors For Oil &amp; Gas Opportunities</Title>
      </div>
      <div className="relative mt-14">
        <button aria-label="Previous" onClick={() => sw.current?.slidePrev()} className="absolute left-7 top-[130px] z-10 hidden lg:grid h-10 w-10 place-items-center bg-mist"><ChevronLeft size={16} /></button>
        <button aria-label="Next" onClick={() => sw.current?.slideNext()} className="absolute right-7 top-[130px] z-10 hidden lg:grid h-10 w-10 place-items-center bg-mist"><ChevronRight size={16} /></button>
        <div className={`${container} dots`}>
          <Swiper onSwiper={(s) => (sw.current = s)} modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1} spaceBetween={20} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }}>
            {items.map(({ title, Icon }) => (
              <SwiperSlide key={title}>
                <div className="min-min-min-min-min-h-[292px] bg-[#262626] p-8 text-white">
                  <Icon size={54} strokeWidth={1.2} />
                  <h3 className="mt-7 text-[21px] font-bold">{title}</h3>
                  <p className="mt-4 max-w-[300px] text-[14px] leading-6">From exploration and production to transportation and refining, we offer a wide range of products.</p>
                  <MoreLink className="mt-5 !text-[14px]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
