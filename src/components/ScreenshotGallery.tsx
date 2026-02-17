import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  {
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    alt: "Epic PvP moment",
    caption: "1v4 clutch on the bridge",
  },
  {
    src: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    alt: "Base build",
    caption: "SMP base tour",
  },
  {
    src: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80",
    alt: "Gaming setup",
    caption: "The setup behind the clicks",
  },
  {
    src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    alt: "Tournament win",
    caption: "Tournament finals W",
  },
  {
    src: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b28?w=800&q=80",
    alt: "Team fight",
    caption: "Squad rolling deep",
  },
  {
    src: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=800&q=80",
    alt: "Sunset build",
    caption: "Vibes on the server",
  },
];

const ScreenshotGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + dir + screenshots.length) % screenshots.length);
  };

  return (
    <section id="gallery" className="py-12 md:py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Screenshots
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-center mb-12 max-w-md mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Moments worth saving 📸
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {screenshots.map((shot, i) => (
          <motion.button
            key={i}
            className="group relative rounded-2xl overflow-hidden glow-card aspect-video cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            whileHover={{ scale: 1.03, y: -4 }}
            onClick={() => setSelectedIndex(i)}
          >
            <img
              src={shot.src}
              alt={shot.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-medium">{shot.caption}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={screenshots[selectedIndex].src}
                alt={screenshots[selectedIndex].alt}
                className="w-full rounded-2xl shadow-2xl"
              />
              <p className="text-white text-center mt-4 text-lg font-medium">
                {screenshots[selectedIndex].caption}
              </p>

              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:scale-110 transition-transform"
              >
                <X size={20} />
              </button>

              <button
                onClick={() => navigate(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:scale-110 transition-transform"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:scale-110 transition-transform"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ScreenshotGallery;
