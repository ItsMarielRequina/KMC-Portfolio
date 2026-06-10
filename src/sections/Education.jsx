
import { Section, SectionHeader, StaggerReveal } from "../components/Section";
import { education } from "../data/portfolio";
import { FiMapPin, FiCalendar, FiAward } from "react-icons/fi";

export default function Education() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Background"
        title="Education"
        subtitle="Where I built my foundation in information technology, software development, and problem solving."
      />

      <StaggerReveal
        stagger={0.15}
        className="grid md:grid-cols-2 gap-6"
      >
        {education.map((edu) => (
          <div
            key={edu.id}
            className="
              group
              relative
              bg-white/80
              backdrop-blur-xl
              border
              border-sky-100
              rounded-3xl
              p-6
              shadow-lg
              shadow-sky-100/30
              hover:border-sky-300
              hover:shadow-xl
              hover:shadow-sky-200/40
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            {/* Accent Line */}
            <div
              className="
                absolute
                top-0
                left-6
                right-6
                h-1
                rounded-full
                bg-gradient-to-r
                from-sky-500
                via-cyan-400
                to-transparent
              "
            />

            {/* School */}
            <h3
              className="
                text-slate-800
                font-bold
                text-lg
                mb-1
                group-hover:text-sky-700
                transition-colors
              "
            >
              {edu.school}
            </h3>

            {/* Degree */}
            <p className="text-sky-600 text-sm font-semibold mb-4">
              {edu.degree}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 mb-5 text-slate-500 text-xs">
              <span className="flex items-center gap-1.5">
                <FiCalendar size={12} />
                {edu.period}
              </span>

              {edu.location && (
                <span className="flex items-center gap-1.5">
                  <FiMapPin size={12} />
                  {edu.location}
                </span>
              )}

              {edu.gwa && (
                <span className="flex items-center gap-1.5 text-cyan-600 font-semibold">
                  <FiAward size={12} />
                  GWA: {edu.gwa}
                </span>
              )}
            </div>

            {/* Highlights */}
            <ul className="space-y-2">
              {edu.highlights.map((h, i) => (
                <li
                  key={i}
                  className="
                    flex
                    items-start
                    gap-2
                    text-slate-600
                    text-sm
                    leading-relaxed
                  "
                >
                  <span className="text-sky-500 mt-0.5 shrink-0">
                    ▸
                  </span>
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

