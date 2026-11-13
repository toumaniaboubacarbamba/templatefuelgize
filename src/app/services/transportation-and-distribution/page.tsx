import { Suspense } from "react";
import { Factory, Container, Truck, Building2 } from "lucide-react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceIncluded from "@/components/ServiceIncluded";
import ProductionSlider from "@/components/ProductionSlider";
import OrderForm from "@/components/OrderForm";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import { Eyebrow, Title, Btn, container } from "@/components/ui";

const included = [
  { t: "Exploration & Development", Icon: Factory },
  { t: "Transportation & Distribution", Icon: Container },
  { t: "Research & Innovation", Icon: Truck },
  { t: "Marketing & Sales", Icon: Building2 },
];

const bars = [["Professionality", 90], ["Client Service", 60]] as const;

export default function SingleServicePage() {
  return (
    <main>
      <Header solid active="Pages" />
      <PageHero compact title="Transportation And Distribution" current="Single Service" image="/images/hero-bg.webp" />

      {/* About + image + points forts */}
      <section className="pt-14 lg:pt-14 lg:pt-14 lg:pt-14 lg:pt-14 lg:pt-20">
        <div className={container}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-[760px]">
              <Eyebrow>About Us</Eyebrow>
              <Title className="mt-5">Oil &amp; Gas Innovators: Driving Progress In The Industry</Title>
            </div>
            <p className="max-w-[430px] pb-3 text-[16px] leading-7">
              From exploration and production to transportation and refining, we offer a wide range of products and services that meet the unique needs of the oil &amp; gas industry.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/svc-6.webp" alt="" className="mt-10 h-[260px] w-full object-cover lg:mt-14 lg:h-[500px]" />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-[210px_210px_1fr] lg:gap-10">
            <div>
              <h3 className="text-[20px] font-bold leading-7">Convenient Location &amp; Schedule</h3>
              <p className="mt-4 text-[13px] leading-6">Diam parturient adipiscing aliquam duis ornare risus, interdum. Metus tristique amet potot.</p>
            </div>
            <div>
              <h3 className="text-[20px] font-bold leading-7">Individual Approach</h3>
              <p className="mt-4 text-[13px] leading-6">Aliquet blandit euismod aliquet ac turpis. Ac lorem fermentum nisl faucibus volutpat a.</p>
            </div>
            <div className="space-y-5 sm:col-span-2 lg:col-span-1 sm:col-span-2 lg:col-span-1 sm:col-span-2 lg:col-span-1 sm:col-span-2 lg:col-span-1 sm:col-span-2 lg:col-span-1">
              {bars.map(([l, v]) => (
                <div key={l}>
                  <div className="flex justify-between text-[13px] font-bold"><span>{l}</span><span>{v}%</span></div>
                  <div className="mt-2 h-[10px] bg-mist"><div className="h-full bg-brand" style={{ width: `${v}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we do : grille 2x2 */}
      <section className="py-14 lg:py-24">
        <div className={container}>
          <div className="text-center">
            <Eyebrow center>What We Do</Eyebrow>
            <Title className="mt-5 !text-[56px]">What Is Included In Our Work</Title>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-12 lg:gap-[30px]">
            {included.map(({ t, Icon }) => (
              <div key={t} className="bg-mist px-10 py-8 text-center">
                <Icon size={52} strokeWidth={1.1} className="mx-auto" />
                <h3 className="mt-5 text-[20px] font-bold">{t}</h3>
                <p className="mx-auto mt-3 max-w-[520px] text-[13px] leading-5">
                  An interior designer will help the client choose a color scheme that suits their taste and complements the space. This involves creating a layout of the room.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Eyebrow center>What We Do</Eyebrow>
            <Title className="mt-5 !text-[56px]">What Is Included In Our Work</Title>
          </div>
        </div>
        <Suspense fallback={<div className="h-[260px]" />}><ServiceIncluded /></Suspense>
      </section>

      {/* Production */}
      <section className="bg-[#f3f3f5] py-14 lg:py-24">
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

      <Marquee />

      {/* Formulaire */}
      <section className="py-14 lg:py-24">
        <div className={container}>
          <Eyebrow>Contact Us</Eyebrow>
          <Title className="mt-5 !text-[56px]">Do You Want To Order A Service?</Title>
          <OrderForm />
        </div>
      </section>

      <Footer contactBand />
    </main>
  );
}