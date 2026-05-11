import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  ChevronDown,
  Star,
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  Info,
  X,
  Music,
  Smartphone,
  Zap,
  Globe,
  BarChart3,
  Send,
  RefreshCcw,
  UserPlus,
  Settings,
  FileText,
  Instagram,
  Facebook,
} from "lucide-react";
import imgHero from "@assets/IMG_0419_1772238291426.jpeg";
import img429 from "@assets/IMG_0429_1772233759717.jpeg";
import img424 from "@assets/IMG_0424_1772233759717.jpeg";
import img425 from "@assets/IMG_0425_1772233759717.jpeg";
import img423 from "@assets/IMG_0423_1772233759717.jpeg";
import img422 from "@assets/IMG_0422_1772233759717.jpeg";
import img428 from "@assets/IMG_0428_1772233759717.jpeg";
import img416 from "@assets/IMG_0416_1772233759718.jpeg";
import img431 from "@assets/IMG_0431_1772241786153.jpeg";
import img466 from "@assets/IMG_0466_1772241786153.jpeg";

interface Annotation {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
}

const annotations: Record<string, Annotation> = {
  lineup: {
    id: "lineup",
    title: "Live Music / Weekly Lineup",
    description:
      "This can become a reusable weekly lineup structure so band nights live on the site instead of only disappearing into Instagram posts.",
    icon: Music,
    tag: "Connected system",
  },
  bookings: {
    id: "bookings",
    title: "Bookings / Functions",
    description:
      "The enquiry path can be cleaned up, connected, and easier to track from visitor interest through to enquiry.",
    icon: Users,
    tag: "Connected system",
  },
  mailing: {
    id: "mailing",
    title: "Mailing Capture",
    description:
      "A signup point can connect to a mailing list so regulars, event interest, and repeat visitors are not lost after one visit.",
    icon: Send,
    tag: "Connected system",
  },
  analytics: {
    id: "analytics",
    title: "Analytics / Tracking",
    description:
      "Basic tracking can show what visitors click, where interest comes from, and which paths are working.",
    icon: BarChart3,
    tag: "Connected system",
  },
  admin: {
    id: "admin",
    title: "Update / Admin Setup",
    description:
      "A lightweight update structure can make live music, events, and recurring venue content easier to keep current.",
    icon: Settings,
    tag: "Connected system",
  },
  audience: {
    id: "audience",
    title: "Audience Capture",
    description:
      "The site can help capture attention from people who already engage with the venue, instead of relying only on temporary social posts.",
    icon: UserPlus,
    tag: "Connected system",
  },
};

function AnnotationMarker({
  annotation,
  position,
  align,
}: {
  annotation: Annotation;
  position?: string;
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const Icon = annotation.icon;
  const tooltipAlign = align === "left" ? "left-0" : "right-0";

  return (
    <div className={`annotation-marker-wrap ${position || "absolute top-4 right-4"} z-30`}>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(!open);
        }}
        className="annotation-marker group/marker w-9 h-9 rounded-full border border-[var(--brand-yellow)]/40 bg-[var(--brand-yellow)]/10 backdrop-blur-sm flex items-center justify-center hover:bg-[var(--brand-yellow)]/20 hover:border-[var(--brand-yellow)]/60 transition-all duration-300 cursor-pointer"
        style={{
          boxShadow:
            "0 0 12px rgba(255,212,0,0.25), 0 0 4px rgba(255,212,0,0.15)",
          animation: "neon-pulse 3s ease-in-out infinite",
        }}
        aria-label={`Annotation: ${annotation.title}`}
      >
        <Icon size={14} style={{ color: "var(--brand-yellow)" }} />
      </button>

      {open && (
        <div
          className={`annotation-tooltip absolute top-full ${tooltipAlign} mt-2 w-72 sm:w-80 rounded-md border bg-[#111116]/95 backdrop-blur-md p-5 shadow-2xl`}
          style={{
            borderColor: "rgba(255,212,0,0.15)",
            boxShadow:
              "0 0 20px rgba(255,212,0,0.08), 0 8px 32px rgba(0,0,0,0.6)",
          }}
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-sm flex items-center justify-center"
                style={{ background: "rgba(255,212,0,0.1)" }}
              >
                <Icon size={12} style={{ color: "var(--brand-yellow)" }} />
              </div>
              <h4 className="text-sm font-black uppercase tracking-tight text-white">
                {annotation.title}
              </h4>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen(false);
              }}
              className="text-white/30 hover:text-white transition-colors shrink-0"
            >
              <X size={14} />
            </button>
          </div>
          <p className="text-xs text-white/50 leading-relaxed">
            {annotation.description}
          </p>
          <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2">
            <Zap size={10} style={{ color: "var(--brand-yellow)" }} />
            <span
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{ color: "rgba(255,212,0,0.5)" }}
            >
              {annotation.tag} — Option 2 only
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

