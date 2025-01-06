import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

export default function UserBox() {
    
    return (
        <Link href={`/auth/login?from=${encodeURIComponent(useRouter().pathname)}`}>
            <Button variant={"default"}>Authenticate</Button>
        </Link>
    )
}