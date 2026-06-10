// src/sections/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader, Reveal } from "../components/Section";
import { profile } from "../data/portfolio";
import {
  FiMail, FiGithub, FiLinkedin, FiFacebook,
  FiSend, FiCheckCircle, FiAlertCircle,
} from "react-icons/fi";

const CONTACT_LINKS = [
  { label: "Email",    value: profile.email,    href: `mailto:${profile.email}`,  Icon: FiMail },
  { label: "GitHub",   value: profile.github,   href: profile.github,             Icon: FiGithub },
  { label: "LinkedIn", value: profile.linkedin, href: profile.linkedin,           Icon: FiLinkedin },
  { label: "Facebook", value: profile.facebook, href: profile.facebook,           Icon: FiFacebook },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // ── EmailJS integration ───────────────────────────────────────────────────
    // 1. Go to https://www.emailjs.com/ and create a free account
    // 2. Create a service, email template, and get your public key
    // 3. Uncomment and fill in the values below:
    //
    // import emailjs from "@emailjs/browser";
    // try {
    //   await emailjs.send(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     { from_name: form.name, from_email: form.email, message: form.message },
    //     "YOUR_PUBLIC_KEY"
    //   );
    //   setStatus("success");
    // } catch {
    //   setStatus("error");
    // }
    // ─────────────────────────────────────────────────────────────────────────

    // Demo: simulate success after 1.5s
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Section>
      <SectionHeader
        eyebrow="Let's Talk"
        title="Contact"
        subtitle="Have a project in mind, or just want to say hi? I'm open to new opportunities."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left — contact info */}
        <Reveal>
          <div>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              I'm currently looking for internship or junior developer opportunities after
              graduation. Feel free to reach out — I usually reply within 24 hours.
            </p>

            <div className="space-y-3">
              {CONTACT_LINKS.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/8 hover:border-violet-500/30 rounded-xl transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-white/35 text-xs mb-0.5">{label}</p>
                    <p className="text-white/80 group-hover:text-white text-sm font-semibold transition-colors truncate">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right — contact form */}
        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="bg-white/[0.04] border border-white/8 rounded-2xl p-6 space-y-4"
          >
            <h3 className="text-white font-bold text-base mb-2">Send a Message</h3>

            {/* Name */}
            <div>
              <label className="block text-white/40 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Juan Dela Cruz"
                className="w-full bg-white/5 border border-white/10 focus:border-violet-500/50 focus:bg-white/8 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white/40 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="juan@email.com"
                className="w-full bg-white/5 border border-white/10 focus:border-violet-500/50 focus:bg-white/8 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-all duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-white/40 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Hi Kaella, I'd like to talk about..."
                className="w-full bg-white/5 border border-white/10 focus:border-violet-500/50 focus:bg-white/8 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {status === "sending" ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending…
                </>
              ) : status === "success" ? (
                <>
                  <FiCheckCircle size={15} />
                  Message Sent!
                </>
              ) : (
                <>
                  <FiSend size={14} />
                  Send Message
                </>
              )}
            </button>

            {/* Error state */}
            {status === "error" && (
              <p className="flex items-center gap-1.5 text-red-400 text-xs">
                <FiAlertCircle size={13} />
                Something went wrong. Try emailing me directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}