import { Project, Profile } from "./types";

export const MY_PROFILE: Profile = {
  name: "Olaoye Ayomide",
  username: "olaoyeayomide",
  bio: "Passionate Software Engineer specializing in React and Python. Building scalable web applications and seamless user experiences.",
  avatarUrl: "https://i.ibb.co/1f4r2frR/IMG-0940.jpg", // Using a placeholder
  location: "Lagos, Nigeria",
  email: "ayomideolaoye84@gmail.com",
  website: "https://www.getshaare.com",
  company: "Freelance / Open to Work",
  twitter: "olaoyeayomide",
  followers: 120,
  following: 45,
};

export const SERVICES = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, pixel-perfect UIs with React, Tailwind CSS, and Framer Motion. I focus on performance and accessibility.",
    icon: "Layout",
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "End-to-end development using Python (FastAPI/Django) or Node.js. Database design, API integration, and deployment.",
    icon: "Globe",
  },
  {
    title: "API Integration & AI",
    description:
      "Integrating third-party APIs (Stripe, Google Maps) and AI models (Gemini, OpenAI) into business applications.",
    icon: "Zap",
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "E-commerce Platform",
    description:
      "Built a full-stack e-commerce platform using React, Node.js, and MongoDB with real-time inventory management.",
    language: "Python",
    languageColor: "#3572A5",
    stars: 45,
    forks: 12,
    updatedAt: "Updated 3 days ago",
    isPublic: true,
    topics: ["Python", "FastAPI", "Postgres", "React"],
    url: "https://github.com/olaoyeayomide/ecommerce",
    demoUrl: "https://ecommerce-demo.com",
    imageUrl:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Get Shaare",
    description:
      "Developed a collaborative task management application for a cleaning service with real-time updates and scheduling.",
    language: "React",
    languageColor: "#3178c6",
    stars: 32,
    forks: 8,
    updatedAt: "Updated 1 week ago",
    isPublic: true,
    topics: ["React", "Tailwind CSS", "Python", "FastAPI"],
    url: "https://github.com/olaoyeayomide/getshaare",
    demoUrl: "https://www.getshaare.com/",
    imageUrl: "https://i.ibb.co/b5rp3hhJ/Screenshot-2025-12-17-142305-1.png",
  },
  {
    id: 3,
    name: "Dr.Kleen Cleaning Services",
    description:
      "Developed a collaborative task management application for a cleaning service with real-time updates and scheduling.",
    language: "React",
    languageColor: "#3178c6",
    stars: 32,
    forks: 8,
    updatedAt: "Updated 1 week ago",
    isPublic: true,
    topics: ["React", "Tailwind CSS", "Python", "FastAPI"],
    url: "https://github.com/olaoyeayomide/dr-kleen",
    demoUrl: "https://drkleen.com",
    imageUrl:
      "https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "AI Content Generator",
    description:
      "A SaaS tool that uses Gemini API to help marketers generate blog posts and social media captions instantly.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 128,
    forks: 34,
    updatedAt: "Updated 2 days ago",
    isPublic: true,
    topics: ["Gemini API", "React", "Node.js"],
    url: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Real-time Chat App",
    description:
      "WebSocket based chat application supporting multiple rooms, media sharing, and read receipts.",
    language: "Go",
    languageColor: "#00ADD8",
    stars: 89,
    forks: 12,
    updatedAt: "Updated 5 days ago",
    isPublic: true,
    topics: ["Go", "WebSockets", "Redis"],
    url: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
  },
];

export const PINNED_PROJECT_IDS = [1, 2, 3, 4, 5];

export const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "FastAPI",
  "Postgres",
  "Docker",
  "AWS",
  "Tailwind CSS",
];
