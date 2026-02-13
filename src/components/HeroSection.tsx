import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-12 animate-fade-in">
      <div className="flex flex-col items-center justify-center text-center py-20 md:py-32 px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight animate-slide-down mb-4">
          Saktu
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-slide-up stagger-1 mb-8">
          Minecraft PvP • 16 Years Old • Chill
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-2">
          <a href="#socials">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105">
              Social Links
            </Button>
          </a>
          <a href="#minecraft">
            <Button variant="outline" className="rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105">
              Minecraft Info
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
