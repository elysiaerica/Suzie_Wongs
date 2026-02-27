import { useEffect, useState } from "react";
import { X } from "lucide-react";
import img429 from "@assets/IMG_0429_1772233759717.jpeg";
import img428 from "@assets/IMG_0428_1772233759717.jpeg";
import img427 from "@assets/IMG_0427_1772233759717.jpeg";
import img426 from "@assets/IMG_0426_1772233759717.jpeg";
import img425 from "@assets/IMG_0425_1772233759717.jpeg";
import img424 from "@assets/IMG_0424_1772233759717.jpeg";
import img423 from "@assets/IMG_0423_1772233759717.jpeg";
import img422 from "@assets/IMG_0422_1772233759717.jpeg";
import img421 from "@assets/IMG_0421_1772233759717.jpeg";
import img420 from "@assets/IMG_0420_1772233759717.jpeg";
import img419 from "@assets/IMG_0419_1772233759718.jpeg";
import img418 from "@assets/IMG_0418_1772233759718.jpeg";
import img417 from "@assets/IMG_0417_1772233759718.jpeg";
import img416 from "@assets/IMG_0416_1772233759718.jpeg";
import img415 from "@assets/IMG_0415_1772233759718.jpeg";
import img414 from "@assets/IMG_0414_1772233759718.jpeg";

const photos = [
  { src: img429, caption: "When things get loose on a Saturday night", category: "Crowd" },
  { src: img420, caption: "The neon sign that says it all", category: "Stage" },
  { src: img424, caption: "Good times at the bar", category: "Crowd" },
  { src: img425, caption: "The bar — stocked and ready", category: "Bar" },
  { src: img419, caption: "Another packed night on the stage", category: "Stage" },
  { src: img423, caption: "Nobody told them to get on the bar. They just did.", category: "Crowd" },
  { src: img422, caption: "The bartenders here are legends", category: "Bar" },
  { src: img428, caption: "The wall of a thousand frames", category: "Venue" },
  { src: img426, caption: "The bar from inside — surfboard overhead", category: "Bar" },
  { src: img421, caption: "Jameson watching over the whisky shelf", category: "Bar" },
  { src: img427, caption: "Pouring shots with purpose", category: "Bar" },
  { src: img417, caption: "Giving it everything on the mic", category: "Stage" },
  { src: img416, caption: "The famous fridge door entrance", category: "Venue" },
  { src: img418, caption: "Suzie Wong's Lager — 4.2% ABV. Bloody goood.", category: "Bar" },
  { src: img415, caption: "A Suzie Wong's cocktail — pineapple optional, umbrella mandatory", category: "Bar" },
  { src: img414, caption: "Packed out another night, another band", category: "Stage" },
];

const categories = ["All", "Crowd", "Stage", "Bar", "Venue"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Gallery | Suzie Wong's Good Time Bar";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => i !== null ? Math.min(i + 1, filtered.length - 1) : null);
      if (e.key === "ArrowLeft") setLightbox((i) => i !== null ? Math.max(i - 1, 0) : null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const filtered = filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <div>
      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 max-w-7xl mx-auto" data-testid="section-gallery-header">
        <div className="flex items-center gap-3 mb-4 fade-in-up">
          <div className="h-px w-10 bg-primary/50" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">Gallery</span>
        </div>
        <h1
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none mb-4 fade-in-up"
          data-testid="text-gallery-title"
        >
          The Evidence
        </h1>
        <p className="text-white/50 text-lg mb-8 fade-in-up">
          "I swear I can explain" — said nobody here, ever.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 fade-in-up" data-testid="div-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-sm border transition-all duration-200 ${
                filter === cat
                  ? "bg-primary text-white border-primary"
                  : "border-white/10 text-white/50 bg-white/[0.03] hover:border-white/20 hover:text-white/70"
              }`}
              data-testid={`button-filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <div className="section-divider mx-4 sm:mx-6 mb-8" />

      {/* Masonry-style grid */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-20" data-testid="section-photo-grid">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
          {filtered.map((photo, i) => (
            <div
              key={photo.src}
              className="break-inside-avoid rounded-md overflow-hidden cursor-pointer group relative fade-in-up"
              style={{ animationDelay: `${(i % 8) * 60}ms` }}
              onClick={() => setLightbox(i)}
              data-testid={`img-gallery-${i}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4">
                <p className="text-white text-xs font-semibold leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {photo.caption}
                </p>
              </div>
              {/* Category badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-sm bg-primary/80 text-white">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          data-testid="div-lightbox"
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors"
            onClick={() => setLightbox(null)}
            data-testid="button-lightbox-close"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-4xl font-thin p-4 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i !== null ? i - 1 : null); }}
              data-testid="button-lightbox-prev"
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          {/* Next */}
          {lightbox < filtered.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-4xl font-thin p-4 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i !== null ? i + 1 : null); }}
              data-testid="button-lightbox-next"
              aria-label="Next"
            >
              ›
            </button>
          )}

          <div
            className="max-w-4xl w-full max-h-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-md"
              data-testid="img-lightbox-main"
            />
            <div className="text-center">
              <p className="text-white/70 text-sm">{filtered[lightbox].caption}</p>
              <p className="text-white/30 text-xs mt-1">{lightbox + 1} / {filtered.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* Social CTA */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto text-center border-t border-white/5" data-testid="section-social-cta">
        <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-3 fade-in-up">
          See More on the 'Gram
        </h2>
        <p className="text-white/40 text-sm mb-6 fade-in-up">
          Follow us for the freshest evidence of what happens when the music starts.
        </p>
        <a
          href="https://www.instagram.com/suziewongsgoodtimebar/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block fade-in-up"
          data-testid="link-instagram-gallery"
        >
          <button className="border border-white/15 text-white/60 font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-md hover:border-white/30 hover:text-white transition-all duration-200">
            @suziewongsgoodtimebar →
          </button>
        </a>
      </section>
    </div>
  );
}
