import { Button } from "@/elements/button";
import { useTheme } from "@/elements/theme-provider";

export default function Community() {
    return (
        <section
            className="w-full bg-white dark:bg-background py-16 sm:py-24"
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        Ready to join this{" "}
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            Community
                        </span>
                        ?
                    </h2>
                    <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground text-center">
                        Join our vibrant Discord community! Connect, share, and grow with like-minded enthusiasts. Click to dive in! 🚀
                    </p>
                    <div className="grid place-items-center">
                        <Button asChild>
                            <a href="https://swiftlycs2.net/discord" target="_blank">
                                Join Discord
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="mx-auto">
                    <iframe src={`https://ptb.discord.com/widget?id=1178027657594687608&theme=${useTheme().theme}`} width="350" height="500" allowTransparency={true} frameBorder={0} sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
            </div>
        </section>
    )
}