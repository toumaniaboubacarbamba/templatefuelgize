import { Suspense } from "react";
import { notFound } from "next/navigation";
import BlogSidebarView from "@/components/BlogSidebarView";
import { postPages } from "@/components/PostCard";

export function generateStaticParams() {
  return postPages.slice(1).map((_, i) => ({ n: String(i + 2) }));
}

async function BlogSidebarContent({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const page = Number(n);
  if (!Number.isInteger(page) || page < 2 || page > postPages.length) notFound();
  return <BlogSidebarView page={page} />;
}

export default function BlogSidebarPagedPage({ params }: { params: Promise<{ n: string }> }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogSidebarContent params={params} />
    </Suspense>
  );
}