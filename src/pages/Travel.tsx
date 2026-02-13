import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Travel = () => {
  const buildArticles = articles.filter(article => 
    article.category.toLowerCase() === "builds"
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Build Ideas & Tutorials
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Get inspired with epic build ideas, step-by-step construction guides, and architectural tips. 
            From medieval castles to modern mansions, take your builds to the next level.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Building Philosophy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Building in Minecraft is an art form. Every block placement is a creative choice, and the 
                possibilities are literally infinite. We believe great builds come from understanding both 
                aesthetics and functionality.
              </p>
              <p>
                Our guides cover everything from basic house designs to massive megastructures. 
                Whether you build in Creative or Survival, we'll help you develop your own style 
                and create structures you're proud of.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Travel;
