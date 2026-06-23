import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { validateRootSearch } from "@/lib/search";

export const rootRoute = createRootRoute({
  validateSearch: validateRootSearch,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
});

export const pdfRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pdf",
});

export const routeTree = rootRoute.addChildren([indexRoute, pdfRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
