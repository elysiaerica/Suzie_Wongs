import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Music, Clock, DollarSign, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Event = {
  id: number;
  day: string;
  date: string;
  month: string;
  year: string;
  title: string;
  artist: string;
  genre: string;
  time: string;
  doors: string;
  cover: string;
  description: string;
  featured: boolean;
};

const events: Event[] = [
  {
    id: 1,
    day: "Thursday",
    date: "06",
    month: "March",
    year: "2026",
    title: "The Grizzlers",
    artist: "The Grizzlers",
    genre: "Surf Rock / Garage",
    time: "9:30pm",
    doors: "7pm",
    cover: "Free",
    description: "Four-piece surf rock outfit from the Sunshine Coast. If you like reverb-soaked guitars and songs about beaches you can't actually surf on, this is your night.",
    featured: false,
  },
  {
    id: 2,
    day: "Friday",
    date: "07",
    month: "March",
    year: "2026",
    title: "Bad Habits",
    artist: "Bad Habits",
    genre: "Classic Rock Covers",
    time: "9:30pm",
    doors: "7pm",
    cover: "$10",
    description: "Brisbane's favourite classic rock cover band. AC/DC, Guns N' Roses, Led Zeppelin — you know every word, they'll play every song. Massive Friday night energy.",
    featured: true,
  },
  {
    id: 3,
    day: "Saturday",
    date: "08",
    month: "March",
    year: "2026",
    title: "The Midnight Rollers",
    artist: "The Midnight Rollers",
    genre: "Funk / Soul",
    time: "9pm",
    doors: "6pm",
    cover: "$12",
    description: "Seven-piece funk machine that will have you shaking things your spine forgot it could shake. Full horn section. Expect to sweat.",
    featured: true,
  },
  {
    id: 4,
    day: "Sunday",
    date: "09",
    month: "March",
    year: "2026",
    title: "Velvet Revolver Tribute",
    artist: "Contraband",
    genre: "Heavy Rock",
    time: "8pm",
    doors: "5pm",
    cover: "$15",
    description: "The best Velvet Revolver tribute act this side of the Pacific. Slash solos, Weiland energy, and a crowd that never disappoints.",
    featured: false,
  },
  {
    id: 5,
    day: "Thursday",
    date: "13",
    month: "March",
    year: "2026",
    title: "Open Mic Night",
    artist: "Various Artists",
    genre: "Various",
    time: "8pm",
    doors: "7pm",
    cover: "Free",
    description: "Think you've got what it takes? Sign up on the night. Originals welcome, covers encouraged, all genres considered. Suzie doesn't judge.",
    featured: false,
  },
  {
    id: 6,
    day: "Friday",
    date: "14",
    month: "March",
    year: "2026",
    title: "The Wolfpack",
    artist: "The Wolfpack",
    genre: "Rock / Blues",
    time: "9:30pm",
    doors: "7pm",
    cover: "$10",
    description: "Raw, dirty blues-rock with a Queensland edge. These lads have been tearing up the Valley for a decade. The real deal.",
    featured: false,
  },
  {
    id: 7,
    day: "Saturday",
    date: "15",
    month: "March",
    year: "2026",
    title: "Neon Tropics",
    artist: "Neon Tropics",
    genre: "New Wave / Synth",
    time: "9pm",
    doors: "7pm",
    cover: "$12",
    description: "80s-inspired synth pop meets Brisbane heat. Hawaiian shirts mandatory. Just kidding. Or are we?",
    featured: false,
  },
  {
    id: 8,
    day: "Sunday",
    date: "16",
    month: "March",
    year: "2026",
    title: "Dead Ringer Band",
    artist: "Dead Ringer Band",
    genre: "Country Rock",
    time: "8pm",
    doors: "5pm",
    cover: "Free",
    description: "Country roads, take me to Suzie Wong's. Australia's favourite Sunday session, now with added twang.",
    featured: false,
  },
];

const genreColors: Record<string, string> = {
  "Surf Rock / Garage": "text-neon-amber border-neon-amber/30",
  "Classic Rock Covers": "text-neon-pink border-neon-pink/30",
  "Funk / Soul": "text-purple-400 border-purple-400/30",
  "Heavy Rock": "text-red-400 border-red-400/30",
  "Various": "text-white/50 border-white/20",
  "Rock / Blues": "text-orange-400 border-orange-400/30",
  "New Wave / Synth": "text-cyan-400 border-cyan-400/30",
  "Country Rock": "text-yellow-500 border-yellow-500/30",
};

