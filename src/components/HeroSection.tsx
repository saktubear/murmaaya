import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logoImg from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-12">
      <div className="flex flex-col items-center justify-center text-center py-20 md:py-32 px-6">
        <motion.img
          src={logoImg}
          alt="Saktu"
          className="w-20 h-20 md:w-28 md:h-28 rounded-2xl object-cover mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
        />
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Saktu
        </motion.h1>
        <motion.p
          className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          16 y/o Minecraft PvP enthusiast · Diamond tier SMP player · Just vibing
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a href="#socials">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105">
              Find Me Online
            </Button>
          </a>
          <a href="#minecraft">
            <Button variant="outline" className="rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105">
              My Stats
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
