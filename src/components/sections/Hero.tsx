import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { ArrowDown, FileDown, FolderGit2 } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"
import { profile } from "@/data/portfolio"

function RotatingTypewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    const speed = deleting ? 45 : 90

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400)
        }
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === "") {
          setDeleting(false)
          setIndex((i) => (i + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return (
    <span className="font-mono text-primary">
      {text}
      <span className="ml-1 inline-block h-[1em] w-[3px] translate-y-[2px] animate-pulse bg-primary" />
    </span>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pt-24"
    >
      <BackgroundBeams className="opacity-60" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block border-2 border-border bg-card px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-widest brutal-shadow sm:text-sm"
        >
          Hi, I'm a developer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-extrabold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl"
          style={{ textShadow: "4px 4px 0 var(--primary)" }}
        >
          {profile.firstName}
          <br />
          {profile.lastName}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex min-h-[2.5rem] items-center text-xl font-bold sm:text-2xl md:text-3xl"
        >
          <span className="text-muted-foreground">&gt;&nbsp;</span>
          <RotatingTypewriter words={profile.roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 max-w-xl text-balance font-mono text-sm text-muted-foreground sm:text-base"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MovingBorderButton
            as="a"
            href="#projects"
            duration={3000}
            borderRadius="0rem"
            containerClassName="h-14 w-52"
            borderClassName="bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
            className="border-2 border-border bg-primary font-mono text-sm font-bold uppercase tracking-wider text-primary-foreground"
          >
            <FolderGit2 className="mr-2 h-4 w-4" />
            View Projects
          </MovingBorderButton>

          <MovingBorderButton
            as="a"
            href={profile.resumeUrl}
            duration={3000}
            borderRadius="0rem"
            containerClassName="h-14 w-52"
            borderClassName="bg-[radial-gradient(var(--foreground)_40%,transparent_60%)]"
            className="border-2 border-border bg-card font-mono text-sm font-bold uppercase tracking-wider text-foreground"
          >
            <FileDown className="mr-2 h-4 w-4" />
            Download CV
          </MovingBorderButton>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 z-10 grid h-11 w-11 place-items-center border-2 border-border bg-card text-foreground brutal-shadow"
      >
        <ArrowDown className="h-5 w-5 animate-scroll-bounce" />
      </motion.a>
    </section>
  )
}
