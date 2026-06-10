
// src/sections/Skills.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, SectionHeader, StaggerReveal } from "../components/Section";
import { skills } from "../data/portfolio";

function SkillBar({ name, level, color, index, inView }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-slate-700 text-sm font-semibold">
          {name}
        </span>
        <span className="text-slate-400 text-xs font-mono">
          {level}%
        </span>
      </div>

      <div className="h-3 bg-sky-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.2 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            background: `linear-gradient(90deg, ${color}, #38bdf8)`,
          }}
          className="h-full rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const barsRef = useRef(null);
  const barsInView = useInView(barsRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <Section>
      <SectionHeader
        eyebrow="Toolkit"
        title="Languages & Tools"
        subtitle="Technologies I work with on a daily basis and the tools I've used throughout my academic and internship journey."
      />

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Languages */}
        <div
          ref={barsRef}
          className="
            bg-white/80
            backdrop-blur-xl
            border border-sky-100
            rounded-3xl
            p-6
            shadow-lg
            shadow-sky-100/40
          "
        >
          <h3
            className="
              text-sky-600
              text-xs
              font-bold
              tracking-[0.18em]
              uppercase
              mb-6
            "
          >
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

        {/* Tools */}
        <div
          className="
            bg-white/80
            backdrop-blur-xl
            border border-sky-100
            rounded-3xl
            p-6
            shadow-lg
            shadow-sky-100/40
          "
        >
          <h3
            className="
              text-sky-600
              text-xs
              font-bold
              tracking-[0.18em]
              uppercase
              mb-6
            "
          >
            Frameworks & Tools
          </h3>

          <StaggerReveal
            baseDelay={0.1}
            stagger={0.05}
            className="flex flex-wrap gap-3"
          >
            {skills.tools.map((tool) => (
              <motion.div
                key={tool.name}
                whileHover={{
                  y: -3,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  bg-white
                  border
                  border-sky-100
                  hover:border-sky-300
                  rounded-2xl
                  px-4
                  py-3
                  transition-all
                  duration-300
                  shadow-sm
                  hover:shadow-md
                  cursor-default
                "
              >
                <span className="text-lg">
                  {tool.icon}
                </span>

                <div>
                  <p
                    className="
                      text-slate-700
                      group-hover:text-sky-700
                      text-sm
                      font-semibold
                      transition-colors
                    "
                  >
                    {tool.name}
                  </p>

                  <p className="text-slate-400 text-xs">
                    {tool.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </Section>
  );
}

