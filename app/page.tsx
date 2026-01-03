import { Suspense } from "react";
import { api } from "@/services/api";
import { HeroCarousel } from "@/components/features/hero-carousel";
import { AnimeRow } from "@/components/features/anime-row";
import { AnimeGrid } from "@/components/features/anime-grid";
import {
  HeroSkeleton,
  AnimeRowSkeleton,
  AnimeGridSkeleton,
} from "@/components/features/loading-skeletons";

async function FeaturedSection() {
  const featured = await api.getFeatured();
  return <HeroCarousel featured={featured} />;
}

async function TrendingSection() {
  const trending = await api.getTrending();
  return <AnimeRow title="Trending Now" anime={trending} href="/trending" />;
}

async function SeasonalSection() {
  const seasonal = await api.getSeasonal();
  return <AnimeGrid title="This Season" anime={seasonal} />;
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 pb-12">
      {/* Hero Carousel */}
      <Suspense fallback={<HeroSkeleton />}>
        <FeaturedSection />
      </Suspense>

      {/* Content Sections */}
      <div className="container px-4 md:px-6 space-y-12 md:space-y-16">
        {/* Trending Row */}
        <Suspense fallback={<AnimeRowSkeleton />}>
          <TrendingSection />
        </Suspense>

        {/* Seasonal Grid */}
        <Suspense fallback={<AnimeGridSkeleton />}>
          <SeasonalSection />
        </Suspense>
      </div>
    </div>
  );
}
