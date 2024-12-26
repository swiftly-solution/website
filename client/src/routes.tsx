import { lazy } from "react";
import { Route } from "./types/api/Route";

const LandingPage = lazy(() => import("@/components/landing/LandingPage"));
const SharingHome = lazy(() => import("@/components/sharing/SharingHome"))

export const routes: Route[] = [
    {
        name: "",
        node: <LandingPage />,
        route: "/",
        exact: true
    },
    {
        name: "",
        node: <SharingHome />,
        route: "/plugin-sharing",
        exact: true
    },
    {
        name: "",
        node: <SharingHome />,
        route: "/ext-sharing",
        exact: true
    }
]