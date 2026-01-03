// Types for our API responses
export interface Anime {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  bannerImage?: string;
  rating: number;
  episodes: number;
  status: "ongoing" | "completed" | "upcoming";
  genres: string[];
  year: number;
  season?: string;
}

export interface Episode {
  id: string;
  animeId: string;
  number: number;
  title: string;
  thumbnail: string;
  duration: number;
  airDate: string;
}

// Mock data
const MOCK_ANIME: Anime[] = [
  {
    id: "1",
    title: "Demon Slayer: Kimetsu no Yaiba",
    description:
      "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly.",
    coverImage: "https://placehold.co/300x450/1a1a1a/666?text=Demon+Slayer",
    bannerImage: "https://placehold.co/1920x600/1a1a1a/666?text=Demon+Slayer",
    rating: 8.7,
    episodes: 26,
    status: "completed",
    genres: ["Action", "Adventure", "Supernatural"],
    year: 2019,
    season: "Spring",
  },
  {
    id: "2",
    title: "Attack on Titan",
    description:
      "After his hometown is destroyed and his mother is killed, young Eren Yeager vows to cleanse the earth of the giant humanoid Titans.",
    coverImage: "https://placehold.co/300x450/1a1a1a/666?text=Attack+on+Titan",
    bannerImage: "https://placehold.co/1920x600/1a1a1a/666?text=Attack+on+Titan",
    rating: 9.0,
    episodes: 75,
    status: "completed",
    genres: ["Action", "Drama", "Fantasy"],
    year: 2013,
    season: "Spring",
  },
  {
    id: "3",
    title: "My Hero Academia",
    description:
      "A superhero-admiring boy without any powers enrolls in a prestigious hero academy and learns what it really means to be a hero.",
    coverImage: "https://placehold.co/300x450/1a1a1a/666?text=My+Hero+Academia",
    bannerImage: "https://placehold.co/1920x600/1a1a1a/666?text=My+Hero+Academia",
    rating: 8.4,
    episodes: 88,
    status: "ongoing",
    genres: ["Action", "Comedy", "School"],
    year: 2016,
    season: "Spring",
  },
  {
    id: "4",
    title: "Jujutsu Kaisen",
    description:
      "A boy swallows a cursed talisman and must learn to control the powers he gains to survive in a world of curses.",
    coverImage: "https://placehold.co/300x450/1a1a1a/666?text=Jujutsu+Kaisen",
    bannerImage: "https://placehold.co/1920x600/1a1a1a/666?text=Jujutsu+Kaisen",
    rating: 8.6,
    episodes: 47,
    status: "ongoing",
    genres: ["Action", "Supernatural", "School"],
    year: 2020,
    season: "Fall",
  },
  {
    id: "5",
    title: "Chainsaw Man",
    description:
      "Following a betrayal, a young man named Denji merges with his pet devil and becomes a chainsaw-wielding devil hunter.",
    coverImage: "https://placehold.co/300x450/1a1a1a/666?text=Chainsaw+Man",
    bannerImage: "https://placehold.co/1920x600/1a1a1a/666?text=Chainsaw+Man",
    rating: 8.5,
    episodes: 12,
    status: "completed",
    genres: ["Action", "Horror", "Supernatural"],
    year: 2022,
    season: "Fall",
  },
  {
    id: "6",
    title: "Spy x Family",
    description:
      "A spy must create a fake family to execute a mission, unaware that his adopted daughter is a telepath and his wife is an assassin.",
    coverImage: "https://placehold.co/300x450/1a1a1a/666?text=Spy+x+Family",
    bannerImage: "https://placehold.co/1920x600/1a1a1a/666?text=Spy+x+Family",
    rating: 8.7,
    episodes: 25,
    status: "ongoing",
    genres: ["Action", "Comedy", "Slice of Life"],
    year: 2022,
    season: "Spring",
  },
];

// Simulated API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// API functions
export const api = {
  // Get featured anime (for hero carousel)
  async getFeatured(): Promise<Anime[]> {
    await delay(500);
    return MOCK_ANIME.slice(0, 3);
  },

  // Get trending anime
  async getTrending(): Promise<Anime[]> {
    await delay(500);
    return MOCK_ANIME.sort((a, b) => b.rating - a.rating);
  },

  // Get seasonal anime
  async getSeasonal(): Promise<Anime[]> {
    await delay(500);
    return MOCK_ANIME.filter((anime) => anime.season === "Spring");
  },

  // Get anime by ID
  async getAnimeById(id: string): Promise<Anime | null> {
    await delay(300);
    return MOCK_ANIME.find((anime) => anime.id === id) || null;
  },

  // Get episodes for an anime
  async getEpisodes(animeId: string): Promise<Episode[]> {
    await delay(300);
    const anime = MOCK_ANIME.find((a) => a.id === animeId);
    if (!anime) return [];

    return Array.from({ length: Math.min(anime.episodes, 12) }, (_, i) => ({
      id: `${animeId}-ep-${i + 1}`,
      animeId,
      number: i + 1,
      title: `Episode ${i + 1}`,
      thumbnail: `https://placehold.co/320x180/1a1a1a/666?text=Ep+${i + 1}`,
      duration: 24 * 60, // 24 minutes in seconds
      airDate: new Date(2023, 0, i + 1).toISOString(),
    }));
  },

  // Search anime
  async search(query: string): Promise<Anime[]> {
    await delay(500);
    const lowerQuery = query.toLowerCase();
    return MOCK_ANIME.filter(
      (anime) =>
        anime.title.toLowerCase().includes(lowerQuery) ||
        anime.description.toLowerCase().includes(lowerQuery) ||
        anime.genres.some((genre) => genre.toLowerCase().includes(lowerQuery))
    );
  },
};
