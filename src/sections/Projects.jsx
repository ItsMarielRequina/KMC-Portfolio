
// src/sections/Projects.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader, StaggerReveal } from "../components/Section";
import { projects } from "../data/portfolio";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visible = showAll ? projects : featured;

  return (
    <Section>
      <SectionHeader
        eyebrow="Portfolio"
        title="Projects"
        subtitle="A collection of academic, internship, and personal projects I've developed."
      />

      <StaggerReveal
        stagger={0.12}
        className="grid md:grid-cols-2 gap-6 mb-8"
      >
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </StaggerReveal>

      {rest.length > 0 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              px-6 py-3
              rounded-full
              bg-white/80
              backdrop-blur-xl
              border border-sky-100
              shadow-lg shadow-sky-100/40
              text-slate-700
              font-semibold
              hover:scale-105
              hover:border-sky-300
              hover:text-sky-700
              transition-all duration-300
            "
          >
            {showAll ? "Show Less" : `Show ${rest.length} More`}
          </button>
        </div>
      )}
    </Section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-3xl
        bg-white/80
        backdrop-blur-xl
        border
        border-sky-100
        shadow-lg
        shadow-sky-100/40
        hover:shadow-2xl
        hover:shadow-sky-200/50
        hover:border-sky-200
        p-6
        transition-all
        duration-300
      "
    >
      {/* Hover Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(500px circle at top, ${project.color}15, transparent)`,
        }}
      />

      {/* Top Section */}
      <div className="flex items-start justify-between mb-5 relative z-10">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
          style={{
            backgroundColor: project.color + "15",
            border: `1px solid ${project.color}30`,
          }}
        >
          {project.emoji}
        </div>

        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-9 h-9
                rounded-xl
                flex
                items-center
                justify-center
                bg-white
                border
                border-slate-200
                text-slate-500
                hover:text-sky-600
                hover:border-sky-300
                transition-all
              "
            >
              <FiGithub size={16} />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-9 h-9
                rounded-xl
                flex
                items-center
                justify-center
                bg-white
                border
                border-slate-200
                text-slate-500
                hover:text-sky-600
                hover:border-sky-300
                transition-all
              "
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Project Name */}
      <h3 className="relative z-10 text-slate-800 font-bold text-lg mb-2 group-hover:text-sky-700 transition-colors">
        {project.name}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-slate-600 text-sm leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: project.color + "15",
              color: project.color,
              border: `1px solid ${project.color}25`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

