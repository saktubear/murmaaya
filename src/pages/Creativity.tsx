import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Creativity = () => {
  const redstoneArticles = articles.filter(article => 
    article.category.toLowerCase() === "redstone"
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Redstone Engineering
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Dive into the world of redstone — Minecraft's version of electrical engineering. 
            Learn to build everything from simple doors to complex computing machines.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {redstoneArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Power of Redstone</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Redstone is what makes Minecraft a true sandbox. With it, you can automate farms, 
                build secret doors, create minigames, and even construct working calculators. 
                It's programming with blocks.
              </p>
              <p>
                Our redstone guides start from the basics — signals, repeaters, and comparators — 
                and build up to advanced concepts like T-flip-flops, BUD switches, and item sorters. 
                Whether you're a beginner or a seasoned engineer, there's always something new to learn.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Creativity;
