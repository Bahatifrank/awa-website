export type ProgramNavItem = {
  slug: string;
  title: string;
  blurb: string;
};

export const programsNav: ProgramNavItem[] = [
  {
    slug: "school-counselling",
    title: "School Counselling",
    blurb: "Individual & group counselling embedded in partner schools.",
  },
  {
    slug: "life-skills",
    title: "Life Skills",
    blurb: "Emotional regulation, resilience, and character development.",
  },
  {
    slug: "mentorship",
    title: "Mentorship",
    blurb: "Structured near-peer mentorship for goal-setting and growth.",
  },
  {
    slug: "mental-health-awareness",
    title: "Mental Health Awareness",
    blurb: "Training and campaigns that destigmatise adolescent mental health.",
  },
];