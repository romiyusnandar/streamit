"use client";

import { Anime } from "@/services/api";
import { AnimeCard } from "./anime-card";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

interface AnimeRowProps {
  title: string;
  anime: Anime[];
  href?: string;
}

export function AnimeRow({ title, anime, href }: AnimeRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = direction === "left" ? -400 : 400;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        {href && (
          <Button variant="ghost" asChild className="group">
            <Link href={href} className="flex items-center gap-1">
              <span className="text-sm">View all</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </div>

      {/* Horizontal Scroll Grid */}
      <div className="relative group/row">
        {/* Left Arrow */}
        {showLeftArrow && (
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover/row:opacity-100 transition-opacity shadow-lg hidden md:flex"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover/row:opacity-100 transition-opacity shadow-lg hidden md:flex"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {anime.map((item, index) => (
            <div
              key={item.id}
              className="flex-none w-[150px] md:w-[200px] snap-start"
            >
              <AnimeCard anime={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
