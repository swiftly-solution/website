import DocumentationView from "@/components/documentation/DocumentationView";
import PageContentBlock from "@/elements/PageContentBlock";
import { useParams } from 'next/navigation'
import { LoaderIcon } from 'lucide-react'

export default function ExtensionDocs() {
    const params = useParams<{ pages: string[] }>();

    return (
        <PageContentBlock title={"SDK Documentation"}>
            {params ? <DocumentationView category={"sdk"} pagekey={params.pages.join(".")} /> : <LoaderIcon className="animate-spin" />}
        </PageContentBlock>
    )
}