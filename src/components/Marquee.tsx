import { Droplet } from "lucide-react";

const words = ["Production", "Oil", "Gas", "Power", "Future", "Innovation", "Industry", "Progress", "Energy"];

export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center">
      {words.map((w) => (
        <span key={w} className="flex items-center text-[22px] font-bold text-white">
          <Droplet size={22} className="mx-8 text-white/40" />
          {w}
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden bg-brand py-6">
      <div className="animate-marquee flex w-max">{row}{row}</div>
    </div>
  );
}
