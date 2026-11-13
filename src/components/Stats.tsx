import { Factory, Container, Truck, Building2 } from "lucide-react";

const stats = [
  { n: "1500", l: "Foreign Followers", Icon: Factory },
  { n: "360", l: "Works Complete", Icon: Container },
  { n: "10K", l: "Economic Benefit", Icon: Truck },
  { n: "450", l: "Certified Experts", Icon: Building2 },
];

export default function Stats() {
  return (
    <section className="relative isolate py-12 text-white lg:h-[405px] lg:py-0">
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url(/images/stats-bg.webp)" }} />
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <div className="mx-auto grid h-full max-w-[1240px] grid-cols-2 items-center gap-y-10 px-6 lg:grid-cols-4 xl:px-0">
        {stats.map(({ n, l, Icon }, i) => (
          <div key={l} className={`flex flex-col items-center py-4 text-center ${i > 0 ? "border-white/25 lg:border-l" : ""} ${i % 2 === 1 ? "border-l" : ""}`}>
            <Icon size={64} strokeWidth={1} />
            <span className="mt-5 text-[34px] font-bold leading-none text-brand">{n}</span>
            <span className="mt-2 text-[15px] font-bold">{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
