import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
}

const Snowflakes = () => {
  const [flakes, setFlakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const generated: Snowflake[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 8 + 7,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.3,
      drift: (Math.random() - 0.5) * 80,
    }));
    setFlakes(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
      {flakes.map((f) => (
        <motion.div
          key={f.id}
          className="absolute rounded-full bg-foreground/60"
          style={{
            left: `${f.x}%`,
            width: f.size,
            height: f.size,
            top: -10,
          }}
          animate={{
            y: ["0vh", "105vh"],
            x: [0, f.drift, f.drift / 2],
            opacity: [0, f.opacity, f.opacity, 0],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Snowflakes;
