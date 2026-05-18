import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="rounded-[40px] bg-black px-6 py-16 text-center text-white md:px-20">
        <h2 className="text-3xl font-black tracking-tight md:text-5xl">
          Get exclusive drops and offers
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Join our newsletter for new arrivals, limited collections, and special discounts.
        </p>

        <div className="mx-auto mt-8 flex max-w-md gap-3">
          <Input
            placeholder="Enter your email"
            className="h-12 border-white/20 bg-white text-black"
          />
          <Button className="h-12 bg-white px-6 text-black hover:bg-zinc-200">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}