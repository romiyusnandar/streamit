"use client";

import { Anime } from "@/services/api";
import { AnimeCard } from "./anime-card";

interface AnimeGridProps {
  title: string;
  anime: Anime[];
}

export function AnimeGrid({ title, anime }: AnimeGridProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {anime.map((item, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </div>
    </section>
  );
}
