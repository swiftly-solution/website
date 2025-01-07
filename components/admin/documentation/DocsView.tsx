import AdminPagesNav from "@/components/sidebar/AdminPagesNav";
import SecondaryNav from "@/components/sidebar/SecondaryNav";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarContent, SidebarGroup, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { HomeIcon, ListIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const adminRoutes = [
    {
        name: "Home",
        icon: HomeIcon,
        url: "/admin/docs"
    },
    {
        name: "Pages",
        icon: ListIcon,
        url: "/admin/docs/pages"
    }
]

export default function AdminDocsView({ children }: { children: ReactNode }) {
    const path = useRouter().pathname

    return (
        <SidebarProvider>
            <AppSidebar>
                <AdminPagesNav />
                <SidebarContent>
                    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                        <SidebarMenu>
                        {adminRoutes.map((item) => (
                            <SidebarMenuItem key={item.name}>
                                <SidebarMenuButton isActive={path.startsWith(item.url)} asChild>
                                    <Link href={item.url}>
                                        <item.icon />
                                        <span>{item.name}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
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