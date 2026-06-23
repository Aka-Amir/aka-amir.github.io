import { HomePage } from "@/pages/HomePage"
import { PdfPage } from "@/pages/PdfPage"
import { RootLayout } from "@/layouts/RootLayout"
import {
  indexRoute,
  pdfRoute,
  rootRoute,
} from "@/route-tree"

rootRoute.update({ component: RootLayout })
indexRoute.update({ component: HomePage })
pdfRoute.update({ component: PdfPage })

export { router } from "@/route-tree"
