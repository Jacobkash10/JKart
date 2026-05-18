import Link from "next/link";
import { Shirt, Footprints, ShoppingBag, Watch } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    title: "Clothing",
    description: "T-shirts, hoodies, jackets and more",
    href: "/products?category=clothing",
    icon: Shirt,
  },
  {
    title: "Shoes",
    description: "Sneakers, casual and premium footwear",
    href: "/products?category=shoes",
    icon: Footprints,
  },
  {
    title: "Bags",
    description: "Backpacks, handbags and daily bags",
    href: "/products?category=bags",
    icon: ShoppingBag,
  },
  {
    title: "Accessories",
    description: "Hats, socks, watches and essentials",
    href: "/products?category=accessories",
    icon: Watch,
  },
];

export function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Shop by category
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">
            Find your style
          </h2>
        </div>

        <Link href="/products" className="hidden text-sm font-semibold md:block">
          View all products →
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link key={category.title} href={category.href}>
              <Card className="group h-full border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 transition group-hover:bg-black group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {category.description}
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}