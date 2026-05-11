import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const option1Inclusions = [
  "Launch-ready website",
  "Refined visual polish",
  "Mobile / responsive pass",
  "Performance pass",
  "Deployment setup",
  "Final launch checks",
  "Simple contact / booking pathway",
  "Core site pages & sections",
];

const option2Inclusions = [
  "Everything in Option 1",
  "Live music / weekly lineup structure",
  "Reusable updates system",
  "Function / booking enquiry pathway",
  "Mailing capture",
  "Audience list-building",
  "Analytics / tracking",
  "Lightweight update / admin structure",
  "Handover notes & operating guide",
  "Automation / integration setup",
];

export default function LaunchOptions() {
  useEffect(() => {
    document.title = "Launch Options | Suzie Wong's";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="launch-options-page">
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(255,79,163,0.08) 0%, rgba(11,11,15,0) 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 70%, rgba(255,216,77,0.04) 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 fade-in-up">
            <span
              className="inline-block text-xs font-bold tracking-[0.4em] uppercase border border-white/10 px-5 py-2 rounded-sm"
              style={{ color: "var(--logo-text)", backgroundColor: "rgba(11,11,15,0.5)" }}
            >
              Suzie Wong's Good Time Bar
            </span>
          </div>

          <h1 className="fade-in-up" style={{ animationDelay: "100ms" }}>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-[0.95] mb-2">
              Your website is
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-3"
              style={{
                color: "var(--brand-yellow)",
                textShadow:
                  "0 0 6px rgba(255,212,0,0.7), 0 0 16px rgba(255,212,0,0.35)",
              }}
            >
              already built.
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-[0.95]">
              Choose how it goes live.
            </span>
          </h1>
        </div>
      </section>

      {/* Cards */}
      <section className="px-4 sm:px-6 max-w-6xl mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Option 1 */}
          <Link href="/launch/option-1">
            <div
              className="launch-card group relative rounded-md border border-white/8 bg-[#111116] p-8 md:p-10 cursor-pointer transition-all duration-500 hover:-translate-y-2 flex flex-col fade-in-up"
              style={{ animationDelay: "200ms", minHeight: "600px" }}
            >
              <div
                className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow:
                    "0 0 30px rgba(255,79,163,0.15), 0 0 60px rgba(255,79,163,0.05), inset 0 0 30px rgba(255,79,163,0.03)",
                }}
              />
              <div className="absolute inset-0 rounded-md border border-transparent group-hover:border-[#FF4FA3]/30 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-6">
                  <div className="text-xs font-bold tracking-[0.3em] uppercase text-primary/60 mb-3">
                    Option 1
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                    Live in 24 hours
                  </h2>
                </div>

                <p className="text-sm text-white/45 leading-relaxed mb-8">
                  The scaled-back launch version. Polished, complete, and ready to go live quickly.
                </p>

                <div className="space-y-3 mb-10 flex-1">
                  {option1Inclusions.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-white/25"
                      />
                      <span className="text-sm text-white/50">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="section-divider mb-6" />

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/25 mb-1">
                        Investment
                      </div>
                      <div
                        className="text-3xl md:text-4xl font-black text-white"
                        style={{
                          textShadow: "0 0 20px rgba(255,255,255,0.1)",
                        }}
                      >
                        $1,950
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group-hover:text-white transition-colors">
                      Enter site
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Option 2 */}
          <Link href="/launch/option-2">
            <div
              className="launch-card group relative rounded-md border border-primary/15 p-8 md:p-10 cursor-pointer transition-all duration-500 hover:-translate-y-2 flex flex-col fade-in-up"
              style={{
                animationDelay: "300ms",
                minHeight: "600px",
                background:
                  "linear-gradient(135deg, rgba(255,79,163,0.06) 0%, #111116 40%, #111116 100%)",
              }}
            >
              <div
                className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow:
                    "0 0 40px rgba(255,79,163,0.2), 0 0 80px rgba(255,79,163,0.08), inset 0 0 40px rgba(255,79,163,0.04)",
                }}
              />
              <div className="absolute inset-0 rounded-md border border-transparent group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />

              {/* Badge */}
              <div className="absolute -top-3 right-8">
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-sm"
                  style={{
                    background: "var(--neon-pink)",
                    color: "#fff",
                    boxShadow:
                      "0 0 12px rgba(255,79,163,0.5), 0 0 24px rgba(255,79,163,0.2)",
                  }}
                >
                  <Sparkles size={10} />
                  Most useful
                </span>
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-6">
                  <div className="text-xs font-bold tracking-[0.3em] uppercase text-primary/60 mb-3">
                    Option 2
                  </div>
                  <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                    Your Venue + Your Website
                    <br />
                    + Your Audience
                  </h2>
                  <div
                    className="text-2xl md:text-3xl font-black uppercase tracking-tight mt-1"
                    style={{
                      color: "var(--brand-yellow)",
                      textShadow:
                        "0 0 6px rgba(255,212,0,0.7), 0 0 16px rgba(255,212,0,0.35)",
                    }}
                  >
                    Connected
                  </div>
                </div>

                <p className="text-sm text-white/45 leading-relaxed mb-8">
                  The full website build with systems and integrations connected.
                  More useful to run week-to-week.
                </p>

                <div className="space-y-3 mb-10 flex-1">
                  {option2Inclusions.map((item, i) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${i === 0 ? "text-primary/50" : "text-primary/30"}`}
                      />
                      <span
                        className={`text-sm ${i === 0 ? "text-primary/60 font-medium" : "text-white/50"}`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div
                    className="h-px mb-6"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, rgba(255,79,163,0.3), transparent)",
                      boxShadow: "0 0 8px rgba(255,79,163,0.2)",
                    }}
                  />

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/25 mb-1">
                        Investment
                      </div>
                      <div
                        className="text-3xl md:text-4xl font-black text-white"
                        style={{
                          textShadow: "0 0 20px rgba(255,79,163,0.15)",
                        }}
                      >
                        $3,750
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group-hover:text-white transition-colors">
                      Enter connected version
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
