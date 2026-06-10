// src/sections/Hero.jsx
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiDownload, FiMapPin } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">

      {/* Avatar ring */}
      <motion.div {...fadeUp(0.1)} className="mb-8 relative">
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-violet-500 via-blue-500 to-emerald-400 p-[2px] mx-auto">
          <div className="w-full h-full rounded-full bg-[#0d1320] flex items-center justify-center text-4xl font-black text-white select-none">
            {profile.name.charAt(0)}
          </div>
        </div>
        {profile.available && (
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 border-2 border-[#080c14] rounded-full" />
        )}
      </motion.div>

      {/* Available badge */}
      <motion.div {...fadeUp(0.2)} className="mb-5">
        <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          Available for opportunities
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        {...fadeUp(0.3)}
        className="text-5xl md:text-7xl font-black tracking-tighter mb-3 leading-none"
      >
        <span className="text-white">{profile.name.split(" ")[0]} </span>
        <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          {profile.name.split(" ").slice(1).join(" ")}
        </span>
      </motion.h1>

      {/* Title */}
      <motion.p
        {...fadeUp(0.4)}
        className="text-violet-300 text-lg md:text-xl font-semibold mb-2 tracking-wide"
      >
        {profile.title}
      </motion.p>

      <motion.p {...fadeUp(0.45)} className="text-white/40 text-sm font-medium mb-6">
        {profile.subtitle}
      </motion.p>

      {/* Location */}
      <motion.div
        {...fadeUp(0.5)}
        className="flex items-center gap-1.5 text-white/30 text-sm mb-8"
      >
        <FiMapPin size={13} />
        {profile.location}
      </motion.div>

      {/* Tagline */}
      <motion.p
        {...fadeUp(0.55)}
        className="max-w-xl text-white/60 text-base md:text-lg leading-relaxed mb-10"
      >
        {profile.tagline}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        {...fadeUp(0.65)}
        className="flex flex-wrap items-center justify-center gap-3 mb-12"
      >
        <button
          onClick={() => scrollTo("projects")}
          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-bold rounded-xl text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
        >
          View My Work
        </button>
        <a
          href={profile.resumeUrl}
          download
          className="flex items-center gap-2 px-6 py-3 bg-white/8 hover:bg-white/14 border border-white/12 text-white/80 hover:text-white font-bold rounded-xl text-sm transition-all duration-200 hover:scale-105"
        >
          <FiDownload size={14} />
          Resume
        </a>
        <button
          onClick={() => scrollTo("contact")}
          className="px-6 py-3 bg-white/8 hover:bg-white/14 border border-white/12 text-white/80 hover:text-white font-bold rounded-xl text-sm transition-all duration-200 hover:scale-105"
        >
          Contact Me
        </button>
      </motion.div>

      {/* Social Links */}
      <motion.div {...fadeUp(0.75)} className="flex items-center gap-4 mb-16">
        {[
          { href: profile.github,   Icon: FiGithub,   label: "GitHub"   },
          { href: profile.linkedin, Icon: FiLinkedin, label: "LinkedIn"  },
          { href: profile.facebook, Icon: FiFacebook, label: "Facebook"  },
          { href: `mailto:${profile.email}`, Icon: FiMail, label: "Email" },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/6 border border-white/10 text-white/50 hover:text-white hover:bg-white/12 hover:border-white/20 transition-all duration-200 hover:scale-110"
          >
            <Icon size={17} />
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(0.9)}
        className="flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </div>
  );
}