import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">About</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Engineering for impact
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm Rufat Gadirov — a Frontend Developer with over 4 years of experience building 
              high-performance, scalable web applications for enterprise environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work spans <span className="text-foreground font-medium">banking systems</span> at the International Bank 
              of Azerbaijan and <span className="text-foreground font-medium">aviation platforms</span> at the National Aviation Academy, 
              where I delivered production-ready features in complex, high-stakes environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I focus on what matters: performance optimization, clean architecture, 
              and building interfaces that scale — both technically and for users.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Performance", desc: "Optimized load times and runtime efficiency" },
              { label: "Scalability", desc: "Architecture that grows with the product" },
              { label: "Clean Code", desc: "Maintainable, well-tested codebases" },
              { label: "User-First", desc: "Intuitive interfaces, seamless UX" },
            ].map((item, i) => (
              <div key={item.label} className="p-5 rounded-xl bg-card border border-border shadow-card">
                <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
