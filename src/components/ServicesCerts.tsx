import { Eyebrow, Title, Btn, MoreLink, container } from "./ui";

const services = [
  "Exploration And Development", "Production And Operations", "Transportation And Distribution", "Marketing And Sales",
  "Research And Innovation", "Environmental Management", "Workforce Development & Training", "Digital Transformation & Technology",
];

export default function ServicesCerts() {
  return (
    <section className="relative isolate bg-[#262626] pb-16 pt-16 lg:pb-32 lg:pt-28 text-white">
      <div className="absolute inset-0 -z-10 bg-cover opacity-[0.07]" style={{ backgroundImage: "url(/images/grid.webp)" }} />
      <div className={container}>
        <div className="text-center">
          <Eyebrow center>Services We Provide</Eyebrow>
          <Title className="mt-5">Innovating For A Sustainable Tomorrow In Oil &amp; Gas</Title>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-[30px]">
          {services.map((s, i) => (
            <a key={s} href="#" className="group flex h-[285px] items-end bg-cover bg-center p-6"
              style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.2) 70%), url(/images/svc-${i + 1}.webp)` }}>
              <div>
                <span className="text-[12px] font-bold uppercase">Oil &amp; Gas</span>
                <h3 className="mt-2 text-[22px] font-bold leading-7">{s}</h3>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center"><Btn>Discover Our Services</Btn></div>

        <div className="mt-16 lg:mt-16 lg:mt-16 lg:mt-16 lg:mt-16 lg:mt-28">
          <Eyebrow>Certificates</Eyebrow>
          <Title className="mt-5">Expertise For Oil &amp; Gas Profitability</Title>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[560px] text-[16px] leading-7">
              From exploration and production to transportation and refining, we offer a wide range of products and services that meet the unique needs of the oil &amp; gas industry.
            </p>
            <MoreLink className="text-white">View All</MoreLink>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-14 lg:gap-[30px]">
            {[1, 2, 3].map((n) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={n} src={`/images/cert-${n}.webp`} alt="" className="h-[260px] w-full bg-white object-cover" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
