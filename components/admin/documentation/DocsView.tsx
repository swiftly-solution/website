import AdminPagesNav from "@/components/sidebar/AdminPagesNav";
import SecondaryNav from "@/components/sidebar/SecondaryNav";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarContent, SidebarGroup, SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function AdminDocsView({ children }: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar>
                <AdminPagesNav />
                <SidebarContent>
                    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                        
                    </SidebarGroup>
                    <SecondaryNav />
                </SidebarContent>
            </AppSidebar>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}