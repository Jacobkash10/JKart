import Link from "next/link";
import { ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          JKart
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/products">Shop</Link>
          <Link href="/products?category=clothing">Clothing</Link>
          <Link href="/products?category=shoes">Shoes</Link>
          <Link href="/products?category=accessories">Accessories</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>

          <Button size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}