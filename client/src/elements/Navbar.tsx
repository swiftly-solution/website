import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/elements/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/elements/sheet";

import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "/plugin-docs",
        label: "Plugin Docs",
    },
    {
        href: "/ext-docs",
        label: "Extension Docs",
    },
    {
        href: "/sdk",
        label: "SDK",
    },
    {
        href: "/plugin-sharing",
        label: "Plugin Sharing",
    },
    {
        href: "/ext-sharing",
        label: "Extension Sharing",
    },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-900 dark:bg-background">
            <NavigationMenu className="mx-auto">
                <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
                    <NavigationMenuItem className="font-bold flex">
                        <Link
                            rel="noreferrer noopener"
                            to="/"
                            className="ml-2 font-bold text-xl flex"
                        >
                            SwiftlyS2
                        </Link>
                    </NavigationMenuItem>

                    {/* mobile */}
                    <span className="flex md:hidden">
                        <ModeToggle />

                        <Sheet
                            open={isOpen}
                            onOpenChange={setIsOpen}
                        >
                            <SheetTrigger className="px-2">
                                <Menu
                                    className="flex md:hidden h-5 w-5"
                                    onClick={() => setIsOpen(true)}
                                >
                                    <span className="sr-only">Menu Icon</span>
                                </Menu>
                            </SheetTrigger>

                            <SheetContent side={"left"}>
                                <SheetHeader>
                                    <SheetTitle className="font-bold text-xl">
                                        SwiftlyS2
                                    </SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                                    {routeList.map(({ href, label }: RouteProps) => (
                                        <Link
                                            rel="noreferrer noopener"
                                            key={label}
                                            to={href}
                                            onClick={() => setIsOpen(false)}
                                            className={buttonVariants({ variant: "ghost" })}
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                    <a
                                        rel="noreferrer noopener"
                                        href="https://swiftlycs2.net/discord"
                                        target="_blank"
                                        className={`w-[110px] border ${buttonVariants({
                                            variant: "secondary",
                                        })}`}
                                    >
                                        <DiscordLogoIcon className="mr-2 w-5 h-5" />
                                        Discord
                                    </a>
                                    <a
                                        rel="noreferrer noopener"
                                        href="https://github.com/swiftly-solution"
                                        target="_blank"
                                        className={`w-[110px] border ${buttonVariants({
                                            variant: "secondary",
                                        })}`}
                                    >
                                        <GitHubLogoIcon className="mr-2 w-5 h-5" />
                                        Github
                                    </a>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </span>

                    {/* desktop */}
                    <nav className="hidden md:flex gap-2">
                        {routeList.map((route: RouteProps, i) => (
                            <Link
                                rel="noreferrer noopener"
                                to={route.href}
                                key={i}
                                className={`text-[17px] ${buttonVariants({
                                    variant: "ghost",
                                })}`}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex gap-2">
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
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};