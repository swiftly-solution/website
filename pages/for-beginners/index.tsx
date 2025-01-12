import DocumentationView from "@/components/documentation/DocumentationView";
import PageContentBlock from "@/elements/PageContentBlock";

export default function BeginnersDocs() {
    return (
        <PageContentBlock title={"For Beginners Documentation"}>
            <DocumentationView category={"beginners"} pagekey={"home"} />
        </PageContentBlock>
    )
}