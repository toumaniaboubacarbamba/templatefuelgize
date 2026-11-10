import { notFound } from "next/navigation";
import BlogPageView from "@/components/BlogPageView";
import { postPages } from "@/components/PostCard";

export function generateStaticParams() {
  return postPages.slice(1).map((_, i) => ({ n: String(i + 2) }));
}

export default async function BlogPagedPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const page = Number(n);
  if (!Number.isInteger(page) || page < 2 || page > postPages.length) notFound();
  return <BlogPageView page={page} />;
}
