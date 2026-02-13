import Header from "@/components/Header";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About Saktu
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Your go-to source for Minecraft guides, builds, and community content.
          </p>
        </div>

        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p>
            Saktu started with a simple idea: create the best Minecraft resource hub for players of all skill levels — 
            from first-night survivors to veteran redstone engineers.
          </p>
          <p>
            We noticed that great Minecraft knowledge was scattered across countless videos and forums. 
            Saktu brings it all together in well-crafted, easy-to-follow guides that help you master every 
            aspect of the game.
          </p>
          <p>
            Whether you're looking for survival tips, build inspiration, redstone tutorials, or server setup guides, 
            Saktu has you covered. We're players first, writers second — and that passion shows in every article.
          </p>
        </section>

        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We believe Minecraft is more than a game — it's a platform for creativity, learning, and community. 
              Saktu is dedicated to helping players:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1">⛏️</span>
                <span>Master survival mechanics and thrive in any world</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">🏗️</span>
                <span>Build incredible structures from castles to modern cities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">🔴</span>
                <span>Understand redstone and create amazing contraptions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">👥</span>
                <span>Connect with the Minecraft community and play together</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Accuracy</h3>
              <p className="text-muted-foreground">
                Every guide is tested in-game. We verify mechanics, coordinates, and strategies before publishing.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-muted-foreground">
                Our content is written for all skill levels. Beginners and experts alike will find value here.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground">
                We celebrate the Minecraft community and welcome contributions from players worldwide.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Up-to-Date</h3>
              <p className="text-muted-foreground">
                We keep guides current with the latest Minecraft updates, snapshots, and version changes.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to get the latest Minecraft guides and tips delivered to your inbox.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            <Mail className="mr-2 h-4 w-4" />
            Subscribe Now
          </Button>
        </section>
      </main>
    </div>
  );
};

export default About;
