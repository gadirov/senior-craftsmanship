import { motion, useInView } from "framer-motion";
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

  return (
    <section id="skills" className="section-padding overflow-hidden" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Skills</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Technical expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="font-display text-sm font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
