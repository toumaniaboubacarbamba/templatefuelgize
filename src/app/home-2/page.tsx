import { Suspense } from "react";
import Header from "@/components/Header";
import Hero2 from "@/components/Hero2";
import Marquee from "@/components/Marquee";
import IncludedGrid from "@/components/IncludedGrid";
import ServicesSlider from "@/components/ServicesSlider";
import ProductionSlider from "@/components/ProductionSlider";
import DarkTestimonial from "@/components/DarkTestimonial";
import BlogCarousel from "@/components/BlogCarousel";
import NewsletterBand from "@/components/NewsletterBand";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import { AboutIntro, VideoBlock, Clients } from "@/components/AboutSections";
import { Eyebrow, Title, Btn, container } from "@/components/ui";

export default function Home2Page() {
  return (
    <main>
      <div className="relative">
        <Header />
        <Hero2 />
      </div>
      <Marquee />

      <AboutIntro image="/images/achievements.webp" />
      <VideoBlock reviews={false} />
      <IncludedGrid />

      {/* Services We Provide */}
      <section className="pb-24">
        <div className={container}>
          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow>Services We Provide</Eyebrow>
              <Title className="mt-5">Oil &amp; Gas Innovators: Driving Progress In The Industry</Title>
            </div>
            <Btn className="mb-3">Discover Our Services</Btn>
          </div>
        </div>
        <Suspense fallback={<div className="h-[440px]" />}><ServicesSlider /></Suspense>
      </section>

      {/* Production */}
      <section className="pb-24">
        <div className={container}>
          <Eyebrow>Production</Eyebrow>
          <Title className="mt-5 !text-[56px]">Your Source For Oil &amp; Gas</Title>
          <div className="mt-6 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <p className="max-w-[560px] text-[16px] leading-7">
              From exploration and production to transportation and refining, we offer a wide range of products and services that meet the unique needs of the oil &amp; gas industry.
            </p>
            <Btn>Go To Production</Btn>
          </div>
        </div>
        <Suspense fallback={<div className="h-[360px]" />}><ProductionSlider /></Suspense>
      </section>

      <Clients />

      {/* Section sombre : témoignage + blog */}
      <section className="relative isolate bg-[#262626] py-24 text-white">
        <div className="absolute inset-0 -z-10 bg-cover opacity-[0.07]" style={{ backgroundImage: "url(/images/grid.webp)" }} />
        <div className={container}>
          <Eyebrow>Testimonials</Eyebrow>
          <Title className="mt-5">Fueling Your Success</Title>
          <DarkTestimonial />
        </div>
        <div className="mt-24">
          <div className="mx-auto max-w-[1150px] px-6 text-center">
            <Eyebrow center>Blog &amp; News</Eyebrow>
            <Title className="mt-5 !text-[56px]">Powering Your Energy Needs With Innovative Solutions</Title>
          </div>
          <Suspense fallback={<div className="h-[520px]" />}><BlogCarousel /></Suspense>
          <div className="mt-12 text-center"><Btn>Go To Blog</Btn></div>
        </div>
      </section>

      <NewsletterBand contactBand />

      <section className="py-14 lg:py-24">
        <div className={container}>
          <Eyebrow>Contact Us</Eyebrow>
          <Title className="mt-5 !text-[56px]">Have Any Questions? Get In Touch</Title>
          <OrderForm />
        </div>
      </section>

      <Footer hideBand />
    </main>
  );
}