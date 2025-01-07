import AdminDocsView from "@/components/admin/documentation/DocsView";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageContentBlock from "@/elements/PageContentBlock";
import { BookIcon, ListIcon, UserIcon } from "lucide-react";

export default function AdminDocsHome() {
    return (
        <PageContentBlock title={"Documentation - Admin"} adminOnly>
            <AdminDocsView>
                <div className="grid grid-cols-3 gap-4">
                    <Card
                        className="bg-muted/50 hover:bg-muted/80 transition-colors shadow-md dark:shadow-slate-900"
                    >
                        <CardHeader>
                            <CardTitle className="flex flex-row gap-4 items-center">
                                <BookIcon />
                                Pages
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <b className="text-lg">0</b>
                        </CardContent>
                    </Card>
                    <Card
                        className="bg-muted/50 hover:bg-muted/80 transition-colors shadow-md dark:shadow-slate-900"
                    >
                        <CardHeader>
                            <CardTitle className="flex flex-row gap-4 items-center">
                                <UserIcon />
                                Users
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <b className="text-lg">0</b>
                        </CardContent>
                    </Card>
                    <Card
                        className="bg-muted/50 hover:bg-muted/80 transition-colors shadow-md dark:shadow-slate-900"
                    >
                        <CardHeader>
                            <CardTitle className="flex flex-row gap-4 items-center">
                                <ListIcon />
                                Active Sessions
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <b className="text-lg">0</b>
                        </CardContent>
                    </Card>
                </div>
            </AdminDocsView>
        </PageContentBlock>
    )
}