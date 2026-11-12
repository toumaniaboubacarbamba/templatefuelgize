import Link from "next/link";

export type Product = { title: string; category: string; price: number; salePrice?: number; badge?: "SALE!" | "FEATURED"; img: string };

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function ProductCard({ product: p }: { product: Product }) {
  return (
    <article>
      <Link href="/production/product-list" className="relative block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/images/${p.img}.webp`} alt="" className="h-[280px] w-full object-cover" />
        {p.badge && (
          <span className={`absolute top-3 px-2.5 py-1 text-[11px] font-bold text-white ${p.badge === "FEATURED" ? "left-3 bg-brand" : "right-3 bg-ink"}`}>
            {p.badge}
          </span>
        )}
      </Link>
      <div className="mt-5 text-[11px] font-bold uppercase">{p.category}</div>
      <h3 className="mt-3 text-[20px] font-bold leading-7">{p.title}</h3>
      <div className="mt-3 text-[18px] font-bold">
        {p.salePrice ? (
          <>
            <span className="mr-2 text-[16px] font-normal text-ink/50 line-through">{usd(p.price)}</span>
            {usd(p.salePrice)}
          </>
        ) : (
          usd(p.price)
        )}
      </div>
    </article>
  );
}