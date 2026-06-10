// src/components/Footer.jsx

import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t border-sky-100 bg-white/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-sky-600">
            {profile.name}
          </span>
        </p>

        <p className="text-slate-400 text-xs">
          Designed & developed with ☕ in Davao City
        </p>
      </div>
    </footer>
  );
}
