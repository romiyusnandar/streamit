"use client";

import { Anime } from "@/services/api";
import { AnimeCard } from "./anime-card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AnimeRowProps {
  title: string;
  anime: Anime[];
  href?: string;
}

export function AnimeRow({ title, anime, href }: AnimeRowProps) {
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
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory">
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
