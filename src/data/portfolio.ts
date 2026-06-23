import type { ComponentType, SVGProps } from "react";
import {
  Server,
  Atom,
  Triangle,
  Database,
  Leaf,
  Boxes,
  Network,
  Mail,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
} from "@/components/icons/brand-icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const profileStatic = {
  email: "amirkhalili047@outlook.com",
  resumeUrl: "/pdf",
};

export type SocialKey = "github" | "linkedin" | "x" | "instagram" | "email";

export type SocialLinkStatic = {
  key: SocialKey;
  href: string;
  icon: IconComponent;
};

export const socialLinks: SocialLinkStatic[] = [
  { key: "github", href: "https://github.com/Aka-Amir", icon: GithubIcon },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/amir-khalili-405b531b8/?skipRedirect=true",
    icon: LinkedinIcon,
  },
  { key: "x", href: "https://x.com/aka_archer_01", icon: XIcon },
  {
    key: "instagram",
    href: "https://www.instagram.com/aka_amir.pv",
    icon: InstagramIcon,
  },
  { key: "email", href: "mailto:amirkhalili047@outlook.com", icon: Mail },
];

export type SkillStatic = {
  icon: IconComponent;
  className?: string;
};

export const skillMeta: SkillStatic[] = [
  { icon: Server, className: "md:col-span-2" },
  { icon: Atom },
  { icon: Triangle },
  { icon: Database },
  { icon: Leaf },
  { icon: Boxes },
  { icon: Network, className: "md:col-span-2" },
];

export type ProjectStatic = {
  tech: string[];
  link: string;
  repo?: string;
};

export const projectMeta: ProjectStatic[] = [
  {
    tech: ["NestJS", "Redis", "PostgreSQL", "Docker", "React"],
    link: "https://medad2.pod.ir",
    repo: "https://medad2.pod.ir",
  },
  {
    tech: ["Node.js", "TypeScript"],
    link: "https://www.npmjs.com/package/@api-weaver/core",
    repo: "https://github.com/Aka-Amir/api-weaver",
  },
  {
    tech: ["NestJS", "ActiveMQ", "Microservices"],
    link: "https://www.npmjs.com/package/@fingercoder/nestjs-activemq",
    repo: "https://github.com/Aka-Amir/nestjs-activemq",
  },
  {
    tech: ["React", "AI Agents", "Cursor skills"],
    link: "https://github.com/Aka-Amir/contract-builder-front",
    repo: "https://github.com/Aka-Amir/contract-builder-front",
  },
  {
    tech: ["Python"],
    link: "https://github.com/Aka-Amir/keylogger",
    repo: "https://github.com/Aka-Amir/keylogger",
  },
];

export const locales = ["en", "fa"] as const;
