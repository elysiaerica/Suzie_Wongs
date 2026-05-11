import { Switch, Route, useLocation } from "wouter";
import { Link } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import WhatsOn from "@/pages/WhatsOn";
import About from "@/pages/About";
import Functions from "@/pages/Functions";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import LaunchOptions from "@/pages/LaunchOptions";
import LaunchOption1 from "@/pages/LaunchOption1";
import LaunchOption2 from "@/pages/LaunchOption2";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();
  const isLaunchPage = location.startsWith("/launch");

  if (isLaunchPage) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <main className="flex-1">
          <Switch>
            <Route path="/launch" component={LaunchOptions} />
            <Route path="/launch/option-1" component={LaunchOption1} />
            <Route path="/launch/option-2" component={LaunchOption2} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1 pb-14 md:pb-0">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/whats-on" component={WhatsOn} />
          <Route path="/about" component={About} />
          <Route path="/functions" component={Functions} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <div className="sticky-cta" data-testid="div-sticky-cta">
        <Link href="/whats-on" data-testid="link-sticky-whats-on">
          What's On Tonight
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
