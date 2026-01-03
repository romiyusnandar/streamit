import { Suspense } from "react";
import { api } from "@/services/api";
import { HeroCarousel } from "@/components/features/hero-carousel";
import { AnimeRow } from "@/components/features/anime-row";
import {
  HeroSkeleton,
  AnimeRowSkeleton,
} from "@/components/features/loading-skeletons";

async function FeaturedSection() {
  const featured = await api.getFeatured();
  return <HeroCarousel featured={featured} />;
}

async function OngoingSection() {
  const ongoing = await api.getOngoing();
  return <AnimeRow title="Ongoing" anime={ongoing} href="/ongoing" />;
}

async function CompletedSection() {
  const completed = await api.getCompleted();
  return <AnimeRow title="Completed" anime={completed} href="/completed" />;
}

// async function AllAnimeSection() {
//   const allanime = await api.getAllAnime();
//   return <AnimeRow title="All Anime" anime={allanime} href="/anime" />;
// }

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 pb-12">
      {/* Hero Carousel */}
      <Suspense fallback={<HeroSkeleton />}>
        <FeaturedSection />
      </Suspense>

      {/* Content Sections */}
      <div className="container px-4 md:px-6 space-y-12 md:space-y-16">
        {/* Ongoing Row */}
        <Suspense fallback={<AnimeRowSkeleton />}>
          <OngoingSection />
        </Suspense>

        {/* Completed Row */}
        <Suspense fallback={<AnimeRowSkeleton />}>
          <CompletedSection />
        </Suspense>

        {/* Trending Row
        <Suspense fallback={<AnimeRowSkeleton />}>
          <AllAnimeSection />
        </Suspense> */}
      </div>
    </div>
  );
}
