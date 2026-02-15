import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cards = [
  { emoji: "🎮", title: "Main Game", desc: "Minecraft Java Edition" },
  { emoji: "⚔️", title: "IGN", desc: "Vortz_" },
  { emoji: "🏹", title: "Specialty", desc: "Sword & SMP PvP" },
];

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
        <motion.p
          className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hey there 👋 I'm a 16 year old Minecraft player who spends way too much time in PvP arenas. 
          When I'm not clicking heads, I'm probably building or hanging out on SMPs with friends.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            variants={item}
            whileHover={{ scale: 1.05, y: -8 }}
            className="relative rounded-2xl bg-card p-6 text-center transition-shadow hover:shadow-lg cursor-default overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative">
              <motion.span
                className="text-2xl mb-3 block"
                whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {card.emoji}
              </motion.span>
              <h3 className="font-bold text-lg mb-1">{card.title}</h3>
              <p className="text-muted-foreground">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default IntroSection;
