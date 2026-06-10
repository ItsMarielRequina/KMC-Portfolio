
import { Section, SectionHeader, StaggerReveal } from "../components/Section";
import { experience } from "../data/portfolio";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

export default function Experience() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Career"
        title="Work Experience"
        subtitle="Real-world projects, internships, and the problems I helped solve."
      />

      <div className="relative">
        {/* Timeline Line */}
        <div
          className="
            absolute
            left-6
            top-0
            bottom-0
            w-px
            bg-gradient-to-b
            from-sky-400
            via-cyan-300
            to-transparent
          "
        />

        <StaggerReveal
          stagger={0.18}
          className="space-y-8"
        >
          {experience.map((job) => (
            <div
              key={job.id}
              className="relative pl-16"
            >
              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  left-4
                  top-8
                  w-4
                  h-4
                  rounded-full
                  border-4
                  border-white
                  shadow-md
                  -translate-x-1/2
                "
                style={{
                  backgroundColor: job.color,
                }}
              />

              {/* Card */}
              <div
                className="
                  group
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
                {/* Role + Badge */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <h3
                    className="
                      text-slate-800
                      font-bold
                      text-lg
                      group-hover:text-sky-700
                      transition-colors
                    "
                  >
                    {job.role}
                  </h3>

                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: job.color + "15",
                      color: job.color,
                      border: `1px solid ${job.color}35`,
                    }}
                  >
                    {job.type}
                  </span>
                </div>

                {/* Company + Date */}
                <div className="flex flex-wrap gap-4 text-slate-500 text-sm mb-5">
                  <span className="flex items-center gap-1.5">
                    <FiBriefcase size={13} />
                    {job.company}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={13} />
                    {job.period}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="
                        flex
                        items-start
                        gap-2.5
                        text-slate-600
                        text-sm
                        leading-relaxed
                      "
                    >
                      <span
                        className="mt-1 shrink-0 text-xs"
                        style={{
                          color: job.color,
                        }}
                      >
                        ▸
                      </span>

                      {bullet}
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

