export interface Project {
  id: string;
  orderLabel: string; // e.g. "First", "Second", "Third"
  title: string;
  subtitle: string;
  category: 'WordPress' | 'Landing Page' | 'Full-Stack' | 'Creative Dev' | 'Design Systems' | 'Mobile & Web' | 'eCommerce';
  description: string;
  longDescription: string;
  client: string;
  year: string;
  role: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: {
    hero: string;
    gallery: string[];
  };
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  period: string;
  degree: string;
  institution: string;
  description: string;
  honors?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    isPrimary?: boolean;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}
