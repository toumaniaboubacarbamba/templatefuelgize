import { ChevronDown } from "lucide-react";

const label = "block text-[10px] font-bold uppercase";
const field = "mt-2 block w-full bg-mist px-5 text-[14px] outline-none";

export default function OrderForm() {
  return (
    <form className="mt-12 grid grid-cols-2 gap-[30px]">
      <div className="space-y-5">
        <label className="block"><span className={label}>Your Name</span><input className={`${field} h-[50px]`} /></label>
        <label className="block"><span className={label}>Your E-Mail</span><input type="email" className={`${field} h-[50px]`} /></label>
        <label className="block">
          <span className={label}>Service You&rsquo;re Interested In (Optional)</span>
          <div className="relative">
            <select className={`${field} h-[50px] appearance-none`}>
              <option>Natural Gas Production</option>
              <option>Crude Oil Production</option>
              <option>Transportation And Distribution</option>
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2" />
          </div>
        </label>
      </div>
      <div className="flex flex-col">
        <label className="block flex-1"><span className={label}>Your Question</span><textarea className={`${field} h-[130px] resize-y py-4`} /></label>
        <button type="submit" className="mt-5 h-[50px] bg-brand text-[15px] font-bold text-white hover:bg-ink">Submit</button>
      </div>
    </form>
  );
}