import { BenefitsSection } from "@/components/site/benefits-section";
import { CategorySection } from "@/components/site/category-section";
import { FeaturedProducts } from "@/components/site/featured-products";
import { HeroSection } from "@/components/site/hero-section";
import { NewsletterSection } from "@/components/site/newsletter-section";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <BenefitsSection />
        <NewsletterSection />
      </main>
    </>
  );
}