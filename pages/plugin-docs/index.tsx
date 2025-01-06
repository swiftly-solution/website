import { AppSidebar } from "@/components/ui/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import PageContentBlock from "@/elements/PageContentBlock";

export default function PluginDocs() {
    return (
        <PageContentBlock title={"Plugin Documentation"}>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                        </div>
                    </header>
                </SidebarInset>
            </SidebarProvider>
        </PageContentBlock>
    )
}