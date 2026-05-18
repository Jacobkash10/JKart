"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-4 py-20 lg:grid-cols-2">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex rounded-full border px-4 py-1 text-sm font-medium">
            New Fashion Collection 2026
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight lg:text-7xl">
            Modern Style
            <span className="block text-zinc-400">
              For Every Season
            </span>
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground">
            Discover premium fashion, sneakers, bags, and accessories
            designed for comfort, confidence, and modern lifestyle.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="h-12 px-8 text-base">
              Shop Now
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base"
            >
              Explore Collection
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[40px] bg-zinc-200 blur-3xl" />

          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
            alt="Fashion"
            className="relative z-10 h-175 w-full rounded-[40px] object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}