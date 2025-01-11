import { Documentation } from "@prisma/client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

let joinTemp = ""

export default function DocumentationBreadcrumb({ navbarData, pagekey }: { navbarData: Documentation[], pagekey: string }) {
    const pagekeys = useMemo(() => pagekey.split("."), [pagekey])
    if(joinTemp != "") joinTemp = ""

    const router = useRouter()
    const docCategory = useMemo(() => router.asPath.split("/")[1], [router.asPath])

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {pagekeys.map((value, idx) => {
                    if(idx == 0) joinTemp = value
                    else joinTemp += `.${value}`

                    const docdata = navbarData.filter((v) => v.key == joinTemp)[0]
                    if(!docdata) return null;

                    if(idx == pagekeys.length-1) return <BreadcrumbItem key={idx}>
                        <BreadcrumbPage><FontAwesomeIcon icon={docdata.icon as IconProp} /> <span className="ml-1">{docdata!.title}</span></BreadcrumbPage>
                    </BreadcrumbItem>
                    else return <>
                        <BreadcrumbItem className="hidden md:block">
                            <Link href={`/${docCategory}/${joinTemp.replace(/\./g, "/")}`}>
                                <FontAwesomeIcon icon={docdata.icon as IconProp} /> <span className="ml-1">{docdata!.title}</span>
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                    </>
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}