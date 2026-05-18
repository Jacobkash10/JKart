"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function CartDrawer({ children }: { children: React.ReactElement }) {
  const [mounted, setMounted] = useState(false);

  const { items, removeItem, updateQuantity, totalItems, totalPrice } =
    useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartItems = mounted ? items : [];
  const cartTotalItems = mounted ? totalItems() : 0;
  const cartTotalPrice = mounted ? totalPrice() : 0;

  return (
    <Sheet>
      <SheetTrigger render={children} />

      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your Cart ({cartTotalItems})</SheetTitle>
        </SheetHeader>

        <div className="flex-1 space-y-4 overflow-y-auto py-6">
          {cartItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 rounded-2xl border p-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-xl object-cover"
                />

                <div className="flex flex-1 flex-col">
                  <h4 className="font-semibold">{item.name}</h4>

                  <p className="text-sm text-muted-foreground">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>

                      <span className="w-6 text-center text-sm">
                        {item.quantity}
                      </span>

                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-red-500"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t pt-4">
          <div className="mb-4 flex items-center justify-between font-bold">
            <span>Total</span>
            <span>${cartTotalPrice.toFixed(2)}</span>
          </div>

          <Button className="w-full" size="lg" disabled={cartItems.length === 0}>
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}