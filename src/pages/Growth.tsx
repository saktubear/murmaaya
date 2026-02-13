import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Growth = () => {
  const communityArticles = articles.filter(article => 
    article.category.toLowerCase() === "community"
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Community & Multiplayer
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Minecraft is better together. Explore server guides, community events, multiplayer tips, 
            and ways to connect with fellow players around the world.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Building Community</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Minecraft community is one of the largest and most creative gaming communities in the world. 
                From small friend groups to massive public servers, multiplayer adds a whole new dimension to the game.
              </p>
              <p>
                We cover server setup, plugin recommendations, event planning, and tips for creating 
                welcoming spaces where players can collaborate, compete, and create together.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Growth;
