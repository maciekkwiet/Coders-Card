import type { Skill, Testimonial } from '@/typings';

import { attributes } from '../../content/about-me.md';

type AboutMe = {
  description: string;
  skills: Skill[];
  testimonials?: Testimonial[];
  certificates: string;
};

export const aboutMe: AboutMe = attributes;
