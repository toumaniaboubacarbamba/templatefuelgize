"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Play, Star } from "lucide-react";
import { Eyebrow, Title, container } from "./ui";

/* ---------- Intro + 3 cercles ---------- */
const rings = [
  { v: "15K", t: "Exploration", pct: 0.85 },
  { v: "12,5", t: "Transportation", pct: 0.85 },
  { v: "10M", t: "Innovation", pct: 0.85 },
];

function Ring({ value, pct }: { value: string; pct: number }) {
  const r = 82, c = 2 * Math.PI * r;
  return (
    <div className="relative h-[180px] w-[180px] shrink-0">
      <svg viewBox="0 0 180 180" className="-rotate-90">
        <circle cx="90" cy="90" r={r} fill="none" stroke="#eaeaee" strokeWidth="8" />
        <circle cx="90" cy="90" r={r} fill="none" stroke="#ec6c06" strokeWidth="8" strokeDasharray={`${c * pct} ${c}`} />
      </svg>
      <span className="absolute inset-0 grid place-items-center font-display text-[56px] font-bold">{value}</span>
    </div>
  );
}

export function AboutIntro({ image }: { image?: string }) {
  return (
    <section className="pb-12 pt-14 lg:pb-20 lg:pt-24">
      <div className={container}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-[760px]">
            <Eyebrow>About Us</Eyebrow>
            <Title className="mt-5">Oil &amp; Gas Innovators: Driving Progress In The Industry</Title>
          </div>
          <p className="max-w-[430px] text-[16px] leading-7">
            From exploration and production to transportation and refining, we offer a wide range of products and services that meet the unique needs of the oil &amp; gas industry.
          </p>
        </div>
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="" className="mt-10 h-[280px] w-full object-cover lg:mt-14 lg:h-[560px]" />
        )}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {rings.map((r) => (
            <div key={r.t} className="flex items-center gap-6">
              <Ring value={r.v} pct={r.pct} />
              <div>
                <span className="text-[11px] font-bold uppercase">Oil &amp; Gas</span>
                <h3 className="mt-1 text-[22px] font-bold">{r.t}</h3>
                <p className="mt-2 max-w-[200px] text-[13px] leading-5">We&rsquo;re helping you find the perfect property</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Vidéo + avis ---------- */
const kpis = [
  ["99.9%", "Active Users"], ["20M+", "Active Users"], ["20M", "Active Users"], ["2.5K", "Active Users"],
];

/* ---------- Avis Google + chiffres ---------- */
export function ReviewsBar() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-6">
        <div>
          <div className="text-[10px] font-bold uppercase">Reviewed on</div>
          <div className="mt-1 text-[28px] font-bold tracking-tight text-[#4285f4]">Google</div>
        </div>
        <div>
          <div className="flex gap-1 text-[#ffb400]">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size={18} fill="currentColor" />)}</div>
          <div className="mt-2 text-[10px] font-bold uppercase">100+ Reviews</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 lg:flex">
        {kpis.map(([n, l], i) => (
          <div key={i} className="border-l border-ink/15 px-5 lg:px-10">
            <div className="font-display text-[38px] font-bold leading-none">{n}</div>
            <div className="mt-2 text-[13px]">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VideoBlock({ reviews = true }: { reviews?: boolean }) {
  return (
    <section className="pb-14 lg:pb-24">
      <div className={container}>
        <div className="text-center">
          <Eyebrow center>Video</Eyebrow>
          <Title className="mt-5 !text-[56px]">Revolutionizing Energy: Oil &amp; Gas Innovations</Title>
        </div>
        <div className="relative mt-10 h-[240px] bg-cover bg-center sm:h-[400px] lg:mt-12 lg:h-[600px]" style={{ backgroundImage: "url(/images/testimonial-bg.webp)" }}>
          <a href="#" aria-label="Play" className="absolute left-1/2 top-1/2 grid h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 place-items-center bg-brand text-white">
            <Play size={22} fill="currentColor" />
          </a>
        </div>
        {reviews && <div className="mt-12"><ReviewsBar /></div>}
      </div>
    </section>
  );
}

/* ---------- Mission (onglets) ---------- */
const tabs = [
  { t: "Exploration", d: "A real estate agency must be able to develop a strong strategy based on research and analysis." },
  { t: "Oil & Gas Production" }, { t: "Transportation" }, { t: "Refining" }, { t: "Marketing & Distribution" },
];

export function Mission() {
  const [a, setA] = useState(0);
  return (
    <section className="pb-20">
      <div className={container}>
        <Eyebrow>Our Mission</Eyebrow>
        <Title className="mt-5 !text-[56px]">Explore, Develop, Deliver: Your Oil &amp; Gas Partner</Title>
        <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:mt-10 lg:grid-cols-[805px_1fr] lg:gap-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/prod-1.webp" alt="" className="h-[260px] w-full object-cover lg:h-[475px]" />
          <ul className="space-y-6">
            {tabs.map((x, i) => (
              <li key={x.t}>
                <button onClick={() => setA(i)} className="text-left text-[22px] font-bold">
                  <span className={a === i ? "border-b-2 border-brand pb-1" : ""}>{x.t}</span>
                </button>
                {a === i && x.d && <p className="mt-4 max-w-[330px] text-[13px] leading-5">{x.d}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Clients ---------- */
const clients = ["afterpay", "Framer", "attentive", "monzo", "pipedrive", "SQUARESPACE"];

export function Clients() {
  return (
    <section className="pb-24">
      <div className={container}>
        <h3 className="text-center text-[18px] font-bold">Our Clients</h3>
        <div className="mt-8 grid grid-cols-2 items-center gap-y-6 sm:grid-cols-3 lg:grid-cols-6 border-y border-ink/10 py-8 text-center text-[20px] font-bold text-ink/50">
          {clients.map((c) => <span key={c}>{c}</span>)}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const answer = "Yes, commission fees are usually negotiable. However, it’s important to remember that lower commission fees may lead to less motivated agents or less marketing efforts.";
const cols = [
  ["What Services Does A Real Estate Agency Provide?", "How Much Does A Real Estate Agency Charge?", "Can I Still Negotiate The Commission Fee?"],
  ["How Long Does It Take To Sell A Property?", "Do I Have To Sign A Contract With A Real Estate Agency?", "What Qualifications Should I Look For In A Real Estate Agent?"],
];

export function Faq({ cta = "Get In Touch" }: { cta?: string }) {
  const [open, setOpen] = useState<[number, number]>([0, 0]);
  return (
    <section className="py-14 lg:py-24">
      <div className={container}>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <Title className="mt-5">Frequently Asked Questions</Title>
          </div>
          <a href="#" className="pb-3 text-[15px] font-bold">{cta} +</a>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-2 lg:gap-[30px]">
          {cols.map((col, c) => (
            <div key={c} className="space-y-4">
              {col.map((q, i) => {
                const isOpen = open[c] === i;
                return (
                  <div key={q}>
                    <button
                      onClick={() => setOpen((o) => { const n: [number, number] = [...o]; n[c] = isOpen ? -1 : i; return n; })}
                      className={`flex w-full items-center justify-between px-6 py-5 text-left text-[15px] font-bold ${isOpen ? "bg-brand text-white" : "bg-mist"}`}>
                      {q}{isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {isOpen && <p className="px-6 py-6 text-[16px] leading-7">{answer}</p>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
