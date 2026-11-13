import Header from "./Header";
import PageHero from "./PageHero";
import BlogSidebar from "./BlogSidebar";
import PostCard, { postPages } from "./PostCard";
import Pagination from "./Pagination";
import Footer from "./Footer";
import { container } from "./ui";

const href = (n: number) => (n === 1 ? "/blog-sidebar" : `/blog-sidebar/page/${n}`);

export default function BlogSidebarView({ page }: { page: number }) {
  const items = postPages[page - 1];
  const ordered = page === 1 ? [...items.slice(0, 4), items[5], items[4]] : items;

  return (
    <main>
      <Header solid active="Blog" />
      <PageHero center compact title="Powering Your Energy Needs With Innovative Solutions" current="Blog + Sidebar" image="/images/svc-1.webp" />

      <section className="py-14 lg:py-14 lg:py-14 lg:py-14 lg:py-14 lg:py-24">
        <div className={`${container} flex flex-col gap-10 lg:flex-row lg:flex-col gap-10 lg:flex-row lg:flex-col gap-10 lg:flex-row lg:flex-col gap-10 lg:flex-row lg:flex-col gap-10 lg:flex-row lg:gap-[34px]`}>
          <BlogSidebar />
          <div className="min-w-0 min-w-0 min-w-0 min-w-0 min-w-0 flex-1">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-y-14">
              {ordered.map((p) => <PostCard key={p.title} post={p} stack />)}
            </div>
            <Pagination page={page} total={postPages.length} hrefFor={href} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
