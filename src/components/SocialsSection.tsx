import { motion } from "framer-motion";

const socials = [
  { name: "YouTube", url: "https://www.youtube.com/@saktu_bear", emoji: "🎬", description: "@saktu_bear" },
  { name: "Discord", url: "https://discord.gg/dEbR7TyMSj", emoji: "💬", description: "Join the crew" },
  { name: "Instagram", url: "https://www.instagram.com/_saktu_/", emoji: "📸", description: "@_saktu_" },
  { name: "NameMC", url: "https://namemc.com/profile/Vorz_.1", emoji: "🎮", description: "Vortz_" },
];

const SocialsSection = () => {
  return (
    <section id="socials" className="py-12 md:py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Let's Connect
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-card p-6 text-center card-hover block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * index, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <motion.span
              className="text-3xl block mb-3"
              whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
              transition={{ duration: 0.4 }}
            >
              {social.emoji}
            </motion.span>
            <h3 className="font-bold text-lg mb-1 group-hover:text-accent-foreground transition-colors">{social.name}</h3>
            <p className="text-sm text-muted-foreground">{social.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default SocialsSection;
