import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs text-primary font-medium tracking-wide">Open to opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-[-0.02em] mb-8"
          >
            Dev Mishra,
            <br />
            <span className="text-gradient">AI Engineer</span> who builds
            <br />
            systems that{" "}
            <span className="text-gradient">solve real problems</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-[15px] text-muted-foreground tracking-wide mb-3"
          >
            AI Engineer · Backend Developer · Open Source Contributor
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-sm text-dim max-w-md mb-12 leading-relaxed"
          >
            I build AI systems, developer tools, and scalable backends that solve real engineering problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              View Projects
            </a>
            <a
              href="https://github.com/dev-m03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border/80 text-foreground font-medium text-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/dev-m03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border/80 text-foreground font-medium text-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-6 lg:left-10 flex items-center gap-2.5 text-dim"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll to explore</span>
          <ArrowDown size={12} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
