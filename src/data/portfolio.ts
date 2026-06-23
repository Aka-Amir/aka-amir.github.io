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

export const profileStatic = {
  email: "amir.khalili@example.com",
  resumeUrl: "/pdf",
}

export type SocialKey = "github" | "linkedin" | "twitter" | "email"

export type SocialLinkStatic = {
  key: SocialKey
  href: string
  icon: IconComponent
}

export const socialLinks: SocialLinkStatic[] = [
  { key: "github", href: "https://github.com/amirkhalili", icon: GithubIcon },
  { key: "linkedin", href: "https://linkedin.com/in/amirkhalili", icon: LinkedinIcon },
  { key: "twitter", href: "https://twitter.com/amirkhalili", icon: XIcon },
  { key: "email", href: "mailto:amir.khalili@example.com", icon: Mail },
]

export type SkillStatic = {
  icon: IconComponent
  className?: string
}

export const skillMeta: SkillStatic[] = [
  { icon: Server, className: "md:col-span-2" },
  { icon: Atom },
  { icon: Triangle },
  { icon: Database },
  { icon: Leaf },
  { icon: Boxes },
  { icon: Network, className: "md:col-span-2" },
]

export type ProjectStatic = {
  tech: string[]
  link: string
  repo?: string
}

export const projectMeta: ProjectStatic[] = [
  {
    tech: ["NestJS", "Redis", "PostgreSQL", "Docker"],
    link: "https://github.com/amirkhalili",
    repo: "https://github.com/amirkhalili",
  },
  {
    tech: ["Next.js", "React", "MongoDB", "WebSockets"],
    link: "https://github.com/amirkhalili",
    repo: "https://github.com/amirkhalili",
  },
  {
    tech: ["NestJS", "PostgreSQL", "Microservices"],
    link: "https://github.com/amirkhalili",
    repo: "https://github.com/amirkhalili",
  },
  {
    tech: ["NestJS", "Redis", "PostgreSQL"],
    link: "https://github.com/amirkhalili",
    repo: "https://github.com/amirkhalili",
  },
  {
    tech: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/amirkhalili",
    repo: "https://github.com/amirkhalili",
  },
  {
    tech: ["Docker", "Node.js", "CI/CD"],
    link: "https://github.com/amirkhalili",
    repo: "https://github.com/amirkhalili",
  },
]

export const locales = ["en", "fa"] as const
