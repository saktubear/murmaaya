const IntroSection = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up">
          About Me
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
          Yo 👋 I'm Saktu. I love to play Minecraft, especially PvP. This site is my personal corner of the internet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="rounded-2xl bg-card p-6 text-center animate-slide-up stagger-2">
          <span className="text-2xl mb-3 block">🎮</span>
          <h3 className="font-bold text-lg mb-1">Main Game</h3>
          <p className="text-muted-foreground">Minecraft</p>
        </div>
        <div className="rounded-2xl bg-card p-6 text-center animate-slide-up stagger-3">
          <span className="text-2xl mb-3 block">💻</span>
          <h3 className="font-bold text-lg mb-1">Ingame-Name</h3>
          <p className="text-muted-foreground">Vimzo</p>
        </div>
        <div className="rounded-2xl bg-card p-6 text-center animate-slide-up stagger-4">
          <span className="text-2xl mb-3 block">⚔️</span>
          <h3 className="font-bold text-lg mb-1">Focus</h3>
          <p className="text-muted-foreground">Sword PvP + SMP PvP</p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
