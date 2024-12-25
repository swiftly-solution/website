import { lazy } from "react";
import { Route } from "./types/api/Route";

const LandingPage = lazy(() => import("@/components/landing/LandingPage"));

export const routes: Route[] = [
    {
        name: "",
        node: <LandingPage />,
        route: "/",
        exact: true
    }
]