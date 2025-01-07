import AdminDocsView from "@/components/admin/documentation/DocsView";
import PagesList from "@/components/admin/documentation/pages/PagesList";
import PageContentBlock from "@/elements/PageContentBlock";
 
export default function AdminDocsPages() {

    return (
        <PageContentBlock title={"Pages - Admin"} adminOnly>
            <AdminDocsView title="Pages">
                <PagesList />
            </AdminDocsView>
        </PageContentBlock>
    )
}