const IntroSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up">
          Saktu is your space for mastering Minecraft — from survival tips and redstone builds to server guides and community creations.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
          Whether you're a beginner learning to survive your first night or a veteran designing 
          massive redstone machines, we've got guides, tips, and inspiration for every player.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
