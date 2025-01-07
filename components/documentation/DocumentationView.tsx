import SecondaryNav from "../sidebar/SecondaryNav";
import { AppSidebar } from "../ui/app-sidebar";
import { Separator } from "../ui/separator";
import { SidebarContent, SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";

export default function DocumentationView({ category }: { category: string }) {
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
                    </div>
                </header>
            </SidebarInset>
        </SidebarProvider>
    )
}