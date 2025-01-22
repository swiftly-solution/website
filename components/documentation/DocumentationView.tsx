import { APIResponse } from "@/modules/types/APIResponse";
import SecondaryNav from "../sidebar/SecondaryNav";
import { AppSidebar } from "../ui/app-sidebar";
import { Separator } from "../ui/separator";
import { SidebarContent, SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import DocumentationBreadcrumb from "./DocumentationBreadcrumb";
import { Documentation } from "@prisma/client";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import DocumentationRender from "./DocumentationRender";
import { LoaderIcon } from "lucide-react";
import { ErrorCard } from "../ui/alert-cards";
import { useEffect, useState } from "react";
import http from "@/lib/http";
import { ProcessNotification, ToastError } from "@/modules/notifications/toasts";
import DocumentationNavbar from "./DocumentationNavbar";
import DocumentationNav from "../sidebar/DocumentationNav";
import { useTheme } from "../ui/theme-provider";
import DocumentationSearch from "./DocumentationSearch";

export default function DocumentationView({ category, pagekey }: { category: string, pagekey: string }) {
    const { data, error, isLoading } = useSWR<APIResponse<Documentation>>(`/api/docs/getpage?page=${encodeURIComponent(pagekey)}&category=${category}`, fetcher)
    const [ navbarData, setNavbarData ] = useState<Documentation[]>([]);

    useEffect(() => {
        http.get(`/api/docs/navigation?category=${category}`).then((response) => {
            const data: APIResponse<Documentation[]> = response.data;
            if(data.status != 200) return ProcessNotification(data.message, ToastError)
            setNavbarData(data.message);
        })
    }, [category])

    return (
        <SidebarProvider>
            <AppSidebar>
                <DocumentationNav />
                <SidebarContent>
                    <DocumentationNavbar navbarData={navbarData} pagekey={pagekey} />
                    <SecondaryNav />
                </SidebarContent>
            </AppSidebar>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 px-4 w-full">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <DocumentationBreadcrumb navbarData={navbarData} pagekey={pagekey} />
                        <div className="ml-auto">
                            <DocumentationSearch />
                        </div>
                    </div>
                </header>
                <div className="px-4 pb-4 sm:flex sm:flex-col md:grid md:grid-cols-[3fr_1fr] gap-4">
                    <div>
                    {
                        isLoading ? <LoaderIcon className="animate-spin" /> : (
                            error || !data ? <ErrorCard text={error?.message} /> : (
                                data.status != 200 ? <ErrorCard text={String(data.message)} /> : <DocumentationRender navbarData={navbarData} content={data.message.content} />
                            )
                        )
                    }
                    </div>
                    <div className="mx-auto">
                        <iframe src={`https://ptb.discord.com/widget?id=1178027657594687608&theme=${useTheme().theme}`} width="350" height="500" frameBorder={0} sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}