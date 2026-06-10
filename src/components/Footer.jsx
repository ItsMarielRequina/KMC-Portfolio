// src/components/Footer.jsx
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/6 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/25 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white/40 font-semibold">{profile.name}</span>
        </p>
        <p className="text-white/20 text-xs">
          Designed & developed with ☕ in Davao City
        </p>
      </div>
    </footer>
  );
}