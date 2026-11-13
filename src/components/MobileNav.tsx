"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Plus, X } from "lucide-react";
import { nav } from "./nav-data";

export default function MobileNav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="grid h-10 w-10 place-items-center border border-white/40"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 max-h-[calc(100vh-130px)] overflow-y-auto bg-[#1a1a1a] px-6 py-2 shadow-xl">
          <ul>
            {nav.map((item) => (
              <li key={item.label} className="border-b border-white/10">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setSub(sub === item.label ? null : item.label)}
                      className={`flex w-full items-center justify-between py-4 text-left text-[16px] ${item.label === active ? "text-brand" : ""}`}
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform ${sub === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {sub === item.label && (
                      <ul className="pb-3 pl-4">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <Link href={c.href} onClick={close} className="block py-2.5 text-[15px] text-white/80 hover:text-brand">{c.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href ?? "#"} onClick={close} className={`block py-4 text-[16px] ${item.label === active ? "text-brand" : ""}`}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link href="/contact" onClick={close} className="my-5 flex items-center justify-center gap-2 bg-brand px-5 py-3 font-bold">
            Contact us <Plus size={14} />
          </Link>
        </div>
      )}
    </div>
  );
}