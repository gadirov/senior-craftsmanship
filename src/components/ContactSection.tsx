import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", value: "rufat.gadirov@email.com", href: "mailto:rufat.gadirov@email.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/rufat-gadirov", href: "https://linkedin.com/in/rufat-gadirov-427710221", icon: Linkedin },
  { label: "GitHub", value: "github.com/gadirov", href: "https://github.com/gadirov", icon: Github },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -20]);

  return (
    <section id="contact" className="section-padding overflow-hidden" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Contact</p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Let's work together
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-muted-foreground mb-12"
          >
            I'm open to senior frontend roles, consulting, and interesting projects. Let's talk.
          </motion.p>
        </motion.div>

        <motion.div style={{ y }} className="max-w-xl mx-auto space-y-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
              animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i + 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 10, scale: 1.02, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between p-5 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary"
                >
                  <link.icon size={18} />
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{link.label}</div>
                  <div className="text-xs text-muted-foreground">{link.value}</div>
                </div>
              </div>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
