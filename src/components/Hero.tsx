import { Btn } from "./ui";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[640px] overflow-hidden bg-ink pb-20 pt-[170px] lg:h-[900px] lg:pb-0 lg:pt-[290px] text-white">
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url(/images/hero-bg.webp)" }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/45 to-black/30" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="mx-auto max-w-[1240px] px-6 xl:px-0">
        <h1 className="max-w-[1150px] font-display text-[44px] font-bold uppercase leading-[0.95] sm:text-[64px] lg:text-[100px]">
          The Power Of Data: Leveraging Technology In Oil &amp; Gas
        </h1>
        <p className="mt-8 max-w-[720px] lg:mt-14 text-[15px] leading-7">
          At our company, we are dedicated to providing innovative solutions for the oil &amp; gas industry. Our team of
          experts has extensive experience in the field, allowing us to offer cutting-edge technologies.
        </p>
        <Btn className="mt-10">Discover Our Services</Btn>
      </div>
      <div className="absolute bottom-0 right-0 hidden hidden hidden hidden hidden h-[70px] w-[140px] bg-brand lg:block lg:block lg:block lg:block lg:block" />
    </section>
  );
}
