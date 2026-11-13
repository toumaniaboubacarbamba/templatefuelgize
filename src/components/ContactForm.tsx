const label = "block text-[10px] font-bold uppercase";
const field = "mt-2 block w-full bg-mist px-5 text-[14px] outline-none";

export default function ContactForm() {
  return (
    <form className="mt-10 max-w-[640px]">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-[30px]">
        <label className="block"><span className={label}>Your Name</span><input className={`${field} h-[50px]`} /></label>
        <label className="block"><span className={label}>Your E-Mail</span><input type="email" className={`${field} h-[50px]`} /></label>
      </div>
      <label className="mt-5 block"><span className={label}>Your Question</span><textarea className={`${field} h-[130px] resize-y py-4`} /></label>
      <button type="submit" className="mt-5 bg-brand px-10 py-[14px] text-[15px] font-bold text-white hover:bg-ink">Submit</button>
    </form>
  );
}