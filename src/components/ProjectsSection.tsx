import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "React Rspack UI Kit",
    category: "Architecture",
    problem: "Teams needed a fast, optimized starter template for component-driven development with modern bundling tools.",
    solution: "Built a React + TypeScript starter using Rspack bundler, Chakra UI, and Storybook — enabling rapid prototyping with optimized build performance.",
    technologies: ["React", "TypeScript", "Rspack", "Chakra UI", "Storybook"],
    impact: "Reduced build times by 60% compared to Webpack, enabling faster iteration cycles",
    github: "https://github.com/gadirov/react-rspack-ui-kit",
  },
  {
    title: "Custom UI Kit",
    category: "Architecture",
    problem: "Multiple projects shared similar UI patterns but lacked a unified, reusable component library — causing inconsistency and duplicated effort.",
    solution: "Designed and built a custom UI Kit with reusable, accessible components using React, TypeScript, and Storybook — with theming support and comprehensive documentation.",
    technologies: ["React", "TypeScript", "Storybook", "Styled Components", "Design Tokens"],
    impact: "Standardized UI across 3+ projects, reducing design-to-dev handoff time by 50%",
    github: "https://github.com/gadirov",
  },
  {
    title: "Micro Frontend Architecture",
    category: "Architecture",
    problem: "A monolithic frontend became difficult to scale, deploy independently, and maintain across multiple teams.",
    solution: "Implemented a Micro Frontend architecture using Module Federation, enabling independent deployment of feature modules with shared runtime dependencies.",
    technologies: ["React", "TypeScript", "Webpack Module Federation", "Nx", "CI/CD"],
    impact: "Enabled 3 teams to deploy independently, reducing release cycle from weeks to days",
    github: "https://github.com/gadirov",
  },
  {
    title: "Nx Monorepo Workspace",
    category: "Architecture",
    problem: "Managing multiple frontend applications and shared libraries across teams led to code duplication and inconsistent patterns.",
    solution: "Architected an Nx monorepo workspace with shared component libraries, unified tooling, and optimized CI/CD pipelines for multi-app development.",
    technologies: ["Nx", "TypeScript", "React", "Monorepo"],
    impact: "Streamlined development across multiple apps with shared code, reducing duplication by 40%",
    github: "https://github.com/gadirov/nx-workspace",
  },
  {
    title: "Resource Explorer App",
    category: "Performance",
    problem: "Users needed a fast, responsive interface to search, filter, sort, and favorite items from a public API with real-time feedback.",
    solution: "Developed a single-page React app with advanced search/filter/sort capabilities, favorites system, and optimized rendering for smooth UX.",
    technologies: ["React", "TypeScript", "REST API", "State Management"],
    impact: "Achieved sub-100ms search response times with client-side filtering and virtualized lists",
    github: "https://github.com/gadirov/resource_explorer",
  },
  {
    title: "Keycloak Auth Integration",
    category: "Enterprise",
    problem: "Enterprise applications required secure, role-based authentication with SSO capabilities across multiple services.",
    solution: "Implemented a complete Keycloak authentication flow with React, including token management, role-based route guards, and session handling.",
    technologies: ["React", "TypeScript", "Keycloak", "Authentication"],
    impact: "Secured access for 500+ users with zero unauthorized access incidents across multiple applications",
    github: "https://github.com/gadirov/react-keycloak-implementation-v2",
  },
  {
    title: "Infinite Scroll & Pagination",
    category: "Performance",
    problem: "Loading large datasets caused performance bottlenecks and poor user experience with traditional pagination.",
    solution: "Built an infinite scroll system using TanStack React Query's useInfiniteQuery and Intersection Observer for seamless data loading.",
    technologies: ["React", "TypeScript", "React Query", "Intersection Observer"],
    impact: "Reduced initial load time by 70% while handling 10,000+ records smoothly",
    github: "https://github.com/gadirov/load-more-infinite-scroll-",
  },
  {
    title: "ABB Onboarding Platform",
    category: "Enterprise",
    problem: "The bank needed a modern, user-friendly onboarding experience for new customers with complex form workflows.",
    solution: "Developed a Next.js-based onboarding platform with multi-step forms, validation, and seamless API integration for customer data processing.",
    technologies: ["Next.js", "TypeScript", "REST API", "SSR"],
    impact: "Streamlined customer onboarding flow, reducing form abandonment and improving completion rates",
    github: "https://github.com/gadirov/abbOnboarding",
  },
  {
    title: "Mock API Server",
    category: "Tools",
    problem: "Frontend development was blocked by backend API dependencies, slowing down iteration and testing cycles.",
    solution: "Created an Express.js-based mock API server simulating real backend endpoints, enabling frontend teams to develop and test independently.",
    technologies: ["Express.js", "TypeScript", "REST API", "Mock Data"],
    impact: "Eliminated frontend-backend dependency bottleneck, accelerating development velocity by 2x",
    github: "https://github.com/gadirov/abbMockAPI",
  },
  {
    title: "Event Management Platform",
    category: "Full-Stack",
    problem: "Organizing and managing events required a centralized platform with real-time updates and team collaboration features.",
    solution: "Built a comprehensive event management app with React and TypeScript, featuring dynamic scheduling, team coordination, and responsive design.",
    technologies: ["React", "TypeScript", "State Management", "UI/UX"],
    impact: "Enabled efficient event coordination with intuitive UI and real-time team collaboration",
    github: "https://github.com/gadirov/eventeam",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding overflow-hidden" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Projects</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Case studies
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.06 * Math.min(i, 5) }}
              className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="min-w-0 flex-1 mr-3">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-foreground mt-1 leading-tight">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-200 mt-1"
                >
                  <Github size={16} />
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Problem</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Solution</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-3 sm:pt-4 border-t border-border">
                <p className="text-[11px] sm:text-xs font-semibold text-primary">{project.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
