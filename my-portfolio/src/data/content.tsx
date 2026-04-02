// src/data/content.ts
import type { PersonalInfo, Testimonial } from '../types';

import reemImage from '../assets/Reem.jpg';
import sunnyImage from '../assets/sunny2.jpeg';
import sarahImage from '../assets/Sarah.jpg';
import profileImage from '../assets/profile-pics.jpeg';
import Mercy2 from '../assets/Mercy2.png';
import logo from '../assets/my-logo.png';

// Local Skill type for data shape (you can move this to src/types.ts if you prefer)
export interface Skill {
  id?: string;
  name: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  years?: number;
  description?: string;
  /** optional icon path or class name; keep as string to avoid importing icon types in data */
  icon?: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Jeremiah Zhiya',
  role: 'Frontend Developer | Social Media Manager',
 bio: 'Dedicated to crafting modern web experiences and guiding brands to thrive online through creative digital strategies.',
  image: profileImage,
  mylogo: logo,
  email: 'jeremiahzhiya.va@gmail.com',

  socialLinks: [
    { icon: () => null as any, url: 'https://twitter.com/yourhandle', label: 'Twitter' },
    { icon: () => null as any, url: 'https://www.linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: () => null as any, url: 'https://github.com/yourusername', label: 'GitHub' },
  ],
};

export const testimonials: Testimonial[] = [
  {
    name: 'Adebanwo Mercy',
    role: 'Executive Assistant, Disu Foundation',
    text: 'Jeremiah built my portfolio website and I was amazed at how professional and user-friendly it turned out. What excited me the most was that visitors can now send me emails directly through the site — it feels like my business is finally connected to the world. His work exceeded my expectations and gave me confidence in my online presence.',
    image: Mercy2,
  },
  {
    name: 'Sarah',
    role: 'CEO, Bloom Co.',
    text: "Jerry transformed our Instagram from a ghost town into our biggest revenue driver.",
    image: sarahImage,
  },
  {
    name: 'Sunny John',
    role: 'Graphic Designer, Freelance',
    text: 'Working with Jeremiah was a fantastic experience. He built a sleek, professional portfolio website that perfectly showcases my design work. I was thrilled to see how easy it is for potential clients to reach me directly through the site. His attention to detail and ability to bring my vision online made the whole process smooth and rewarding',
    image: sunnyImage,
  },
  {
    name: 'Reem Disu',
    role: 'CEO, Disu Foundation',
    text: "Jerry is one of the most creative social media professionals I have ever had; he's great at what he does.",
    image: reemImage,
  },
];

export const skills: Skill[] = [
  {
    id: 's1',
    name: 'HTML5 & Semantic Markup',
    level: 'Expert',
    years: 4,
    description: 'Building accessible, SEO-friendly web pages with semantic HTML structure.',
    icon: '/icons/html.svg',
  },
  {
    id: 's2',
    name: 'CSS3 & Responsive Design',
    level: 'Expert',
    years: 4,
    description: 'Creating responsive layouts with Flexbox, Grid, and media queries for all devices.',
    icon: '/icons/css.svg',
  },
  {
    id: 's3',
    name: 'JavaScript (ES6+)',
    level: 'Advanced',
    years: 3,
    description: 'Developing interactive features, DOM manipulation, and modern ES6+ syntax.',
    icon: '/icons/javascript.svg',
  },
  {
    id: 's4',
    name: 'React & Next.js',
    level: 'Advanced',
    years: 3,
    description: 'Building dynamic SPAs and SSR applications with React hooks, context, and Next.js.',
    icon: '/icons/react.svg',
  },
  {
    id: 's5',
    name: 'Version Control (Git/GitHub)',
    level: 'Expert',
    years: 5,
    description: 'Managing codebases, branching strategies, and collaborative workflows using Git.',
    icon: '/icons/git.svg',
  },
  {
    id: 's6',
    name: 'UI/UX Design',
    level: 'Intermediate',
    years: 2,
    description: 'Translating wireframes into functional interfaces with attention to usability and aesthetics.',
    icon: '/icons/uiux.svg',
  },
  {
    id: 's7',
    name: 'API Integration',
    level: 'Advanced',
    years: 3,
    description: 'Connecting applications to REST APIs and handling asynchronous data with fetch/axios.',
    icon: '/icons/api.svg',
  },
  {
    id: 's8',
    name: 'Deployment & Hosting',
    level: 'Intermediate',
    years: 2,
    description: 'Deploying projects on Vercel, Netlify, and GitHub Pages with CI/CD workflows.',
    icon: '/icons/deploy.svg',
  },
  {
    id: 's9',
    name: 'Calendar & Schedule Management',
    level: 'Expert',
    years: 6,
    description: 'Managing complex calendars, time blocking, and meeting coordination for executives.',
    icon: '/icons/calendar.svg',
  },
  {
    id: 's10',
    name: 'Email & Inbox Triage',
    level: 'Expert',
    years: 6,
    description: 'Prioritizing, drafting, and organizing high-volume email flows.',
    icon: '/icons/mail.svg',
  },
  {
    id: 's11',
    name: 'Project Management',
    level: 'Advanced',
    years: 4,
    description: 'Asana, Trello, Notion workflows; tracking deliverables and deadlines.',
    icon: '/icons/project.svg',
  },
  {
    id: 's12',
    name: 'Social Media Management',
    level: 'Advanced',
    years: 3,
    description: 'Content planning, scheduling, and analytics for growth and engagement.',
    icon: '/icons/social.svg',
  },
  {
    id: 's13',
    name: 'Communication & Stakeholder Management',
    level: 'Expert',
    years: 6,
    description: 'Clear written and verbal communication with internal and external stakeholders.',
    icon: '/icons/communication.svg',
  },
  {
    id: 's14',
    name: 'Research & Reporting',
    level: 'Advanced',
    years: 5,
    description: 'Market research, competitor analysis, and concise executive reports.',
    icon: '/icons/report.svg',
  },
];

export default {
  personalInfo,
  testimonials,
  skills,
};