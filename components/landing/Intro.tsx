import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import panelImage from "../../public/panel.png"

export default function Intro() {
    return (
        <section className="w-full bg-white dark:bg-background">
            <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
                <div className="text-center space-y-8">

                    <div className="max-w-screen-lg mx-auto text-center text-3xl md:text-5xl font-bold">
                        <h1>
                            <span className="text-transparent px-2 bg-gradient-to-r from-[#2cc66d] to-primary bg-clip-text">
                                Swiftly - CS2 Scripting
                            </span>
                        </h1>
                    </div>

                    <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
                        {`Swiftly is a server modification plugin for Counter-Strike 2 which is using Metamod:Source.`}
                    </p>

                    <div className="space-y-4 md:space-y-0 md:space-x-4">
                        <Link href={"/for-beginners"}>
                            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                                Get Started
                                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                            </Button>
                        </Link>

                        <Button
                            asChild
                            variant="secondary"
                            className="w-5/6 md:w-1/4 font-bold"
                        >
                            <a
                                rel="noreferrer noopener"
                                href="https://github.com/swiftly-solution/swiftly"
                                target="_blank"
                            >
                                Github Homepage
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="relative group mt-14">
                    <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
                    <Image
                        width={1200}
                        height={1200}
                        className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
                        src={panelImage}
                        alt="dashboard"
                        priority
                    />

                    <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
                </div>
            </div>
        </section>
    )
}