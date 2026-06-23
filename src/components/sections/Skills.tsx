import { motion } from "motion/react"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { skillMeta } from "@/data/portfolio"
import { useLocale } from "@/hooks/use-locale"

export function Skills() {
  const { t } = useLocale()

  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-4 py-24 sm:py-32"
    >
      <SectionHeading
        index={t.sections.skills.index}
        title={t.sections.skills.title}
        subtitle={t.sections.skills.subtitle}
      />

      <BentoGrid className="md:auto-rows-[14rem]">
        {t.skills.map((skill, i) => {
          const meta = skillMeta[i]
          const Icon = meta.icon
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={meta.className}
            >
              <BentoGridItem
                className="group h-full rounded-none border-2 border-border bg-card brutal-shadow transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:brutal-shadow-lg dark:bg-card"
                icon={
                  <span className="grid h-12 w-12 place-items-center border-2 border-border bg-primary text-primary-foreground transition-transform duration-200 group-hover:rotate-[-6deg]">
                    <Icon className="h-6 w-6" />
                  </span>
                }
                title={
                  <span className="font-mono text-lg font-extrabold tracking-tight text-foreground">
                    {skill.name}
                  </span>
                }
                description={
                  <span className="font-mono text-sm text-muted-foreground">
                    {skill.description}
                  </span>
                }
              />
            </motion.div>
          )
        })}
      </BentoGrid>
    </section>
  )
}
