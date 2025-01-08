import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PrepareForm } from "@/lib/forms";
import { sendPostRequest } from "@/lib/http";
import { ProcessNotification, ToastError, ToastSuccess } from "@/modules/notifications/toasts";
import deletePageSchema from "@/modules/schemas/admin/docs/deletepage";
import { handleZodValidation, ValidationError } from "@/modules/schemas/HandleValidation";
import { Notification } from "@/modules/types/Notification";
import { Trash2Icon } from "lucide-react";
import { FormEvent, useState } from "react";
import { mutate } from "swr";

export default function DeletePageDialog({ pagekey, pagecategory }: { pagekey: string, pagecategory: string }) {
    const [submitting, setSubmitting] = useState(false)

    const [errors, setErrors] = useState<ValidationError<typeof deletePageSchema>>({})

    const changeDeletePage = (e: FormEvent<HTMLFormElement>) => {
        handleZodValidation({
            onError: setErrors,
            data: PrepareForm(e),
            onSuccess: () => {
                setErrors({})
            },
            schema: deletePageSchema
        })
    }

    const submitDeletePage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(errors.key || errors.category) return;

        setSubmitting(true)

        setTimeout(() => {
            sendPostRequest<Notification>("/api/admin/docs/deletepage", PrepareForm(e), 
                (response) => {
                    ProcessNotification(response.message, ToastSuccess)
                    setSubmitting(false)

                    mutate("/api/admin/docs/pages")
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
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"destructive"}>
                    <Trash2Icon />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <form onSubmit={submitDeletePage} onChange={changeDeletePage}>
                    <DialogHeader>
                        <DialogTitle>Delete Page</DialogTitle>
                    </DialogHeader>
                    <div className="gap-6 pt-6 pb-6">
                        <Input
                            disabled={true}
                            id="key"
                            type="text"
                            required
                            value={pagekey}
                            className="hidden"
                        />
                        <Input
                            disabled={true}
                            id="category"
                            type="text"
                            required
                            value={pagecategory}
                            className="hidden"
                        />
                        Are you sure that you want to delete <code id={"code"}>{pagekey}</code> from <code id={"code"} className="capitalize">{pagecategory}</code>?
                    </div>
                    <DialogFooter className="justify-end">
                        <Button type={"submit"} variant={"destructive"} disabled={submitting || Object.keys(errors).length != 0}>
                            Delete Page
                        </Button>
                        <DialogClose asChild>
                            <Button variant="secondary" disabled={submitting}>
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}