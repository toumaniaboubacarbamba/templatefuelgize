import { Suspense } from "react";
import Hero2Slider from "./Hero2Slider";

export default function Hero2() {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-[140px] lg:pt-[140px] lg:pt-[140px] lg:pt-[140px] lg:pt-[140px] lg:pt-[195px] text-white">
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url(/images/hero-bg.webp)" }} />
      <div className="absolute inset-0 -z-10 bg-black/45" />

      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <h1 className="font-display text-[42px] font-bold uppercase leading-[0.95] sm:text-[64px] lg:text-[104px]">
          Energizing Your Business: Oil &amp; Gas Solutions
        </h1>
        <p className="mx-auto mt-8 max-w-[740px] lg:mt-14 text-[15px] leading-7">
          At our company, we are dedicated to providing innovative solutions for the oil &amp; gas industry. Our team of
          experts has extensive experience in the field, allowing us to offer cutting-edge technologies.
        </p>
      </div>

      <Suspense fallback={<div className="mt-14 h-[265px] pb-14" />}>
        <Hero2Slider />
      </Suspense>
    </section>
  );
}