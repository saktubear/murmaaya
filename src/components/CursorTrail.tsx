import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const emojis = ["⚔️", "🗡️", "🏹", "💎", "✨", "🔥", "⭐"];
let nextId = 0;

const CursorTrail = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleMove = useCallback((e: MouseEvent) => {
    if (Math.random() > 0.3) return; // throttle
    const id = nextId++;
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    setParticles(prev => [...prev.slice(-10), { id, x: e.clientX, y: e.clientY, emoji }]);
    setTimeout(() => setParticles(prev => prev.filter(p => p.id !== id)), 800);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99]">
      <AnimatePresence>
        {particles.map(p => (
          <motion.span
            key={p.id}
            className="absolute text-sm"
            style={{ left: p.x, top: p.y }}
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ opacity: 0, scale: 0.3, y: -40 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {p.emoji}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;
