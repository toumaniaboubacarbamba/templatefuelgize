import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import Benefits from "@/components/Benefits";
import Stats from "@/components/Stats";
import ServicesCerts from "@/components/ServicesCerts";
import Marquee from "@/components/Marquee";
import Achievements from "@/components/Achievements";
import Production from "@/components/Production";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <About />
      <Suspense fallback={<div className="h-[600px]" />}><WhatWeDo /></Suspense>
      <Benefits />
      <Stats />
      <ServicesCerts />
      <Marquee />
      <Achievements />
      <Suspense fallback={<div className="h-[600px]" />}><Production /></Suspense>
      <Testimonials />
      <Blog />
      <GetInTouch />
      <Footer />
    </main>
  );
}
