import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { State, useStoreState } from "easy-peasy";
import { ApplicationStore, store } from "@/modules/state";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import gravatarUrl from 'gravatar-url';
import { Book, ChevronsUpDown, LogOut } from "lucide-react";
import { sendPostRequest } from "@/lib/http";

export default function UserBox() {
    const user = useStoreState((state: State<ApplicationStore>) => state.user.data)
    const { isMobile } = useSidebar()

    const path = useRouter().pathname

    if(user) {
        return (
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton size="lg" className="data-[state=open]:bg-muted/80 data-[state=open]:text-sidebar-accent-foreground">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src={gravatarUrl(user.email)} alt={user.username} />
                                    <AvatarFallback className="rounded-lg">{user.username.at(0)!.toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{user.username}</span>
                                    <span className="truncate text-xs">{user.email}</span>
                                </div>
                                <ChevronsUpDown className="ml-auto size-4" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                            side={isMobile ? "bottom" : "right"}
                            align="end"
                            sideOffset={4}
                        >
                            <DropdownMenuLabel className="p-0 font-normal">
                                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage src={gravatarUrl(user.email)} alt={user.username} />
                                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">{user.username} (ID: {user.id})</span>
                                        <span className="truncate text-xs">{user.email}</span>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {user.admin ? <>
                                <DropdownMenuGroup>
                                    <Link href={"/admin/docs"}>
                                        <DropdownMenuItem>
                                            <Book />
                                            Admin - Documentation
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                            </> : null}
                            <DropdownMenuItem onClick={() => {
                                setTimeout(async () => {
                                    sendPostRequest<boolean>("/api/account/logout", {}, () => {
                                        store.getActions().user.setUserData(undefined)
                                        // @ts-expect-error
                                        window.location = (`/auth/login?from=${encodeURIComponent(path)}`)
                                    }, () => {
                                        store.getActions().user.setUserData(undefined)
                                        // @ts-expect-error
                                        window.location = (`/auth/login?from=${encodeURIComponent(path)}`)
                                    }, () => {
                                        store.getActions().user.setUserData(undefined)
                                        // @ts-expect-error
                                        window.location = (`/auth/login?from=${encodeURIComponent(path)}`)
                                    })
                                }, 0)
                            }}>
                                <LogOut />
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        )
    }

    return (
        <Link href={`/auth/login?from=${encodeURIComponent(path)}`}>
            <Button className="w-full" variant={"default"}>Authenticate</Button>
        </Link>
    )
}