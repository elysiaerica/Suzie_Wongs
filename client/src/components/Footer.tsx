import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/60 border-t border-white/5 mt-20">
      {/* Neon divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-50" />

      {/* Marquee strip */}
      <div className="bg-black/80 py-3 overflow-hidden border-b border-white/5">
        <div className="flex whitespace-nowrap marquee-track">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="text-xs font-bold uppercase tracking-widest mx-8 text-white/30">
              {i % 4 === 0 ? "🎸 Live Music" : i % 4 === 1 ? "🍹 Dive Bar" : i % 4 === 2 ? "Fortitude Valley" : "Good Times Only"}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="text-xs font-bold tracking-[0.3em] uppercase text-white/30 mb-1">Suzie Wong's</div>
              <div className="text-2xl font-black uppercase tracking-tight text-white">Good Time Bar</div>
            </div>
            <p
              className="text-sm leading-relaxed text-white/40 mb-4"
              style={{ fontFamily: "Dancing Script, cursive", fontSize: "1.1rem" }}
            >
              "life is too short<br />to drink responsibly"
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/suziewongsgoodtimebar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-white/50 hover-elevate transition-colors hover:text-white hover:border-white/30"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/suziewongsgoodtimebar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-white/50 hover-elevate transition-colors hover:text-white hover:border-white/30"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.suziewongsgoodtimebar.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-white/50 hover-elevate transition-colors hover:text-white hover:border-white/30"
                data-testid="link-website"
                aria-label="Website"
              >
                <Music size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-4">Navigate</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "What's On", href: "/whats-on" },
                { label: "About", href: "/about" },
                { label: "Functions", href: "/functions" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer nav-link">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-sm">
              {[
                { day: "Monday", hours: "Closed" },
                { day: "Tuesday", hours: "4pm – Late" },
                { day: "Wednesday", hours: "4pm – Late" },
                { day: "Thursday", hours: "4pm – 3am" },
                { day: "Friday", hours: "2pm – 3am" },
                { day: "Saturday", hours: "2pm – 3am" },
                { day: "Sunday", hours: "2pm – Late" },
              ].map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="text-white/40">{day}</span>
                  <span className={hours === "Closed" ? "text-white/25" : "text-white/70"}>{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-4">Find Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary/70" />
                <span>
                  142 Wickham Street<br />
                  Fortitude Valley<br />
                  Brisbane QLD 4006
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone size={16} className="shrink-0 text-primary/70" />
                <a href="tel:+61734547339" className="hover:text-white transition-colors" data-testid="link-phone">
                  (07) 3454 7339
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Mail size={16} className="shrink-0 text-primary/70" />
                <a href="mailto:info@suziewongsbar.com.au" className="hover:text-white transition-colors" data-testid="link-email">
                  info@suziewongsbar.com.au
                </a>
              </li>
            </ul>

            <div className="mt-6 p-3 rounded-md border border-white/5 bg-white/[0.02]">
              <div className="text-xs text-white/30 uppercase tracking-widest mb-1">Enter via</div>
              <div className="text-sm text-white/60 font-semibold">The Retro Fridge Door</div>
              <div className="text-xs text-white/30 mt-1">Wickham St, Valley</div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 tracking-wide">
            &copy; {new Date().getFullYear()} Suzie Wong's Good Time Bar. All rights reserved.
          </p>
          <p className="text-xs text-white/20 tracking-widest uppercase">
            Drink responsibly — just kidding
          </p>
        </div>
      </div>
    </footer>
  );
}
