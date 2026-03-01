import { useEffect } from "react";
import img425 from "@assets/IMG_0425_1772233759717.jpeg";
import img426 from "@assets/IMG_0426_1772233759717.jpeg";
import img416 from "@assets/IMG_0416_1772233759718.jpeg";
import img420 from "@assets/IMG_0420_1772233759717.jpeg";
import img417 from "@assets/IMG_0417_1772233759718.jpeg";
import img422 from "@assets/IMG_0422_1772233759717.jpeg";
import img421 from "@assets/IMG_0421_1772233759717.jpeg";
import img418 from "@assets/IMG_0418_1772233759718.jpeg";
import img466 from "@assets/IMG_0466_1772241786153.jpeg";
import img432 from "@assets/IMG_0432_1772241786153.jpeg";

export default function About() {
  useEffect(() => {
    document.title = "About | Suzie Wong's Good Time Bar";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto" data-testid="section-about-header">
        <div className="flex items-center gap-3 mb-4 fade-in-up">
          <div className="h-px w-10 bg-primary/50" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">Our Story</span>
        </div>
        <h1
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none mb-4 fade-in-up"
          data-testid="text-about-title"
        >
          So Who The<br />
          <span className="section-highlight">F*ck Is<br />Suzie Wong?</span>
        </h1>
      </section>

      <div className="section-divider mx-4 sm:mx-6 mb-0" />

      {/* Intro spread */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto" data-testid="section-about-intro">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text */}
          <div>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 fade-in-up font-light">
              Nobody knows. And that's part of the magic.
            </p>
            <p className="text-base text-white/55 leading-relaxed mb-6 fade-in-up">
              Suzie Wong's Good Time Bar is Fortitude Valley's worst kept secret — a Hawaiian-inspired 
              dive bar and live music venue that's been providing Brisbane with exactly the kind of nights 
              you can't quite explain to someone who wasn't there.
            </p>
            <p className="text-base text-white/55 leading-relaxed mb-6 fade-in-up">
              We're accessed through a retro fridge door. There are surfboards hanging from the ceiling.
              A Jameson neon sign keeps watch over the bar. The walls are covered in frames. The music 
              is always too loud. And every single night, it's absolutely packed.
            </p>
            <p className="text-base text-white/55 leading-relaxed mb-6 fade-in-up">
              We are not a cocktail bar. We are not a restaurant. We are not trying to be sophisticated 
              or subtle or curated. We are a dive bar with a world-class stage, a staff that genuinely 
              gives a shit, and a crowd that knows how to have a good time.
            </p>
            <div
              className="text-3xl md:text-4xl text-white/90 my-8 fade-in-up"
              style={{ fontFamily: "Dancing Script, cursive", lineHeight: 1.3 }}
            >
              "Life is too short<br />to drink responsibly."
            </div>
            <p className="text-base text-white/55 leading-relaxed fade-in-up">
              That neon sign above our stage isn't decoration. It's a philosophy.
              Come as you are. Stay as long as you want. Leave when the music stops
              — and the music barely ever stops.
            </p>
          </div>

          {/* Images */}
          <div className="space-y-4 fade-in-up">
            <div className="rounded-md overflow-hidden img-card">
              <img src={img425} alt="The bar at Suzie Wong's" className="w-full object-cover max-h-72" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-md overflow-hidden img-card aspect-square">
                <img src={img421} alt="Jameson neon sign" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-md overflow-hidden img-card aspect-square">
                <img src={img426} alt="The bar scene" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Venue Section */}
      <section
        className="py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, rgba(180,20,20,0.06) 0%, rgba(0,0,0,0) 50%)" }}
        data-testid="section-venue-features"
      >
        <div className="px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center gap-3 justify-center mb-4 fade-in-up">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">The Venue</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none fade-in-up">
              What Makes This Place<br />
              <span className="section-highlight">Different</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              {
                num: "01",
                title: "The Fridge Door",
                desc: "You enter through a vintage retro fridge. First time visitors stop dead in their tracks. Regulars walk through without breaking stride. It's become a Brisbane rite of passage.",
                img: img416,
              },
              {
                num: "02",
                title: "The Stage",
                desc: "Tiny. Intimate. Powerful. Our stage puts you within arm's reach of the band. When the bass kicks in, you feel it in your chest. There's no barrier between artist and crowd.",
                img: img420,
              },
              {
                num: "03",
                title: "The Décor",
                desc: "Surfboards overhead. Hundreds of framed prints on brick walls. Neon signs everywhere. Hawaiian knick-knacks and dive bar ephemera dating back decades. It's chaos, beautifully curated.",
                img: img417,
              },
              {
                num: "04",
                title: "The People",
                desc: "Our staff are legends. No dress code enforcement, no attitude, no pretension. Just people who love music, love good times, and happen to be very good at pouring drinks fast.",
                img: img466,
              },
              {
                num: "05",
                title: "The Music",
                desc: "4–5 nights of live music per week. Every genre, every vibe. We've had quiet folk sets and mosh-pit inducing hard rock on the same weekend. The common thread: it's always real.",
                img: img418,
              },
              {
                num: "06",
                title: "Suzie Wong's Lager",
                desc: "Our own house lager at 4.2% ABV. Brewed to be cold, crisp, and dangerously drinkable. Because you're here for a good time, not a hard time.",
                img: img432,
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className="rounded-md overflow-hidden border border-white/5 bg-card group hover-elevate fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
                data-testid={`card-venue-${item.num}`}
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4 text-4xl font-black text-white/10">{item.num}</div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-black uppercase tracking-tight text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The neon sign quote */}
          <div className="text-center max-w-3xl mx-auto fade-in-up">
            <div
              className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              <span className="neon-amber neon-pulse">life is too short</span>
              <br />
              <span className="neon-amber neon-pulse" style={{ animationDelay: "0.5s" }}>to drink responsibly</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto">
              Located at 142 Wickham Street, Fortitude Valley. Look for the retro fridge door.
              You'll find it. Or it'll find you.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline / Stats */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto" data-testid="section-stats">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "4", label: "Live Music Nights Per Week", sub: "Wed–Sat, all year" },
            { num: "100+", label: "Acts Per Year", sub: "Local & touring artists" },
            { num: "1", label: "Retro Fridge Door", sub: "World's most iconic entrance" },
            { num: "∞", label: "Good Times Had", sub: "And counting" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-md border border-white/5 bg-card fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
              data-testid={`card-stat-${i}`}
            >
              <div className="text-4xl md:text-5xl font-black mb-2 section-highlight">{stat.num}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">{stat.label}</div>
              <div className="text-xs text-white/30">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
