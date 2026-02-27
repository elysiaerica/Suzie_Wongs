import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Music, Users, ChevronDown, Star } from "lucide-react";
import img429 from "@assets/IMG_0429_1772233759717.jpeg";
import img428 from "@assets/IMG_0428_1772233759717.jpeg";
import img425 from "@assets/IMG_0425_1772233759717.jpeg";
import img424 from "@assets/IMG_0424_1772233759717.jpeg";
import img423 from "@assets/IMG_0423_1772233759717.jpeg";
import img422 from "@assets/IMG_0422_1772233759717.jpeg";
import img420 from "@assets/IMG_0420_1772233759717.jpeg";
import img419 from "@assets/IMG_0419_1772233759718.jpeg";
import img416 from "@assets/IMG_0416_1772233759718.jpeg";

const upcomingEvents = [
  {
    id: 1,
    day: "THU",
    date: "6",
    month: "MAR",
    title: "The Grizzlers",
    genre: "Surf Rock / Garage",
    time: "9:30pm",
    cover: "Free",
  },
  {
    id: 2,
    day: "FRI",
    date: "7",
    month: "MAR",
    title: "Bad Habits",
    genre: "Classic Rock Covers",
    time: "9:30pm",
    cover: "$10",
  },
  {
    id: 3,
    day: "SAT",
    date: "8",
    month: "MAR",
    title: "The Midnight Rollers",
    genre: "Funk / Soul",
    time: "9pm",
    cover: "$12",
  },
  {
    id: 4,
    day: "SUN",
    date: "9",
    month: "MAR",
    title: "Velvet Revolver Tribute",
    genre: "Heavy Rock",
    time: "8pm",
    cover: "$15",
  },
];

