// src/sections/Skills.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, SectionHeader, StaggerReveal } from "../components/Section";
import { skills } from "../data/portfolio";

function SkillBar({ name, level, color, index, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-white/80 text-sm font-semibold">{name}</span>
        <span className="text-white/30 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-white/8 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: 0.2 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ backgroundColor: color }}
          className="h-full rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const barsRef = useRef(null);
  const barsInView = useInView(barsRef, { once: true, amount: 0.2 });

  return (
    <Section>
      <SectionHeader
        eyebrow="Toolkit"
        title="Languages & Tools"
        subtitle="Technologies I work with on a daily basis, and the ones I've picked up along the way."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Languages + progress bars */}
        <div ref={barsRef}>
          <h3 className="text-white/50 text-xs font-bold tracking-[0.15em] uppercase mb-6">
            Programming Languages
          </h3>
          {skills.languages.map((skill, i) => (
            <SkillBar
              key={skill.name}
              {...skill}
              index={i}
              inView={barsInView}
            />
          ))}
        </div>

        {/* Tools grid */}
        <div>
          <h3 className="text-white/50 text-xs font-bold tracking-[0.15em] uppercase mb-6">
            Frameworks & Tools
          </h3>
          <StaggerReveal
            baseDelay={0.1}
            stagger={0.06}
            className="flex flex-wrap gap-2"
          >
            {skills.tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex items-center gap-2 bg-white/5 hover:bg-violet-500/10 border border-white/8 hover:border-violet-500/30 rounded-xl px-3.5 py-2.5 transition-all duration-200 cursor-default"
              >
                <span className="text-base">{tool.icon}</span>
                <div>
                  <p className="text-white/80 group-hover:text-white text-sm font-semibold leading-none transition-colors">
                    {tool.name}
                  </p>
                  <p className="text-white/25 text-xs mt-0.5">{tool.category}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </Section>
  );
}