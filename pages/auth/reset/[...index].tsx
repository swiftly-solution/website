import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageContentBlock from "@/elements/PageContentBlock";
import { PrepareForm } from "@/lib/forms";
import { sendPostRequest } from "@/lib/http";
import { ProcessNotification, ToastError, ToastSuccess } from "@/modules/notifications/toasts";
import resetSchema from "@/modules/schemas/auth/reset";
import { handleZodValidation, ValidationError } from "@/modules/schemas/HandleValidation";
import { ApplicationStore } from "@/modules/state";
import { Notification } from "@/modules/types/Notification";
import { State, useStoreState } from "easy-peasy";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";

export default function ResetPassPage() {
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter()
    const user = useStoreState((state: State<ApplicationStore>) => state.user.data)
    const [errors, setErrors] = useState<ValidationError<typeof resetSchema>>({})
    const params = useParams<{ index: string[] }>();

    useEffect(() => {
        if(user) {
            // @ts-expect-error
            window.location = (String(router.query.from || "/"))
        }
    }, [user])
    

    const changeResetPass = (e: FormEvent<HTMLFormElement>) => {
        handleZodValidation({
            onError: setErrors,
            data: PrepareForm(e),
            onSuccess: () => {
                setErrors({})
            },
            schema: resetSchema
        })
    }

    const submitResetPass = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(errors.email || errors.password || errors.confirmpassword) return;

        setSubmitting(true)

        setTimeout(() => {
            sendPostRequest<Notification>("/api/auth/reset", PrepareForm(e), 
                (response) => {
                    ProcessNotification(response.message, ToastSuccess)
                    setTimeout(() => {
                        // @ts-expect-error
                        window.location = ("/auth/login")
                    }, 3000)
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
        <PageContentBlock title={"Reset Password"}>
            <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 w-full">
                <div className="w-full max-w-sm">
                    <form onSubmit={submitResetPass} onChange={changeResetPass}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <Link href={"/"} className="flex flex-col items-center gap-2 font-medium">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-md">
                                        <Image src={"/favicon.png"} alt="SwiftlyCS2" width={64} height={64} />
                                    </div>
                                    <span className="sr-only">SwiftlyCS2</span>
                                </Link>
                                <h1 className="text-xl font-bold">Welcome to SwiftlyCS2.</h1>
                                <div className="text-center text-sm">
                                    Remembered your password?{" "}
                                    <Link href={`/auth/login${router.query.from ? `?from=${encodeURIComponent(String(router.query.from))}` : ""}`} className="underline underline-offset-4">
                                        Login
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Input
                                        disabled={true}
                                        id="uuid"
                                        type="text"
                                        required
                                        value={params ? params.index[0] : ""}
                                        className="hidden"
                                    />

                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        disabled={true}
                                        id="email"
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        required
                                        error={errors["email"]}
                                        value={params ? decodeURIComponent(params.index[1]) : ""}
                                    />

                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        disabled={submitting}
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        minLength={8}
                                        required
                                        error={errors["password"]}
                                    />

                                    <Label htmlFor="confirmpassword">Confirm Password</Label>
                                    <Input
                                        disabled={submitting}
                                        id="confirmpassword"
                                        type="password"
                                        placeholder="Confirm Password"
                                        minLength={8}
                                        required
                                        error={errors["confirmpassword"]}
                                    />
                                </div>
                                <Button type="submit" className="w-full" disabled={submitting || errors["password"] != undefined || errors["confirmpassword"] != undefined || errors["email"] != undefined}>
                                    Reset Password
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </PageContentBlock>
    )
}