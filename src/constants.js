// ── Hero Section ──────────────────────────────────────────────
export const HERO = {
  avatarInitials: 'AR',
  greeting: 'Hi, I\'m Ansu 👋',
  headlineParts: [
    { text: 'Building digital\n' },
    { text: 'products, brands,\nand ' },
    { text: 'experience.', accent: true },
  ],
  taglinePart1: 'a Backend Developer',
  taglinePart2: 'and Full-Stack Builder.',
  taglinePart3: 'I specialize in Go, REST APIs, Distributed Systems,\nand Modern Web Development.',
  ctaText: 'CONNECT WITH ME',
  scrollLabel: 'Scroll',
}

// ── Tech Stack (Bento Grid) ────────────────────────────────────

export const TECH_STACK = [
  {
    id: 'golang',
    name: 'Go',
    label: 'Backend',
    description: 'Blazing-fast APIs & concurrent systems',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    accent: '#00ADD8',
    size: 'large',
  },
  {
    id: 'react',
    name: 'React',
    label: 'Frontend',
    description: 'Composable UIs at scale',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    accent: '#61DAFB',
    size: 'medium',
  },
  {
    id: 'nestjs',
    name: 'Nest JS',
    label: 'Node Framework',
    description: 'Fast, scalable REST APIs',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
    accent: '#ffffff',
    size: 'medium',
  },
  {
    id: 'pocketbase',
    name: 'Pocketbase',
    label: 'BaaS',
    description: 'SQLite-powered open-source backend',
    icon: 'https://pocketbase.io/images/logo.svg',
    accent: '#EC4899',
    size: 'medium',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    label: 'Database',
    description: 'Reliable relational data storage',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    accent: '#336791',
    size: 'medium',
  },
  {
    id: 'redis',
    name: 'Redis',
    label: 'Cache & Queue',
    description: 'Sub-millisecond data access',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    accent: '#FF4438',
    size: 'wide',
  },
]

// ── Skills Section ─────────────────────────────────────────────
export const SKILLS = {
  label: 'Tech Stack',
  headlineLine1: 'WHAT I',
  headlineLine2: 'BUILD WITH',
  subtext: 'My go-to tools for building robust backends, blazing APIs, and modern web experiences.',
}

// ── Contact Section ────────────────────────────────────────────
export const CONTACT = {
  // Left pane
  leftTitle: 'Let\'s build something great.',
  leftSub: 'Open for freelance, collabs, and open-source. Hit me up on any channel.',
  discord: 'https://discord.com/users/rip_phantom8835',   // ← replace with your Discord user link
  instagram: 'https://www.instagram.com/akrishnarijal/',       // ← replace with your Instagram handle
  email: 'arcanepog@gmail.com',                               // ← replace with your email

  // Right pane — form
  formTitle: 'Contact Me',
  formSub: 'Let me know what you\'d like to talk about.',
  nameLabel: 'Ansu Rijal*',
  namePlaceholder: 'Name',
  emailLabel: 'Ansu Rijal*',
  emailPlaceholder: 'Email',
  messageLabel: 'Your Message*',
  messagePlaceholder: 'Type here…',
  submitText: 'SEND MESSAGE',
  successMsg: 'Message sent! I\'ll get back to you soon.',
}
