import EditPage from "@/components/admin/documentation/pages/EditPage";
import PageContentBlock from "@/elements/PageContentBlock";
 
export default function AdminDocsEdit() {

    return (
        <PageContentBlock title={"Documentation - Admin"} adminOnly>
            <EditPage />
        </PageContentBlock>
    )
}