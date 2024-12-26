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

import { Menu } from "lucide-react";
import { ModeToggle } from "@/elements/mode-toggle";
import { Link } from "react-router-dom";

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-900 dark:bg-background">
            <NavigationMenu className="mx-auto">
                <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
                    <NavigationMenuItem className="font-bold flex">
                        <Link
                            rel="noreferrer noopener"
                            to={"/"}
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
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </span>

                    {/* desktop */}
                    <nav className="hidden md:flex gap-2">
                    </nav>

                    <div className="hidden md:flex gap-2">
                        <ModeToggle />
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};