import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/hooks/use-theme"
import { navLinks, profile } from "@/data/portfolio"

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between gap-4 border-2 border-border px-4 py-3 transition-all duration-300",
          scrolled
            ? "bg-card/95 brutal-shadow backdrop-blur-md"
            : "bg-card/60 backdrop-blur-sm",
        )}
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-lg font-extrabold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center border-2 border-border bg-primary text-primary-foreground">
            {profile.firstName[0]}
            {profile.lastName[0]}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 font-mono text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="grid h-9 w-9 cursor-pointer place-items-center border-2 border-border bg-background text-foreground transition-all hover:bg-primary hover:text-primary-foreground active:translate-x-[2px] active:translate-y-[2px]"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 cursor-pointer place-items-center border-2 border-border bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 grid max-w-5xl gap-1 border-2 border-border bg-card p-2 brutal-shadow md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 font-mono text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
