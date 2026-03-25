import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Real-Time Notification System",
    category: "WebSocket",
    problem: "Banking platform lacked real-time transaction alerts, leading to delayed user responses and poor engagement.",
    solution: "Engineered a WebSocket-based notification system with React, delivering instant push alerts with graceful fallback mechanisms.",
    technologies: ["React", "TypeScript", "WebSocket", "Redux Toolkit"],
    impact: "Reduced notification latency by 95%, increased user engagement by 40%",
  },
  {
    title: "Role-Based Admin Dashboard",
    category: "Enterprise",
    problem: "Complex permission management across departments required a flexible, secure dashboard solution.",
    solution: "Built a comprehensive role-based dashboard with Keycloak integration, dynamic route guards, and granular permission controls.",
    technologies: ["React", "TypeScript", "Keycloak", "Ant Design"],
    impact: "Managed 500+ users across 8 departments with zero unauthorized access incidents",
  },
  {
    title: "Enterprise Admin Panel",
    category: "Enterprise",
    problem: "Legacy admin tools were slow, fragmented, and required significant training for new operators.",
    solution: "Designed and developed a modern admin panel with data tables, real-time charts, and batch operations — reducing operator training time significantly.",
    technologies: ["React", "TypeScript", "Ant Design", "REST API"],
    impact: "Cut operator onboarding time by 60%, improved data processing speed by 3x",
  },
  {
    title: "Performance-Optimized Aviation Portal",
    category: "Performance",
    problem: "Aviation academy's web portal had poor Core Web Vitals and slow page loads affecting student access.",
    solution: "Rebuilt the frontend with code splitting, lazy loading, image optimization, and SSR-ready architecture.",
    technologies: ["React", "Chakra UI", "React Query", "SEO"],
    impact: "Achieved 95+ Lighthouse score, reduced initial load time by 70%",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Projects</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Case studies
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1">{project.title}</h3>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-200 mt-1"
                />
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Solution</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs font-semibold text-primary">{project.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
