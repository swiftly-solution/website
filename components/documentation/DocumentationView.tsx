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

export default function DocumentationView({ category, pagekey }: { category: string, pagekey: string }) {
    const { data, error, isLoading } = useSWR<APIResponse<Documentation>>(`/api/docs/getpage?page=${pagekey}&category=${category}`, fetcher)
    const [ navbarData, setNavbarData ] = useState<Documentation[]>([]);

    useEffect(() => {
        http.get(`/api/docs/navigation?category=${category}`).then((response) => {
            const data: APIResponse<Documentation[]> = response.data;
            if(data.status != 200) return ProcessNotification(data.message, ToastError)
            setNavbarData(data.message);
        })
    }, [])

    return (
        <SidebarProvider>
            <AppSidebar>
                <SidebarContent>
                    <SecondaryNav />
                </SidebarContent>
            </AppSidebar>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <DocumentationBreadcrumb navbarData={navbarData} category={category} pagekey={pagekey} />
                    </div>
                </header>
                <div className="px-4">
                    {
                        isLoading ? <LoaderIcon className="animate-spin" /> : (
                            error || !data ? <ErrorCard text={error?.message} /> : (
                                data.status != 200 ? <ErrorCard text={String(data.message)} /> : <DocumentationRender content={data.message.content} />
                            )
                        )
                    }
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}