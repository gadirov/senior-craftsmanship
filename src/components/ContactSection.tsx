import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "rufat.gadirov@email.com",
    href: "mailto:rufat.gadirov@email.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rufatgadirov",
    href: "https://linkedin.com/in/rufatgadirov",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/rufatgadirov",
    href: "https://github.com/rufatgadirov",
    icon: Github,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's work together
          </h2>
          <p className="text-muted-foreground mb-12">
            I'm open to senior frontend roles, consulting, and interesting projects. Let's talk.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto space-y-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group flex items-center justify-between p-5 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <link.icon size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{link.label}</div>
                  <div className="text-xs text-muted-foreground">{link.value}</div>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground group-hover:text-primary transition-colors duration-200"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
