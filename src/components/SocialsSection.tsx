import { motion } from "framer-motion";
import { Youtube, Instagram, MessageCircle, Gamepad2 } from "lucide-react";

const socials = [
  { name: "YouTube", url: "https://www.youtube.com/@saktu_bear", icon: Youtube, color: "text-red-500", description: "@saktu_bear" },
  { name: "Discord", url: "https://discord.gg/dEbR7TyMSj", icon: MessageCircle, color: "text-indigo-500", description: "Join the crew" },
  { name: "Instagram", url: "https://www.instagram.com/_saktu_/", icon: Instagram, color: "text-pink-500", description: "@_saktu_" },
  { name: "NameMC", url: "https://namemc.com/profile/Vorz_.1", icon: Gamepad2, color: "text-emerald-500", description: "Vortz_" },
];

const SocialsSection = () => {
  return (
    <section id="socials" className="py-12 md:py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Let's Connect
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-center mb-12 max-w-md mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Find me on these platforms 👇
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl bg-gradient-to-br from-[hsl(40_28%_97%)] to-[hsl(28_22%_92%)] dark:from-card dark:to-card border border-border/40 p-6 text-center card-hover block overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * index, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -8 }}
          >
            {/* Hover glow */}
            <motion.div
              className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative">
              <motion.div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted/60 mb-3 ${social.color}`}
                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.3 }}
                transition={{ duration: 0.4 }}
              >
                <social.icon size={24} />
              </motion.div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-accent-foreground transition-colors">{social.name}</h3>
              <p className="text-sm text-muted-foreground">{social.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default SocialsSection;
