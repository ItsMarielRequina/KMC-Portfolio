// src/data/portfolio.js
// ── Replace all values with your own info ────────────────────────────────────

export const profile = {
  name: "Kaella May Cueme",
  title: "Web Designer",
  subtitle: "IT Student · HTML · CSS · JAVASCRIPT",
  tagline:
    "Designing Clean, Modern, and User-Friendly Websites.",
  location: "Davao City, Philippines",
  available: true,
  email: "maycueme13@gmail.com",
  github: "https://github.com/KaellaMay",
  linkedin: "https://www.linkedin.com/in/kaella-may-cueme-464145412/",
  facebook: "https://www.facebook.com/kaellacueme",
  resumeUrl: "/resume.pdf",
};

export const education = [
  {
    id: "1",
    school: "Holy Cross of Davao College",
    degree: "College",
    period: "2022 – 2026",
    location: "Davao City",
    highlights: ["Bachelor of Science in Information Technology"],
  },
  {
    id: "2",
    school: "Holy Cross College of Sasa",
    degree: "Senior High School – CSS Track",
    period: "2019 – 2021",
    location: "Davao City",
    highlights: [],
  },

  {
    id: "3",
    school: "F. Bangoy National High School",
    degree: "Junior High School",
    period: "2015 – 2019",
    location: "Davao City",
    highlights: [],
  },
  {
    id: "4",
    school: "V.Hizon Sr. Elementary School ",
    degree: "Elementary School",
    period: "2009 – 2015",
    location: "Davao City",
    highlights: [],
  },
];

export const skills = {
  languages: [
    { name: "PHP", level: 90, color: "#7c3aed" },
    { name: "JavaScript", level: 85, color: "#f59e0b" },
    { name: "HTML & CSS", level: 92, color: "#ef4444" },
    { name: "SQL", level: 80, color: "#3b82f6" },
    { name: "Python", level: 65, color: "#10b981" },
  ],
  tools: [
    { name: "Laravel", icon: "🔧", category: "Framework" },
    { name: "React", icon: "⚛️", category: "Framework" },
    { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
    { name: "MySQL", icon: "🗄️", category: "Database" },
    { name: "Git & GitHub", icon: "🐙", category: "DevOps" },
    { name: "Figma", icon: "✏️", category: "Design" },
    { name: "VS Code", icon: "💻", category: "Editor" },
    { name: "Postman", icon: "📬", category: "Testing" },
    { name: "Node.js", icon: "🟩", category: "Runtime" },
  ],
};

export const experience = [
  {
    id: "1",
    role: "IT Intern – Web Designer",
    company: "Philhealth Davao City",
    period: "March 2026 – May 2026",
    type: "Internship",
    color: "#7c3aed",
    bullets: [
    ],
  },
];

export const projects = [
  {
    id: "1",
    name: "CocoScan ",
    description:"A Mobile App for Classifying Oryctes Rhinoceros Infestation in Dwarf Coconut Tree using YOLOv8",
    tech: ["Expo", "Typescript", "HTML", "PHP", "API", "MachineLearning"],
    color: "#3b82f6",
    emoji: "🏛️",
  },
  {
    id: "2",
    name: "Tea Avenue Milk Tea House Information Management System",
    description:
      "A PHP and HTML-based system designed to streamline operations for Tea Avenue Milk Tea House, including customer records, menu management, and transaction tracking for efficient service",
    tech: ["PHP", "HTML"],
    color: "#10b981",
    emoji: "🌐",
    featured: true,
  },
  {
    id: "3",
    name: "StudyMate",
    description:
      "A React and Firebase-powered study companion that helps students organize notes, track progress, and collaborate in real time with intuitive tools and cloud sync.",
    tech: ["React", "Firebase", "Javascript"],
    color: "#f59e0b",
    emoji: "📋",
    featured: false,
  },
  {
    id: "4",
    name: "WeatherApp",
    description:
      "A simple PHP-based weather application that fetches real-time forecasts using APIs, helping users stay updated with current conditions and future predictions",
    tech: ["PHP","API"],
    color: "#ef4444",
    emoji: "🛒",
    featured: false,
  },
];

export const certifications = [
  
  {
    id: "1",
    name: "Legacy Responsive Web Design V8",
    issuer: "freeCodeCamp",
    year: "2026",
    emoji: "🏅",
    color: "#10b981",
    url: "https://drive.google.com/file/d/1j3iIp6Mue5X9viVmrmJfbILonPG0iuLn/view?usp=sharing",
  },
  {
    id: "2",
    name: "Critical Thinking in the AI Era",
    issuer: "HP Life / HP Foundation",
    year: "2026",
    emoji: "🏅",
    color: "#3b82f6",
    url: "https://drive.google.com/file/d/1DnbsRPnvOXzzXmjWvVmdrse7RmC8Fkim/view?usp=sharing",
  },
  {
    id: "3",
    name: "Introduction to SQL",
    issuer: "Simplilearn / SkillUp",
    year: "2024",
    emoji: "🎓",
    color: "#7c3aed",
    url: "https://drive.google.com/file/d/1klTJc2Ug1RNbkgf1pkeiiFaOSgscECFw/view?usp=sharing",
  },
];