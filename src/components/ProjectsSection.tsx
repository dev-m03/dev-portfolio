import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  github?: string;
}

const projects: Project[] = [
  {
    title: "AI Ops Copilot",
    description:
      "AI-powered operations copilot for log ingestion, incident analysis, and automated Root Cause Analysis using LLMs.",
    techStack: ["FastAPI", "React", "TypeScript", "Supabase", "Docker", "Cloud"],
    highlights: [
      "Incident memory & structured RCA insights",
      "Secure API architecture",
      "LLM-powered log analysis",
    ],
    github: "https://github.com/dev-m03/AI-Ops-Copilot",
  },
  {
    title: "AI Appointment Agent",
    description:
      "Conversational AI agent that books appointments via Google Calendar with intelligent context management.",
    techStack: ["FastAPI", "LangChain", "Streamlit", "Gemini API"],
    highlights: [
      "Context-aware conversation management",
      "Booking deduplication logic",
      "Google Calendar integration",
    ],
    github: "https://github.com/dev-m03/AI-Agent-FullStack",
  },
  {
    title: "Learning Management System",
    description:
      "Full-featured LMS platform with authentication, role management, and normalized database design.",
    techStack: ["Spring Boot", "PostgreSQL", "Spring Security"],
    highlights: [
      "Role-based access control",
      "Normalized DB schema design",
      "Enterprise-grade security",
    ],
    github: "https://github.com/dev-m03/my-uni",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative rounded-2xl card-gradient border border-border overflow-hidden hover:border-primary/25 transition-all duration-500 flex flex-col"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <span className="text-[10px] font-mono text-dim uppercase tracking-widest">
              Project 0{index + 1}
            </span>
            <h3 className="text-xl font-bold mt-1.5 tracking-[-0.01em]">
              {project.title}
            </h3>
          </div>
          <a
            href={project.github || "https://github.com/dev-m03"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-border text-dim hover:text-primary hover:border-primary/25 transition-all duration-200 mt-1"
          >
            <Github size={16} />
          </a>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-6 flex-1">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="flex items-start gap-2.5 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
              <span className="text-secondary-foreground leading-snug">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border/60">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-secondary/80 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-4">02 — Featured Projects</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold tracking-[-0.01em] mb-3">
            Engineering that <span className="text-gradient">ships</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Real systems built with modern architectures — from AI-powered copilots to enterprise platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
