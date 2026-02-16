import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointerClick } from "lucide-react";

const CPSCounter = () => {
  const [clicks, setClicks] = useState<number[]>([]);
  const [cps, setCps] = useState(0);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const rippleId = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    const rect = containerRef.current?.getBoundingClientRect();
    
    // Add ripple
    if (rect) {
      const id = rippleId.current++;
      setRipples(prev => [...prev.slice(-8), { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);
    }

    setClicks(prev => {
      const recent = [...prev, now].filter(t => now - t < 1000);
      setCps(recent.length);
      return recent;
    });
  }, []);

  const getColor = () => {
    if (cps >= 15) return "text-red-500";
    if (cps >= 10) return "text-orange-500";
    if (cps >= 6) return "text-yellow-500";
    return "text-muted-foreground";
  };

  return (
    <section className="py-12 md:py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        CPS Challenge
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-center mb-8 max-w-md mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        How fast can you click? Try to beat 10 CPS! 🖱️
      </motion.p>

      <motion.div
        ref={containerRef}
        className="relative max-w-sm mx-auto rounded-[2rem] bg-gradient-to-br from-[hsl(40_30%_97%)] to-[hsl(30_25%_93%)] dark:from-card dark:to-card border border-border/40 p-10 text-center cursor-pointer select-none overflow-hidden"
        onClick={handleClick}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Ripple effects */}
        <AnimatePresence>
          {ripples.map(ripple => (
            <motion.div
              key={ripple.id}
              className="absolute rounded-full bg-primary/20 pointer-events-none"
              style={{ left: ripple.x - 20, top: ripple.y - 20, width: 40, height: 40 }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}
        </AnimatePresence>

        <div className="relative">
          <MousePointerClick className="mx-auto mb-4 text-muted-foreground" size={32} />
          <motion.div
            className={`text-6xl font-bold mb-2 transition-colors ${getColor()}`}
            key={cps}
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {cps}
          </motion.div>
          <p className="text-sm text-muted-foreground font-medium">CLICKS PER SECOND</p>
          {cps >= 10 && (
            <motion.p
              className="mt-3 text-sm font-bold text-orange-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              🔥 PvP Ready!
            </motion.p>
          )}
          {cps >= 15 && (
            <motion.p
              className="mt-1 text-sm font-bold text-red-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ⚡ INSANE!
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default CPSCounter;
