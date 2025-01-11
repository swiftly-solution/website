import DocumentationView from "@/components/documentation/DocumentationView";
import PageContentBlock from "@/elements/PageContentBlock";

export default function ExtensionDocs() {
    return (
        <PageContentBlock title={"Extension Documentation"}>
            <DocumentationView category={"ext"} pagekey={"home"} />
        </PageContentBlock>
    )
}