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
  CheckCircle,
  Smartphone,
  Zap,
  Globe,
  Shield,
} from "lucide-react";
import imgHero from "@assets/IMG_0419_1772238291426.jpeg";
import img429 from "@assets/IMG_0429_1772233759717.jpeg";
import img424 from "@assets/IMG_0424_1772233759717.jpeg";
import img425 from "@assets/IMG_0425_1772233759717.jpeg";
import img423 from "@assets/IMG_0423_1772233759717.jpeg";
import img422 from "@assets/IMG_0422_1772233759717.jpeg";
import img416 from "@assets/IMG_0416_1772233759718.jpeg";
import img431 from "@assets/IMG_0431_1772241786153.jpeg";
import img466 from "@assets/IMG_0466_1772241786153.jpeg";

interface Annotation {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const annotations: Record<string, Annotation> = {
  hero: {
    id: "hero",
    title: "Hero & First Impression",
    description:
      "Full-screen hero with venue photography, neon sign typography, and primary calls-to-action. This is the first thing visitors see.",
    icon: Globe,
  },
  navigation: {
    id: "navigation",
    title: "Core Navigation",
    description:
      "Responsive navigation with sticky header, mobile menu, and quick access to all core sections. Works on all devices.",
    icon: Globe,
  },
  whatsOn: {
    id: "whatsOn",
    title: "What's On Section",
    description:
      "Upcoming events displayed in card layout with date, genre, and entry info. Gives visitors a reason to come in this week.",
    icon: Calendar,
  },
  functions: {
    id: "functions",
    title: "Functions & Booking CTA",
    description:
      "Clear pathway from browsing to enquiry. Visitors interested in private events can reach the booking form in one click.",
    icon: Users,
  },
  contact: {
    id: "contact",
    title: "Contact Pathway",
    description:
      "Address, phone, email, and opening hours visible in the footer and contact section. No dead ends for visitors who want to reach you.",
    icon: Phone,
  },
  mobile: {
    id: "mobile",
    title: "Mobile-Ready Structure",
    description:
      "Responsive across all screen sizes. Sticky mobile CTA, touch-friendly navigation, and optimised image loading.",
    icon: Smartphone,
  },
  performance: {
    id: "performance",
    title: "Performance & Deploy-Ready",
    description:
      "Optimised assets, fast loading, deployed on Netlify with SSL, CDN, and automatic scaling. Ready to handle traffic.",
    icon: Zap,
  },
  polish: {
    id: "polish",
    title: "Visual Polish",
    description:
      "Neon glow effects, grain overlay, smooth scroll animations, and hover interactions. Consistent venue brand throughout.",
    icon: Star,
  },
};

function AnnotationMarker({
  annotation,
  position,
}: {
  annotation: Annotation;
  position?: string;
}) {
  const [open, setOpen] = useState(false);
  const Icon = annotation.icon;

  return (
    <div className={`annotation-marker-wrap ${position || "absolute top-4 right-4"} z-30`}>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(!open);
        }}
        className="annotation-marker w-8 h-8 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 cursor-pointer"
        style={{
          boxShadow: "0 0 12px rgba(255,79,163,0.3), 0 0 4px rgba(255,79,163,0.2)",
          animation: "neon-pulse 3s ease-in-out infinite",
        }}
        aria-label={`Annotation: ${annotation.title}`}
      >
        <Info size={14} />
      </button>

