import DocumentationView from "@/components/documentation/DocumentationView";
import PageContentBlock from "@/elements/PageContentBlock";
import { useParams } from 'next/navigation'
import { LoaderIcon } from 'lucide-react'

export default function PluginDocs() {
    const params = useParams<{ pages: string[] }>();

    return (
        <PageContentBlock title={"Plugin Documentation"}>
            {params ? <DocumentationView category={"plugin"} pagekey={params.pages.join(".")} /> : <LoaderIcon className="animate-spin" />}
        </PageContentBlock>
    )
}