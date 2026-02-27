import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        <div
          className="text-9xl md:text-[180px] font-black leading-none mb-4 neon-pink"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          data-testid="text-404"
        >
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-4">
          Looks Like You Walked Through the Wrong Fridge Door
        </h1>
        <p className="text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
          That page doesn't exist. But we do. And we've got cold beers and live music.
          Come find what you're actually looking for.
        </p>
        <Link href="/">
          <Button
            className="bg-primary text-white font-bold uppercase tracking-widest text-sm h-11 px-8"
            data-testid="button-go-home"
          >
            Back to Good Times
          </Button>
        </Link>
      </div>
    </div>
  );
}
