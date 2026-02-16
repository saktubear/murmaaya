import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const phrases = [
  "Minecraft PvP enthusiast",
  "Diamond tier SMP player",
  "Sword combo specialist",
  "Just vibing ✌️",
];

const TypewriterText = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <span className="inline-flex items-center">
      <span>{phrases[phraseIndex].slice(0, charIndex)}</span>
      <motion.span
        className="inline-block w-0.5 h-6 md:h-7 bg-foreground ml-0.5"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
};

export default TypewriterText;
