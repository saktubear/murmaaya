import skinImg from "@/assets/skin.png";

const MinecraftSection = () => {
  return (
    <section id="minecraft" className="py-12 md:py-16 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">
        Minecraft Info
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Skin Card */}
        <div className="rounded-[2rem] bg-card p-8 flex flex-col items-center text-center animate-slide-up stagger-1">
          <img
            src={skinImg}
            alt="My Minecraft Skin"
            className="w-40 h-40 object-contain mb-6 image-rendering-pixelated"
            style={{ imageRendering: "pixelated" }}
          />
          <h3 className="text-2xl font-bold mb-2">IGN: Vimzo</h3>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-muted">SMP</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-muted">Mace</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-muted">Sword</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-muted">UHC</span>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Main Kits</p>
        </div>

        {/* PvP Tiers */}
        <div className="rounded-[2rem] bg-card p-8 animate-slide-up stagger-2">
          <h3 className="text-2xl font-bold mb-6">🏆 PvP Tiers</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
              <span className="font-medium">Diamond SMP</span>
              <span className="font-bold text-accent">HT5</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
              <span className="font-medium">SMP PvP</span>
              <span className="font-bold text-muted-foreground">N/A</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
              <span className="font-medium">Sword PvP</span>
              <span className="font-bold text-muted-foreground">N/A</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
              <span className="font-medium">Bow PvP</span>
              <span className="font-bold text-accent">HT5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftSection;
