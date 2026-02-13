export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "001",
    title: "Redstone Mastery: From Basics to Brilliance",
    subtitle: "Learn how to build incredible redstone contraptions step by step",
    category: "Redstone",
    date: "Oct 16, 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=1920&q=80",
    author: {
      name: "BlockMaster Dave",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Redstone engineer and Minecraft technical expert",
    },
    content: {
      introduction: "Redstone is the electrical wiring of Minecraft — a powerful system that lets you build anything from simple doors to full computers. Whether you're new to redstone or looking to level up, this guide will walk you through the essentials and beyond.",
      sections: [
        {
          heading: "Understanding Redstone Signals",
          content: "Redstone dust carries a signal up to 15 blocks. Repeaters extend the signal, comparators measure it, and torches invert it. Understanding signal strength is the foundation of every redstone build. Place a lever or button to create a signal source, then watch how it travels through dust.",
        },
        {
          heading: "Essential Components",
          content: "Key components include pistons (push blocks), hoppers (move items), observers (detect changes), and dispensers (shoot items). Each has unique behaviors — sticky pistons pull blocks back, while regular pistons just push. Combining these creates complex machines.",
        },
        {
          heading: "Your First Contraption: Auto Door",
          content: "Start with a 2x2 piston door. Place four sticky pistons facing inward with blocks on their faces. Wire redstone beneath the floor to a pressure plate or button. When activated, the pistons retract, opening the door. It's simple but teaches signal routing fundamentals.",
        },
        {
          heading: "Advanced: Item Sorters",
          content: "Item sorters use hoppers and comparators to automatically organize your chests. Each sorting column filters one item type using a hopper with the target item and filler items. This is essential for any serious survival base and saves countless hours of manual sorting.",
        },
      ],
      conclusion: "Redstone mastery comes with experimentation. Don't be afraid to break things — that's how you learn. Start small, build up, and soon you'll be creating machines that amaze even veteran players.",
    },
    tags: ["redstone", "tutorial", "automation", "builds"],
  },
  {
    id: "002",
    title: "Surviving Your First Night: A Beginner's Guide",
    subtitle: "Everything you need to know to make it through day one",
    category: "Survival",
    date: "Oct 23, 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1920&q=80",
    author: {
      name: "CraftQueen Sofia",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      bio: "Minecraft survival specialist and content creator",
    },
    content: {
      introduction: "Your first night in Minecraft can be terrifying — zombies, skeletons, and creepers lurk in the darkness. But with the right strategy, you can not only survive but thrive. Here's your complete guide to conquering day one.",
      sections: [
        {
          heading: "Punch Trees, Get Wood",
          content: "The moment you spawn, start punching trees. You need at least 10-15 logs before anything else. Craft these into planks, then make a crafting table. From there, craft wooden tools: a pickaxe first, then a sword and axe. Speed is essential — you have about 10 minutes of daylight.",
        },
        {
          heading: "Find Shelter Fast",
          content: "Dig into a hillside or build a small 5x5 dirt house. The key is having walls, a roof, and a door before nightfall. Place torches inside (craft from sticks and coal or charcoal) to prevent mob spawns. A bed made from wool and planks lets you skip the night entirely.",
        },
        {
          heading: "Food and Health",
          content: "Kill animals for food — pigs, cows, and chickens drop raw meat. Cook it in a furnace for better hunger restoration. Your hunger bar affects health regeneration, so keeping it full is crucial. Wheat from village farms or seeds from grass are early renewable food sources.",
        },
        {
          heading: "Setting Up for Day Two",
          content: "Once you survive the night, focus on mining. Dig down to find iron ore (around Y level 16-64) and coal. Iron tools and armor are a massive upgrade. Build a proper base with storage chests, a furnace room, and start planning your mine. The adventure truly begins now.",
        },
      ],
      conclusion: "Every Minecraft veteran started exactly where you are now. The first night is a rite of passage. Once you've conquered it, a world of endless possibilities opens up. Welcome to the game — now go build something amazing.",
    },
    tags: ["survival", "beginner", "tutorial", "tips"],
  },
  {
    id: "003",
    title: "Epic Build Ideas: Medieval Castle Guide",
    subtitle: "Design and construct a stunning medieval fortress",
    category: "Builds",
    date: "Dec 4, 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1533154683220-796cb7fd02c2?w=1920&q=80",
    author: {
      name: "ArchitectMC Marcus",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Minecraft builder and architectural design enthusiast",
    },
    content: {
      introduction: "Building a medieval castle is one of Minecraft's greatest pleasures. It combines creativity, planning, and engineering into a project that can take hours or weeks. This guide covers everything from choosing your location to adding the final decorative touches.",
      sections: [
        {
          heading: "Choosing Your Location",
          content: "A great castle needs a great location. Hilltops provide natural defense and dramatic views. River bends create natural moats. Consider the biome too — dark oak forests give a brooding atmosphere, while plains offer visibility. Mark your foundation with wool blocks before committing.",
        },
        {
          heading: "Walls and Towers",
          content: "Use stone bricks as your primary material with cobblestone for texture variation. Walls should be at least 3 blocks thick for realism. Corner towers should be round (use circle charts) and taller than the walls. Add battlements (crenellations) along the top using stairs and slabs.",
        },
        {
          heading: "The Great Hall",
          content: "Every castle needs a grand interior space. Build a great hall with high ceilings (at least 6-8 blocks), large windows using glass panes, and a long dining table made from fence posts and pressure plates. Add banners on the walls and chandeliers from fences and torches.",
        },
        {
          heading: "Details That Matter",
          content: "Details transform a box into a castle. Add arrow slits using signs or iron bars, wooden beams across ceilings with dark oak logs, market stalls in the courtyard, and a working drawbridge with sticky pistons. Don't forget a dungeon, armory, and throne room for roleplay potential.",
        },
      ],
      conclusion: "A medieval castle is more than a building — it's a statement. Take your time with it, iterate on your design, and don't be afraid to tear down sections that don't look right. The best builds evolve over time. Share your creation with friends and make it the heart of your world.",
    },
    tags: ["builds", "medieval", "castle", "architecture"],
  },
  {
    id: "W001",
    title: "Ultimate Survival Base: Tips for Long-Term Play",
    subtitle: "Build an efficient and beautiful survival headquarters",
    category: "Survival",
    date: "Mar 19, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80",
    author: {
      name: "SurvivalPro Emma",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      bio: "Hardcore Minecraft survival player and guide writer",
    },
    content: {
      introduction: "After surviving your first few nights, it's time to think bigger. A long-term survival base needs farms, storage, enchanting, and defenses. Here's how to build a base that supports hundreds of hours of gameplay.",
      sections: [
        {
          heading: "Crop and Animal Farms",
          content: "Automated wheat, carrot, and potato farms ensure you never go hungry. Use water channels and hoppers to collect crops automatically. For animals, build separate pens for cows, pigs, chickens, and sheep. Breed them regularly for a steady food and resource supply.",
        },
        {
          heading: "Storage System",
          content: "Organize chests by category: building blocks, ores, food, tools, redstone, and miscellaneous. Label them with item frames. As you advance, build an auto-sorting system with hoppers. A well-organized storage room saves hours of searching and makes crafting efficient.",
        },
        {
          heading: "Enchanting and Brewing",
          content: "Set up an enchanting room with 15 bookshelves arranged around an enchanting table. Keep a grindstone nearby for removing bad enchantments. A brewing station with a Nether wart farm lets you create potions for combat, mining, and exploration. These are game-changers for progression.",
        },
        {
          heading: "Perimeter Defense",
          content: "Light up a wide area around your base (at least 128 blocks) to prevent mob spawns. Build walls or fences with gates. Iron golems patrol your village. For advanced defense, create arrow-dispensing turrets or lava traps at entry points. Your base should be a fortress.",
        },
        {
          heading: "Aesthetic Touches",
          content: "Function meets form. Add gardens with flowers and custom trees. Build pathways with different stone types. Use lanterns instead of torches for ambiance. Create a lookout tower with panoramic views. A beautiful base motivates you to keep playing and exploring.",
        },
      ],
      conclusion: "Your survival base is your home in the Minecraft world. Invest time in making it both functional and beautiful. The best bases grow organically — start with essentials and add features as you progress. Every improvement makes your Minecraft experience richer.",
    },
    tags: ["survival", "base building", "farms", "automation"],
  },
  {
    id: "T001",
    title: "Exploring the Nether: A Complete Guide",
    subtitle: "Navigate the dangerous dimension and find its treasures",
    category: "Builds",
    date: "Mar 15, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1461696114087-397271a7aedc?w=1920&q=80",
    author: {
      name: "ArchitectMC Marcus",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Nether explorer and Minecraft dimension specialist",
    },
    content: {
      introduction: "The Nether is Minecraft's hellish dimension — filled with lava, hostile mobs, and rare resources. But it's also essential for progression. From blaze rods to ancient debris, the Nether holds treasures you can't find anywhere else. Here's how to conquer it.",
      sections: [
        {
          heading: "Portal Setup and Strategy",
          content: "Build your Nether portal with obsidian (at least 4x5 frame) and light it with flint and steel. Before entering, gear up with iron or diamond armor, bring plenty of food, blocks for bridging, and a flint and steel backup. Coordinates in the Nether are 1:8 ratio to the Overworld — use this for fast travel.",
        },
        {
          heading: "Nether Biomes and Resources",
          content: "The 1.16 update added diverse Nether biomes: Crimson and Warped Forests (wood sources), Soul Sand Valleys (soul soil, skeletons), Basalt Deltas (magma cubes), and the classic Nether Wastes. Each has unique blocks and mobs. Warped forests are the safest — endermen don't attack unprovoked.",
        },
        {
          heading: "Finding Nether Fortresses",
          content: "Nether Fortresses contain blaze spawners and wither skeletons — both essential for endgame progression. They tend to generate along the Z-axis (north-south). Travel east or west to find them. Once located, light it up with torches and create safe pathways. Farm blazes for blaze rods.",
        },
        {
          heading: "Bastion Remnants and Piglins",
          content: "Bastions are massive Piglin structures with amazing loot including netherite scraps, gold, and enchanted gear. Wear gold armor to avoid Piglin aggro. Barter with them by dropping gold ingots for valuable trades like ender pearls, fire resistance potions, and crying obsidian.",
        },
        {
          heading: "Mining Netherite",
          content: "Ancient debris spawns at Y levels 8-22, most commonly at Y=15. Use beds (they explode in the Nether!) or TNT to strip mine efficiently. Smelt ancient debris into netherite scraps, combine 4 with 4 gold ingots for a netherite ingot. Upgrade diamond gear at a smithing table for the best equipment in the game.",
        },
      ],
      conclusion: "The Nether is intimidating but incredibly rewarding. With proper preparation and knowledge, it transforms from a death trap into a resource goldmine. Master the Nether, and you're well on your way to defeating the Ender Dragon.",
    },
    tags: ["nether", "exploration", "netherite", "guide"],
  },
  {
    id: "G001",
    title: "Minecraft Server Setup: Play with Friends",
    subtitle: "Create and manage your own multiplayer world",
    category: "Community",
    date: "Mar 10, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=80",
    author: {
      name: "BlockMaster Dave",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Server admin and Minecraft community builder",
    },
    content: {
      introduction: "Minecraft is amazing solo, but it truly shines with friends. Whether you want a small private world or a large community server, setting up multiplayer is easier than you think. Here's your complete guide to playing Minecraft with others.",
      sections: [
        {
          heading: "Choosing Your Server Type",
          content: "You have several options: Realms (official, easy, subscription-based), self-hosted servers (free, more control), or third-party hosting (Aternos, Shockbyte, etc.). For small friend groups, Realms is the simplest. For larger communities or modded play, a dedicated server gives more flexibility.",
        },
        {
          heading: "Setting Up a Server",
          content: "Download the server JAR from minecraft.net. Create a dedicated folder, run the JAR file, accept the EULA, and configure server.properties (gamemode, difficulty, max players, etc.). Port forward 25565 on your router or use a service like Ngrok for easy access without port forwarding.",
        },
        {
          heading: "Essential Plugins and Mods",
          content: "For Paper/Spigot servers, essential plugins include EssentialsX (commands and economy), WorldGuard (region protection), LuckPerms (permissions), and CoreProtect (grief rollback). These keep your server safe and fun. For modded servers, use Forge or Fabric with popular modpacks.",
        },
        {
          heading: "Community Building",
          content: "A great server needs more than good software — it needs a community. Set clear rules, create a Discord server for communication, plan events like build competitions or PvP tournaments, and designate community areas. Welcome new players and reward regular contributors.",
        },
        {
          heading: "Performance and Maintenance",
          content: "Keep your server running smoothly: limit render distance to 10-12 chunks, pregen chunks in explored areas, schedule regular restarts, and monitor TPS (ticks per second). Back up your world regularly. A lag-free server keeps players coming back.",
        },
      ],
      conclusion: "Running a Minecraft server is one of the most rewarding experiences in gaming. You're not just playing a game — you're creating a world where memories are made. Start small, grow organically, and enjoy the journey of building a community together.",
    },
    tags: ["multiplayer", "server", "community", "hosting"],
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getRelatedArticles(currentId: string, limit: number = 3): Article[] {
  const currentArticle = getArticleById(currentId);
  if (!currentArticle) return articles.slice(0, limit);
  
  const related = articles.filter(
    article => article.id !== currentId && article.category === currentArticle.category
  );
  
  if (related.length < limit) {
    const others = articles.filter(
      article => article.id !== currentId && article.category !== currentArticle.category
    );
    return [...related, ...others].slice(0, limit);
  }
  
  return related.slice(0, limit);
}
