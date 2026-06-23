import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router"
import { ThemeProvider } from "@/hooks/use-theme"
import { LocaleProvider } from "@/hooks/use-locale"
import { HomePage } from "@/pages/HomePage"
import { PdfPage } from "@/pages/PdfPage"

function RootLayout() {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </LocaleProvider>
  )
}

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})

const pdfRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pdf",
  component: PdfPage,
})

const routeTree = rootRoute.addChildren([indexRoute, pdfRoute])

export const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
