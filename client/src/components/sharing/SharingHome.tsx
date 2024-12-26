import PageContentBlock from "@/elements/PageContentBlock";
import { Header } from "./Header";
import { useLocation } from "react-router-dom";

export default function SharingHome() {
    const route = useLocation().pathname
    console.log(route)

    return (
        <PageContentBlock title={route.startsWith("/plugin") ? "Plugin Sharing" : "Extension Sharing"}>
            <Header />
        </PageContentBlock>
    )
}