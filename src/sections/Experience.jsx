// src/sections/Experience.jsx
import { Section, SectionHeader, StaggerReveal } from "../components/Section";
import { experience } from "../data/portfolio";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

export default function Experience() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Career"
        title="Work Experience"
        subtitle="Real-world projects and the problems I helped solve."
      />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-blue-500/20 to-transparent" />

        <StaggerReveal stagger={0.18} className="space-y-8">
          {experience.map((job) => (
            <div key={job.id} className="relative pl-16">
              {/* Timeline dot */}
              <div
                className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-[#080c14] -translate-x-1/2"
                style={{ backgroundColor: job.color }}
              />

              <div className="group bg-white/[0.04] hover:bg-white/[0.07] border border-white/8 hover:border-white/14 rounded-2xl p-6 transition-all duration-300">
                {/* Role + type badge */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                  <h3 className="text-white font-bold text-lg">{job.role}</h3>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: job.color + "22",
                      color: job.color,
                      border: `1px solid ${job.color}44`,
                    }}
                  >
                    {job.type}
                  </span>
                </div>

                {/* Company + period */}
                <div className="flex flex-wrap gap-4 text-white/40 text-sm mb-5">
                  <span className="flex items-center gap-1.5">
                    <FiBriefcase size={12} />
                    {job.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={12} />
                    {job.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-white/60 text-sm leading-relaxed">
                      <span style={{ color: job.color }} className="mt-1 shrink-0 text-xs">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </Section>
  );
}