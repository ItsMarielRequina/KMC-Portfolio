
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
}

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      {/* Profile */}
      <motion.div
        {...fadeUp(0.1)}
        className="mb-8 relative translate-y-6"
      >
        <div className="absolute inset-0 bg-sky-300/30 blur-3xl rounded-full scale-125" />

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          className="
            relative
            w-44 h-44
            md:w-56 md:h-56
            rounded-full
            bg-gradient-to-br
            from-sky-400
            via-cyan-400
            to-blue-500
            p-[4px]
            mx-auto
            shadow-2xl
            shadow-sky-300/30
          "
        >
          <img
            src="/profile (2).jpg"
            alt={profile.name}
            className="w-full h-full rounded-full object-cover border-4 border-white"
          />
        </motion.div>

        {profile.available && (
          <span className="absolute bottom-3 right-3 w-5 h-5 bg-emerald-400 border-4 border-white rounded-full" />
        )}
      </motion.div>

      {/* Status */}
      <motion.div {...fadeUp(0.2)} className="mb-5">
        <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-semibold px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Available for Opportunities
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        {...fadeUp(0.3)}
        className="text-5xl md:text-7xl font-black tracking-tighter mb-3"
      >
        <span className="text-slate-800">
          {profile.name.split(" ")[0]}{" "}
        </span>

        <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
          {profile.name.split(" ").slice(1).join(" ")}
        </span>
      </motion.h1>

      {/* Title */}
      <motion.p
        {...fadeUp(0.4)}
        className="text-sky-600 text-lg md:text-xl font-semibold mb-2"
      >
        {profile.title}
      </motion.p>

      <motion.p
        {...fadeUp(0.45)}
        className="text-slate-500 text-sm font-medium mb-6"
      >
        {profile.subtitle}
      </motion.p>

      {/* Location */}
      <motion.div
        {...fadeUp(0.5)}
        className="flex items-center gap-1.5 text-slate-500 text-sm mb-8"
      >
        <FiMapPin size={14} />
        {profile.location}
      </motion.div>

      {/* Tagline */}
      <motion.p
        {...fadeUp(0.55)}
        className="max-w-2xl text-slate-600 text-base md:text-lg leading-relaxed mb-10"
      >
        {profile.tagline}
      </motion.p>

      {/* Buttons */}
      <motion.div
        {...fadeUp(0.65)}
        className="flex flex-wrap items-center justify-center gap-3 mb-12"
      >
        <button
          onClick={() => scrollTo("projects")}
          className="
            px-8 py-3
            rounded-xl
            font-semibold
            text-white
            bg-gradient-to-r
            from-sky-500
            via-cyan-500
            to-blue-500
            hover:scale-105
            transition-all
            duration-300
            shadow-lg
            shadow-sky-300/30
          "
        >
          View My Work
        </button>

        <a
          href="/resume.jpg"
          download
          className="
            flex items-center gap-2
            px-8 py-3
            rounded-xl
            bg-white/80
            border border-sky-100
            text-slate-700
            font-semibold
            shadow-md
            hover:border-sky-300
            hover:scale-105
            transition-all
          "
        >
          <FiDownload />
          Resume
        </a>

        <button
          onClick={() => scrollTo("contact")}
          className="
            px-8 py-3
            rounded-xl
            bg-white/80
            border border-sky-100
            text-slate-700
            font-semibold
            shadow-md
            hover:border-sky-300
            hover:scale-105
            transition-all
          "
        >
          Contact Me
        </button>
      </motion.div>

      {/* Social */}
      <motion.div
        {...fadeUp(0.75)}
        className="flex items-center gap-4 mb-16"
      >
        {[
          { href: profile.github, Icon: FiGithub },
          { href: profile.linkedin, Icon: FiLinkedin },
          { href: profile.facebook, Icon: FiFacebook },
          { href: `mailto:${profile.email}`, Icon: FiMail },
        ].map(({ href, Icon }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12 h-12
              flex items-center justify-center
              rounded-xl
              bg-white/80
              border border-sky-100
              text-slate-600
              shadow-md
              hover:text-sky-600
              hover:border-sky-300
              hover:-translate-y-1
              transition-all
            "
          >
            <Icon size={18} />
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        {...fadeUp(0.9)}
        className="flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs tracking-widest uppercase">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="w-px h-8 bg-gradient-to-b from-sky-400 to-transparent"
        />
      </motion.div>
    </div>
  );
}
