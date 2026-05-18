import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-2xl font-black">JKart</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Modern ecommerce for clothing, shoes, bags, and accessories.
          </p>
        </div>

        <div>
          <h4 className="font-bold">Shop</h4>
          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
            <Link href="/products" className="block">All Products</Link>
            <Link href="/products?category=clothing" className="block">Clothing</Link>
            <Link href="/products?category=shoes" className="block">Shoes</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold">Company</h4>
          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
            <Link href="/about" className="block">About</Link>
            <Link href="/contact" className="block">Contact</Link>
            <Link href="/support" className="block">Support</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold">Account</h4>
          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
            <Link href="/login" className="block">Login</Link>
            <Link href="/register" className="block">Create Account</Link>
            <Link href="/orders" className="block">Orders</Link>
          </div>
        </div>
      </div>

      <div className="border-t py-5 text-center text-sm text-muted-foreground">
        © 2026 JKart. All rights reserved.
      </div>
    </footer>
  );
}