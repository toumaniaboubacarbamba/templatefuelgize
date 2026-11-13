import { MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Faq } from "@/components/AboutSections";
import { Eyebrow, Title, container } from "@/components/ui";

const cards = [
  { Icon: MapPin, lines: ["4517 Washington Ave. Manchester, Kentucky 39495"] },
  { Icon: Phone, lines: ["(208) 555-0112,", "(316) 555-0116"] },
  { Icon: Mail, lines: ["fuelgize123@example.com", "oilgas.qwerty@example.com"] },
];

const MAP = "https://www.google.com/maps?q=4517+Washington+Ave.+Manchester,+Kentucky+39495&output=embed";

export default function ContactPage() {
  return (
    <main>
      <Header solid active="Contact" />
      <PageHero center compact title="Get In Touch" current="Contact" image="/images/svc-1.webp" position="center 70%" />

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

          <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-[30px]">
            {cards.map(({ Icon, lines }, i) => (
              <div key={i} className="bg-[#262626] p-8 text-white">
                <span className="grid h-[50px] w-[50px] place-items-center bg-brand"><Icon size={22} /></span>
                <div className="mt-8 text-[13px]">Address</div>
                <div className="mt-3 text-[20px] font-bold leading-7">
                  {lines.map((l) => <div key={l}>{l}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-14 lg:py-14 lg:py-14 lg:py-14 lg:py-24">
        <div className={`${container} grid grid-cols-1 items-center gap-10 lg:grid-cols-[400px_1fr] lg:gap-20`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/contact.webp" alt="" className="h-[360px] w-full max-w-[400px] object-cover lg:h-[420px]" />
          <div>
            <Eyebrow>Get In Touch</Eyebrow>
            <Title className="mt-5 !text-[56px]">Get In Touch</Title>
            <ContactForm />
          </div>
        </div>
        <div className={`${container} mt-20`}>
          <iframe title="Map" src={MAP} loading="lazy" className="h-[320px] w-full border-0 lg:h-[460px] grayscale" />
        </div>
      </section>

      <Faq cta="View More" />
      <Footer contactBand />
    </main>
  );
}