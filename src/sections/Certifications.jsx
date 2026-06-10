// src/sections/Certifications.jsx
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

      <StaggerReveal stagger={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert) => (
          <a
            key={cert.id}
            href={cert.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-white/[0.04] hover:bg-white/[0.08] border border-white/8 hover:border-white/16 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Emoji icon */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
              style={{
                backgroundColor: cert.color + "20",
                border: `1px solid ${cert.color}30`,
              }}
            >
              {cert.emoji}
            </div>

            {/* Name */}
            <h3 className="text-white font-bold text-sm leading-snug mb-2 group-hover:text-violet-200 transition-colors flex-1">
              {cert.name}
            </h3>

            {/* Issuer + year */}
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="text-white/40 text-xs">{cert.issuer}</p>
                <p
                  className="text-xs font-bold mt-0.5"
                  style={{ color: cert.color }}
                >
                  {cert.year}
                </p>
              </div>
              <FiExternalLink
                size={13}
                className="text-white/20 group-hover:text-white/50 transition-colors"
              />
            </div>
          </a>
        ))}
      </StaggerReveal>
    </Section>
  );
}