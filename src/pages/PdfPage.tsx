import { useEffect } from "react"
import { ArrowLeft, Printer } from "lucide-react"
import { ResumeDocument } from "@/components/resume/ResumeDocument"
import { IndexLink } from "@/components/routing/RoutedLinks"
import { useLocale } from "@/hooks/use-locale"

export function PdfPage() {
  const { t, locale } = useLocale()

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.print()
    }, 400)

    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div className="pdf-resume min-h-screen bg-background text-foreground">
      <div className="no-print fixed inset-x-4 top-4 z-50 flex items-center justify-between">
        <IndexLink
          lang={locale}
          className="flex items-center gap-2 border-2 border-border bg-card px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-foreground brutal-shadow transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.resume.backHome}
        </IndexLink>

        <button
          type="button"
          onClick={() => window.print()}
          className="flex cursor-pointer items-center gap-2 border-2 border-border bg-card px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-foreground brutal-shadow transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-primary hover:text-primary-foreground"
        >
          <Printer className="h-4 w-4" />
          {t.resume.printAgain}
        </button>
      </div>

      <ResumeDocument t={t} />
    </div>
  )
}
