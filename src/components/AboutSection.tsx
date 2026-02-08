import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-12">01 — About</p>

          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-20">
            {/* Left column */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold leading-snug tracking-[-0.01em] mb-8">
                A Computer Science student building{" "}
                <span className="text-gradient">real-world AI systems</span> that matter.
              </h2>

              <div className="space-y-4 text-[15px] text-muted-foreground leading-[1.7]">
                <p>
                  Dev is a Computer Science student and AI-focused backend engineer who builds
                  real-world AI systems using LLMs, FastAPI, React, and Spring Boot. He is deeply
                  involved in open source, founded a developer community called Spring Nexus, and
                  has led events with 200+ developers.
                </p>
                <p>
                  He ranked AIR 11 in a Microsoft Hackathon and enjoys building systems that
                  combine AI with practical engineering. His work spans from intelligent operations
                  copilots to conversational AI agents and enterprise-grade backend systems.
                </p>
              </div>
            </div>

            {/* Right column - info cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="p-5 rounded-xl card-gradient border border-border"
              >
                <p className="text-[11px] text-dim font-mono mb-1.5 uppercase tracking-widest">Currently</p>
                <p className="text-foreground font-semibold text-[15px]">B.Tech in Computer Science</p>
                <p className="text-muted-foreground text-sm mt-0.5">KIET Group of Institutions · 2023–2027</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="p-5 rounded-xl card-gradient border border-border"
              >
                <p className="text-[11px] text-dim font-mono mb-3 uppercase tracking-widest">Focus Areas</p>
                <div className="flex flex-wrap gap-1.5">
                  {["AI Agents", "LLM Systems", "FastAPI", "Spring Boot", "Cloud + Docker", "Open Source"].map(
                    (area) => (
                      <span
                        key={area}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-primary/8 text-primary border border-primary/15"
                      >
                        {area}
                      </span>
                    )
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="p-5 rounded-xl card-gradient border border-border"
              >
                <p className="text-[11px] text-dim font-mono mb-1.5 uppercase tracking-widest">Community</p>
                <p className="text-foreground font-semibold text-[15px]">Founder, Spring Nexus</p>
                <p className="text-muted-foreground text-sm mt-0.5">200+ developers · Events & mentorship</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
