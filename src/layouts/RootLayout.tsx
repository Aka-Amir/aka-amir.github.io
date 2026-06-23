import { Outlet } from "@tanstack/react-router"
import { ThemeProvider } from "@/hooks/use-theme"
import { LocaleProvider } from "@/hooks/use-locale"

export function RootLayout() {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </LocaleProvider>
  )
}
