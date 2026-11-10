import { Plus } from "lucide-react";

export function Eyebrow({ children, center = false, className = "" }: { children: React.ReactNode; center?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-[13px] font-bold ${center ? "justify-center" : ""} ${className}`}>
      <span className="h-px w-10 bg-current opacity-80" />
      {children}
    </div>
  );
}

export function Title({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`font-display text-[64px] font-bold uppercase leading-[1.05] ${className}`}>{children}</h2>;
}

export function Btn({ children, href = "#", className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  return (
    <a href={href} className={`inline-flex items-center gap-3 bg-brand px-8 py-[14px] text-[15px] font-bold text-white transition hover:bg-white hover:text-ink ${className}`}>
      {children} <Plus size={14} />
    </a>
  );
}

export function MoreLink({ children = "Learn More", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <a href="#" className={`inline-flex items-center gap-2 text-[15px] font-bold ${className}`}>
      {children} <Plus size={14} />
    </a>
  );
}

export const container = "mx-auto w-full max-w-[1240px] px-6 xl:px-0";
