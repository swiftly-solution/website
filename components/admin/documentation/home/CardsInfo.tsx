import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ErrorCard } from "@/components/ui/alert-cards";
import { fetcher } from "@/lib/utils";
import { DocsStats } from "@/modules/types/admin/docs/Stats";
import { APIResponse } from "@/modules/types/APIResponse";
import { BookIcon, ListIcon, LoaderIcon, UserIcon } from "lucide-react";
import useSWR from 'swr'

export default function CardsInfo() {
    const { data, error, isLoading } = useSWR<APIResponse<DocsStats>, Error>("/api/admin/docs/stats", fetcher)

    if(isLoading) return <LoaderIcon className="animate-spin" />
    else if(error || !data) return <ErrorCard text={error?.message} />
    else if(data.status != 200) return <ErrorCard text={String(data.message)} />

    return (
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
                    <b className="text-lg">{data.message.pages}</b>
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
                    <b className="text-lg">{data.message.users}</b>
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
                    <b className="text-lg">{data.message.sessions}</b>
                </CardContent>
            </Card>
        </div>
    )
}