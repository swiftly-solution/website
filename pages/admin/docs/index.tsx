import AdminDocsView from "@/components/admin/documentation/DocsView";
import CardsInfo from "@/components/admin/documentation/home/CardsInfo";
import PageContentBlock from "@/elements/PageContentBlock";
 
export default function AdminDocsHome() {

    return (
        <PageContentBlock title={"Documentation - Admin"} adminOnly>
            <AdminDocsView>
                <CardsInfo />
            </AdminDocsView>
        </PageContentBlock>
    )
}