      {open && (
        <div
          className="annotation-tooltip absolute top-full right-0 mt-2 w-72 sm:w-80 rounded-md border border-primary/20 bg-[#111116]/95 backdrop-blur-md p-5 shadow-2xl"
          style={{
            boxShadow:
              "0 0 20px rgba(255,79,163,0.1), 0 8px 32px rgba(0,0,0,0.6)",
          }}
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-sm bg-primary/10 flex items-center justify-center">
                <Icon size={12} className="text-primary" />
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
          <div className="mt-3 pt-3 border-t border-white/5">
            <span className="text-[10px] font-bold tracking-widest uppercase text-primary/40">
              Included in Option 1
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
];

export default function LaunchOption1() {
  useEffect(() => {
    document.title = "Option 1 — Live in 24 Hours | Suzie Wong's";
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
        style={{ background: "rgba(11,11,15,0.92)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          <Link href="/launch">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/40 hover:text-white transition-colors cursor-pointer">
              <ArrowLeft size={14} />
              Back to options
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/60">
              Option 1
            </span>
            <span className="text-xs font-bold tracking-wider text-white/60">
              Live in 24 hours
            </span>
            <span className="text-xs font-bold text-white/30 hidden sm:inline">
              $1,950
            </span>
          </div>
        </div>
      </div>

      {/* NAVIGATION DEMO */}
      <nav
        className="sticky top-12 z-[9999] bg-black/95 backdrop-blur-md border-b border-white/5 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              {["Home", "What's On", "About", "Functions", "Gallery", "Contact"].map(
                (label) => (
                  <span
                    key={label}
                    className="nav-link text-sm font-semibold uppercase tracking-widest text-white/70 cursor-default"
                  >
                    {label}
                  </span>
                )
              )}
              <Button
                size="sm"
                className="ml-2 bg-primary text-white font-bold uppercase tracking-wider text-xs cursor-default"
              >
                Book a Function
              </Button>
            </div>
          </div>
          <AnnotationMarker
            annotation={annotations.navigation}
            position="absolute top-1/2 -translate-y-1/2 right-4 md:hidden"
          />
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
          annotation={annotations.hero}
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

      {/* LIVE MUSIC SECTION */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <AnnotationMarker
          annotation={annotations.whatsOn}
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
              {["Rock", "Funk", "Garage", "Blues", "Soul", "Covers"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm border border-white/10 text-white/50 bg-white/[0.03]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
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

      {/* UPCOMING EVENTS */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3 fade-in-up">
              <div className="h-px w-10 bg-primary/50" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">
                Coming Up
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none fade-in-up">
              This Week
              <br />
              <span className="section-highlight">On Stage</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </section>

      {/* ABOUT / VENUE */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(180,20,20,0.08) 0%, rgba(0,0,0,0) 50%, rgba(13,255,110,0.04) 100%)",
        }}
      >
        <AnnotationMarker
          annotation={annotations.polish}
          position="absolute top-8 right-4 sm:right-6 z-30"
        />
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

      {/* FUNCTION CTA */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnnotationMarker
          annotation={annotations.functions}
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

      {/* CONTACT / FOOTER DEMO */}
      <section className="relative border-t border-white/5 bg-black/60">
        <AnnotationMarker
          annotation={annotations.contact}
          position="absolute top-4 right-4 sm:right-6 z-30"
        />
        <div className="h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-50" />
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
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-4">
                Navigate
              </h3>
              <ul className="space-y-2">
                {["Home", "What's On", "About", "Functions", "Gallery", "Contact"].map(
                  (label) => (
                    <li key={label}>
                      <span className="text-sm text-white/50">{label}</span>
                    </li>
                  )
                )}
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
                    <span className={`opening-time${open ? "" : " closed"}`}>
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
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary/70" />
                  <span>
                    Fortitude Valley
                    <br />
                    Brisbane QLD
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-white/25 tracking-wide">
              &copy; {new Date().getFullYear()} Suzie Wong's Good Time Bar
            </p>
          </div>
        </div>
      </section>

      {/* Mobile annotation markers */}
      <div className="block sm:hidden px-4 py-8 space-y-4 border-t border-white/5 bg-[#0B0B0F]">
        <div className="text-xs font-bold tracking-[0.3em] uppercase text-primary/50 mb-4">
          What's included in Option 1
        </div>
        {Object.values(annotations).map((ann) => {
          const Icon = ann.icon;
          return (
            <div
              key={ann.id}
              className="flex items-start gap-3 p-4 rounded-md border border-white/5 bg-card"
            >
              <div className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={14} className="text-primary" />
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
            Reply with <span className="text-white font-bold">Option 1</span> or{" "}
            <span className="text-white font-bold">Option 2</span> and I'll take it
            from there.
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
