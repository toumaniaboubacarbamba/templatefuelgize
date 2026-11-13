import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { ReviewsBar, Faq } from "@/components/AboutSections";
import { Title, container } from "@/components/ui";
import { Plus } from "lucide-react";

const services = [
  { t: "Exploration And Development", img: "svc-1" },
  { t: "Production And Operations", img: "svc-2" },
  { t: "Transportation And Distribution", img: "svc-3" },
  { t: "Marketing And Sales", img: "svc-4" },
  { t: "Research And Innovation", img: "svc-7" },
  { t: "Environmental Management", img: "svc-5" },
  { t: "Workforce Development & Training", img: "svc-8" },
  { t: "Digital Transformation & Technology", img: "svc-6" },
];

export default function ServicesPage() {
  return (
    <main>
      <Header solid active="Pages" />
      <PageHero title="Innovating For A Sustainable Tomorrow In Oil & Gas" current="Services" image="/images/svc-1.webp" />

      <section className="pb-14 pt-14 lg:pb-20 lg:pt-24">
        <div className={container}>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Title className="!text-[44px]">Explore Our Services</Title>
            <a href="#" className="inline-flex items-center gap-3 bg-brand px-8 py-[14px] text-[15px] font-bold text-white hover:bg-ink">
              Send A Request <Plus size={14} />
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-[30px]">
            {services.map((s) => (
              <a key={s.t} href="#" className="flex h-[285px] items-end bg-cover bg-center p-6 text-white"
                style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,.1) 65%), url(/images/${s.img}.webp)` }}>
                <div>
                  <span className="text-[12px] font-bold uppercase">Oil &amp; Gas</span>
                  <h3 className="mt-2 text-[22px] font-bold leading-7">{s.t}</h3>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-14"><ReviewsBar /></div>
        </div>
      </section>

      <div className="bg-[#f3f3f5] pt-24">
        <Testimonials />
        <Faq />
      </div>
      <Footer />
    </main>
  );
}