// src/sections/Projects.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        subtitle="Things I've built — from government systems to side projects."
      />

      <StaggerReveal stagger={0.12} className="grid md:grid-cols-2 gap-5 mb-6">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </StaggerReveal>

      {/* Show more / less toggle */}
      {rest.length > 0 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2.5 bg-white/6 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white text-sm font-semibold rounded-xl transition-all duration-200"
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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col bg-white/[0.04] hover:bg-white/[0.07] border border-white/8 hover:border-white/16 rounded-2xl p-6 transition-colors duration-300 overflow-hidden"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at 50% 0%, ${project.color}12, transparent)`,
        }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: project.color + "20", border: `1px solid ${project.color}30` }}
        >
          {project.emoji}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/6 hover:bg-white/12 border border-white/8 text-white/40 hover:text-white transition-all"
            >
              <FiGithub size={14} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/6 hover:bg-white/12 border border-white/8 text-white/40 hover:text-white transition-all"
            >
              <FiExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Name + desc */}
      <h3 className="text-white font-bold text-base mb-2 group-hover:text-violet-200 transition-colors">
        {project.name}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: project.color + "18",
              color: project.color,
              border: `1px solid ${project.color}30`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}