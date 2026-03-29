import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const cardY = useTransform(scrollYProgress, [0, 1], [120, -30]);

  return (
    <section id="about" className="section-padding overflow-hidden" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">About</p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8"
            >
              Engineering for impact
            </motion.h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div style={{ y }} className="space-y-5">
            {[
              <>I'm Rufat Gadirov — a Frontend Developer with over 4 years of experience building high-performance, scalable web applications for enterprise environments.</>,
              <>My work spans <span className="text-foreground font-medium">banking systems</span> at the International Bank of Azerbaijan and <span className="text-foreground font-medium">aviation platforms</span> at the National Aviation Academy, where I delivered production-ready features in complex, high-stakes environments.</>,
              <>I focus on what matters: performance optimization, clean architecture, and building interfaces that scale — both technically and for users.</>,
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
                animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-muted-foreground leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div style={{ y: cardY }} className="grid grid-cols-2 gap-4">
            {[
              { label: "Performance", desc: "Optimized load times and runtime efficiency" },
              { label: "Scalability", desc: "Architecture that grows with the product" },
              { label: "Clean Code", desc: "Maintainable, well-tested codebases" },
              { label: "User-First", desc: "Intuitive interfaces, seamless UX" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-5 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
