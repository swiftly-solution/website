import { Documentation } from "@prisma/client";
import prepareCatalogData from "./prepareCatalogData";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

export default function Catalog({ navbarData }: { navbarData: Documentation[] }) {
    const route = useRouter().asPath
    const docCategory = useMemo(() => route.split("/")[1], [route])
    const interestKey = useMemo(() => {
        const split = route.split("/")
        split.shift()
        split.shift()
        return split.join(".")
    }, [route])
    
    const catalogData = prepareCatalogData(navbarData, docCategory, interestKey)

    return (
        <div className="sm:flex sm:flex-col md:grid md:grid-cols-3 gap-4">
            {catalogData.items.map((value) => (
                <Link href={value.url}>
                    <Card
                        key={value.title}
                        className="bg-muted/50 hover:bg-muted/80 transition-colors shadow-md dark:shadow-slate-900 cursor-pointer"
                    >
                        <CardHeader>
                            <CardTitle className="flex flex-row gap-4 items-center">
                                <FontAwesomeIcon icon={value.icon as IconProp} />
                                {value.title}
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </div>
    )
}