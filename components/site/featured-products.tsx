import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    name: "Urban Oversized Hoodie",
    category: "Clothing",
    price: "$68.00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    tag: "New",
  },
  {
    name: "Premium Street Sneakers",
    category: "Shoes",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    tag: "Best Seller",
  },
  {
    name: "Everyday Crossbody Bag",
    category: "Bags",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    tag: "Popular",
  },
];

export function FeaturedProducts() {
  return (
    <section className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Featured products
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">
            Trending this week
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group overflow-hidden border-0 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <Badge className="absolute left-4 top-4">
                  {product.tag}
                </Badge>

                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute right-4 top-4 rounded-full"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {product.category}
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-2 text-muted-foreground">
                    4.9
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-black">{product.price}</p>

                  <Button>
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}