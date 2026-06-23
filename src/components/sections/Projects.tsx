import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/icons/brand-icons"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { projects } from "@/data/portfolio"

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-6xl px-4 py-24 sm:py-32"
    >
      <SectionHeading
        index="04 / Projects"
        title="Things I've Built"
        subtitle="A selection of systems and products I've designed and engineered."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
            className="relative"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence>
              {hovered === idx && (
                <motion.span
                  layoutId="project-hover"
                  className="absolute inset-0 z-0 bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
                  style={{ translate: "6px 6px" }}
                />
              )}
            </AnimatePresence>

            <article className="relative z-10 flex h-full flex-col border-2 border-border bg-card p-6 brutal-shadow">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-extrabold tracking-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} repository`}
                      className="grid h-8 w-8 place-items-center border-2 border-border bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live link`}
                    className="grid h-8 w-8 place-items-center border-2 border-border bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="mt-3 flex-1 font-mono text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="border-2 border-border bg-secondary px-2 py-0.5 font-mono text-xs font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
