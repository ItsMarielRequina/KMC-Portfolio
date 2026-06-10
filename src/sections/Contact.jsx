
import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader, Reveal } from "../components/Section";
import { profile } from "../data/portfolio";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: FiMail,
  },
  {
    label: "GitHub",
    value: profile.github,
    href: profile.github,
    Icon: FiGithub,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedin,
    Icon: FiLinkedin,
  },
  {
    label: "Facebook",
    value: profile.facebook,
    href: profile.facebook,
    Icon: FiFacebook,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    await new Promise((r) => setTimeout(r, 1500));

    setStatus("success");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Section>
      <SectionHeader
        eyebrow="Let's Talk"
        title="Contact"
        subtitle="Have a project in mind, or just want to say hi? I'm open to new opportunities."
      />

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <Reveal>
          <div>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              I'm currently looking for internship and junior developer
              opportunities. Feel free to reach out — I usually reply within
              24 hours.
            </p>

            <div className="space-y-3">
              {CONTACT_LINKS.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    p-4
                    bg-white/80
                    backdrop-blur-xl
                    border
                    border-sky-100
                    rounded-2xl
                    shadow-md
                    shadow-sky-100/30
                    hover:border-sky-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    transition-all
                    duration-300
                  "
                >
                  <div className="w-11 h-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                    <Icon size={17} />
                  </div>

                  <div>
                    <p className="text-slate-400 text-xs mb-1">
                      {label}
                    </p>

                    <p className="text-slate-700 group-hover:text-sky-700 text-sm font-semibold transition-colors truncate">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Contact Form */}
        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="
              bg-white/80
              backdrop-blur-xl
              border
              border-sky-100
              rounded-3xl
              p-6
              shadow-lg
              shadow-sky-100/30
              space-y-4
            "
          >
            <h3 className="text-slate-800 font-bold text-lg">
              Send a Message
            </h3>

            <div>
              <label className="block text-slate-500 text-xs font-semibold mb-2 uppercase tracking-wider">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Juan Dela Cruz"
                className="
                  w-full
                  bg-white
                  border
                  border-sky-100
                  focus:border-sky-400
                  rounded-xl
                  px-4
                  py-3
                  text-slate-700
                  placeholder-slate-400
                  outline-none
                  transition
                "
              />
            </div>

            <div>
              <label className="block text-slate-500 text-xs font-semibold mb-2 uppercase tracking-wider">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="juan@email.com"
                className="
                  w-full
                  bg-white
                  border
                  border-sky-100
                  focus:border-sky-400
                  rounded-xl
                  px-4
                  py-3
                  text-slate-700
                  placeholder-slate-400
                  outline-none
                  transition
                "
              />
            </div>

            <div>
              <label className="block text-slate-500 text-xs font-semibold mb-2 uppercase tracking-wider">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Hi Kaella, I'd like to talk about..."
                className="
                  w-full
                  bg-white
                  border
                  border-sky-100
                  focus:border-sky-400
                  rounded-xl
                  px-4
                  py-3
                  text-slate-700
                  placeholder-slate-400
                  outline-none
                  resize-none
                  transition
                "
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                py-3
                rounded-xl
                font-semibold
                text-white
                bg-gradient-to-r
                from-sky-500
                via-cyan-500
                to-blue-500
                hover:scale-[1.02]
                transition-all
                duration-300
                shadow-lg
                shadow-sky-300/30
              "
            >
              {status === "sending" ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      ease: "linear",
                    }}
                    className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <FiCheckCircle size={16} />
                  Message Sent!
                </>
              ) : (
                <>
                  <FiSend size={15} />
                  Send Message
                </>
              )}
            </button>

            {status === "error" && (
              <p className="flex items-center gap-2 text-red-500 text-sm">
                <FiAlertCircle />
                Something went wrong. Try emailing me directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

