import { motion } from "motion/react"
import { Mail, MapPin } from "lucide-react"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { profile, socials } from "@/data/portfolio"

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-4xl px-4 py-24 sm:py-32"
    >
      <SectionHeading
        index="05 / Contact"
        title="Let's Build Something"
        subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        className="items-center text-center"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <BackgroundGradient
          className="border-2 border-border bg-card p-8 sm:p-12"
          containerClassName="rounded-none"
        >
          <div className="flex flex-col items-center text-center">
            <span className="grid h-16 w-16 place-items-center border-2 border-border bg-primary text-primary-foreground">
              <Mail className="h-7 w-7" />
            </span>

            <h3 className="mt-6 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Get in touch
            </h3>

            <a
              href={`mailto:${profile.email}`}
              className="mt-3 break-all font-mono text-base font-medium text-primary underline-offset-4 hover:underline sm:text-lg"
            >
              {profile.email}
            </a>

            <p className="mt-2 flex items-center gap-1.5 font-mono text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex items-center gap-2 border-2 border-border bg-background px-4 py-2 font-mono text-sm font-medium text-foreground transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-primary hover:text-primary-foreground hover:brutal-shadow"
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </a>
                )
              })}
            </div>
          </div>
        </BackgroundGradient>
      </motion.div>

      <footer className="mt-16 border-t-2 border-border pt-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          Designed & built by {profile.name} ·{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  )
}
