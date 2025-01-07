import { DiscordLogoIcon, GitHubLogoIcon, HomeIcon } from "@radix-ui/react-icons";
import { SidebarGroup, SidebarGroupContent } from "../ui/sidebar";
import { buttonVariants } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";
import Link from "next/link";

export default function SecondaryNav() {
    return (
        <SidebarGroup className="mt-auto">
            <SidebarGroupContent>
                <div className="hidden md:flex gap-2">
                    <Link
                        rel="noreferrer noopener"
                        href="/"
                        target="_blank"
                        className={`border ${buttonVariants({ variant: "secondary" })}`}
                    >
                        <HomeIcon className="w-5 h-5" />
                    </Link>
                    <a
                        rel="noreferrer noopener"
                        href="https://swiftlycs2.net/discord"
                        target="_blank"
                        className={`border ${buttonVariants({ variant: "secondary" })}`}
                    >
                        <DiscordLogoIcon className="w-5 h-5" />
                    </a>
                    <a
                        rel="noreferrer noopener"
                        href="https://github.com/swiftly-solution"
                        target="_blank"
                        className={`border ${buttonVariants({ variant: "secondary" })}`}
                    >
                        <GitHubLogoIcon className="w-5 h-5" />
                    </a>

                    <ModeToggle />
                </div>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}