import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, GitBranch, Mic, Award } from "lucide-react";

const communityItems = [
  {
    icon: Users,
    title: "FOSSCU Core Member",
    description: "Active core member at FOSSCU, driving open source collaboration and developer advocacy.",
  },
  {
    icon: GitBranch,
    title: "db2rest Contributor",
    description: "Contributing to the db2rest organization, building tools that simplify developer workflows.",
  },
  {
    icon: Mic,
    title: "Spring Nexus Founder",
    description: "Founded a Java & Spring Boot community focused on hands-on learning and real projects.",
  },
  {
    icon: Award,
    title: "Event Organizer & Mentor",
    description: "Organized events with 200+ attendees and mentored developers in technical growth.",
  },
];

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="community" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-4">03 — Community</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold tracking-[-0.01em]">
            Open Source & <span className="text-gradient">Community</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {communityItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="text-[15px] font-semibold mb-1.5">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
