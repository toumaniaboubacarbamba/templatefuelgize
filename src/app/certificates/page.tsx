import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import OrderForm from "@/components/OrderForm";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import { Eyebrow, Title, container } from "@/components/ui";

const certs = ["cert-1", "cert-2", "cert-3", "cert-3", "cert-1", "cert-2"];

export default function CertificatesPage() {
  return (
    <main>
      <Header solid active="Pages" />
      <PageHero compact title="Our Certificates" current="Certificates" image="/images/hero-bg.webp" position="center 25%" />

      <section className="py-20">
        <div className={container}>
          <Title className="!text-[44px]">Make Sure Of Our Professionalism</Title>
          <p className="mt-6 max-w-[600px] text-[16px] leading-7">
            From exploration and production to transportation and refining, we offer a wide range of products and services that meet the unique needs of the oil &amp; gas industry.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-[30px]">
            {certs.map((c, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={`/images/${c}.webp`} alt="" className="h-[272px] w-full bg-white object-cover" />
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      <section className="py-24">
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