const upcomingEvents = [
  {
    id: 1,
    day: "THU",
    date: "6",
    month: "MAR",
    title: "Live Music Thursday",
    genre: "Surf Rock / Garage",
    time: "9:30pm",
    cover: "Free",
  },
  {
    id: 2,
    day: "FRI",
    date: "7",
    month: "MAR",
    title: "Friday Night Live",
    genre: "Classic Rock",
    time: "9:30pm",
    cover: "Free Entry",
  },
  {
    id: 3,
    day: "SAT",
    date: "8",
    month: "MAR",
    title: "Saturday Sessions",
    genre: "Funk / Soul",
    time: "9pm",
    cover: "Free Entry",
  },
  {
    id: 4,
    day: "SUN",
    date: "9",
    month: "MAR",
    title: "Sunday Arvo Tunes",
    genre: "Country Rock",
    time: "4pm",
    cover: "Free Entry",
  },
];

export default function LaunchOption2() {
  useEffect(() => {
    document.title = "Option 2 — Connected | Suzie Wong's";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Option bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[10000] border-b border-white/5"
        style={{
          background: "rgba(11,11,15,0.92)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          <Link href="/launch">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/40 hover:text-white transition-colors cursor-pointer">
              <ArrowLeft size={14} />
              Back to options
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--brand-yellow)", opacity: 0.7 }}
            >
              Option 2
            </span>
            <span className="text-xs font-bold tracking-wider text-white/60">
              Connected
            </span>
            <span className="text-xs font-bold text-white/30 hidden sm:inline">
              $3,750
            </span>
          </div>
        </div>
      </div>

      {/* NAVIGATION DEMO */}
      <nav className="sticky top-12 z-[9999] bg-black/95 backdrop-blur-md border-b border-white/5 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex flex-col leading-none">
              <span className="nav-logo-main text-base md:text-lg uppercase tracking-wide">
                Suzie Wong's
              </span>
              <span className="nav-logo-sub text-xs font-bold tracking-[0.3em] uppercase opacity-70">
                Good Time Bar
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {[
                "Home",
                "What's On",
                "About",
                "Functions",
                "Gallery",
                "Contact",
              ].map((label) => (
                <span
                  key={label}
                  className="nav-link text-sm font-semibold uppercase tracking-widest text-white/70 cursor-default"
                >
                  {label}
                </span>
              ))}
              <Button
                size="sm"
                className="ml-2 bg-primary text-white font-bold uppercase tracking-wider text-xs cursor-default"
              >
                Book a Function
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero relative min-h-screen flex flex-col items-center justify-end overflow-hidden grain-overlay">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${imgHero})`,
            backgroundPosition: "center 20%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,11,15,0.75) 0%, rgba(11,11,15,0.30) 35%, rgba(11,11,15,0.50) 60%, rgba(11,11,15,0.92) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-background to-transparent" />

        <AnnotationMarker
          annotation={annotations.analytics}
          position="absolute top-32 right-6 md:right-10 z-30"
        />

        <div className="hero-content text-center px-4 sm:px-6 max-w-5xl mx-auto w-full pb-24 md:pb-28">
          <div className="mb-5 fade-in-up">
            <span
              className="inline-block text-xs font-bold tracking-[0.4em] uppercase border border-white/15 px-4 py-1.5 rounded-sm"
              style={{
                color: "var(--logo-text)",
                backgroundColor: "rgba(11,11,15,0.4)",
              }}
            >
              Fortitude Valley, Brisbane
            </span>
          </div>

          <h1
            className="hero-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none mb-4 fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Suzie Wong's
          </h1>

          <div
            className="text-lg sm:text-2xl font-bold uppercase tracking-[0.3em] mb-6 fade-in-up"
            style={{
              animationDelay: "200ms",
              color: "var(--logo-text)",
              opacity: 0.75,
            }}
          >
            Good Time Bar
          </div>

          <p
            className="hero-tagline text-2xl sm:text-3xl md:text-4xl mb-10 fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            "Life is too short to drink responsibly"
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <Button
              size="lg"
              className="primary-btn w-full sm:w-auto font-bold uppercase tracking-widest text-sm px-8 h-12 cursor-default"
            >
              <Calendar className="mr-2 w-4 h-4" />
              View What's On
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/30 font-bold uppercase tracking-widest text-sm px-8 h-12 bg-black/30 backdrop-blur-sm cursor-default"
              style={{ color: "var(--logo-text)" }}
            >
              <Users className="mr-2 w-4 h-4" />
              Book a Function
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 animate-bounce">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-primary/90 py-3 overflow-hidden border-y border-primary/50">
        <div className="flex whitespace-nowrap marquee-track">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="text-xs font-black uppercase tracking-[0.3em] mx-8 text-white/90"
            >
              {i % 5 === 0
                ? "Live Music Wed–Sat Every Week"
                : i % 5 === 1
                ? "Fortitude Valley's Best Dive Bar"
                : i % 5 === 2
                ? "So Who The F*ck Is Suzie Wong?"
                : i % 5 === 3
                ? "Enter Through the Fridge Door"
                : "No Dress Code. Just Vibes."}
            </span>
          ))}
        </div>
      </div>

      {/* LIVE MUSIC / WEEKLY LINEUP SECTION */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <AnnotationMarker
          annotation={annotations.lineup}
          position="absolute top-8 right-4 sm:right-6 z-30"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4 fade-in-up">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-[60px]" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">
                Live Music
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-none mb-6 fade-in-up">
              Brisbane's
              <br />
              <span className="section-highlight">Loudest</span>
              <br />
              Little Stage
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 fade-in-up">
              Wednesday to Saturday every week, Suzie Wong's is packed
              floor-to-ceiling with sweaty bodies, loud guitars, and people who
              came here for a quiet drink and stayed until 3am.
            </p>
            <div className="flex flex-wrap gap-3 mb-8 fade-in-up">
              {[
                "Rock",
                "Funk",
                "Garage",
                "Blues",
                "Soul",
                "Covers",
                "Originals",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm border border-white/10 text-white/50 bg-white/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button
              variant="outline"
              className="border-primary/50 text-primary font-bold uppercase tracking-wider text-xs cursor-default"
            >
              <Music className="mr-2 w-3 h-3" />
              See This Week's Lineup
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-md overflow-hidden aspect-[3/4] img-card">
              <img
                src={img431}
                alt="Bartender"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-md overflow-hidden aspect-[3/4] mt-8 img-card">
              <img
                src={img466}
                alt="Behind the bar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WEEKLY LINEUP — ENHANCED */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <AnnotationMarker
          annotation={annotations.admin}
          position="absolute top-8 right-4 sm:right-6 z-30"
        />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3 fade-in-up">
              <div className="h-px w-10 bg-primary/50" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">
                This Week
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none fade-in-up">
              Weekly
              <br />
              <span className="section-highlight">Lineup</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 fade-in-up">
            <RefreshCcw size={12} style={{ color: "var(--brand-yellow)", opacity: 0.5 }} />
            <span
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{ color: "rgba(255,212,0,0.4)" }}
            >
              Reusable weekly structure
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingEvents.map((event, i) => (
            <div
              key={event.id}
              className="event-card rounded-md bg-card border border-white/5 p-5 fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/30">
                    {event.day}
                  </div>
                  <div className="text-3xl font-black text-white leading-none">
                    {event.date}
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/30">
                    {event.month}
                  </div>
                </div>
                <span className="text-xs font-bold tracking-wider px-2 py-1 rounded-sm text-neon-green border border-neon-green/30 bg-neon-green/5">
                  {event.cover}
                </span>
              </div>
              <div className="border-t border-white/5 pt-4">
                <h3 className="text-base font-black uppercase tracking-tight text-white mb-1">
                  {event.title}
                </h3>
                <p className="text-xs text-white/40 font-medium">
                  {event.genre}
                </p>
                <p className="text-xs text-white/30 mt-1">{event.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-md border border-white/5 bg-white/[0.02] fade-in-up">
          <p className="text-xs text-white/30 text-center">
            Events listed here stay on the site and can be updated weekly without needing to rebuild graphics or rely only on social posts.
          </p>
        </div>
      </section>

      {/* ABOUT / VENUE */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(180,20,20,0.08) 0%, rgba(0,0,0,0) 50%, rgba(13,255,110,0.04) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-3 justify-center mb-4 fade-in-up">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">
                The Venue
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none mb-6 fade-in-up">
              So Who The F*ck
              <br />
              <span className="section-highlight">Is Suzie Wong?</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed fade-in-up">
              We've been asked this more times than we can count. The answer?
              Nobody knows. And that's exactly the point.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "The Fridge Door",
                desc: "You'll find us when you walk through a retro fridge. That's not a metaphor.",
                img: img416,
              },
              {
                title: "Hawaiian Dive Bar",
                desc: "Surfboards on the ceiling. Neon signs everywhere. Tiki vibes meets grungy dive bar.",
                img: img425,
              },
              {
                title: "Suzie Wong's Lager",
                desc: "We've got our own house lager — 4.2% ABV. Wrap your lips around a pint.",
                img: img422,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-md overflow-hidden border border-white/5 bg-card hover-elevate group fade-in-up"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-black uppercase tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-white/55 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAILING CAPTURE SECTION */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <AnnotationMarker
          annotation={annotations.mailing}
          position="absolute top-6 right-4 sm:right-6 z-30"
        />
        <div
          className="rounded-md border border-white/5 p-8 md:p-12 text-center fade-in-up"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,79,163,0.04) 0%, rgba(11,11,15,0.8) 50%, rgba(255,212,0,0.03) 100%)",
          }}
        >
          <div className="max-w-lg mx-auto">
            <Mail
              className="w-8 h-8 mx-auto mb-4"
              style={{ color: "var(--brand-yellow)", opacity: 0.6 }}
            />
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-3">
              Stay in the Loop
            </h3>
            <p className="text-sm text-white/45 leading-relaxed mb-6">
              Live music updates, event announcements, and the occasional bar story. No spam. Just the good stuff.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-11 px-4 rounded-md bg-card border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50"
                disabled
              />
              <Button
                className="bg-primary text-white font-bold uppercase tracking-wider text-xs h-11 px-6 cursor-default"
              >
                <Send size={14} className="mr-2" />
                Sign Up
              </Button>
            </div>
            <p className="text-xs text-white/20 mt-4">
              Connects to mailing list. Captures regulars, event interest, and repeat visitors.
            </p>
          </div>
        </div>
      </section>

      {/* FUNCTION CTA / BOOKINGS */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnnotationMarker
          annotation={annotations.bookings}
          position="absolute top-8 right-4 sm:right-6 z-30"
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img424})` }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,31,106,0.15) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-4 fade-in-up">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">
              Private Events
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none mb-6 fade-in-up">
            Your Next Party
            <br />
            <span className="section-highlight">Lives Here</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 fade-in-up">
            Birthdays. Buck's nights. Work events you'll actually want to
            attend. Suzie Wong's handles private functions, full venue buyouts,
            and custom packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
            <Button
              size="lg"
              className="primary-btn w-full sm:w-auto font-bold uppercase tracking-widest text-sm px-8 h-12 cursor-default"
            >
              Enquire Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/30 text-white font-bold uppercase tracking-widest text-sm px-8 h-12 bg-white/5 cursor-default"
            >
              Get in Touch
            </Button>
          </div>

          <div className="mt-8 p-4 rounded-md border border-white/5 bg-black/40 backdrop-blur-sm fade-in-up">
            <p className="text-xs text-white/30">
              Enquiry form tracks interest from visitor through to booking. Connected and easier to manage.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none mb-3">
            The Good Times
            <br />
            <span className="section-highlight">Were Real</span>
          </h2>
          <p className="text-white/50 text-sm">
            Don't believe us? Here's the evidence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          <div className="col-span-2 row-span-2 rounded-md overflow-hidden img-card aspect-[4/3] md:aspect-auto">
            <img
              src={img424}
              alt="Crowd"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-md overflow-hidden img-card">
            <img
              src={img423}
              alt="Party"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="rounded-md overflow-hidden img-card">
            <img
              src={img422}
              alt="Bartender"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="rounded-md overflow-hidden img-card">
            <img
              src={img428}
              alt="Wall of frames"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="rounded-md overflow-hidden img-card">
            <img
              src={img425}
              alt="The bar"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* AUDIENCE CAPTURE SECTION */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <AnnotationMarker
          annotation={annotations.audience}
          position="absolute top-6 right-4 sm:right-6 z-30"
          align="right"
        />
        <div
          className="rounded-md border border-white/5 p-8 md:p-12 fade-in-up"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,255,110,0.02) 0%, rgba(11,11,15,0.8) 50%, rgba(255,79,163,0.03) 100%)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <UserPlus
                className="w-8 h-8 mb-4"
                style={{ color: "var(--brand-yellow)", opacity: 0.5 }}
              />
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Turn Visitors into Regulars
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                People already engage with the venue on social. The website gives
                that attention somewhere to land — mailing lists, event pages,
                booking enquiries — instead of disappearing after one story or
                post.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: "Social visitors", desc: "Land on a page that doesn't expire" },
                { label: "Event interest", desc: "Captured through mailing signup" },
                { label: "Repeat visitors", desc: "Tracked through basic analytics" },
                { label: "Booking interest", desc: "Funnelled into enquiry pathway" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-3 rounded-md border border-white/5 bg-white/[0.02]"
                >
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: "var(--brand-yellow)", opacity: 0.5 }}
                  />
                  <div>
                    <span className="text-xs font-bold text-white/60">
                      {item.label}
                    </span>
                    <span className="text-xs text-white/30 ml-2">
                      — {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none">
            Don't Take Our Word For It
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Walked through a fridge door and ended up staying until 3am. The band was insane.",
              author: "Sarah M.",
              stars: 5,
            },
            {
              quote:
                "Best live music venue in Brisbane. No contest. The vibe, the staff, the bands — all unmatched.",
              author: "Tom K.",
              stars: 5,
            },
            {
              quote:
                "Hosted my 30th birthday function here. Suzie Wong's went above and beyond. Absolute legends.",
              author: "Jess R.",
              stars: 5,
            },
          ].map((review, i) => (
            <div
              key={i}
              className="review-card p-6 rounded-md border border-white/5 fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-4 review-stars">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} size={14} className="fill-current" />
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-4 italic"
                style={{ color: "#A8A8B3" }}
              >
                "{review.quote}"
              </p>
              <p className="text-white/40 text-xs font-bold tracking-widest uppercase">
                {review.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER DEMO */}
      <section className="relative border-t border-white/5 bg-black/60">
        <div className="h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-50" />

        <div className="bg-black/80 py-3 overflow-hidden border-b border-white/5">
          <div className="flex whitespace-nowrap marquee-track">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="text-xs font-bold uppercase tracking-widest mx-8 text-white/30"
              >
                {i % 4 === 0
                  ? "Live Music"
                  : i % 4 === 1
                  ? "Dive Bar"
                  : i % 4 === 2
                  ? "Fortitude Valley"
                  : "Good Times Only"}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="mb-4">
                <div className="text-xs font-bold tracking-[0.3em] uppercase text-white/30 mb-1">
                  Suzie Wong's
                </div>
                <div className="text-2xl font-black uppercase tracking-tight text-white">
                  Good Time Bar
                </div>
              </div>
              <p
                className="footer-quote text-sm leading-relaxed mb-4"
                style={{
                  fontFamily: "Dancing Script, cursive",
                  fontSize: "1.1rem",
                }}
              >
                "life is too short
                <br />
                to drink responsibly"
              </p>
              <div className="flex gap-3 mt-4">
                <span className="social-icon w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-white/50">
                  <Instagram size={16} />
                </span>
                <span className="social-icon w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-white/50">
                  <Facebook size={16} />
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-4">
                Navigate
              </h3>
              <ul className="space-y-2">
                {[
                  "Home",
                  "What's On",
                  "About",
                  "Functions",
                  "Gallery",
                  "Contact",
                ].map((label) => (
                  <li key={label}>
                    <span className="text-sm text-white/50">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-4">
                Opening Hours
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { day: "Monday", hours: "Closed", open: false },
                  { day: "Tuesday", hours: "4pm – Late", open: true },
                  { day: "Wednesday", hours: "4pm – Late", open: true },
                  { day: "Thursday", hours: "4pm – 3am", open: true },
                  { day: "Friday", hours: "2pm – 3am", open: true },
                  { day: "Saturday", hours: "2pm – 3am", open: true },
                  { day: "Sunday", hours: "2pm – Late", open: true },
                ].map(({ day, hours, open }) => (
                  <li key={day} className="flex justify-between gap-4">
                    <span className="opening-day">{day}</span>
                    <span
                      className={`opening-time${open ? "" : " closed"}`}
                    >
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-4">
                Find Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/50">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-primary/70"
                  />
                  <span>
                    Fortitude Valley
                    <br />
                    Brisbane QLD
                  </span>
                </li>
              </ul>

              <div className="mt-6 p-3 rounded-md border border-white/5 bg-white/[0.02]">
                <div className="text-xs text-white/30 uppercase tracking-widest mb-1">
                  Enter via
                </div>
                <div className="text-sm text-white/60 font-semibold">
                  The Retro Fridge Door
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-white/25 tracking-wide">
              &copy; {new Date().getFullYear()} Suzie Wong's Good Time Bar
            </p>
          </div>
        </div>
      </section>

      {/* Mobile annotation cards */}
      <div className="block sm:hidden px-4 py-8 space-y-4 border-t border-white/5 bg-[#0B0B0F]">
        <div
          className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
          style={{ color: "rgba(255,212,0,0.5)" }}
        >
          Connected systems in Option 2
        </div>
        {Object.values(annotations).map((ann) => {
          const Icon = ann.icon;
          return (
            <div
              key={ann.id}
              className="flex items-start gap-3 p-4 rounded-md border border-white/5 bg-card"
            >
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,212,0,0.08)" }}
              >
                <Icon
                  size={14}
                  style={{ color: "var(--brand-yellow)" }}
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {ann.title}
                </h4>
                <p className="text-xs text-white/45 leading-relaxed">
                  {ann.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-divider mb-12" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight mb-4 fade-in-up">
            Ready to move forward?
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-3 fade-in-up">
            Reply with{" "}
            <span className="text-white font-bold">Option 1</span> or{" "}
            <span className="text-white font-bold">Option 2</span> and I'll
            take it from there.
          </p>
          <p className="text-white/30 text-sm fade-in-up">
            50% to start. Balance on launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 fade-in-up">
            <Link href="/launch">
              <Button
                variant="outline"
                className="border-white/15 text-white/60 font-bold uppercase tracking-wider text-xs px-8 h-12"
              >
                <ArrowLeft size={14} className="mr-2" />
                Compare options
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
