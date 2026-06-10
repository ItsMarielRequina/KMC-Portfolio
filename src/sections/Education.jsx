// src/sections/Education.jsx
import { Section, SectionHeader, StaggerReveal } from "../components/Section";
import { education } from "../data/portfolio";
import { FiMapPin, FiCalendar, FiAward } from "react-icons/fi";

export default function Education() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Background"
        title="Education"
        subtitle="Where I built my foundation in computer science and software engineering."
      />

      <StaggerReveal stagger={0.15} className="grid md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="group relative bg-white/[0.04] hover:bg-white/[0.07] border border-white/8 hover:border-violet-500/30 rounded-2xl p-6 transition-all duration-300"
          >
            {/* Accent top bar */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-violet-500/60 via-blue-500/40 to-transparent rounded-full" />

            {/* School */}
            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-violet-300 transition-colors">
              {edu.school}
            </h3>

            {/* Degree */}
            <p className="text-violet-300/80 text-sm font-semibold mb-4">{edu.degree}</p>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 mb-5 text-white/40 text-xs">
              <span className="flex items-center gap-1.5">
                <FiCalendar size={11} /> {edu.period}
              </span>
              {edu.location && (
                <span className="flex items-center gap-1.5">
                  <FiMapPin size={11} /> {edu.location}
                </span>
              )}
              {edu.gwa && (
                <span className="flex items-center gap-1.5 text-emerald-400/80">
                  <FiAward size={11} /> GWA: {edu.gwa}
                </span>
              )}
            </div>

            {/* Highlights */}
            <ul className="space-y-1.5">
              {edu.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-white/55 text-sm">
                  <span className="text-violet-400 mt-0.5 shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </StaggerReveal>
    </Section>
  );
}