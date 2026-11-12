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
    <section className="pb-28">
      <div className={`${container} grid grid-cols-2 gap-10 ${variant === "services" ? "items-center" : "items-end"}`}>
        {variant === "services" ? (
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/benefits.webp" alt="" className="h-[426px] w-[506px] object-cover" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/about.webp" alt="" className="absolute -left-12 bottom-6 h-[180px] w-[180px] object-cover" />
          </div>
        ) : (
          <div className="relative min-h-[460px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/benefits.webp" alt="" className="absolute -left-10 bottom-0 h-[400px] w-[400px] object-cover" />
          </div>
        )}
        <div>
          <Eyebrow>Our Benefits</Eyebrow>
          <Title className="mt-5">The Future Of Oil &amp; Gas Is Here</Title>
          <p className="mt-8 max-w-[600px] text-[16px] leading-7">
            From exploration and production to transportation and refining, we offer a wide range of products and
            services that meet the unique needs of the oil &amp; gas industry.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-y-8">
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