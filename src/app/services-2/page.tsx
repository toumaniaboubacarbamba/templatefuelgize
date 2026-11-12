import Link from "next/link";
import { Plus } from "lucide-react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Benefits from "@/components/Benefits";
import Stats from "@/components/Stats";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import { Clients } from "@/components/AboutSections";
import { Title, container } from "@/components/ui";

const services = [
  { t: "Marketing And Sales", img: "svc-4" },
  { t: "Production And Operations", img: "svc-2" },
  { t: "Exploration And Development", img: "svc-1" },
  { t: "Research And Innovation", img: "svc-7" },
  { t: "Environmental Management", img: "svc-5" },
  { t: "Digital Transformation & Technology", img: "svc-6" },
];

export default function Services2Page() {
  return (
    <main>
      <Header solid active="Pages" />
      <PageHero title="Innovating For A Sustainable Tomorrow In Oil & Gas" current="Services 2" image="/images/svc-1.webp" />

      <section className="py-24">
        <div className={container}>
          <div className="flex items-center justify-between">
            <Title className="!text-[44px]">Explore Our Services</Title>
            <a href="#" className="inline-flex items-center gap-3 bg-brand px-8 py-[14px] text-[15px] font-bold text-white hover:bg-ink">
              Send A Request <Plus size={14} />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-[30px]">
            {services.map((s) => (
              <Link key={s.t} href="/services/transportation-and-distribution"
                className="flex h-[394px] items-end bg-cover bg-center p-6 text-white"
                style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,.1) 65%), url(/images/${s.img}.webp)` }}>
                <div>
                  <span className="text-[12px] font-bold uppercase">Oil &amp; Gas</span>
                  <h3 className="mt-2 text-[22px] font-bold leading-7">{s.t}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold">Learn More <Plus size={13} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Clients />
      <Benefits variant="services" />
      <Stats />
      <GetInTouch plain />
      <Footer />
    </main>
  );
}
