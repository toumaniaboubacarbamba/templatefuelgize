import Link from "next/link";
import { Plus } from "lucide-react";

export type Post = { title: string; date: string; img: string; slug?: string };

export const postPages: Post[][] = [
  [
    { title: "Navigating The Future: Trends In Oil & Gas Exploration", date: "February 18, 2024", img: "svc-5" },
    { title: "Sustainable Solutions: Innovations In Energy Production", date: "February 18, 2024", img: "svc-2" },
    { title: "Spotlight: Women Leaders Shaping The Oil & Gas Industry", date: "February 18, 2024", img: "svc-6" },
    { title: "Exploring Offshore Opportunities: Deep Dive Into Offshore Drilling", date: "February 18, 2024", img: "svc-1" },
    { title: "The Power Of Data: Leveraging Technology In Oil & Gas Operations", date: "February 18, 2024", img: "svc-3" },
    { title: "Environmental Stewardship: Balancing Profit With Planet", date: "February 15, 2024", img: "svc-4" },
  ],
  [
    { title: "Unlocking Potential: Investing In Renewable Energy Ventures", date: "February 15, 2024", img: "svc-7" },
    { title: "Resilience In The Face Of Challenges: Adapting To Market Shifts", date: "February 15, 2024", img: "about" },
    { title: "The Human Element: Safety And Well-Being In Oil & Gas", date: "February 14, 2024", img: "svc-5" },
  ],
];

export const posts = postPages[0];

export default function PostCard({ post, stack = false }: { post: Post; stack?: boolean }) {
  if (stack) {
    return (
      <article>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/images/${post.img}.webp`} alt="" className="h-[280px] w-full object-cover" />
        <div className="mt-6 text-[11px] font-bold uppercase">
          {post.date} <span className="mx-2">•</span> Admin
        </div>
        <h3 className="mt-4 text-[20px] font-bold leading-7">{post.title}</h3>
        <p className="mt-3 text-[14px] leading-6">The oil and gas industry has been a major player in the global energy market for decades. Howeve...</p>
        <Link href="/blog" className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold">
          Read More <Plus size={13} />
        </Link>
      </article>
    );
  }
  return (
    <article className="flex gap-7">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/images/${post.img}.webp`} alt="" className="h-[180px] w-[180px] shrink-0 object-cover" />
      <div className="pt-1">
        <div className="text-[11px] font-bold uppercase">
          {post.date} <span className="mx-2">•</span> Admin
        </div>
        <h3 className="mt-4 text-[22px] font-bold leading-7">{post.title}</h3>
        <p className="mt-3 text-[14px] leading-6">The oil and gas industry has been a major player in the global energy market...</p>
        <Link href="/blog" className="mt-3 inline-flex items-center gap-2 text-[14px] font-bold">
          Read More <Plus size={13} />
        </Link>
      </div>
    </article>
  );
}