export type Locale = "en" | "fa"

export type LocaleProfile = {
  name: string
  firstName: string
  lastName: string
  roles: string[]
  tagline: string
  location: string
  bio: string
}

export type LocaleNavLink = {
  label: string
  href: string
}

export type LocaleSkill = {
  name: string
  description: string
}

export type LocaleMilestone = {
  year: string
  title: string
  description: string
}

export type LocaleExperience = {
  company: string
  role: string
  period: string
  points: string[]
}

export type LocaleProject = {
  title: string
  description: string
}

export type LocaleData = {
  meta: {
    title: string
  }
  profile: LocaleProfile
  nav: LocaleNavLink[]
  hero: {
    greeting: string
    viewProjects: string
    downloadCv: string
    scrollToAbout: string
  }
  sections: {
    about: { index: string; title: string }
    skills: { index: string; title: string; subtitle: string }
    experience: { index: string; title: string; subtitle: string }
    projects: { index: string; title: string; subtitle: string }
    contact: { index: string; title: string; subtitle: string }
  }
  skills: LocaleSkill[]
  milestones: LocaleMilestone[]
  experiences: LocaleExperience[]
  projects: LocaleProject[]
  socials: {
    github: string
    linkedin: string
    x: string
    instagram: string
    email: string
  }
  contact: {
    getInTouch: string
    footer: string
  }
  a11y: {
    toggleTheme: string
    toggleMenu: string
    repoLink: string
    liveLink: string
  }
  language: {
    en: string
    fa: string
  }
  resume: {
    summary: string
    skills: string
    experience: string
    projects: string
    journey: string
    contact: string
    location: string
    printAgain: string
    backHome: string
  }
}
