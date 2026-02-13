const SocialsSection = () => {
  const socials = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@saktu_bear",
      emoji: "🎬",
      description: "@saktu_bear",
    },
    {
      name: "Discord",
      url: "https://discord.gg/dEbR7TyMSj",
      emoji: "💬",
      description: "Join the server",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_saktu_/",
      emoji: "📸",
      description: "@_saktu_",
    },
    {
      name: "NameMC",
      url: "https://namemc.com/profile/Vimzo.2",
      emoji: "🎮",
      description: "Vimzo",
    },
  ];

  return (
    <section id="socials" className="py-12 md:py-16 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">
        Social Links
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {socials.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-2xl bg-card p-6 text-center hover:scale-105 transition-all duration-300 card-hover animate-slide-up stagger-${Math.min(index + 1, 6)}`}
          >
            <span className="text-3xl block mb-3">{social.emoji}</span>
            <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">{social.name}</h3>
            <p className="text-sm text-muted-foreground">{social.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialsSection;
