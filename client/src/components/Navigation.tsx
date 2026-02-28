import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "What's On", href: "/whats-on" },
  { label: "About", href: "/about" },
  { label: "Functions", href: "/functions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`nav-sticky transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        }`}
        data-testid="nav-main"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" data-testid="link-logo">
              <div className="flex flex-col leading-none cursor-pointer">
                <span className="nav-logo-main text-base md:text-lg uppercase tracking-wide transition-all duration-300">
                  Suzie Wong's
                </span>
                <span className="nav-logo-sub text-xs font-bold tracking-[0.3em] uppercase opacity-70 transition-all duration-300">
                  Good Time Bar
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span
                    className={`nav-link text-sm font-semibold uppercase tracking-widest transition-all duration-200 cursor-pointer hover:text-neon-brand ${
                      location === link.href
                        ? "text-neon-pink active"
                        : "text-white/70"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/functions">
                <Button
                  size="sm"
                  className="ml-2 bg-primary text-white font-bold uppercase tracking-wider text-xs"
                  data-testid="button-nav-book"
                >
                  Book a Function
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              data-testid="button-menu-toggle"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/98 backdrop-blur-xl flex flex-col transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-all" : "opacity-0 pointer-events-none"
        }`}
        data-testid="nav-mobile-menu"
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/5">
          <div className="flex flex-col leading-none">
            <span className="nav-logo-main text-base uppercase tracking-wide">Suzie Wong's</span>
            <span className="nav-logo-sub text-xs font-bold tracking-[0.3em] uppercase opacity-70">Good Time Bar</span>
          </div>
          <button
            className="text-white p-2"
            onClick={() => setMenuOpen(false)}
            data-testid="button-menu-close"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col justify-center flex-1 px-8 gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div
                className={`py-4 border-b border-white/5 text-3xl font-black uppercase tracking-tight cursor-pointer transition-colors duration-200 ${
                  location === link.href ? "text-neon-pink" : "text-white/80"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <div className="mt-6">
            <Link href="/functions">
              <Button className="w-full bg-primary text-white font-bold uppercase tracking-widest text-sm h-12" data-testid="button-mobile-book">
                Book a Function
              </Button>
            </Link>
          </div>
        </div>

        <div className="px-8 pb-8 text-center text-white/30 text-xs tracking-widest uppercase">
          <div className="font-script text-lg text-white/20 mb-1" style={{ fontFamily: "Dancing Script, cursive" }}>
            life is too short to drink responsibly
          </div>
          Fortitude Valley, Brisbane
        </div>
      </div>
    </>
  );
}
