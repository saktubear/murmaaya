import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const IntroSection = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto py-12 md:py-16 px-4">
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Who's Saktu?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Hey there 👋 I'm a 16 year old Minecraft player who spends way too much time in PvP arenas. 
          When I'm not clicking heads, I'm probably building or hanging out on SMPs with friends.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={item} whileHover={{ scale: 1.05, y: -5 }} className="rounded-2xl bg-card p-6 text-center transition-shadow hover:shadow-lg cursor-default">
          <span className="text-2xl mb-3 block">🎮</span>
          <h3 className="font-bold text-lg mb-1">Main Game</h3>
          <p className="text-muted-foreground">Minecraft Java Edition</p>
        </motion.div>
        <motion.div variants={item} whileHover={{ scale: 1.05, y: -5 }} className="rounded-2xl bg-card p-6 text-center transition-shadow hover:shadow-lg cursor-default">
          <span className="text-2xl mb-3 block">⚔️</span>
          <h3 className="font-bold text-lg mb-1">IGN</h3>
          <p className="text-muted-foreground">Vortz_</p>
        </motion.div>
        <motion.div variants={item} whileHover={{ scale: 1.05, y: -5 }} className="rounded-2xl bg-card p-6 text-center transition-shadow hover:shadow-lg cursor-default">
          <span className="text-2xl mb-3 block">🏹</span>
          <h3 className="font-bold text-lg mb-1">Specialty</h3>
          <p className="text-muted-foreground">Sword & SMP PvP</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
