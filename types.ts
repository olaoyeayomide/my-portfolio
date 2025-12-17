export interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  updatedAt: string;
  isPublic: boolean;
  topics: string[];
  url?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface Profile {
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
  location: string;
  email: string;
  website: string;
  company: string;
  twitter: string;
  followers: number;
  following: number;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4; // 0 is empty, 4 is most active
}

export enum Tab {
  ABOUT = 'About Me',
  WORK = 'Work',
  SKILLS = 'Skills',
  BLOG = 'Blog',
  REPO = 'repo',
  AI_CHAT = 'Ask AI'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}