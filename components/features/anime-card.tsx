"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Anime } from "@/services/api";
import { Play } from "lucide-react";

interface AnimeCardProps {
  anime: Anime;
  index: number;
}

export function AnimeCard({ anime, index }: AnimeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group relative"
    >
      <Link href={`/anime/${anime.id}`} className="block">
        {/* Card Container */}
        <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-muted">
          {/* Image */}
          <Image
            src={anime.coverImage}
            alt={anime.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Play Icon on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
              <Play className="w-6 h-6 text-primary-foreground ml-1" />
            </div>
          </div>

          {/* Rating Badge */}
          <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-xs font-medium flex items-center gap-1">
            ⭐ {anime.rating}
          </div>

          {/* Status Badge */}
          {anime.status === "ongoing" && (
            <div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-primary/90 backdrop-blur-sm text-xs font-medium">
              Ongoing
            </div>
          )}
        </div>

        {/* Title */}
        <div className="mt-3 space-y-1">
          <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {anime.title}
          </h3>
          <p className="text-xs text-muted-foreground">
            {anime.year} • {anime.episodes} eps
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
