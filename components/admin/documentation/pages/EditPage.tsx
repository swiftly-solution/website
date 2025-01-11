import { ErrorCard } from "@/components/ui/alert-cards"
import { fetcher } from "@/lib/utils"
import { APIResponse } from "@/modules/types/APIResponse"
import { Documentation } from "@prisma/client"
import { LoaderIcon, SaveIcon } from "lucide-react"
import { useRouter } from "next/router"
import useSWR from "swr"
import Editor from '@monaco-editor/react';
import DocumentationRender from "@/components/documentation/DocumentationRender"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { sendPostRequest } from "@/lib/http"
import { Notification } from "@/modules/types/Notification"
import { ProcessNotification, ToastError, ToastSuccess } from "@/modules/notifications/toasts"

export default function EditPage() {
    const params = useRouter().query

    const { data, error, isLoading } = useSWR<APIResponse<Documentation>>(`/api/docs/getpage?page=${params.page}&category=${params.category}`, fetcher)
    const [content, setContent] = useState("")
    const [touched, setTouched] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    if(isLoading) return <LoaderIcon className="animate-spin" />
    else if(error || !data) return <ErrorCard text={error?.message} />
    else if(data.status != 200) return <ErrorCard text={String(data.message)} />

    const SaveDocPage = () => {
        if(submitting) return;

        setSubmitting(true)
        
        setTimeout(() => {
            sendPostRequest<Notification>("/api/admin/docs/save", { key: data.message.key, category: data.message.category, content }, 
                (response) => {
                    ProcessNotification(response.message, ToastSuccess)
                    setSubmitting(false)
                }, 
                (response) => {
                    ProcessNotification(response.message, ToastError)
                    setSubmitting(false)
                },
                () => {
                    ToastError("A system error has occurred. Please try again later.")
                    setSubmitting(false)
                }
            )
        }, 1000)
    }

    return (
        <div className="w-full">
            <header className="flex h-16 shrink-0 items-center gap-2">
                <div className="flex items-center gap-2 px-4 w-full">
                    Edit Page - {data.message.title} (Key: {data.message.key}, Category: {data.message.category})
                    <Button type="button" disabled={!touched || content == data.message.content} className="ml-auto" onClick={SaveDocPage}><SaveIcon /> Save</Button>
                </div>
            </header>
            <div className="grid grid-cols-2 gap-2">
                <Editor height={"90vh"} language="markdown" defaultValue={data.message.content} onChange={(val) => {
                    if(!touched) setTouched(true)
                    setContent(val || "")
                }} theme={"vs-dark"} />
                <DocumentationRender navbarData={[]} content={touched ? content : data.message.content} />
            </div>
        </div>
    )
}