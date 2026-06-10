
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: threshold,
  });

  return { ref, inView };
}

export function Section({
  id,
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`max-w-6xl mx-auto px-6 py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}) {
  const { ref, inView } = useReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({
  children,
  baseDelay = 0,
  stagger = 0.1,
  className = "",
}) {
  const { ref, inView } = useReveal();

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) =>
            child ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: baseDelay + i * stagger,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {child}
              </motion.div>
            ) : null
          )
        : children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}) {
  const { ref, inView } = useReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mb-14"
    >
      {eyebrow && (
        <p
          className="
            text-sky-600
            text-xs
            font-bold
            tracking-[0.2em]
            uppercase
            mb-3
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          text-3xl
          md:text-4xl
          font-black
          text-slate-800
          tracking-tight
          mb-3
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            text-slate-500
            text-base
            max-w-xl
            leading-relaxed
          "
        >
          {subtitle}
        </p>
      )}

      <div
        className="
          mt-5
          w-16
          h-1
          rounded-full
          bg-gradient-to-r
          from-sky-500
          via-cyan-400
          to-transparent
        "
      />
    </motion.div>
  );
}

