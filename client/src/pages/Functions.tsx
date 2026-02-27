import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Users, Music, Calendar, Star, Zap } from "lucide-react";
import img424 from "@assets/IMG_0424_1772233759717.jpeg";
import img429 from "@assets/IMG_0429_1772233759717.jpeg";
import img423 from "@assets/IMG_0423_1772233759717.jpeg";

const enquirySchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Phone number required"),
  eventType: z.string().min(1, "Event type required"),
  guestCount: z.string().min(1, "Guest count required"),
  preferredDate: z.string().min(1, "Preferred date required"),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more — at least 10 characters"),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

const packages = [
  {
    icon: Users,
    title: "Semi-Private Function",
    capacity: "20–60 guests",
    desc: "Exclusive use of our rear function space. DJ or live music package available. Bar tab options, cocktail packages, and canapés on request.",
    features: ["Dedicated bar", "Sound system", "Function host", "Customisable bar tab"],
    highlight: false,
  },
  {
    icon: Star,
    title: "Full Venue Buyout",
    capacity: "60–200 guests",
    desc: "Take over the whole damn thing. The stage, the bar, the fridge door entrance — all yours. We shut the doors to the public and open them just for you.",
    features: ["Exclusive full venue", "Live band package", "Custom cocktail menu", "Full AV setup", "Dedicated event manager"],
    highlight: true,
  },
  {
    icon: Music,
    title: "Band + Bar Package",
    capacity: "Any size",
    desc: "Book a live band through us and get a sweetheart deal on the bar. We've got connections across Brisbane's music scene and can match you to the perfect act.",
    features: ["Curated band matching", "Preferred bar rates", "Stage and sound included", "Merch selling area"],
    highlight: false,
  },
];

export default function Functions() {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Functions | Suzie Wong's Good Time Bar";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const form = useForm<EnquiryForm>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      guestCount: "",
      preferredDate: "",
      budget: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: EnquiryForm) =>
      apiRequest("POST", "/api/enquiries", data),
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Couldn't send your enquiry. Try calling us on (07) 3454 7339.",
        variant: "destructive",
      });
    },
  });

  return (
    <div>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-4 sm:px-6 overflow-hidden"
        data-testid="section-functions-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img424})` }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,31,106,0.12) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4 fade-in-up">
            <div className="h-px w-10 bg-primary/50" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">Private Events</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none mb-4 fade-in-up" data-testid="text-functions-title">
            Your Party.<br />
            <span className="neon-pink">Our Bar.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-xl leading-relaxed fade-in-up">
            Suzie Wong's is made for celebrations that actually go off. Birthdays. Bucks nights.
            Work events you won't regret attending. We handle everything.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto" data-testid="section-packages">
        <div className="flex items-center gap-3 mb-3 fade-in-up">
          <div className="h-px w-10 bg-primary/50" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">Function Packages</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none mb-12 fade-in-up">
          Pick Your Package
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, i) => (
            <div
              key={pkg.title}
              className={`rounded-md border p-6 md:p-8 fade-in-up relative ${
                pkg.highlight
                  ? "border-primary/40 bg-gradient-to-br from-primary/10 to-card"
                  : "border-white/5 bg-card"
              } hover-elevate`}
              style={{ animationDelay: `${i * 100}ms` }}
              data-testid={`card-package-${i}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-sm bg-primary text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <pkg.icon className={`w-6 h-6 mb-4 ${pkg.highlight ? "text-primary" : "text-white/40"}`} />
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">{pkg.title}</h3>
              <div className="text-sm font-bold text-primary/70 mb-4">{pkg.capacity}</div>
              <p className="text-sm text-white/55 leading-relaxed mb-5">{pkg.desc}</p>
              <ul className="space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-white/50">
                    <div className={`w-1 h-1 rounded-full ${pkg.highlight ? "bg-primary" : "bg-white/20"}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Image strip */}
        <div className="grid grid-cols-3 gap-3 mb-16 fade-in-up">
          <div className="rounded-md overflow-hidden img-card aspect-video">
            <img src={img429} alt="Functions at Suzie Wong's" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden img-card aspect-video">
            <img src={img423} alt="Party crowd" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-md overflow-hidden img-card aspect-video">
            <img src={img424} alt="Good times" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section
        className="py-20 px-4 sm:px-6"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,31,106,0.04) 50%, rgba(0,0,0,0) 100%)" }}
        data-testid="section-enquiry-form"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4 fade-in-up">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">Get in Touch</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none mb-4 fade-in-up">
              Make an Enquiry
            </h2>
            <p className="text-white/50 leading-relaxed fade-in-up">
              Tell us what you've got in mind and we'll get back to you faster than last drinks bell.
            </p>
          </div>

          {submitted ? (
            <div
              className="text-center py-16 px-8 rounded-md border border-neon-green/20 bg-neon-green/5 fade-in-up"
              data-testid="div-enquiry-success"
            >
              <CheckCircle className="w-12 h-12 text-neon-green mx-auto mb-4" />
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3">Enquiry Received!</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Cheers for getting in touch. We'll come back to you within 24 hours (usually much sooner).
                In the meantime, grab a drink — you deserve it.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="border-white/15 text-white/60 font-bold uppercase tracking-wider text-xs"
                data-testid="button-new-enquiry"
              >
                Submit Another Enquiry
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
                className="space-y-5 fade-in-up"
                data-testid="form-enquiry"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">
                          Your Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="First & last name"
                            className="bg-card border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                            data-testid="input-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            className="bg-card border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">
                          Phone *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="04XX XXX XXX"
                            className="bg-card border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                            data-testid="input-phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">
                          Event Type *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Birthday, Bucks, Work event..."
                            className="bg-card border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                            data-testid="input-event-type"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="guestCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">
                          Guest Count *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Approx. number of guests"
                            className="bg-card border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                            data-testid="input-guest-count"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">
                          Preferred Date *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="bg-card border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                            data-testid="input-preferred-date"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">
                        Approximate Budget (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. $2,000 – $5,000"
                          className="bg-card border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                          data-testid="input-budget"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">
                        Tell Us More *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What kind of night are you planning? Any specific requirements? Canapés, live band, custom cocktails? Hit us."
                          className="bg-card border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 min-h-[120px]"
                          data-testid="textarea-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-12 bg-primary text-white font-black uppercase tracking-widest text-sm"
                  disabled={mutation.isPending}
                  data-testid="button-submit-enquiry"
                >
                  {mutation.isPending ? "Sending..." : "Send Enquiry"}
                </Button>

                <p className="text-center text-xs text-white/25">
                  Or call us directly on{" "}
                  <a href="tel:+61734547339" className="text-white/40 hover:text-white transition-colors">
                    (07) 3454 7339
                  </a>
                </p>
              </form>
            </Form>
          )}
        </div>
      </section>
    </div>
  );
}
