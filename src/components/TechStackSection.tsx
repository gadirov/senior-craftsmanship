import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Next.js", icon: "▲" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Redux", icon: "🔄" },
  { name: "Git", icon: "🔀" },
  { name: "WebSocket", icon: "🔌" },
  { name: "REST API", icon: "🌐" },
  { name: "SCSS", icon: "💅" },
  { name: "Keycloak", icon: "🔐" },
  { name: "Chakra UI", icon: "⚡" },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="text-2xl mb-2">{tech.icon}</span>
              <span className="text-xs font-medium text-foreground">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
