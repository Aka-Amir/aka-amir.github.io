import type { Locale } from "@/types/locale"

export type RootSearch = {
  lang?: Locale
}

export function validateRootSearch(search: Record<string, unknown>): RootSearch {
  const lang = search.lang
  if (lang === "en" || lang === "fa") {
    return { lang }
  }
  return {}
}

export function withLangSearch(lang: Locale): RootSearch {
  return { lang }
}
