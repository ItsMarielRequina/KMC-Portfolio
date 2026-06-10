// src/data/portfolio.js
// ── Replace all values with your own info ────────────────────────────────────

export const profile = {
    name: "Mar Dela Cruz",
    title: "Full-Stack Developer",
    subtitle: "IT Student · Laravel · React · Problem Solver",
    tagline:
      "I build purposeful software — clean backends, thoughtful UIs, and systems that actually work.",
    location: "Cotabato City, Philippines",
    available: true,
    email: "mar.delacruz@email.com",
    github: "https://github.com/mar",
    linkedin: "https://linkedin.com/in/mar-delacruz",
    facebook: "https://facebook.com/mar.dev",
    resumeUrl: "/resume.pdf",
  };
  
  export const education = [
    {
      id: "1",
      school: "Notre Dame University",
      degree: "Bachelor of Science in Information Technology",
      period: "2021 – Present",
      location: "Cotabato City",
      gwa: "1.75",
      highlights: [
        "Dean's Lister – multiple semesters",
        "Capstone: Procurement Management System (Laravel + Railway)",
        "Member, IT Society",
      ],
    },
    {
      id: "2",
      school: "Notre Dame College",
      degree: "Senior High School – STEM Track",
      period: "2019 – 2021",
      location: "Cotabato City",
      gwa: "92.4",
      highlights: ["With Honors", "Best in Research"],
    },
  ];
  
  export const skills = {
    languages: [
      { name: "PHP", level: 90, color: "#7c3aed" },
      { name: "JavaScript", level: 85, color: "#f59e0b" },
      { name: "HTML & CSS", level: 92, color: "#ef4444" },
      { name: "SQL", level: 80, color: "#3b82f6" },
      { name: "Python", level: 65, color: "#10b981" },
      { name: "Dart", level: 55, color: "#06b6d4" },
    ],
    tools: [
      { name: "Laravel", icon: "🔧", category: "Framework" },
      { name: "React", icon: "⚛️", category: "Framework" },
      { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
      { name: "Flutter", icon: "🐦", category: "Framework" },
      { name: "MySQL", icon: "🗄️", category: "Database" },
      { name: "Git & GitHub", icon: "🐙", category: "DevOps" },
      { name: "Railway", icon: "🚄", category: "DevOps" },
      { name: "Figma", icon: "✏️", category: "Design" },
      { name: "VS Code", icon: "💻", category: "Editor" },
      { name: "Postman", icon: "📬", category: "Testing" },
      { name: "Livewire", icon: "⚡", category: "Framework" },
      { name: "Node.js", icon: "🟩", category: "Runtime" },
    ],
  };
  
  export const experience = [
    {
      id: "1",
      role: "IT Intern – Full-Stack Developer",
      company: "DSWD Regional Office XII",
      period: "Feb 2026 – May 2026",
      type: "Internship",
      color: "#7c3aed",
      bullets: [
        "Built a full-stack Procurement Management System from scratch using Laravel, Blade, and MySQL",
        "Designed and implemented multi-role workflows: End-User, RD Approver, BAC, FA II, and Cash sections",
        "Deployed the production system on Railway with automated migrations and environment configuration",
        "Developed Audit Logs, Attendance tracking, Report Issue, and real-time Notification modules",
        "Wireframed the full UI in Figma before implementation across 8+ role-specific dashboards",
        "Resolved Git conflicts, managed branching strategy, and reviewed teammates' pull requests",
      ],
    },
  ];
  
  export const projects = [
    {
      id: "1",
      name: "DSWD Procurement System",
      description:
        "A government-grade multi-role procurement system handling purchase requests, RFQs, OBRs, price matrix, abstract of quotations, and payment processing — deployed on Railway.",
      tech: ["Laravel", "Blade", "MySQL", "Tailwind CSS", "Railway", "Livewire"],
      color: "#3b82f6",
      emoji: "🏛️",
      featured: true,
      github: null,
      live: null,
    },
    {
      id: "2",
      name: "Portfolio Website",
      description:
        "This very site — a React + Vite + Tailwind CSS portfolio with Framer Motion animations, dark design, and responsive layout.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      color: "#10b981",
      emoji: "🌐",
      featured: true,
      github: "https://github.com/mar/portfolio",
      live: "#",
    },
    {
      id: "3",
      name: "Student Attendance Tracker",
      description:
        "Flutter mobile app for tracking student attendance with QR code scanning, summary reports, and an admin dashboard.",
      tech: ["Flutter", "Dart", "Firebase"],
      color: "#f59e0b",
      emoji: "📋",
      featured: false,
      github: null,
      live: null,
    },
    {
      id: "4",
      name: "E-Commerce REST API",
      description:
        "RESTful API built with Laravel for a sample e-commerce platform, covering authentication, product management, orders, and payments.",
      tech: ["Laravel", "Sanctum", "MySQL", "Postman"],
      color: "#ef4444",
      emoji: "🛒",
      featured: false,
      github: "https://github.com/mar/ecommerce-api",
      live: null,
    },
  ];
  
  export const certifications = [
    {
      id: "1",
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2024",
      emoji: "🏅",
      color: "#10b981",
      url: "#",
    },
    {
      id: "2",
      name: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      year: "2024",
      emoji: "🏅",
      color: "#3b82f6",
      url: "#",
    },
    {
      id: "3",
      name: "CS50: Introduction to Computer Science",
      issuer: "Harvard / edX",
      year: "2023",
      emoji: "🎓",
      color: "#7c3aed",
      url: "#",
    },
    {
      id: "4",
      name: "Git & GitHub Fundamentals",
      issuer: "Coursera",
      year: "2023",
      emoji: "🏅",
      color: "#f59e0b",
      url: "#",
    },
  ];