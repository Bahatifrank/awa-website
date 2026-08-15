export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "adolescent-mental-health-in-kenya",
    title: "Adolescent Mental Health in Kenya: Where We Stand",
    excerpt: "An overview of how mental health challenges show up in Kenyan adolescents, and why early, school-based support matters more than ever.",
    date: "2026-06-02",
    readTime: "5 min read",
    category: "Mental Health",
    image: "/gallery/pic5.jpg",
    content: [
      "Adolescence is a period of rapid change — physically, emotionally, and socially. For many young people in Kenya, this stage is complicated further by academic pressure, family expectations, economic hardship, and limited access to mental health support.",
      "At Adolescents Wellness Africa, we work directly with schools and communities, and we consistently see the same pattern: adolescents are rarely short on resilience, but they are often short on someone trained to notice when they're struggling and respond appropriately.",
      "This is why our programs focus on building that capacity where adolescents already spend most of their time — in schools — through counselling, peer support structures, and training for the teachers and parents around them.",
      "Supporting adolescent mental health isn't a one-time intervention. It's a system of care that needs to be built into the everyday environment young people live in.",
    ],
  },
  {
    slug: "signs-a-teenager-may-need-support",
    title: "Signs a Teenager May Need Mental Health Support",
    excerpt: "Practical, observable signs that parents, guardians, and teachers can look out for — and how to respond without adding pressure.",
    date: "2026-06-10",
    readTime: "4 min read",
    category: "For Parents",
    image: "/gallery/pic9.jpg",
    content: [
      "It's not always obvious when a teenager is struggling. Adolescents often express distress differently from adults — through withdrawal, irritability, changes in sleep or appetite, or a sudden drop in academic performance, rather than through words.",
      "Some signs worth paying attention to include a noticeable change in mood or energy that lasts more than two weeks, pulling away from friends or activities they used to enjoy, difficulty concentrating, or expressing hopelessness about the future.",
      "If you notice these changes, the most useful first step is simply creating space for an honest conversation — one that doesn't rush to fix things, but listens first.",
      "Where a young person's distress is ongoing or severe, connecting them with a trained counsellor is important. AWA works with schools to make this kind of support more accessible and less intimidating for adolescents to seek out.",
    ],
  },
  {
    slug: "supporting-teenagers-at-home",
    title: "Supporting Teenagers at Home: A Guide for Parents",
    excerpt: "Simple, everyday habits that help parents build trust with their teenagers and stay connected through a difficult stage.",
    date: "2026-06-18",
    readTime: "6 min read",
    category: "For Parents",
    image: "/gallery/pic11.jpg",
    content: [
      "Many parents tell us the same thing: their teenager used to share everything, and now shares almost nothing. This shift is a normal part of adolescent development, but it can still leave parents feeling shut out at exactly the moment their support matters most.",
      "Small, consistent habits tend to matter more than big conversations. Regular one-on-one time without an agenda, showing genuine curiosity about their interests, and resisting the urge to immediately correct or lecture all help keep the door open.",
      "It also helps to separate the behaviour from the person. A teenager who is struggling with a decision is not the same as a teenager who is fundamentally 'difficult' — how parents frame that difference shapes how safe their teenager feels coming to them next time.",
      "AWA runs parenting workshops that go deeper into these approaches, tailored to the realities of raising adolescents in Kenya today.",
    ],
  },
  {
    slug: "how-schools-can-support-adolescent-mental-health",
    title: "How Schools Can Support Adolescent Mental Health",
    excerpt: "What a mentally healthy school environment actually looks like, and where schools can start if they're building this from scratch.",
    date: "2026-06-25",
    readTime: "5 min read",
    category: "For Schools",
    image: "/gallery/pic13.jpg",
    content: [
      "Schools are uniquely positioned to support adolescent mental health simply because of how much time young people spend there. But this only works if the environment is set up to notice and respond to need, not just to teach curriculum.",
      "A mentally healthy school typically has a few things in common: at least one trained counselling resource, a referral pathway that teachers know how to use, peer support structures like mentorship or peer counsellors, and a staff culture that treats mental health as part of the school's responsibility rather than a side issue.",
      "None of this requires a large budget to start. AWA's school partnerships often begin with training existing staff and setting up simple referral systems before building toward more comprehensive support.",
      "The goal is a school where a struggling student is more likely to be noticed early — before a difficulty in class becomes a crisis.",
    ],
  },
  {
    slug: "life-skills-every-teenager-needs",
    title: "Life Skills Every Teenager Needs",
    excerpt: "Beyond academics — the practical, emotional, and social skills that help adolescents navigate adulthood with confidence.",
    date: "2026-07-02",
    readTime: "5 min read",
    category: "Life Skills",
    image: "/gallery/pic20.jpg",
    content: [
      "Academic success is only one part of preparing a young person for adulthood. Life skills — the practical, emotional, and social competencies adolescents need to navigate daily life — are just as critical, and often get far less attention.",
      "Some of the most important include emotional regulation, the ability to name and manage strong feelings; decision-making, weighing options and consequences rather than reacting impulsively; and communication, expressing needs and boundaries clearly and respectfully.",
      "These skills aren't innate — they're learned, usually through modelling and practice rather than lectures. That's why AWA's life skills programs are built around structured activities and real scenarios rather than one-off talks.",
      "Adolescents who build these skills early tend to carry them well into adulthood, shaping how they handle relationships, work, and setbacks for years to come.",
    ],
  },
  {
    slug: "creating-a-mentally-healthy-school-environment",
    title: "Creating a Mentally Healthy School Environment",
    excerpt: "Concrete, low-cost steps schools can take to build a culture where students feel safe raising their struggles.",
    date: "2026-07-09",
    readTime: "6 min read",
    category: "For Schools",
    image: "/gallery/D4.jpeg",
    content: [
      "A mentally healthy school isn't defined by having a counselling office — it's defined by whether students actually feel safe using it. That distinction matters, because many schools have resources that go underused simply because the surrounding culture discourages students from asking for help.",
      "Building that culture starts with language: how teachers talk about mental health in passing, whether struggling is treated as weakness or as something normal and addressable, and whether staff themselves model healthy responses to stress.",
      "It also means training teachers — not to be counsellors, but to recognise warning signs and know exactly who to refer a student to, without hesitation or stigma.",
      "AWA's capacity-building work with schools focuses on exactly this: equipping the adults around adolescents so the whole environment, not just one office, supports their wellbeing.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}