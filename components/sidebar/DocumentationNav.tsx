import { Book } from "lucide-react";
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

const titles = {
    "plugin-docs": "Plugin Documentation",
    "ext-docs": "Ext. Documentation",
    "sdk": "SDK Documentation",
    "beginners": "Beginners Docs."
}

export default function DocumentationNav() {
    const router = useRouter()
    const docCategory = useMemo(() => router.asPath.split("/")[1], [router.asPath])

    return (
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <Link href={"/"}>
                        <SidebarMenuButton size="lg" className="data-[state=open]:bg-muted/80 data-[state=open]:text-sidebar-accent-foreground">
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <Book className="size-4" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                {/* @ts-expect-error */}
                                <span className="truncate font-semibold">{String(titles[docCategory])}</span>
                            </div>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    )
}