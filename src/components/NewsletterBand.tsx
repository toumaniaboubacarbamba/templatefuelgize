import { Mail, Phone } from "lucide-react";
import { container } from "./ui";

export default function NewsletterBand({ contactBand = false }: { contactBand?: boolean }) {
  return (
    <section className={`relative isolate py-12 text-white lg:py-0 ${contactBand ? "lg:h-[320px]" : "lg:h-[200px]"}`}>
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url(/images/newsletter-bg.webp)" }} />
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className={`${container} flex h-full flex-col items-start justify-between gap-8 lg:flex-row lg:items-center`}>
        {contactBand ? (
          <>
            <div>
              <h2 className="font-display text-[32px] font-bold uppercase leading-none sm:text-[40px] lg:text-[48px]">Subscribe To Our Newsletter</h2>
              <ul className="mt-6 space-y-3 text-[15px]">
                <li className="flex items-center gap-4"><span className="grid h-[30px] w-[30px] place-items-center bg-brand"><Phone size={15} /></span>(208) 555-0112, (316) 555-0116</li>
                <li className="flex items-center gap-4"><span className="grid h-[30px] w-[30px] place-items-center bg-brand"><Mail size={15} /></span>debra.holt@example.com</li>
              </ul>
            </div>
            <div className="w-full lg:w-[497px]">
              <p className="text-[15px] leading-6">From exploration and production to transportation and refining, we offer a wide range of products and services. Follow our newsletter!</p>
              <label className="mt-5 block">
                <span className="text-[11px] font-bold uppercase">Your E-Mail</span>
                <input type="email" placeholder="Enter your E-Mail" className="mt-1 block h-[54px] w-full bg-white/25 px-5 text-[14px] outline-none placeholder:text-white" />
              </label>
            </div>
          </>
        ) : (
          <>
            <h2 className="font-display text-[32px] font-bold uppercase leading-none sm:text-[40px] lg:text-[48px]">Subscribe To Our Newsletter</h2>
            <label className="block w-full lg:w-[497px]">
              <span className="text-[11px] font-bold uppercase">Your E-Mail</span>
              <input type="email" placeholder="Enter your E-Mail" className="mt-1 block h-[54px] w-full bg-white/25 px-5 text-[14px] placeholder:text-white outline-none" />
            </label>
          </>
        )}
      </div>
    </section>
  );
}