export default function WhatsOn() {
  useEffect(() => {
    document.title = "What's On | Suzie Wong's Good Time Bar";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = events.filter((e) => e.featured);
  const regular = events.filter((e) => !e.featured);

  return (
    <div>
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto" data-testid="section-whats-on-header">
        <div className="flex items-center gap-3 mb-4 fade-in-up">
          <div className="h-px w-10 bg-primary/50" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">Events</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none mb-4 fade-in-up" data-testid="text-whats-on-title">
          What's On
        </h1>
        <p className="text-white/50 text-lg max-w-xl fade-in-up">
          Live music, good times, no bad vibes. Check what's happening at Suzie Wong's this week.
        </p>
      </section>

      <div className="section-divider mx-4 sm:mx-6 mb-16" />

      {/* Featured Events */}
      {featured.length > 0 && (
        <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16" data-testid="section-featured-events">
          <div className="flex items-center gap-3 mb-8 fade-in-up">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-neon-amber">Featured This Week</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((event, i) => (
              <div
                key={event.id}
                className="group relative rounded-md border border-primary/20 bg-gradient-to-br from-card to-background p-6 md:p-8 fade-in-up hover-elevate"
                style={{ animationDelay: `${i * 100}ms` }}
                data-testid={`card-featured-event-${event.id}`}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-md" />
                <div className="pl-2">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-white/30 mb-1">
                        {event.day} · {event.date} {event.month}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                        {event.artist}
                      </h3>
                    </div>
                    <span
                      className={`text-xs font-bold tracking-wider px-2 py-1 rounded-sm border ${
                        event.cover === "Free"
                          ? "text-neon-green border-neon-green/30 bg-neon-green/5"
                          : "text-white/60 border-white/15 bg-white/[0.03]"
                      } shrink-0`}
                    >
                      {event.cover}
                    </span>
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed mb-5">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-white/40">
                    <div className="flex items-center gap-1.5">
                      <Music size={12} />
                      <span className={`font-medium ${genreColors[event.genre]?.split(" ")[0] || "text-white/50"}`}>{event.genre}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} />
                      <span>Show: {event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      <span>Doors: {event.doors}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Full events list */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-20" data-testid="section-all-events">
        <div className="flex items-center gap-3 mb-8 fade-in-up">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">All Upcoming Events</span>
        </div>
        <div className="space-y-px">
          {events.map((event, i) => (
            <div
              key={event.id}
              className="group border-b border-white/5 py-5 fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
              data-testid={`row-event-${event.id}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Date */}
                <div className="flex items-center gap-4 sm:w-48 shrink-0">
                  <div className="w-14 text-center">
                    <div className="text-2xl font-black text-white leading-none">{event.date}</div>
                    <div className="text-xs font-bold tracking-widest uppercase text-white/30">{event.month.slice(0, 3)}</div>
                    <div className="text-xs text-white/20">{event.day.slice(0, 3)}</div>
                  </div>
                  <div className="h-8 w-px bg-white/5" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                      {event.artist}
                    </h3>
                    {event.featured && (
                      <span className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-sm bg-primary/15 text-primary border border-primary/20">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/40 line-clamp-1">{event.description}</p>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-6 sm:gap-8 shrink-0">
                  <div className="hidden sm:block">
                    <span
                      className={`text-xs font-bold tracking-wider border px-2 py-0.5 rounded-sm ${genreColors[event.genre] || "text-white/40 border-white/10"} bg-transparent`}
                    >
                      {event.genre}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-white/70">{event.time}</div>
                    <div className="text-xs text-white/30">Doors {event.doors}</div>
                  </div>
                  <div className="text-right min-w-[3rem]">
                    <span
                      className={`text-sm font-black ${
                        event.cover === "Free" ? "text-neon-green" : "text-white/60"
                      }`}
                    >
                      {event.cover}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notice */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-20" data-testid="section-events-notice">
        <div className="rounded-md border border-white/5 bg-card p-6 text-center">
          <p className="text-white/40 text-sm leading-relaxed max-w-xl mx-auto">
            Events subject to change. Follow us on{" "}
            <a href="https://www.instagram.com/suziewongsgoodtimebar/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Instagram
            </a>{" "}
            and{" "}
            <a href="https://www.facebook.com/suziewongsgoodtimebar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Facebook
            </a>{" "}
            for the freshest lineup updates and last-minute show announcements.
          </p>
        </div>
      </section>
    </div>
  );
}
