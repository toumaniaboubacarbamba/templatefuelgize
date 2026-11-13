export default function PageHero({
  title, current, image, center = false, compact = false, position = "center 75%",
}: { title: string; current: string; image: string; center?: boolean; compact?: boolean; position?: string }) {
  return (
    <section className={`relative isolate flex flex-col justify-center overflow-hidden text-white py-12 lg:py-0 ${compact ? "min-h-[260px] lg:h-[314px]" : "min-h-[300px] lg:h-[386px]"}`}>
      <div className="absolute inset-0 -z-10 bg-cover" style={{ backgroundImage: `url(${image})`, backgroundPosition: position }} />
      <div className={`absolute inset-0 -z-10 ${center ? "bg-black/55" : "bg-gradient-to-r from-black/70 to-black/20"}`} />
      <div className={`mx-auto w-full max-w-[1240px] px-6 xl:px-0 ${center ? "text-center" : ""}`}>
        <nav className="text-[13px] text-white/70">
          Home <span className="mx-3">›</span> <span className="font-bold text-white">{current}</span>
        </nav>
        <h1 className={`mt-6 font-display text-[34px] font-bold uppercase leading-[1.05] sm:text-[46px] lg:mt-8 lg:text-[64px] ${center ? "" : "max-w-[700px]"}`}>{title}</h1>
      </div>
    </section>
  );
}