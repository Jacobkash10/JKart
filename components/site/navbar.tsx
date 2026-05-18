"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { useCartStore } from "@/store/cart-store";
import { useSession, signOut } from "@/lib/auth-client";

export function Navbar() {
  const [mounted, setMounted] = useState(false);

  const totalItems = useCartStore((state) => state.totalItems());
  const { data: session } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

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

          {session?.user ? (
            <Button
              variant="ghost"
              onClick={async () => {
                await signOut();
                window.location.href = "/";
              }}
            >
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          )}

          <CartDrawer>
            <Button size="icon" className="relative" type="button">
              <ShoppingBag className="h-5 w-5" />

              {mounted && totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Button>
          </CartDrawer>
        </div>
      </div>
    </header>
  );
}