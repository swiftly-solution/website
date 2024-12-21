import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import { Suspense } from "react";
import PageContentBlock from "../elements/PageContentBlock";

export default function RoutesFunc() {
    return (
        <Routes>
            {routes.filter((route) => route.route.length > 0).map((route, idx) => (
                <Route key={idx} path={route.route} element={<Suspense fallback={<PageContentBlock title={"Loading..."}><></></PageContentBlock>}>{route.node}</Suspense>} />
            ))}
            <Route path="*" element={<Navigate to={"/"} replace={true} />} />
        </Routes>
    )
}