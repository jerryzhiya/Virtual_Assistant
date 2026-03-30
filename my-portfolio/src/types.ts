import type { IconType } from 'react-icons';

export interface SocialLink {
  icon: IconType;
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  image?: string;
  email?: string;
  mylogo?: string;
  socialLinks: SocialLink[];
}

/* Add this Testimonial interface */
export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string; // required because you import images
}