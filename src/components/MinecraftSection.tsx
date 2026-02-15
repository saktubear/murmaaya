import { motion } from "framer-motion";
import { ReactSkinview3d } from "react-skinview3d";
import { WalkingAnimation } from "skinview3d";
import panCape from "@/assets/pan-cape.png";

const tiers = [
  { mode: "Diamond SMP", rank: "HT5", active: true },
  { mode: "SMP PvP", rank: "N/A", active: false },
  { mode: "Sword PvP", rank: "N/A", active: false },
  { mode: "Bow PvP", rank: "HT5", active: true },
];

const MinecraftSection = () => {
  return (
    <section id="minecraft" className="py-12 md:py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Minecraft Stats
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          className="rounded-[2rem] bg-gradient-to-br from-[hsl(45_30%_97%)] to-[hsl(35_25%_92%)] dark:from-card dark:to-card border border-border/40 p-8 flex flex-col items-center text-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          whileHover={{ y: -5 }}
        >
          <div className="w-48 h-64 mb-6">
            <ReactSkinview3d
              skinUrl="https://minotar.net/skin/Vorz_"
              capeUrl={panCape}
              height={256}
              width={192}
              onReady={({ viewer }) => {
                viewer.animation = new WalkingAnimation();
                viewer.autoRotate = true;
                viewer.autoRotateSpeed = 1.5;
                viewer.zoom = 0.9;
                viewer.background = null as any;
              }}
              className="rounded-xl"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">Vortz_</h3>
          <p className="text-sm text-muted-foreground mb-4">Main account since day one</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["SMP", "Mace", "Sword", "UHC"].map((kit, i) => (
              <motion.span
                key={kit}
                className="px-4 py-2 rounded-full text-sm font-medium bg-muted"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                {kit}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-[2rem] bg-gradient-to-br from-[hsl(30_28%_97%)] to-[hsl(20_22%_92%)] dark:from-card dark:to-card border border-border/40 p-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          whileHover={{ y: -5 }}
        >
          <h3 className="text-2xl font-bold mb-6">🏆 PvP Rankings</h3>
          <div className="space-y-4">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.mode}
                className="flex items-center justify-between p-4 rounded-xl bg-muted"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <span className="font-medium">{tier.mode}</span>
                <span className={`font-bold ${tier.active ? "text-accent-foreground" : "text-muted-foreground"}`}>
                  {tier.rank}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MinecraftSection;
