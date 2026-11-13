import { Plus } from "lucide-react";

export function Eyebrow({ children, center = false, className = "" }: { children: React.ReactNode; center?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-[13px] font-bold ${center ? "justify-center" : ""} ${className}`}>
      <span className="h-px w-10 bg-current opacity-80" />
      {children}
    </div>
  );
}



// Les anciens appels `!text-[56px]` ou `!text-[44px]` restent valides : on les convertit en tailles responsives.
const titleSizes: Record<string, string> = {
  "64": "text-[34px] sm:text-[46px] lg:text-[64px]",
  "56": "text-[32px] sm:text-[42px] lg:text-[56px]",
  "44": "text-[28px] sm:text-[34px] lg:text-[44px]",
};

// Les anciens appels `!text-[56px]` ou `!text-[44px]` restent valides : on les convertit en tailles responsives.
export function Title({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const m = className.match(/!text-\[(\d+)px\]/);
  const size = titleSizes[m?.[1] ?? "64"] ?? titleSizes["64"];
  const rest = className.replace(/!text-\[\d+px\]/, "").trim();
  return <h2 className={`font-display font-bold uppercase leading-[1.05] ${size} ${rest}`}>{children}</h2>;
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
