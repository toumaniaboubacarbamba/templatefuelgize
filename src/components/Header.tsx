import Link from "next/link";
import { ChevronDown, MapPin, Mail, Phone, Plus, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { nav } from "./nav-data";


type IconProps = { size?: number };
const svg = (d: string) => function Icon({ size = 15 }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d={d} /></svg>;
};
const Twitter = svg("M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.600a4.100 4.100 0 0 0 1.300 5.500c-.7 0-1.300-.2-1.900-.5 0 2 1.400 3.700 3.300 4.100-.6.2-1.200.2-1.900.1.500 1.600 2 2.800 3.800 2.900A8.200 8.200 0 0 1 2 18.400 11.600 11.600 0 0 0 8.300 20.200c7.500 0 11.700-6.300 11.700-11.700v-.5c.8-.6 1.500-1.300 2-2.100z");
const Facebook = svg("M13.500 21v-7.500h2.500l.4-3h-2.900V8.600c0-.9.3-1.500 1.500-1.500h1.500V4.400c-.3 0-1.200-.1-2.200-.1-2.200 0-3.700 1.300-3.700 3.800v2.400H8v3h2.600V21z");
const Instagram = svg("M12 7.400A4.600 4.600 0 1 0 12 16.600 4.600 4.600 0 0 0 12 7.400zm0 7.600a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM17.200 6a1.100 1.100 0 1 0 0 2.200 1.100 1.100 0 0 0 0-2.200zM12 3c-2.400 0-2.700 0-3.700.1-2.400.1-3.700 1.400-3.800 3.800C4.400 7.800 4.400 8.100 4.400 12s0 4.200.1 5.100c.1 2.400 1.400 3.700 3.800 3.800 1 .1 1.300.1 3.700.1s2.700 0 3.700-.1c2.400-.1 3.700-1.400 3.800-3.800.1-.9.1-1.200.1-5.100s0-4.200-.1-5.100c-.1-2.400-1.400-3.700-3.800-3.800C14.700 3 14.400 3 12 3z");




export default function Header({ solid = false, active = "Home" }: { solid?: boolean; active?: string }) {
  return (
    <div className={`${solid ? "relative z-20 bg-[#787750]" : "absolute inset-x-0 top-0 z-20"} text-white`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 text-[13px] lg:px-12 lg:py-5">
        <div className="hidden items-center gap-12 lg:flex">
          <span className="flex items-center gap-3"><MapPin size={16} />2715 Ash Dr. San Jose, South Dakota 83475</span>
          <span className="flex items-center gap-3"><Mail size={16} />oil.industry12@example.com</span>
        </div>
        <span className="flex items-center gap-3"><Phone size={16} />(208) 555-0112, (316) 555-0116</span>
      </div>

      <header className="relative mx-4 flex h-[70px] items-center justify-between bg-[#1a1a1a]/90 px-4 backdrop-blur lg:h-[80px] lg:px-8 overflow-visible">
        <Logo />
        <nav className="ml-10 mr-auto hidden items-center text-[15px] lg:flex xl:ml-24 overflow-visible">
          {nav.map((item, i) => (
            <div key={item.label} className="flex items-center">
              {i > 0 && <span className="mx-5 h-4 w-px bg-white/20 xl:mx-8" />}
              <div className="group relative">
                <Link
                  href={item.href ?? item.children?.[0].href ?? "#"}
                  className={`flex items-center gap-1.5 py-2 transition-colors ${
                    item.label === active ? "text-white underline underline-offset-8" : "text-white/70 group-hover:text-white group-hover:underline group-hover:underline-offset-8"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} />}
                </Link>
                {item.children && (
                  <div className="pointer-events-none absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 -translate-y-1">
                    <ul className="min-w-[170px] bg-white py-3 text-ink shadow-xl">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <Link href={c.href} className="block whitespace-nowrap px-6 py-[10px] text-[16px] transition-colors hover:text-brand">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-[15px] lg:gap-6">
          <div className="hidden items-center gap-6 xl:flex">
            <a href="#" className="flex items-center gap-1.5 font-bold"><Plus size={14} />Careers</a>
            <span className="h-4 w-px bg-white/20" />
            <div className="flex gap-1.5">
              {[Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="grid h-8 w-8 place-items-center bg-white/10 hover:bg-brand"><Icon size={15} /></a>
              ))}
            </div>
          </div>
          <a href="#" className="relative">
            <ShoppingBag size={18} />
            <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-brand text-[10px]">0</span>
          </a>
          <a href="/contact" className="hidden items-center gap-2 border border-white/60 px-5 py-3 font-bold hover:border-brand hover:bg-brand lg:flex">
            Contact us <Plus size={14} />
          </a>
          <MobileNav active={active} />
        </div>
      </header>
    </div>
  );
}
