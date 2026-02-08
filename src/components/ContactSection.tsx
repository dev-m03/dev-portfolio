import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "dev.m01113@gmail.com",
    href: "mailto:dev.m01113@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/dev-m03",
    href: "https://github.com/dev-m03",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dev-m03",
    href: "https://linkedin.com/in/dev-m03",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-4">06 — Contact</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold tracking-[-0.01em] mb-3">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Interested in collaborating on AI systems, open source, or backend engineering? Let's talk.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-5 rounded-xl card-gradient border border-border hover:border-primary/25 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-dim group-hover:text-primary transition-colors duration-200"
                  />
                </div>
                <p className="text-[10px] font-mono text-dim mb-1 uppercase tracking-widest">{link.label}</p>
                <p className="text-sm text-foreground font-medium truncate">{link.value}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
