import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const techCategories = [
  {
    category: "Core",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js"],
  },
  {
    category: "Styling",
    items: ["SASS/SCSS", "Tailwind CSS", "Styled Components"],
  },
  {
    category: "React Ecosystem",
    items: ["React Hooks", "React Router Dom", "Context API", "Redux", "Redux Toolkit"],
  },
  {
    category: "UI Frameworks",
    items: ["Chakra UI", "Ant Design", "Shadcn UI", "Hero UI"],
  },
  {
    category: "API & Backend",
    items: ["RESTful APIs", "Fetch API", "Axios", "WebSockets", "Express.js", "Mock Server"],
  },
  {
    category: "Auth & Security",
    items: ["Keycloak", "Authentication", "Authorization"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    category: "Testing & QA",
    items: ["Unit Testing", "Integration Testing"],
  },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="section-padding bg-gradient-subtle" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Tech Stack</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Tools I work with
          </h2>
        </motion.div>

        <div className="space-y-6">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              onHoverStart={() => setActiveCategory(cat.category)}
              onHoverEnd={() => setActiveCategory(null)}
              className={`p-5 rounded-xl border transition-all duration-300 ${
                activeCategory === cat.category
                  ? "bg-card border-primary/30 shadow-elevated"
                  : "bg-card border-border shadow-card"
              }`}
            >
              <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.06 * i + 0.03 * j }}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
