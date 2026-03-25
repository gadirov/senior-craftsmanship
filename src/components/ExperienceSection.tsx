import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Plane, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "International Bank of Azerbaijan",
    role: "Frontend Developer",
    period: "Apr 2024 – Present",
    icon: Building2,
    highlights: [
      "Proficiently collaborating based on Agile principles, utilizing React, TypeScript, and mock server unit testing to deliver quality results in Jira",
      "Building scalable frontend systems for enterprise banking platforms with clean architecture",
      "Integrated complex REST APIs and optimized frontend performance for high-traffic applications",
      "Implemented real-time data flows using WebSockets for transaction monitoring dashboards",
    ],
  },
  {
    company: "AZAL – National Aviation Academy",
    role: "Frontend Developer",
    period: "Apr 2022 – Apr 2024",
    icon: Plane,
    highlights: [
      "Developed responsive web applications using React, Chakra UI, JavaScript, and modern frontend tooling",
      "Integrated RESTful APIs for dynamic web applications with seamless data synchronization",
      "Collaborative team player with WordPress expertise, optimizing performance and implementing SEO best practices",
      "Improved UX performance and Core Web Vitals, resulting in measurable user engagement gains",
    ],
  },
  {
    company: "Caspel LLC",
    role: "Frontend Developer Intern",
    period: "May 2021 – Sep 2021",
    icon: Briefcase,
    highlights: [
      "Led the development of \"bookavid.com\", showcasing proficiency in HTML5, JavaScript, CSS3, and Bootstrap 4",
      "Built responsive layouts and interactive UI components for production web applications",
      "Collaborated with senior developers using Git version control and Agile workflows",
      "Gained foundational experience in frontend architecture and component-based development",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-gradient-subtle" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Where I've made impact
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * i }}
                className="relative sm:pl-16 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card"
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] top-8 w-3 h-3 rounded-full bg-primary border-2 border-background hidden sm:block" />

                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                    <exp.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-foreground">{exp.company}</h3>
                    <p className="text-sm text-muted-foreground">{exp.role} · {exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
