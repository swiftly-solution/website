import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageContentBlock from "@/elements/PageContentBlock";
import { PrepareForm } from "@/lib/forms";
import { sendPostRequest } from "@/lib/http";
import { ProcessNotification, ToastError, ToastSuccess } from "@/modules/notifications/toasts";
import forgotPasswordSchema from "@/modules/schemas/auth/forgot";
import { handleZodValidation, ValidationError } from "@/modules/schemas/HandleValidation";
import { ApplicationStore } from "@/modules/state";
import { Notification } from "@/modules/types/Notification";
import { State, useStoreState } from "easy-peasy";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";

export default function ForgotPage() {
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter()
    const user = useStoreState((state: State<ApplicationStore>) => state.user.data)

    useEffect(() => {
        if(user) {
            // @ts-expect-error
            window.location = (String(router.query.from || "/"))
        }
    }, [user])

    const [errors, setErrors] = useState<ValidationError<typeof forgotPasswordSchema>>({})

    const changeForgot = (e: FormEvent<HTMLFormElement>) => {
        handleZodValidation({
            onError: setErrors,
            data: PrepareForm(e),
            onSuccess: () => {
                setErrors({})
            },
            schema: forgotPasswordSchema
        })
    }

    const submitForgot = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(errors.email) return;

        setSubmitting(true)

        setTimeout(() => {
            sendPostRequest<Notification>("/api/auth/forgot", PrepareForm(e), 
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
        <PageContentBlock title={"Forgot Password"}>
            <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 w-full">
                <div className="w-full max-w-sm">
                    <form onSubmit={submitForgot} onChange={changeForgot}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <Link href={"/"} className="flex flex-col items-center gap-2 font-medium">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-md">
                                        <Image src={"/favicon.png"} alt="SwiftlyS2" width={64} height={64} />
                                    </div>
                                    <span className="sr-only">SwiftlyS2</span>
                                </Link>
                                <h1 className="text-xl font-bold">Welcome to SwiftlyS2.</h1>
                                <div className="text-center text-sm">
                                    Remembered back your password?{" "}
                                    <Link href={`/auth/login${router.query.from ? `?from=${encodeURIComponent(String(router.query.from))}` : ""}`} className="underline underline-offset-4">
                                        Login
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        disabled={submitting}
                                        id="email"
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        required
                                        error={errors["email"]}
                                    />
                                </div>
                                <Button type="submit" className="w-full" disabled={submitting || errors["email"] != undefined}>
                                    Forgot Password
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </PageContentBlock>
    )
}