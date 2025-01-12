import DocumentationView from "@/components/documentation/DocumentationView";
import PageContentBlock from "@/elements/PageContentBlock";
import { useParams } from 'next/navigation'
import { LoaderIcon } from 'lucide-react'

export default function BeginnersDocs() {
    const params = useParams<{ pages: string[] }>();

    return (
        <PageContentBlock title={"For Beginners Documentation"}>
            {params ? <DocumentationView category={"beginners"} pagekey={params.pages.join(".")} /> : <LoaderIcon className="animate-spin" />}
        </PageContentBlock>
    )
}