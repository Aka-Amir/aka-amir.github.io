import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { getRouteApi, useLocation, useNavigate } from "@tanstack/react-router"
import type { Locale, LocaleData } from "@/types/locale"
import { withLangSearch } from "@/lib/search"

const STORAGE_KEY = "portfolio-locale"
const rootRouteApi = getRouteApi("__root__")

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: LocaleData
  isLoading: boolean
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function getStoredOrBrowserLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === "en" || stored === "fa") return stored
  return navigator.language.startsWith("fa") ? "fa" : "en"
}

async function fetchLocale(locale: Locale): Promise<LocaleData> {
  const response = await fetch(`/locales/${locale}.json`)
  if (!response.ok) {
    throw new Error(`Failed to load locale: ${locale}`)
  }
  return response.json() as Promise<LocaleData>
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { lang: urlLang } = rootRouteApi.useSearch()
  const navigate = useNavigate()
  const pathname = useLocation({ select: (location) => location.pathname })
  const [storedLocale, setStoredLocale] = useState<Locale>(getStoredOrBrowserLocale)
  const locale = urlLang ?? storedLocale
  const [t, setT] = useState<LocaleData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setIsLoading(true)
      try {
        const data = await fetchLocale(locale)
        if (!cancelled) {
          setT(data)
        }
      } catch {
        if (!cancelled && locale !== "en") {
          const fallback = await fetchLocale("en")
          if (!cancelled) setT(fallback)
        }
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [locale])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr"
    if (t) {
      document.title = t.meta.title
    }
  }, [locale, t])

  const setLocale = useCallback(
    (next: Locale) => {
      localStorage.setItem(STORAGE_KEY, next)
      setStoredLocale(next)
      navigate({
        to: pathname,
        search: withLangSearch(next),
        replace: true,
      })
    },
    [navigate, pathname],
  )

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: t!,
      isLoading,
    }),
    [locale, setLocale, t, isLoading],
  )

  if (isLoading || !t) {
    return (
      <div className="grid min-h-screen place-items-center bg-background text-foreground">
        <div className="flex flex-col items-center gap-3">
          <span className="h-8 w-8 animate-pulse border-2 border-border bg-primary" />
          <p className="font-mono text-sm text-muted-foreground">Loading…</p>
        </div>
      </div>
    )
  }

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider")
  }
  return ctx
}
