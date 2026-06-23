import { motion } from "motion/react"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Spotlight } from "@/components/ui/spotlight"
import { useLocale } from "@/hooks/use-locale"

export function About() {
  const { t } = useLocale()

  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-24 sm:py-32"
    >
      <Spotlight
        className="-top-40 start-0 md:-top-20 md:start-60"
        fill="var(--primary)"
      />

      <SectionHeading
        index={t.sections.about.index}
        title={t.sections.about.title}
      />

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="border-2 border-border bg-card p-6 brutal-shadow sm:p-8">
            <TextGenerateEffect
              words={t.profile.bio}
              className="font-mono"
              duration={0.4}
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <ol className="relative space-y-6 border-s-2 border-border ps-6">
            {t.milestones.map((m, i) => (
              <motion.li
                key={m.year + m.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -start-[31px] top-1 grid h-4 w-4 place-items-center border-2 border-border bg-primary" />
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                  {m.year}
                </p>
                <h3 className="mt-1 text-lg font-bold tracking-tight">
                  {m.title}
                </h3>
                <p className="mt-1 font-mono text-sm text-muted-foreground">
                  {m.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
