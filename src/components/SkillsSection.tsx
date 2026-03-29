import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript"] },
  { title: "Styling", skills: ["Tailwind CSS", "SCSS", "Styled Components", "Chakra UI"] },
  { title: "State & Data", skills: ["Redux Toolkit", "React Query", "REST APIs", "WebSockets"] },
  { title: "Tools & DevOps", skills: ["Git", "GitHub", "GitLab", "Keycloak"] },
  { title: "Testing", skills: ["Unit Testing", "Integration Testing", "Jest", "React Testing Library"] },
  { title: "Architecture", skills: ["Component Design", "Clean Architecture", "Performance Optimization", "SEO"] },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [60, -30]);

  return (
    <section id="skills" className="section-padding overflow-hidden" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Skills</p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12"
            >
              Technical expertise
            </motion.h2>
          </div>
        </motion.div>

        <motion.div style={{ y: gridY }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="font-display text-sm font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.08 * i + 0.05 * j, ease: "backOut" }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground cursor-default"
                  >
                    {skill}
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

export default SkillsSection;
