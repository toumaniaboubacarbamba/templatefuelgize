import Link from "next/link";
import { Plus } from "lucide-react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import { ReviewsBar } from "@/components/AboutSections";
import { Title, container } from "@/components/ui";

const items = ["testimonial-bg", "svc-4", "svc-1", "prod-3", "svc-5", "svc-7"];

export default function ProductionPage() {
  return (
    <main>
      <Header solid active="Pages" />
      <PageHero center compact title="Energizing Your World: Oil & Gas Production" current="Production" image="/images/hero-bg.webp" position="center 25%" />

      <section className="pb-14 pt-14 lg:pb-20 lg:pt-20">
        <div className={container}>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Title className="!text-[44px]">Explore Our Production Portfolio</Title>
            <a href="#" className="inline-flex items-center gap-3 bg-brand px-8 py-[14px] text-[15px] font-bold text-white hover:bg-ink">
              Send A Request <Plus size={14} />
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-[30px]">
            {items.map((img, i) => (
              <Link key={i} href="/production/product-list" className="block overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/${img}.webp`} alt="" className="h-[394px] w-full object-cover transition duration-500 hover:scale-105" />
              </Link>
            ))}
          </div>
          <div className="mt-14"><ReviewsBar /></div>
        </div>
      </section>

      <div className="pt-12"><Testimonials /></div>
      <GetInTouch />
      <Footer contactBand />
    </main>
  );
}