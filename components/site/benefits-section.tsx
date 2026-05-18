import { CreditCard, RefreshCcw, ShieldCheck, Truck } from "lucide-react";

const benefits = [
  { title: "Fast Shipping", desc: "Quick delivery on all orders.", icon: Truck },
  { title: "Secure Payment", desc: "Safe checkout with Stripe.", icon: CreditCard },
  { title: "Easy Returns", desc: "Simple return process.", icon: RefreshCcw },
  { title: "Premium Quality", desc: "Selected modern fashion items.", icon: ShieldCheck },
];

export function BenefitsSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:grid-cols-2 lg:grid-cols-4">
      {benefits.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.title} className="rounded-3xl border bg-white p-6">
            <Icon className="mb-5 h-8 w-8" />
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
          </div>
        );
      })}
    </section>
  );
}