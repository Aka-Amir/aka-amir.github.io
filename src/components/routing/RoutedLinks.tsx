import { Link, linkOptions } from "@tanstack/react-router"
import type { ReactNode } from "react"
import type { Locale } from "@/types/locale"
import { indexLinkOptions } from "@/lib/route-links"

type RoutedLinkProps = {
  lang: Locale
  className?: string
  children: ReactNode
}

export function IndexLink({ lang, className, children }: RoutedLinkProps) {
  return (
    <Link {...indexLinkOptions(lang)} className={className}>
      {children}
    </Link>
  )
}

export function PdfLink({ lang, className, children }: RoutedLinkProps) {
  return (
    <Link
      {...linkOptions({
        to: "/pdf",
        search: { lang },
      })}
      className={className}
    >
      {children}
    </Link>
  )
}
