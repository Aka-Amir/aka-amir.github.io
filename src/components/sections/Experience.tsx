import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Briefcase } from "lucide-react"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { useLocale } from "@/hooks/use-locale"

export function Experience() {
  const { t } = useLocale()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-5xl px-4 py-24 sm:py-32"
    >
      <SectionHeading
        index={t.sections.experience.index}
        title={t.sections.experience.title}
        subtitle={t.sections.experience.subtitle}
      />

      <div ref={containerRef} className="relative ps-10 sm:ps-16">
        <div className="absolute start-[14px] top-2 h-full w-[2px] bg-border sm:start-[22px]" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute start-[14px] top-2 h-full w-[2px] origin-top bg-primary sm:start-[22px]"
        />

        <div className="space-y-10">
          {t.experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -start-10 top-1 grid h-8 w-8 place-items-center border-2 border-border bg-primary text-primary-foreground sm:-start-16">
                <Briefcase className="h-4 w-4" />
              </span>

              <div className="border-2 border-border bg-card p-5 brutal-shadow transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:brutal-shadow-lg sm:p-6">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <h3 className="text-xl font-extrabold tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-sm font-medium text-muted-foreground">
                  {exp.company}
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 font-mono text-sm text-foreground/90"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
