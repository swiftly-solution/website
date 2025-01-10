import { Documentation } from "@prisma/client";
import prepareDocsData, { ProcessedDocs } from "./render/navbar/prepareDocsData";
import { SidebarGroup, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

function RenderProcessedNavbar({ value, route, pagekey }: { value: ProcessedDocs, route: string, pagekey: string }) {
    return (
        <Collapsible key={value.title} asChild defaultOpen={route.startsWith(value.url)}>
            <SidebarMenuItem>
                <SidebarMenuButton isActive={route == value.url} asChild tooltip={value.title}>
                    <Link href={value.url}>
                        <i className={value.icon} />
                        <span>{value.title}</span>
                    </Link>
                </SidebarMenuButton>
                {value.items.length > 0 ? (
                    <>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuAction className="data-[state=open]:rotate-90">
                                <ChevronRight />
                                <span className="sr-only">Toggle</span>
                            </SidebarMenuAction>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <SidebarMenu className="pl-1.5 mt-1 border-l-0">
                                {value.items.map((val) => {
                                    if(val.items.length == 0) return (
                                        <SidebarMenuItem key={val.title}>
                                            <SidebarMenuButton isActive={route == val.url} asChild>
                                                <Link href={val.url}>
                                                    <i className={value.icon} />
                                                    <span>{val.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                                    else return <DocumentationNavbar navbarData={([val] as unknown) as Documentation[]} pagekey={pagekey} beenSet={false} dataSet={true} />
                                })}
                            </SidebarMenu>
                        </CollapsibleContent>
                    </>
                ) : null}
            </SidebarMenuItem>
        </Collapsible>
    )
}

export default function DocumentationNavbar({ navbarData, pagekey, beenSet, dataSet }: { navbarData: Documentation[], pagekey: string, beenSet?: boolean, dataSet?: boolean }) {
    if(!beenSet && !dataSet) {
        return (
            <SidebarGroup>
                <SidebarMenu>
                    <DocumentationNavbar navbarData={navbarData} pagekey={pagekey} beenSet={true} />
                </SidebarMenu>
            </SidebarGroup>
        )
    }

    const route = useRouter().asPath
    const docCategory = useMemo(() => route.split("/")[1], [route])
    const data = dataSet ? ((navbarData as unknown) as ProcessedDocs[]) : prepareDocsData(navbarData, docCategory)

    console.log(data)

    return data.map((value) => <RenderProcessedNavbar value={value} route={route} pagekey={pagekey} />)
}