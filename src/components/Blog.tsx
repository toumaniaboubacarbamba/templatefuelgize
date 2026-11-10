import { Eyebrow, Title, Btn, MoreLink, container } from "./ui";

const posts = [
  { t: "Navigating The Future: Trends In Oil & Gas Exploration", img: "svc-6" },
  { t: "Sustainable Solutions: Innovations In Energy Production", img: "svc-5" },
  { t: "Spotlight: Women Leaders Shaping The Oil & Gas Industry", img: "svc-8" },
  { t: "Exploring Offshore Opportunities: Deep Dive Into Offshore Drilling", img: "svc-7" },
];

export default function Blog() {
  return (
    <section className="pb-28">
      <div className={container}>
        <div className="text-center">
          <Eyebrow center>Blog &amp; News</Eyebrow>
          <Title className="mt-5 !text-[56px]">Powering Your Energy Needs With Innovative Solutions</Title>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-10">
          {posts.map((p) => (
            <article key={p.t} className="flex gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/${p.img}.webp`} alt="" className="h-[210px] w-[190px] shrink-0 object-cover" />
              <div className="pt-2">
                <div className="text-[11px] font-bold uppercase">February 18, 2024 <span className="mx-2">•</span> Admin</div>
                <h3 className="mt-4 text-[21px] font-bold leading-7">{p.t}</h3>
                <p className="mt-4 text-[14px] leading-6">The oil and gas industry has been a major player in the global energy market...</p>
                <MoreLink className="mt-4 !text-[14px]">Read More</MoreLink>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center"><Btn>Go To Blog</Btn></div>
      </div>
    </section>
  );
}
