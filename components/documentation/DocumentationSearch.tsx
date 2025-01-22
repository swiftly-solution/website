import { Documentation } from "@prisma/client";
import { AsyncSelect } from "../ui/async-select";
import searchDocumentation from "./fetcher/searchDocumentation";
import useSWR from "swr";
import { APIResponse } from "@/modules/types/APIResponse";
import { LoaderIcon } from "lucide-react";
import { ErrorCard } from "../ui/alert-cards";
import { fetcher } from "@/lib/utils";
import { keys } from "../sidebar/DocumentationNav";
import { useRouter } from "next/router";

export default function DocumentationSearch() {
    const router = useRouter()
    const { data, error, isLoading } = useSWR<APIResponse<Documentation[]>>("/api/docs/search", fetcher);

    if(isLoading) return <LoaderIcon className="animate-spin" />
    else if(error || !data) return <ErrorCard text={error?.message} />
    else if(data.status != 200) return <ErrorCard text={String(data.message)} />

    return (
        <AsyncSelect<Documentation>
            fetcher={async (query) => { return await searchDocumentation(data.message, query) }}
            renderOption={(item) => <div className="text-gray-200 text-sm">{item.title} ({item.category.charAt(0).toUpperCase() + item.category.slice(1)})</div>}
            getOptionValue={(item) => `/${keys[item.category]}/${item.key.split('.').join("/")}`}
            getDisplayValue={(item) => item.title}
            label="documentation"
            placeholder="Search..."
            value={""}
            onChange={(val) => {
                router.push(val)
            }}
            width={350}
        />
    )
}