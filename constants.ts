import { Project, Profile } from "./types";

export const MY_PROFILE: Profile = {
  name: "Olaoye Ayomide",
  username: "olaoyeayomide",
  bio: "Passionate Software Engineer specializing in React and Python. Building scalable web applications and seamless user experiences.",
  avatarUrl: "https://i.ibb.co/1f4r2frR/IMG-0940.jpg", // Using a placeholder
  location: "Lagos, Nigeria",
  email: "ayomideolaoye84@gmail.com",
  company: "Freelance / Open to Work",
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
    name: "Sainta Palmer",
    description:
      "A responsive jewelry e-commerce website featuring product categories, variants, cart, and email subscription.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 128,
    forks: 34,
    updatedAt: "Updated 2 days ago",
    isPublic: true,
    topics: ["Gemini API", "React", "Node.js"],
    demoUrl:
      "https://saintapalmer.com/?fbclid=PAdGRzdgN-AkFleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAad7Cucl-IGR3oy_qbeZQwEbb7dl8qNTkTk6YbTGb4J3KYmC1ptsUd4d9fSDpQ_aem_qflHzz8zLA2VOiURnTKiBw",
    imageUrl: "https://i.ibb.co/TDvQqQ28/Screenshot-2026-01-02-192531-1.png",
  },
  {
    id: 2,
    name: "Dr.Kleen Cleaning Services",
    description:
      "A professional cleaning services website showcasing residential and commercial services with contact and booking details as well as a real-time updates and schedling.",
    language: "React",
    languageColor: "#3178c6",
    stars: 32,
    forks: 8,
    updatedAt: "Updated 1 week ago",
    isPublic: true,
    topics: ["React", "Tailwind CSS", "Python", "FastAPI"],
    url: "https://github.com/olaoyeayomide/dr-kleen",
    demoUrl: "https://drkleen.com",
    imageUrl: "https://i.ibb.co/fGBHr1jt/Screenshot-2025-11-15-001229-1.png",
  },
  {
    id: 3,
    name: "Get Shaare",
    description:
      "A service-booking platform that connects users with vetted professional cleaners for stress-free home cleaning.",
    language: "React",
    languageColor: "#3178c6",
    stars: 32,
    forks: 8,
    updatedAt: "Updated 1 week ago",
    isPublic: true,
    topics: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://www.getshaare.com/",
    imageUrl: "https://i.ibb.co/TMxDRdHP/Screenshot-2025-12-17-142305-2.png",
  },
  {
    id: 4,
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
    id: 5,
    name: "Ai-video Dubbing Tool",
    description:
      "WebSocket based chat application supporting multiple rooms, media sharing, and read receipts.",
    language: "Go",
    languageColor: "#00ADD8",
    stars: 89,
    forks: 12,
    updatedAt: "Updated 5 days ago",
    isPublic: true,
    topics: ["Python", "FastAPI"],
    url: "http://github.com/olaoyeayomide/ai-video-dubbing-tool",
    imageUrl:
      "https://i.ibb.co/7xLQFtqM/Chat-GPT-Image-Jan-3-2026-12-22-27-AM-2.png",
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
