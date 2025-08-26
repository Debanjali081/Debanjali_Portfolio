import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

export const projects = [
  {
    title: "Naturopura - AgriTech Platform",
    desc: "AI crop health detection, MetaMask payments, real-time monitoring.",
    tags: ["React", "Node", "MongoDB", "Gemini API"],
    link: "https://github.com/Debanjali081/Naturopura",
  },
  {
    title: "HireSense",
    desc: "Resume parsing + Gemini-generated interview Qs.",
    tags: ["TypeScript", "Vite", "Tailwind"],
    link: "https://hire-sense-client-faxy-wheat.vercel.app/",
  },
  {
    title: "CodeLens AI",
    desc: "AI code review platform with dark/light themes.",
    tags: ["Node", "React", "OpenAI"],
    link: "https://codelens-ai.onrender.com/",
  },
];

export const skills = [
  { name: "React.js", icon: <SiReact size={22} /> },
  { name: "Node.js", icon: <SiNodedotjs size={22} /> },
  { name: "MongoDB", icon: <SiMongodb size={22} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={22} /> },
  { name: "TypeScript", icon: <span className="font-semibold">TS</span> },
  { name: "Next.js", icon: <span className="font-semibold">Next</span> },
];

export const sections = ["home", "about", "skills", "projects", "services", "contact"];
