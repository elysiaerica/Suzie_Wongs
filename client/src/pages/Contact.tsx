import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(2, "Subject required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact | Suzie Wong's Good Time Bar";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: (data: ContactForm) =>
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went sideways",
        description: "Couldn't send your message. Try calling us on (07) 3454 7339.",
        variant: "destructive",
      });
    },
  });

  return (
    <div>
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto" data-testid="section-contact-header">
        <div className="flex items-center gap-3 mb-4 fade-in-up">
          <div className="h-px w-10 bg-primary/50" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/80">Get in Touch</span>
        </div>
        <h1
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none mb-4 fade-in-up"
          data-testid="text-contact-title"
        >
          Contact Us
        </h1>
        <p className="text-white/50 text-lg max-w-lg fade-in-up">
          Questions? Bookings? Want to tell Suzie something? We're all ears.
          (Well, Suzie doesn't actually exist, but we'll pass the message on.)
        </p>
      </section>

      <div className="section-divider mx-4 sm:mx-6 mb-16" />

      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-20" data-testid="section-contact-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div>
            {/* Address */}
            <div className="mb-10 fade-in-up">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white/30 mb-5">Find Us</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md border border-white/5 bg-card flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">142 Wickham Street</div>
                    <div className="text-sm text-white/50">Fortitude Valley QLD 4006</div>
                    <div className="text-xs text-white/30 mt-2 flex items-center gap-1">
                      <span className="inline-block w-2 h-2 rounded-sm bg-primary/50" />
                      Enter through the retro fridge door
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-md border border-white/5 bg-card flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-0.5">Phone</div>
                    <a href="tel:+61734547339" className="text-white hover:text-primary transition-colors font-medium" data-testid="link-phone-contact">
                      (07) 3454 7339
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-md border border-white/5 bg-card flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-0.5">Email</div>
                    <a href="mailto:info@suziewongsbar.com.au" className="text-white hover:text-primary transition-colors font-medium" data-testid="link-email-contact">
                      info@suziewongsbar.com.au
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mb-10 fade-in-up">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white/30 mb-5 flex items-center gap-2">
                <Clock size={12} /> Opening Hours
              </h2>
              <div className="space-y-2 rounded-md border border-white/5 bg-card p-5">
                {[
                  { day: "Monday", hours: "Closed", open: false },
                  { day: "Tuesday", hours: "4:00pm – Late", open: true },
                  { day: "Wednesday", hours: "4:00pm – Late", open: true },
                  { day: "Thursday", hours: "4:00pm – 3:00am", open: true },
                  { day: "Friday", hours: "2:00pm – 3:00am", open: true },
                  { day: "Saturday", hours: "2:00pm – 3:00am", open: true },
                  { day: "Sunday", hours: "2:00pm – Late", open: true },
                ].map(({ day, hours, open }) => (
                  <div key={day} className="flex justify-between items-center py-1.5 border-b border-white/[0.04] last:border-0">
                    <span className="text-sm opening-day">{day}</span>
                    <span className={`text-sm font-medium opening-time${open ? "" : " closed"}`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="fade-in-up">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white/30 mb-5">Follow Along</h2>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/suziewongsgoodtimebar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-md border border-white/5 bg-card hover-elevate transition-colors group"
                  data-testid="link-social-instagram"
                >
                  <Instagram size={18} className="text-primary group-hover:text-white transition-colors" />
                  <div>
                    <div className="text-xs font-bold text-white/60 group-hover:text-white transition-colors">Instagram</div>
                    <div className="text-xs text-white/30">@suziewongsgoodtimebar</div>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/suziewongsgoodtimebar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-md border border-white/5 bg-card hover-elevate transition-colors group"
                  data-testid="link-social-facebook"
                >
                  <Facebook size={18} className="text-primary group-hover:text-white transition-colors" />
                  <div>
                    <div className="text-xs font-bold text-white/60 group-hover:text-white transition-colors">Facebook</div>
                    <div className="text-xs text-white/30">Suzie Wong's</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div
                className="text-center py-16 px-8 rounded-md border border-neon-green/20 bg-neon-green/5 fade-in-up"
                data-testid="div-contact-success"
              >
                <CheckCircle className="w-12 h-12 text-neon-green mx-auto mb-4" />
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3">Message Sent!</h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  We'll get back to you soon. In the meantime, come find us on Wickham Street.
                  The fridge door's always open.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="border-white/15 text-white/60 font-bold uppercase tracking-wider text-xs"
                  data-testid="button-send-another"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="fade-in-up">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-6">
                  Send a Message
                </h2>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
                    className="space-y-5"
                    data-testid="form-contact"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">
                              Name *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                className="bg-card border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                                data-testid="input-contact-name"
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
                                data-testid="input-contact-email"
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
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">
                            Subject *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What's this about?"
                              className="bg-card border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                              data-testid="input-contact-subject"
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
                            Message *
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Say what you gotta say..."
                              className="bg-card border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 min-h-[150px]"
                              data-testid="textarea-contact-message"
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
                      data-testid="button-submit-contact"
                    >
                      {mutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
