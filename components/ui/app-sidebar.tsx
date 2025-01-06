import UserBox from "../sidebar/UserBox";
import { Sidebar, SidebarFooter } from "./sidebar";

export function AppSidebar({ children, ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible={"offcanvas"} {...props}>
            {children}
            <SidebarFooter>
                <UserBox />
            </SidebarFooter>
        </Sidebar>
    )
}