import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Wellness = () => {
  const survivalArticles = articles.filter(article => 
    article.category.toLowerCase() === "survival"
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Survival Guides
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Master the art of Minecraft survival. From your first night to endgame progression, 
            learn strategies for farming, mining, building, and thriving in any world.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {survivalArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Survival Mode?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Survival mode is the heart of Minecraft. It challenges you to gather resources, build shelter, 
                and overcome increasingly difficult obstacles — all while expressing your creativity.
              </p>
              <p>
                Whether you play on Peaceful or Hardcore, survival mode teaches planning, resource management, 
                and creative problem-solving. Every world is unique, and every playthrough tells a different story.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Wellness;
