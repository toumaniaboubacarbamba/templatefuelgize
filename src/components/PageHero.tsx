export default function PageHero({ title, current, image }: { title: string; current: string; image: string }) {
  return (
    <section className="relative isolate flex h-[386px] flex-col justify-center overflow-hidden text-white">
      <div className="absolute inset-0 -z-10 bg-cover" style={{ backgroundImage: `url(${image})`, backgroundPosition: "center 75%" }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 to-black/20" />
      <div className="mx-auto w-full max-w-[1240px] px-6 xl:px-0">
        <nav className="text-[13px] text-white/70">
          Home <span className="mx-3">›</span> <span className="font-bold text-white">{current}</span>
        </nav>
        <h1 className="mt-8 max-w-[700px] font-display text-[64px] font-bold uppercase leading-[1.05]">{title}</h1>
      </div>
    </section>
  );
}