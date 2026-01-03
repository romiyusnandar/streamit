"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Anime } from "@/services/api";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface HeroCarouselProps {
  featured: Anime[];
}

export function HeroCarousel({ featured }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featured.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featured.length]);

  const currentAnime = featured[currentIndex];

  if (!currentAnime) return null;

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={currentAnime.bannerImage || currentAnime.coverImage}
              alt={currentAnime.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container px-4 md:px-6 flex items-end pb-20 md:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-2xl space-y-4 md:space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {currentAnime.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  ⭐ {currentAnime.rating}
                </span>
                <span>•</span>
                <span>{currentAnime.year}</span>
                <span>•</span>
                <span>{currentAnime.episodes} Episodes</span>
                <span>•</span>
                <span className="capitalize">{currentAnime.status}</span>
              </div>
              <p className="text-base md:text-lg text-muted-foreground line-clamp-3">
                {currentAnime.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {currentAnime.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 text-xs font-medium bg-secondary rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <Button size="lg" asChild>
                  <Link href={`/watch/${currentAnime.id}`}>
                    <Play className="mr-2 h-5 w-5" />
                    Watch Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href={`/anime/${currentAnime.id}`}>
                    <Info className="mr-2 h-5 w-5" />
                    More Info
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {featured.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-primary" : "w-4 bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
