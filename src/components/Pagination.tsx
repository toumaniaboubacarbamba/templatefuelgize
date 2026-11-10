import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, total, hrefFor }: { page: number; total: number; hrefFor: (n: number) => string }) {
  return (
    <div className="mt-16 flex items-center justify-center gap-4 text-[15px] font-bold">
      {page > 1 && <Link href={hrefFor(page - 1)} aria-label="Previous"><ChevronLeft size={16} /></Link>}
      {Array.from({ length: total }, (_, i) =>
        i + 1 === page ? (
          <span key={i} className="grid h-6 w-6 place-items-center bg-brand text-[13px] text-white">{i + 1}</span>
        ) : (
          <Link key={i} href={hrefFor(i + 1)}>{i + 1}</Link>
        )
      )}
      {page < total && <Link href={hrefFor(page + 1)} aria-label="Next"><ChevronRight size={16} /></Link>}
    </div>
  );
}
