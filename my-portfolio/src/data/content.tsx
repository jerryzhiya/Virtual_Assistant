// src/data/content.ts
import type { PersonalInfo, Testimonial } from '../types';

import reemImage from '../assets/Reem.jpg';
import sunnyImage from '../assets/sunny2.jpeg';
import sarahImage from '../assets/Sarah.jpg';
import profileImage from '../assets/profile-pics.jpeg';
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
  role: 'Social Media Manager',
  bio: 'I help busy people get organized, run smooth operations, and free up time so they can focus on what matters most.',
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
    name: 'Sarah',
    role: 'CEO, Bloom Co.',
    text: "Jerry transformed our Instagram from a ghost town into our biggest revenue driver.",
    image: sarahImage,
  },
  {
    name: 'Sunny John',
    role: 'Founder, TechStart',
    text: "The most organized and creative SMM I've ever worked with. Highly recommended!",
    image: sunnyImage,
  },
  {
    name: 'Reem Disu',
    role: 'CEO, Disu Foundation',
    text: "Jerry is one of the most creative social media professionals I have ever had; he's great at what he does.",
    image: reemImage,
  },
];

/**
 * Skills array
 *
 * - `name`: skill name shown in UI
 * - `level`: rough proficiency
 * - `years`: optional years of experience
 * - `description`: short blurb for tooltips or details
 * - `icon`: optional string (path or class) — resolve to an actual icon component in your UI
 */
export const skills: Skill[] = [
  {
    id: 's1',
    name: 'Calendar & Schedule Management',
    level: 'Expert',
    years: 6,
    description: 'Managing complex calendars, time blocking, and meeting coordination for executives.',
    icon: '/icons/calendar.svg',
  },
  {
    id: 's2',
    name: 'Email & Inbox Triage',
    level: 'Expert',
    years: 6,
    description: 'Prioritizing, drafting, and organizing high-volume email flows.',
    icon: '/icons/mail.svg',
  },
  {
    id: 's3',
    name: 'Project Management',
    level: 'Advanced',
    years: 4,
    description: 'Asana, Trello, Notion workflows; tracking deliverables and deadlines.',
    icon: '/icons/project.svg',
  },
  {
    id: 's4',
    name: 'Social Media Management',
    level: 'Advanced',
    years: 3,
    description: 'Content planning, scheduling, and analytics for growth and engagement.',
    icon: '/icons/social.svg',
  },
  {
    id: 's5',
    name: 'Communication & Stakeholder Management',
    level: 'Expert',
    years: 6,
    description: 'Clear written and verbal communication with internal and external stakeholders.',
    icon: '/icons/communication.svg',
  },
  {
    id: 's6',
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