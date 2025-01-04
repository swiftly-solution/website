import { Sidebar, SidebarFooter } from "./sidebar";

export function AppSidebar({ children, ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props}>
            {children}
            <SidebarFooter>

            </SidebarFooter>
        </Sidebar>
    )
}