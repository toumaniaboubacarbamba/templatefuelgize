import { Wrench, TrendingUp, Landmark, Handshake } from "lucide-react";
import { Eyebrow, Title, container } from "./ui";

const items = [
  { t: "High Demand", Icon: Wrench },
  { t: "Strategic Importance", Icon: TrendingUp },
  { t: "Economic Impact", Icon: Landmark },
  { t: "Global Market", Icon: Handshake },
];

export default function Benefits({ variant = "home" }: { variant?: "home" | "services" }) {
  return (
    <section className="pb-16 lg:pb-16 lg:pb-16 lg:pb-16 lg:pb-16 lg:pb-28">
      <div className={`${container} grid grid-cols-1 gap-10 lg:grid-cols-2 ${variant === "services" ? "items-center" : "items-end"}`}>
        {variant === "services" ? (
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/benefits.webp" alt="" className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[426px] lg:w-[506px]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/about.webp" alt="" className="absolute -left-4 bottom-6 h-[120px] w-[120px] lg:-left-12 lg:h-[180px] lg:w-[180px] object-cover" />
          </div>
        ) : (
          <div className="relative min-h-[300px] lg:min-h-[300px] lg:min-h-[300px] lg:min-h-[300px] lg:min-h-[300px] lg:min-h-[460px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/benefits.webp" alt="" className="absolute left-0 bottom-0 h-[300px] w-[300px] lg:-left-10 lg:h-[400px] lg:w-[400px] object-cover" />
          </div>
        )}
        <div>
          <Eyebrow>Our Benefits</Eyebrow>
          <Title className="mt-5">The Future Of Oil &amp; Gas Is Here</Title>
          <p className="mt-8 max-w-[600px] text-[16px] leading-7">
            From exploration and production to transportation and refining, we offer a wide range of products and
            services that meet the unique needs of the oil &amp; gas industry.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-y-8 lg:mt-10">
            {items.map(({ t, Icon }) => (
              <div key={t} className="flex items-center gap-5">
                <span className="grid h-12 w-12 place-items-center bg-brand text-white"><Icon size={22} /></span>
                <span className="text-[19px] font-bold">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}