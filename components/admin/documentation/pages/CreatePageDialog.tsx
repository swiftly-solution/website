import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PrepareForm } from "@/lib/forms";
import { sendPostRequest } from "@/lib/http";
import { ProcessNotification, ToastError, ToastSuccess } from "@/modules/notifications/toasts";
import createPageSchema from "@/modules/schemas/admin/docs/createpage";
import { handleZodValidation, ValidationError } from "@/modules/schemas/HandleValidation";
import { Notification } from "@/modules/types/Notification";
import { PlusIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { mutate } from "swr";

export default function CreatePageDialog() {
    const [submitting, setSubmitting] = useState(false)

    const [errors, setErrors] = useState<ValidationError<typeof createPageSchema>>({})

    const changeCreatePage = (e: FormEvent<HTMLFormElement>) => {
        handleZodValidation({
            onError: setErrors,
            data: PrepareForm(e),
            onSuccess: () => {
                setErrors({})
            },
            schema: createPageSchema
        })
    }

    const submitCreatePage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(errors.title || errors.key || errors.icon || errors.category) return;

        setSubmitting(true)

        setTimeout(() => {
            sendPostRequest<Notification>("/api/admin/docs/createpage", PrepareForm(e), 
                (response) => {
                    ProcessNotification(response.message, ToastSuccess)
                    setSubmitting(false)
                    // @ts-expect-error
                    e.target.reset()

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
                <Button variant={"secondary"}><PlusIcon className="mr-2" /> Create Page</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <form onSubmit={submitCreatePage} onChange={changeCreatePage}>
                    <DialogHeader>
                        <DialogTitle>Create Page</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-6 pt-6 pb-6">
                        <div className="grid gap-2">
                            <Label htmlFor="key">Page Key</Label>
                            <Input
                                disabled={submitting}
                                id="key"
                                type="text"
                                placeholder="Page Key"
                                required
                                error={errors["key"]}
                            />

                            <Label htmlFor="title">Title</Label>
                            <Input
                                disabled={submitting}
                                id="title"
                                type="text"
                                placeholder="Title"
                                required
                                error={errors["title"]}
                            />
                            
                            <Label htmlFor="icon">Icon</Label>
                            <Input
                                disabled={submitting}
                                id="icon"
                                type="text"
                                placeholder="Icon"
                                error={errors["icon"]}
                            />

                            <Label htmlFor="category">Category</Label>
                            <Input
                                disabled={submitting}
                                id="category"
                                type="text"
                                placeholder="Category"
                                error={errors["category"]}
                            />
                        </div>
                    </div>
                    <DialogFooter className="justify-end">
                        <Button type={"submit"} variant={"default"} disabled={submitting || Object.keys(errors).length != 0}>
                            Create Page
                        </Button>
                        <DialogClose asChild>
                            <Button variant="destructive" disabled={submitting}>
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}