import DocumentationView from "@/components/documentation/DocumentationView";
import PageContentBlock from "@/elements/PageContentBlock";

export default function PluginDocs() {
    return (
        <PageContentBlock title={"Plugin Documentation"}>
            <DocumentationView category={"plugin"} />
        </PageContentBlock>
    )
}