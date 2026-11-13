import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "./Header";
import PageHero from "./PageHero";
import PostCard, { postPages } from "./PostCard";
import Footer from "./Footer";
import { container } from "./ui";

const href = (n: number) => (n === 1 ? "/blog" : `/blog/page/${n}`);

export default function BlogPageView({ page }: { page: number }) {
  const total = postPages.length;
  return (
    <main>
      <Header solid active="Blog" />
      <PageHero center compact title="Powering Your Energy Needs With Innovative Solutions" current="Blog" image="/images/svc-1.webp" />

      <section className="py-14 lg:py-14 lg:py-14 lg:py-14 lg:py-14 lg:py-24">
        <div className={container}>
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-[35px] lg:gap-y-14">
            {postPages[page - 1].map((p) => <PostCard key={p.title} post={p} />)}
          </div>
          <div className="mt-16 flex items-center justify-center gap-4 text-[15px] font-bold">
            {page > 1 && <Link href={href(page - 1)} aria-label="Previous"><ChevronLeft size={16} /></Link>}
            {postPages.map((_, i) =>
              i + 1 === page ? (
                <span key={i} className="grid h-6 w-6 place-items-center bg-brand text-[13px] text-white">{i + 1}</span>
              ) : (
                <Link key={i} href={href(i + 1)}>{i + 1}</Link>
              )
            )}
            {page < total && <Link href={href(page + 1)} aria-label="Next"><ChevronRight size={16} /></Link>}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}