"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Eyebrow, Title, container } from "./ui";

const quotes = [
  { name: "Catherine Smith", role: "Design Lead", text: "From the moment I walked in the door to the closing of the sale, team was professional. They were knowledgeable about the local real estate market, gave me helpful advice on what to look for in a home, and provided me with resources to help me make the best decision." },
  { name: "Catherine Smith", role: "Design Lead", text: "From the moment I walked in the door to the closing of the sale, team was professional. They were knowledgeable about the local real estate market, gave me helpful advice on what to look for in a home, and provided me with resources to help me make the best decision." },
  { name: "Catherine Smith", role: "Design Lead", text: "From the moment I walked in the door to the closing of the sale, team was professional. They were knowledgeable about the local real estate market, gave me helpful advice on what to look for in a home, and provided me with resources to help me make the best decision." },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const q = quotes[i];
  return (
    <section className="pb-28">
      <div className={container}>
        <Eyebrow>Testimonials</Eyebrow>
        <Title className="mt-5">Fueling Your Success</Title>
        <div className="relative mt-10 h-[517px] bg-cover bg-center" style={{ backgroundImage: "url(/images/testimonial-bg.webp)" }}>
          <div className="absolute left-[459px] top-[80px] w-[702px] bg-[#262626] p-10 text-white">
            <div className="flex gap-2 text-[#ffb400]">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size={18} fill="currentColor" />)}</div>
            <p className="mt-8 text-[18px] leading-8">{q.text}</p>
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
        </div>
      </div>
    </section>
  );
}
