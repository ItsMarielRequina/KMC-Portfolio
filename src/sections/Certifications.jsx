import { Section, SectionHeader, StaggerReveal } from "../components/Section";
import { certifications } from "../data/portfolio";
import { FiExternalLink } from "react-icons/fi";

export default function Certifications() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Credentials"
        title="Certifications"
        subtitle="Courses and certificates I've completed outside the classroom."
      />

      <StaggerReveal
        stagger={0.1}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {certifications.map((cert) => (
          <a
            key={cert.id}
            href={cert.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              flex-col
              bg-white/80
              backdrop-blur-xl
              border
              border-sky-100
              rounded-3xl
              p-5
              shadow-lg
              shadow-sky-100/30
              hover:shadow-xl
              hover:shadow-sky-200/40
              hover:border-sky-300
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4"
              style={{
                backgroundColor: cert.color + "15",
                border: `1px solid ${cert.color}30`,
              }}
            >
              {cert.emoji}
            </div>

            <h3
              className="
                text-slate-800
                font-bold
                text-sm
                leading-snug
                mb-3
                flex-1
                group-hover:text-sky-700
                transition-colors
              "
            >
              {cert.name}
            </h3>

            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="text-slate-500 text-xs">
                  {cert.issuer}
                </p>

                <p
                  className="text-xs font-bold mt-1"
                  style={{ color: cert.color }}
                >
                  {cert.year}
                </p>
              </div>

              <FiExternalLink
                size={15}
                className="
                  text-slate-400
                  group-hover:text-sky-600
                  transition-colors
                "
              />
            </div>
          </a>
        ))}
      </StaggerReveal>
    </Section>
  );
}

