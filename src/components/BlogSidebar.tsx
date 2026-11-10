import { Camera, MessageCircle, Search, Send } from "lucide-react";

const categories = [["Home Selling", 3], ["Maintenance Tips", 3], ["Market Trends", 3]] as const;
const tags = ["#Marketing", "#Property", "#RealEstate"];

export default function BlogSidebar() {
  return (
    <aside className="w-[300px] shrink-0">
      <div className="flex h-[50px]">
        <input aria-label="Search" className="min-w-0 flex-1 bg-mist px-4 outline-none" />
        <button aria-label="Search" className="grid w-[50px] place-items-center bg-brand text-white"><Search size={16} /></button>
      </div>

      <h4 className="mt-14 text-[18px] font-bold">Categories</h4>
      <ul className="mt-5 space-y-3.5 text-[15px]">
        {categories.map(([c, n]) => (
          <li key={c} className="flex justify-between"><a href="#">{c}</a><span className="text-ink/50">{n}</span></li>
        ))}
      </ul>

      <h4 className="mt-12 text-[18px] font-bold">Tags</h4>
      <div className="mt-5 flex gap-3 text-[14px]">{tags.map((t) => <a key={t} href="#">{t}</a>)}</div>

      <h4 className="mt-12 text-[18px] font-bold">Follow Us</h4>
      <div className="mt-5 flex gap-2">
        {[Camera, MessageCircle, Send].map((Icon, i) => (
          <a key={i} href="#" className="grid h-6 w-6 place-items-center bg-brand/15 text-brand"><Icon size={12} /></a>
        ))}
      </div>
    </aside>
  );
}
