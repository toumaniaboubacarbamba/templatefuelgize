import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import BlogSidebar from "@/components/BlogSidebar";
import ProductCard, { type Product } from "@/components/ProductCard";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import { container } from "@/components/ui";

const products: Product[] = [
  { title: "Measurement Equipment", category: "Home Selling", price: 1300, img: "svc-5" },
  { title: "Casing And Pipe", category: "Maintenance Tips", price: 1300, salePrice: 1200, badge: "SALE!", img: "about" },
  { title: "Downhole Tools", category: "Oil & Gas", price: 1300, badge: "FEATURED", img: "svc-7" },
  { title: "Production And Operations", category: "Home Selling", price: 1300, img: "svc-4" },
  { title: "Maintenance And Repair Services", category: "Maintenance Tips", price: 1300, img: "svc-3" },
  { title: "Drilling Fluids – Lubricate And Cool The Drill Bit", category: "Oil & Gas", price: 1300, salePrice: 1200, badge: "SALE!", img: "svc-1" },
];

export default function ProductListPage() {
  return (
    <main>
      <Header solid active="Pages" />
      <PageHero center compact title="Energizing Your World: Oil & Gas Production" current="Product List" image="/images/svc-1.webp" position="center 70%" />

      <section className="py-24">
        <div className={`${container} flex gap-[34px]`}>
          <BlogSidebar
            placeholder="Search products..."
            categories={[["Home Selling", 3], ["Maintenance Tips", 3], ["Oil & Gas", 3]]}
            tags={["#Boost", "#House", "#Optimization"]}
          />
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-x-8 gap-y-14">
              {products.map((p) => <ProductCard key={p.title} product={p} />)}
            </div>
            <Pagination page={1} total={2} hrefFor={() => "/production/product-list"} />
          </div>
        </div>
      </section>

      <Footer hideBand />
    </main>
  );
}