export default function Home() {
  const fadeRefs = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    fadeRefs.current = elements;
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain-overlay"
        data-testid="section-hero"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img429})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Colour wash - red light ambiance */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(140,10,10,0.25) 0%, rgba(0,0,0,0) 60%)" }} />
        {/* Bottom fade to page background */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          {/* Pre-title */}
          <div className="mb-6 fade-in-up" style={{ animationDelay: "0ms" }}>
            <span className="inline-block text-xs font-bold tracking-[0.4em] uppercase text-white/50 border border-white/10 px-4 py-1.5 rounded-sm">
              Fortitude Valley, Brisbane
            </span>
          </div>

          {/* Main title */}
          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-none mb-4 fade-in-up"
            style={{ animationDelay: "100ms", textShadow: "0 4px 40px rgba(0,0,0,0.5)" }}
            data-testid="text-hero-title"
          >
            Suzie
            <br />
            <span className="neon-pink neon-flicker">Wong's</span>
          </h1>

          {/* Subtitle */}
          <div
            className="text-lg sm:text-2xl font-bold uppercase tracking-[0.3em] text-white/80 mb-6 fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Good Time Bar
          </div>

          {/* Tagline */}
          <p
            className="text-2xl sm:text-3xl md:text-4xl text-white/90 mb-10 fade-in-up"
            style={{
              animationDelay: "300ms",
              fontFamily: "Dancing Script, cursive",
              textShadow: "0 2px 20px rgba(0,0,0,0.8)"
            }}
          >
            "Life is too short to drink responsibly"
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: "400ms" }}>
            <Link href="/whats-on">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-white font-bold uppercase tracking-widest text-sm px-8 h-12"
                data-testid="button-view-whats-on"
              >
                <Calendar className="mr-2 w-4 h-4" />
                View What's On
              </Button>
            </Link>
            <Link href="/functions">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white font-bold uppercase tracking-widest text-sm px-8 h-12 bg-white/5 backdrop-blur-sm"
                data-testid="button-book-function"
              >
                <Users className="mr-2 w-4 h-4" />
                Book a Function
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 animate-bounce">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-primary/90 py-3 overflow-hidden border-y border-primary/50">
        <div className="flex whitespace-nowrap marquee-track">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-xs font-black uppercase tracking-[0.3em] mx-8 text-white/90">
              {i % 5 === 0 ? "Live Music 4–5 Nights" : i % 5 === 1 ? "Fortitude Valley's Best Dive Bar" : i % 5 === 2 ? "So Who The F*ck Is Suzie Wong?" : i % 5 === 3 ? "Enter Through the Fridge Door" : "No Dress Code. Just Vibes."}
            </span>
          ))}
        </div>
      </div>

      {/* LIVE MUSIC SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto" data-testid="section-live-music">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4 fade-in-up">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-[60px]" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">Live Music</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-none mb-6 fade-in-up">
              Brisbane's<br />
              <span className="neon-pink">Loudest</span><br />
              Little Stage
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 fade-in-up">
              Four to five nights a week, Suzie Wong's is packed floor-to-ceiling with sweaty bodies, 
              loud guitars, and people who came here for a quiet drink and stayed until 3am.
            </p>
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 fade-in-up">
              Rock. Funk. Garage. Soul. Blues. If it's loud and makes you move, it's probably on our stage.
              No pretentious playlist. No DJ booth. Just real bands, really close.
            </p>
            <div className="flex flex-wrap gap-3 mb-8 fade-in-up">
              {["Rock", "Funk", "Garage", "Blues", "Soul", "Covers", "Originals"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm border border-white/10 text-white/50 bg-white/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/whats-on">
              <Button
                variant="outline"
                className="border-primary/50 text-primary font-bold uppercase tracking-wider text-xs"
                data-testid="button-see-lineup"
              >
                <Music className="mr-2 w-3 h-3" />
                See This Week's Lineup
              </Button>
            </Link>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-md overflow-hidden aspect-[3/4] img-card">
              <img src={img420} alt="Live music at Suzie Wong's" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-md overflow-hidden aspect-[3/4] mt-8 img-card">
              <img src={img419} alt="Band performing at Suzie Wong's" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS THIS PLACE */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        data-testid="section-about-preview"
        style={{
          background: "linear-gradient(135deg, rgba(180,20,20,0.08) 0%, rgba(0,0,0,0) 50%, rgba(13,255,110,0.04) 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-3 justify-center mb-4 fade-in-up">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">The Venue</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none mb-6 fade-in-up">
              So Who The F*ck<br />
              <span className="neon-pink">Is Suzie Wong?</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed fade-in-up">
              We've been asked this more times than we can count. The answer? Nobody knows. And that's exactly the point.
              Suzie Wong's is less about the who and more about the vibe — and the vibe is <em>always</em> a good time.
            </p>
          </div>

          {/* Three column feature boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🍺",
                title: "The Fridge Door",
                desc: "You'll find us when you walk through a retro fridge. That's not a metaphor. There is a literal fridge door. You're welcome.",
                img: img416,
              },
              {
                icon: "🎸",
                title: "Hawaiian Dive Bar",
                desc: "Surfboards on the ceiling. Neon signs everywhere. Tiki vibes meets grungy dive bar. There's no other place quite like it in Brisbane.",
                img: img425,
              },
              {
                icon: "🥃",
                title: "Suzie Wong's Lager",
                desc: "We've got our own house lager — 4.2% ABV. Wrap your lips around a pint. Bloody goood.",
                img: img422,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-md overflow-hidden border border-white/5 bg-card hover-elevate group fade-in-up"
                data-testid={`card-feature-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-black uppercase tracking-tight text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 fade-in-up">
            <Link href="/about">
              <Button variant="ghost" className="text-white/60 font-bold uppercase tracking-wider text-xs" data-testid="button-about-more">
                Our Full Story →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS PREVIEW */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto" data-testid="section-events-preview">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3 fade-in-up">
              <div className="h-px w-10 bg-primary/50" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">Coming Up</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none fade-in-up">
              This Week<br />
              <span className="neon-green neon-pulse">On Stage</span>
            </h2>
          </div>
          <Link href="/whats-on">
            <Button variant="outline" className="border-white/15 text-white/60 font-bold uppercase tracking-wider text-xs" data-testid="button-full-calendar">
              Full Calendar →
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingEvents.map((event, i) => (
            <div
              key={event.id}
              className="event-card rounded-md bg-card border border-white/5 p-5 fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
              data-testid={`card-event-${event.id}`}
            >
              {/* Date block */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/30">{event.day}</div>
                  <div className="text-3xl font-black text-white leading-none">{event.date}</div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/30">{event.month}</div>
                </div>
                <span
                  className={`text-xs font-bold tracking-wider px-2 py-1 rounded-sm ${
                    event.cover === "Free"
                      ? "text-neon-green border border-neon-green/30 bg-neon-green/5"
                      : "text-white/50 border border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {event.cover}
                </span>
              </div>
              <div className="border-t border-white/5 pt-4">
                <h3 className="text-base font-black uppercase tracking-tight text-white mb-1">{event.title}</h3>
                <p className="text-xs text-white/40 font-medium">{event.genre}</p>
                <p className="text-xs text-white/30 mt-1">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto" data-testid="section-gallery-preview">
        <div className="text-center mb-10 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none mb-3">
            The Good Times<br />
            <span className="neon-pink">Were Real</span>
          </h2>
          <p className="text-white/50 text-sm">Don't believe us? Here's the evidence.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          <div className="col-span-2 row-span-2 rounded-md overflow-hidden img-card aspect-[4/3] md:aspect-auto">
            <img src={img424} alt="Crowd at Suzie Wong's" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden img-card">
            <img src={img423} alt="Party at Suzie Wong's" className="w-full h-full object-cover aspect-square" />
          </div>
          <div className="rounded-md overflow-hidden img-card">
            <img src={img422} alt="Bartender at Suzie Wong's" className="w-full h-full object-cover aspect-square" />
          </div>
          <div className="rounded-md overflow-hidden img-card">
            <img src={img428} alt="The wall of frames" className="w-full h-full object-cover aspect-square" />
          </div>
          <div className="rounded-md overflow-hidden img-card">
            <img src={img425} alt="The bar" className="w-full h-full object-cover aspect-square" />
          </div>
        </div>

        <div className="text-center mt-8 fade-in-up">
          <Link href="/gallery">
            <Button variant="outline" className="border-white/15 text-white/60 font-bold uppercase tracking-wider text-xs" data-testid="button-view-gallery">
              View Full Gallery →
            </Button>
          </Link>
        </div>
      </section>

      {/* FUNCTION CTA */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        data-testid="section-functions-cta"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img424})` }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,31,106,0.15) 0%, transparent 60%)" }} />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-4 fade-in-up">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">Private Events</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none mb-6 fade-in-up">
            Your Next Party<br />
            <span className="neon-pink">Lives Here</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 fade-in-up">
            Birthdays. Buck's nights. Work events you'll actually want to attend. Farewell parties 
            where nobody leaves. Suzie Wong's handles private functions, full venue buyouts, and 
            custom packages. We'll make it unforgettable — that's a promise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
            <Link href="/functions">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-white font-bold uppercase tracking-widest text-sm px-8 h-12"
                data-testid="button-enquire-function"
              >
                Enquire Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white font-bold uppercase tracking-widest text-sm px-8 h-12 bg-white/5"
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto" data-testid="section-reviews">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none">
            Don't Take Our Word For It
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "Walked through a fridge door and ended up staying until 3am. The band was insane. This place is something else entirely.",
              author: "Sarah M.",
              stars: 5,
            },
            {
              quote: "Best live music venue in Brisbane. No contest. The vibe, the staff, the bands — all unmatched. The neon sign says it all.",
              author: "Tom K.",
              stars: 5,
            },
            {
              quote: "Hosted my 30th birthday function here. Suzie Wong's went above and beyond. Absolute legends. Would do it again in a heartbeat.",
              author: "Jess R.",
              stars: 5,
            },
          ].map((review, i) => (
            <div
              key={i}
              className="p-6 rounded-md border border-white/5 bg-card fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
              data-testid={`card-review-${i}`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-neon-amber fill-neon-amber" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4 italic">"{review.quote}"</p>
              <p className="text-white/40 text-xs font-bold tracking-widest uppercase">{review.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
