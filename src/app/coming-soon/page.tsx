import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import { container } from "@/components/ui";

export default function ComingSoonPage() {
  return (
    <main>
      <Header solid active="Pages" />
      <section className="relative isolate flex min-h-[764px] flex-col justify-between overflow-hidden pt-24 text-white">
        <div className="absolute inset-0 -z-10 bg-cover" style={{ backgroundImage: "url(/images/hero-bg.webp)", backgroundPosition: "center 40%" }} />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="px-6 text-center">
          <h1 className="mx-auto max-w-[1200px] font-display text-[44px] font-bold uppercase leading-[0.95] sm:text-[72px] lg:text-[112px]">Something New Is Coming Soon</h1>
          <Countdown />
        </div>

        <div className={`${container} w-full pb-14`}>
          <div className="border-t border-white/40 pt-10 lg:pt-10 lg:pt-10 lg:pt-10 lg:pt-10 lg:pt-14">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="font-display text-[32px] font-bold uppercase leading-none sm:text-[40px] lg:text-[48px]">Subscribe To Our Newsletter</h2>
              <label className="block w-full lg:w-full lg:w-full lg:w-full lg:w-full lg:w-[497px]">
                <span className="text-[11px] font-bold uppercase">Your E-Mail</span>
                <input type="email" placeholder="Enter your E-Mail" className="mt-1 block h-[54px] w-full bg-white/25 px-5 text-[14px] outline-none placeholder:text-white" />
              </label>
            </div>
          </div>
        </div>
      </section>
      <Footer hideBand />
    </main>
  );
}