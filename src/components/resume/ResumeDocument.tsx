import type { ReactNode } from "react"
import type { LocaleData } from "@/types/locale"
import { profileStatic, projectMeta, socialLinks } from "@/data/portfolio"

function ResumeSection({
  index,
  title,
  children,
  className,
}: {
  index: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={className}>
      <div className="mb-3 flex items-center gap-3">
        <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
          {index}
        </span>
        <h2 className="shrink-0 text-base font-extrabold tracking-tight">
          {title}
        </h2>
        <div className="h-1 min-w-8 flex-1 bg-primary" />
      </div>
      {children}
    </section>
  )
}

type ResumeDocumentProps = {
  t: LocaleData
}

export function ResumeDocument({ t }: ResumeDocumentProps) {
  const contactItems: Array<{
    label: string
    value: string
    href?: string
  }> = [
    {
      label: t.socials.email,
      value: profileStatic.email,
      href: `mailto:${profileStatic.email}`,
    },
    {
      label: t.resume.location,
      value: t.profile.location,
    },
    ...socialLinks
      .filter((link) => link.key !== "email")
      .map((link) => ({
        label: t.socials[link.key],
        value: link.href.replace(/^https?:\/\//, ""),
        href: link.href,
      })),
  ]

  return (
    <article className="mx-auto w-full max-w-[210mm] px-6 py-8 font-mono sm:px-10 sm:py-10">
      <header className="border-2 border-border bg-card p-5 brutal-shadow sm:p-6">
        <div className="flex items-start gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center border-2 border-border bg-primary text-xl font-extrabold text-primary-foreground">
            {t.profile.firstName[0]}
            {t.profile.lastName[0]}
          </span>
          <div>
            <h1
              className="text-3xl font-extrabold leading-none tracking-tighter sm:text-4xl"
              style={{ textShadow: "3px 3px 0 var(--primary)" }}
            >
              {t.profile.name}
            </h1>
            <p className="mt-2 text-sm font-bold text-primary">
              {t.profile.roles[0]}
            </p>
            <p className="mt-1 max-w-xl text-xs leading-relaxed text-muted-foreground">
              {t.profile.tagline}
            </p>
          </div>
        </div>

        <ul className="mt-5 grid grid-cols-2 gap-3 border-2 border-border bg-background p-3 text-xs brutal-shadow sm:grid-cols-3">
            {contactItems.map((item) => (
              <li key={item.label + item.value} className="flex flex-col gap-0.5">
                <span className="font-bold uppercase tracking-wider text-primary">
                  {item.label}
                </span>
                {item.href ? (
                  <a href={item.href} className="break-all text-foreground">
                    {item.value}
                  </a>
                ) : (
                  <span className="break-all text-foreground">{item.value}</span>
                )}
              </li>
            ))}
        </ul>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <ResumeSection
            index={t.sections.experience.index}
            title={t.resume.experience}
          >
            <div className="space-y-4">
              {t.experiences.map((exp) => (
                <div
                  key={exp.company + exp.period}
                  className="border-2 border-border bg-card p-4 brutal-shadow print:break-inside-avoid"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-sm font-extrabold tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-xs leading-relaxed text-foreground/90"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection
            index={t.sections.projects.index}
            title={t.resume.projects}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {t.projects.map((project, idx) => {
                const meta = projectMeta[idx]
                return (
                  <div
                    key={project.title}
                    className="flex flex-col border-2 border-border bg-card p-3 brutal-shadow print:break-inside-avoid"
                  >
                    <h3 className="text-sm font-extrabold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 flex-1 text-[11px] leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {meta.tech.map((tech) => (
                        <span
                          key={tech}
                          className="border border-border bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </ResumeSection>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <ResumeSection
            index={t.sections.about.index}
            title={t.resume.summary}
          >
            <div className="border-2 border-border bg-card p-4 text-xs leading-relaxed text-foreground/90 brutal-shadow">
              {t.profile.bio}
            </div>
          </ResumeSection>

          <ResumeSection
            index={t.sections.skills.index}
            title={t.resume.skills}
          >
            <div className="space-y-2">
              {t.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="border-2 border-border bg-card p-3 brutal-shadow print:break-inside-avoid"
                >
                  <h3 className="text-xs font-extrabold tracking-tight">
                    {skill.name}
                  </h3>
                  <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection
            index="→"
            title={t.resume.journey}
          >
            <ol className="space-y-3 border-s-2 border-border ps-4">
              {t.milestones.map((m) => (
                <li
                  key={m.year + m.title}
                  className="relative print:break-inside-avoid"
                >
                  <span className="absolute -start-[21px] top-1 grid h-2.5 w-2.5 place-items-center border-2 border-border bg-primary" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {m.year}
                  </p>
                  <h3 className="text-xs font-bold">{m.title}</h3>
                  <p className="text-[10px] leading-relaxed text-muted-foreground">
                    {m.description}
                  </p>
                </li>
              ))}
            </ol>
          </ResumeSection>
        </div>
      </div>

      <footer className="resume-footer mt-8 border-t-2 border-border pt-4 text-center">
        <p className="text-[10px] text-muted-foreground">
          {t.profile.name} · {profileStatic.email} · {t.profile.location}
        </p>
      </footer>
    </article>
  )
}
