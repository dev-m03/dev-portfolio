import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "Spring Security", "FastAPI", "LangChain", "Hibernate"],
  },
  {
    title: "AI / LLM",
    skills: ["Prompt Engineering", "Agentic Workflows", "Context Management", "RCA Generation"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "Material UI"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Docker", "Git", "Maven", "Postman", "GCP", "Supabase"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Redis"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-4">05 — Skills</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold tracking-[-0.01em]">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: catIndex * 0.06 }}
              className="p-5 rounded-xl card-gradient border border-border"
            >
              <h3 className="text-[11px] font-mono text-primary mb-3.5 tracking-widest uppercase">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-[12px] bg-secondary/80 text-secondary-foreground border border-border/60 hover:border-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
