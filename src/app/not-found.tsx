import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Btn } from "@/components/ui";

export default function NotFound() {
  return (
    <main>
      <Header solid active="Pages" />
      <section className="relative isolate flex min-h-[764px] flex-col items-center justify-center overflow-hidden px-6 text-center text-white">
        <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url(/images/stats-bg.webp)" }} />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <span aria-hidden className="pointer-events-none absolute left-1/2 top-[40px] -z-[5] -translate-x-1/2 select-none font-display text-[200px] lg:text-[200px] lg:text-[200px] lg:text-[200px] lg:text-[200px] lg:text-[420px] font-bold leading-none text-white/10">404</span>
        <h1 className="max-w-[1100px] font-display text-[48px] font-bold uppercase leading-[0.95] sm:text-[72px] lg:text-[112px]">Oops! Something Went Wrong</h1>
        <p className="mt-10 max-w-[700px] text-[15px] leading-7">
          At our company, we are dedicated to providing innovative solutions for the oil &amp; gas industry. Our team of experts has extensive experience in the field, allowing us to offer cutting-edge technologies.
        </p>
        <Btn href="/" className="mt-10">Back To Homepage</Btn>
      </section>
      <Footer hideBand />
    </main>
  );
}