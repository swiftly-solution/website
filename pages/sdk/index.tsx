import DocumentationView from "@/components/documentation/DocumentationView";
import PageContentBlock from "@/elements/PageContentBlock";

export default function ExtensionDocs() {
    return (
        <PageContentBlock title={"SDK Documentation"}>
            <DocumentationView category={"sdk"} pagekey={"home"} />
        </PageContentBlock>
    )
}