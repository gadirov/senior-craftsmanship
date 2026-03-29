import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const techCategories = [
  { category: "Core", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js"] },
  { category: "Styling", items: ["SASS/SCSS", "Tailwind CSS", "Styled Components"] },
  { category: "React Ecosystem", items: ["React Hooks", "React Router Dom", "Context API", "Redux", "Redux Toolkit"] },
  { category: "UI Frameworks", items: ["Chakra UI", "Ant Design", "Shadcn UI", "Hero UI"] },
  { category: "API & Backend", items: ["RESTful APIs", "Fetch API", "Axios", "WebSockets", "Express.js", "Mock Server"] },
  { category: "Auth & Security", items: ["Keycloak", "Authentication", "Authorization"] },
  { category: "Version Control", items: ["Git", "GitHub", "GitLab"] },
  { category: "Testing & QA", items: ["Unit Testing", "Integration Testing"] },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const containerY = useTransform(scrollYProgress, [0, 1], [50, -20]);

  return (
    <section className="section-padding bg-gradient-subtle overflow-hidden" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Tech Stack</p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-foreground"
            >
              Tools I work with
            </motion.h2>
          </div>
        </motion.div>

        <motion.div style={{ y: containerY }} className="space-y-6">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, filter: "blur(6px)" }}
              animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setActiveCategory(cat.category)}
              onHoverEnd={() => setActiveCategory(null)}
              whileHover={{ x: 8, transition: { duration: 0.3 } }}
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
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.08 * i + 0.04 * j, ease: "backOut" }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
