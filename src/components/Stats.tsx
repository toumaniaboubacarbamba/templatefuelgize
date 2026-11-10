import { Factory, Container, Truck, Building2 } from "lucide-react";

const stats = [
  { n: "1500", l: "Foreign Followers", Icon: Factory },
  { n: "360", l: "Works Complete", Icon: Container },
  { n: "10K", l: "Economic Benefit", Icon: Truck },
  { n: "450", l: "Certified Experts", Icon: Building2 },
];

export default function Stats() {
  return (
    <section className="relative isolate h-[405px] text-white">
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url(/images/stats-bg.webp)" }} />
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <div className="mx-auto grid h-full max-w-[1240px] grid-cols-4 items-center px-6 xl:px-0">
        {stats.map(({ n, l, Icon }, i) => (
          <div key={l} className={`flex flex-col items-center py-4 text-center ${i > 0 ? "border-l border-white/25" : ""}`}>
            <Icon size={64} strokeWidth={1} />
            <span className="mt-5 text-[34px] font-bold leading-none text-brand">{n}</span>
            <span className="mt-2 text-[15px] font-bold">{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
