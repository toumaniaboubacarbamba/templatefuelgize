import { Camera, MessageCircle, Search, Send } from "lucide-react";

const defaultCategories: [string, number][] = [["Home Selling", 3], ["Maintenance Tips", 3], ["Market Trends", 3]];
const defaultTags = ["#Marketing", "#Property", "#RealEstate"];

export default function BlogSidebar({
  placeholder = "",
  categories = defaultCategories,
  tags = defaultTags,
}: { placeholder?: string; categories?: [string, number][]; tags?: string[] }) {
  return (
    <aside className="w-full shrink-0 lg:w-[300px]">
      <div className="flex h-[50px]">
        <input aria-label="Search" placeholder={placeholder} className="min-w-0 flex-1 bg-mist px-4 text-[14px] outline-none" />
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