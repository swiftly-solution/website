import { ErrorCard } from "@/components/ui/alert-cards"
import { DataTable } from "@/components/ui/data-table"
import { fetcher } from "@/lib/utils"
import { APIResponse } from "@/modules/types/APIResponse"
import { Documentation } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { LoaderIcon, PencilIcon } from "lucide-react"
import useSWR from "swr"
import CreatePageDialog from "./CreatePageDialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DeletePageDialog from "./DeletePageDialog"

const columns: ColumnDef<Documentation>[] = [
    {
        accessorKey: "key",
        header: "Key"
    },
    {
        accessorKey: "title",
        header: "Title"
    },
    {
        accessorKey: "category",
        header: "Category",
        cell({ row }) {
            return (
                <span className="capitalize">{row.getValue("category")}</span>
            )
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell({ row }) {
            return (
                <div className="flex gap-2">
                    <Link href={`/admin/docs/pages/edit?page=${row.getValue("key")}&category=${row.getValue("category")}`}>
                        <Button variant={"secondary"}>
                            <PencilIcon />
                        </Button>
                    </Link>
                    <DeletePageDialog pagekey={row.getValue("key")} pagecategory={row.getValue("category")} />                    
                </div>
            )
        }
    }
]

export default function PagesList() {
    const { data, error, isLoading } = useSWR<APIResponse<Documentation[]>, Error>("/api/admin/docs/pages", fetcher)
    
    if(isLoading) return <LoaderIcon className="animate-spin" />
    else if(error || !data) return <ErrorCard text={error?.message} />
    else if(data.status != 200) return <ErrorCard text={String(data.message)} />

    return (
        <DataTable columns={columns} data={data.message} filterBy="key">
            <CreatePageDialog />
        </DataTable>
    )
}