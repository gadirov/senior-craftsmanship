import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Plane } from "lucide-react";

const experiences = [
  {
    company: "International Bank of Azerbaijan",
    role: "Frontend Developer",
    period: "2021 – Present",
    icon: Building2,
    highlights: [
      "Built scalable frontend systems using React & TypeScript for enterprise banking platforms",
      "Collaborated in Agile teams to deliver production-ready features on tight deadlines",
      "Integrated complex REST APIs and optimized frontend performance for high-traffic applications",
      "Implemented real-time data flows using WebSockets for transaction monitoring",
    ],
  },
  {
    company: "National Aviation Academy (AZAL)",
    role: "Frontend Developer",
    period: "2020 – 2021",
    icon: Plane,
    highlights: [
      "Developed responsive web applications using React & Chakra UI for aviation systems",
      "Integrated REST APIs and ensured seamless data synchronization across platforms",
      "Improved UX performance and SEO metrics, resulting in measurable user engagement gains",
      "Collaborated with backend teams to design efficient data contracts and API schemas",
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

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card"
            >
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
    </section>
  );
};

export default ExperienceSection;
