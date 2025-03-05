import { Book } from "lucide-react";
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

const titles: Record<string, string> = {
    "plugin-docs": "Plugin Documentation",
    "ext-docs": "Ext. Documentation",
    "sdk": "SDK Documentation",
    "for-beginners": "Beginners Docs."
}

export const keys: Record<string, string> = {
    "plugin": "plugin-docs",
    "ext": "ext-docs",
    "sdk": "sdk",
    "beginners": "for-beginners"
}

export default function DocumentationNav() {
    const router = useRouter()
    const docCategory = useMemo(() => router.asPath.split("/")[1], [router.asPath])

    const { isMobile } = useSidebar()

    return (
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton size="lg" className="data-[state=open]:bg-muted/80 data-[state=open]:text-sidebar-accent-foreground">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Book className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{titles[docCategory]}</span>
                                </div>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                            side={isMobile ? "bottom" : "right"}
                            align="end"
                            sideOffset={4}
                        >
                            {Object.keys(titles).map((t) => <>
                                <DropdownMenuGroup>
                                    <Link href={`/${t}`}>
                                        <DropdownMenuItem>
                                            <Book />
                                            {titles[t]}
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                            </>)}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    )
}