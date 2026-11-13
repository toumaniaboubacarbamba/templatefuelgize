"use client";
import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Eyebrow, Title, container } from "./ui";

const items = [
  "Successfully Completed Over 100 Oil And Gas Wells",
  "Discovered And Developed Several Major Oil And Gas Fields",
  "Implemented Cutting-Edge Technologies",
  "A Strong Track Record Of Safety And Environmental Stewardship",
];

export default function Achievements({ variant = "home" }: { variant?: "home" | "about" }) {
  const [active, setActive] = useState(0);
  return (
    <section className={variant === "about" ? "py-14 lg:py-24" : "py-14 lg:py-28"}>
      <div className={`${container} grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16`}>
        <div className="max-w-[600px]">
          <Eyebrow>Our Achievements</Eyebrow>
          <Title className="mt-5">Powering Your Future</Title>
          <p className="mt-8 text-[16px] leading-7">
            From exploration and production to transportation and refining, we offer a wide range of products and
            services that meet the unique needs of the oil &amp; gas industry. Our commitment to excellence and customer
            satisfaction is reflected in our rigorous quality control processes.
          </p>
          <p className="mt-8 text-[16px] font-bold">We Have:</p>
          <ul className="mt-4">
            {items.map((t, i) => (
              <li key={t} onMouseEnter={() => setActive(i)} className="border-b border-mist py-3 first:pt-0">
                <div className="flex items-center gap-4 text-[15px] font-bold">
                  {active === i ? <ArrowRight size={16} /> : <ArrowDown size={16} />}
                  <span className={active === i ? "bg-brand px-3 py-1.5 text-white" : "px-3 py-1.5"}>{t}</span>
                  {active === i && <span className="h-8 w-20 -ml-4 bg-gradient-to-r from-brand to-transparent" />}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          {variant === "about" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/contact.webp" alt="" className="h-[320px] w-full object-cover lg:ml-auto lg:h-[420px] lg:w-[392px]" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/achievements.webp" alt="" className="h-[320px] w-full object-cover lg:h-[560px]" />
          )}
        </div>
      </div>
    </section>
  );
}
