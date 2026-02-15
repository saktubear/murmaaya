import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import MinecraftSection from "@/components/MinecraftSection";
import SocialsSection from "@/components/SocialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <IntroSection />
        <MinecraftSection />
        <SocialsSection />
      </main>

      <motion.footer
        className="border-t border-border mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Saktu · Made with ☕ and too many cps</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
