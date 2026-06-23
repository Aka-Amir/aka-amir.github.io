import { linkOptions } from "@tanstack/react-router"
import type { Locale } from "@/types/locale"

export function pdfLinkOptions(lang: Locale) {
  return linkOptions({
    to: "/pdf",
    search: { lang },
  })
}

export function indexLinkOptions(lang: Locale) {
  return linkOptions({
    to: "/",
    search: { lang },
  })
}
