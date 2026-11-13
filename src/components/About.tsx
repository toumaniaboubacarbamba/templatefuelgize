import { Eyebrow, Title, MoreLink, container } from "./ui";

export default function About() {
  return (
    <section className="py-16 lg:py-16 lg:py-16 lg:py-16 lg:py-16 lg:py-28">
      <div className={`${container} grid grid-cols-1 gap-10 lg:grid-cols-2`}>
        <div className="max-w-[600px]">
          <Eyebrow>About Us</Eyebrow>
          <Title className="mt-5">Oil &amp; Gas Innovators: Driving Progress In The Industry</Title>
          <p className="mt-10 text-[16px] leading-7">
            From exploration and production to transportation and refining, we offer a wide range of products and
            services that meet the unique needs of the oil &amp; gas industry. Our commitment to excellence and customer
            satisfaction is reflected in our rigorous quality control processes.
          </p>
          <MoreLink className="mt-8" />
        </div>
        <div className="relative min-h-[260px] lg:min-h-[260px] lg:min-h-[260px] lg:min-h-[260px] lg:min-h-[260px] lg:min-h-[420px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about.webp" alt="" className="absolute bottom-0 right-0 h-[260px] w-[260px] lg:h-[320px] lg:w-[320px] object-cover" />
        </div>
      </div>
    </section>
  );
}
