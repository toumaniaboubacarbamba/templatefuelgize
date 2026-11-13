"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const quotes = Array.from({ length: 3 }, () => ({
  name: "Catherine Smith",
  role: "Design Lead",
  text: "We were in need of help and we found the perfect fit in this agency! They have been able to provide us with the necessary advice and resources to improve our digital presence. They are always available to answer our questions and provide us with insight.",
}));

export default function DarkTestimonial() {
  const [i, setI] = useState(0);
  const q = quotes[i];
  return (
    <div className="mt-10 max-w-[744px] bg-[#333] p-6 sm:p-6 sm:p-6 sm:p-6 sm:p-6 sm:p-10 text-white">
      <div className="flex items-start justify-between">
        <Quote size={42} className="text-brand" fill="currentColor" strokeWidth={0} />
        <div className="flex gap-2 text-[#ffb400]">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size={16} fill="currentColor" />)}</div>
      </div>
      <p className="mt-6 text-[17px] leading-8">{q.text}</p>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/avatar.webp" alt="" className="h-14 w-14 rounded-full object-cover" />
          <div><div className="font-bold">{q.name}</div><div className="text-[12px]">{q.role}</div></div>
        </div>
        <div className="flex bg-brand">
          <button aria-label="Previous" onClick={() => setI((i + quotes.length - 1) % quotes.length)} className="grid h-10 w-10 place-items-center"><ChevronLeft size={16} /></button>
          <span className="my-2 w-px bg-white/30" />
          <button aria-label="Next" onClick={() => setI((i + 1) % quotes.length)} className="grid h-10 w-10 place-items-center"><ChevronRight size={16} /></button>
        </div>
      </div>
    </div>
  );
}