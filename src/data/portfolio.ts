import type { ComponentType, SVGProps } from "react"
import {
  Server,
  Atom,
  Triangle,
  Database,
  Leaf,
  Boxes,
  Network,
  Mail,
} from "lucide-react"
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/icons/brand-icons"

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export const profile = {
  name: "Amir Khalili",
  firstName: "Amir",
  lastName: "Khalili",
  roles: ["Full-Stack Developer", "Software Engineer", "Building since 2020"],
  tagline: "I build scalable, resilient systems from the database to the pixel.",
  email: "amir.khalili@example.com",
  location: "Remote / Worldwide",
  resumeUrl: "/resume.pdf",
  bio: `I'm a full-stack developer and software engineer who has been writing code since 2020. I specialize in designing distributed, microservice-based architectures and crafting fast, accessible interfaces. From shaping a Postgres schema to wiring up a React frontend, I care about the entire product — performance, reliability, and the small details that make software feel great to use.`,
}

export type SocialLink = {
  label: string
  href: string
  icon: IconComponent
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/amirkhalili", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/amirkhalili", icon: LinkedinIcon },
  { label: "Twitter", href: "https://twitter.com/amirkhalili", icon: XIcon },
  { label: "Email", href: "mailto:amir.khalili@example.com", icon: Mail },
]

export type Skill = {
  name: string
  description: string
  icon: IconComponent
  className?: string
}

export const skills: Skill[] = [
  {
    name: "NestJS",
    description: "Architecting modular, testable backend services with a scalable structure.",
    icon: Server,
    className: "md:col-span-2",
  },
  {
    name: "React",
    description: "Building interactive, component-driven user interfaces.",
    icon: Atom,
  },
  {
    name: "Next.js",
    description: "Server-rendered, SEO-friendly full-stack apps with the App Router.",
    icon: Triangle,
  },
  {
    name: "PostgreSQL",
    description: "Relational modeling, query optimization, and rock-solid data integrity.",
    icon: Database,
  },
  {
    name: "MongoDB",
    description: "Flexible document storage for high-velocity, schema-evolving data.",
    icon: Leaf,
  },
  {
    name: "Redis",
    description: "Caching, pub/sub, and queues for low-latency, high-throughput systems.",
    icon: Boxes,
  },
  {
    name: "Microservices",
    description: "Designing decoupled services that communicate cleanly and scale independently.",
    icon: Network,
    className: "md:col-span-2",
  },
]

export type TimelineMilestone = {
  year: string
  title: string
  description: string
}

export const milestones: TimelineMilestone[] = [
  {
    year: "2020",
    title: "Started Programming",
    description: "Began my journey with JavaScript and the web, falling in love with building things.",
  },
  {
    year: "2021",
    title: "Went Full-Stack",
    description: "Picked up Node.js, React, and SQL — shipping end-to-end features on my own.",
  },
  {
    year: "2022",
    title: "Backend Specialization",
    description: "Dove deep into NestJS, PostgreSQL, and clean architecture patterns.",
  },
  {
    year: "2023",
    title: "Distributed Systems",
    description: "Designed microservices with Redis, message queues, and event-driven flows.",
  },
  {
    year: "Today",
    title: "Software Engineer",
    description: "Building reliable, scalable products across the entire stack.",
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  points: string[]
}

export const experiences: Experience[] = [
  {
    company: "Independent / Freelance",
    role: "Full-Stack Engineer",
    period: "2023 — Present",
    points: [
      "Designed and shipped microservice backends with NestJS, PostgreSQL, and Redis.",
      "Built responsive React & Next.js frontends with a focus on performance and UX.",
      "Containerized services and set up CI/CD pipelines for reliable deployments.",
    ],
  },
  {
    company: "Product Startup",
    role: "Backend Developer",
    period: "2022 — 2023",
    points: [
      "Developed REST and event-driven APIs serving thousands of daily users.",
      "Modeled relational schemas and optimized slow queries by 60%.",
      "Introduced caching layers with Redis to cut response times significantly.",
    ],
  },
  {
    company: "Web Agency",
    role: "Junior Full-Stack Developer",
    period: "2020 — 2022",
    points: [
      "Delivered client websites and dashboards using React and Node.js.",
      "Collaborated with designers to translate mockups into pixel-perfect UIs.",
      "Learned the fundamentals of databases, APIs, and version control.",
    ],
  },
]

export type Project = {
  title: string
  description: string
  tech: string[]
  link: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: "Distributed Task Engine",
    description:
      "A microservice platform that schedules and processes background jobs at scale using Redis queues and event-driven workers.",
    tech: ["NestJS", "Redis", "PostgreSQL", "Docker"],
    link: "https://github.com/amirkhalili",
    repo: "https://github.com/amirkhalili",
  },
  {
    title: "Realtime Analytics Dashboard",
    description:
      "A Next.js dashboard streaming live metrics over WebSockets with a Mongo-backed ingestion pipeline.",
    tech: ["Next.js", "React", "MongoDB", "WebSockets"],
    link: "https://github.com/amirkhalili",
    repo: "https://github.com/amirkhalili",
  },
  {
    title: "E-Commerce API",
    description:
      "A modular commerce backend with cart, checkout, and inventory services, fronted by an API gateway.",
    tech: ["NestJS", "PostgreSQL", "Microservices"],
    link: "https://github.com/amirkhalili",
    repo: "https://github.com/amirkhalili",
  },
  {
    title: "Auth & Identity Service",
    description:
      "A reusable authentication service with JWT, refresh tokens, and role-based access control.",
    tech: ["NestJS", "Redis", "PostgreSQL"],
    link: "https://github.com/amirkhalili",
    repo: "https://github.com/amirkhalili",
  },
  {
    title: "Component Design System",
    description:
      "An accessible, themeable React component library powering several internal products.",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/amirkhalili",
    repo: "https://github.com/amirkhalili",
  },
  {
    title: "DevOps Toolkit",
    description:
      "CLI tooling and infrastructure templates that streamline containerized deployments.",
    tech: ["Docker", "Node.js", "CI/CD"],
    link: "https://github.com/amirkhalili",
    repo: "https://github.com/amirkhalili",
  },
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]
