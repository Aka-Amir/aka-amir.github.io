import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export function SectionHeading({
  index,
  title,
  subtitle,
  className,
}: {
  index: string
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 flex flex-col gap-3", className)}
    >
      <span className="font-mono text-sm font-bold uppercase tracking-widest text-primary">
        {index}
      </span>
      <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl font-mono text-sm text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-primary" />
    </motion.div>
  )
}
