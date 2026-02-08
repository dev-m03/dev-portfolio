import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Cloud } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "AIR 11 — Microsoft Hackathon",
    subtitle: "All India Rank",
    description: "Ranked 11th across India in a national-level Microsoft Hackathon, competing against thousands of developers.",
    accent: true,
  },
  {
    icon: Cloud,
    title: "AWS Certified Cloud Practitioner",
    subtitle: "Amazon Web Services",
    description: "Certified in cloud fundamentals, architecture, and AWS services for scalable systems.",
    accent: false,
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-4">04 — Achievements</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold tracking-[-0.01em]">
            Recognition & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className={`relative p-6 rounded-xl border overflow-hidden ${
                  item.accent
                    ? "card-gradient border-primary/25 glow-border"
                    : "card-gradient border-border"
                }`}
              >
                {item.accent && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                )}
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.accent
                        ? "bg-primary/10 border border-primary/25"
                        : "bg-secondary border border-border"
                    }`}
                  >
                    <Icon size={20} className={item.accent ? "text-primary" : "text-muted-foreground"} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-dim mb-1 uppercase tracking-widest">{item.subtitle}</p>
                    <h3 className="text-[15px] font-bold mb-1.5 leading-snug">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
