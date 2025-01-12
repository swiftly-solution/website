import { Documentation } from "@prisma/client";
import prepareDocsData, { ProcessedDocs } from "./render/navbar/prepareDocsData";
import { SidebarGroup, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FixedSizeList } from 'react-window';

function RenderProcessedNavbar({ value, route, pagekey }: { value: ProcessedDocs, route: string, pagekey: string }) {
    const RenderSubmenu = ({ index, style }: { index: any, style: any }) => {
        const val = value.items[index]

        if(val.items.length == 0) return (
            <SidebarMenuItem key={val.title} style={style}>
                <SidebarMenuButton isActive={route.split("/").length == 2 ? val.key == "home" : route == val.url} asChild>
                    <Link href={val.url}>
                        {val.icon != "" ? <FontAwesomeIcon icon={val.icon as IconProp} /> : null}
                        <span>{val.title}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        )
        else return <DocumentationNavbar key={val.title} navbarData={([val] as unknown) as Documentation[]} pagekey={pagekey} beenSet={false} dataSet={true} />
    }

    return (
        <Collapsible key={value.title} asChild defaultOpen={route.startsWith(value.url)}>
            <SidebarMenuItem>
                <SidebarMenuButton isActive={route.split("/").length == 2 ? value.key == "home" : route == value.url} asChild tooltip={value.title}>
                    <Link href={value.url}>
                        <FontAwesomeIcon icon={value.icon as IconProp} />
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
                                <FixedSizeList itemSize={32} height={value.items.length <= 50 ? 32 * value.items.length : 650} itemCount={value.items.length} width={"100%"}>
                                    {RenderSubmenu}
                                </FixedSizeList>
                            </SidebarMenu>
                        </CollapsibleContent>
                    </>
                ) : null}
            </SidebarMenuItem>
        </Collapsible>
    )
}

export default function DocumentationNavbar({ navbarData, pagekey, beenSet, dataSet }: { navbarData: Documentation[], pagekey: string, beenSet?: boolean, dataSet?: boolean }) {
    const route = useRouter().asPath
    const docCategory = useMemo(() => route.split("/")[1], [route])
    if(!beenSet && !dataSet) {
        return (
            <SidebarGroup>
                <SidebarMenu>
                    <DocumentationNavbar navbarData={navbarData} pagekey={pagekey} beenSet={true} />
                </SidebarMenu>
            </SidebarGroup>
        )
    }

    const data = dataSet ? ((navbarData as unknown) as ProcessedDocs[]) : prepareDocsData(navbarData, docCategory)

    return data.map((value, iiddx) => <RenderProcessedNavbar key={iiddx} value={value} route={route} pagekey={pagekey} />)
}