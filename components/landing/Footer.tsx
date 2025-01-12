import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-background">
            <hr className="w-full bg-slate-900 mx-auto h-px border-0" />

            <section className="container mx-auto py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
                <div className="col-span-full xl:col-span-2">
                    <Link
                        rel="noreferrer noopener"
                        href={"/"}
                        className="font-bold text-xl flex"
                    >
                        SwiftlyCS2
                    </Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Follow US</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="https://github.com/swiftly-solution"
                            className="opacity-60 hover:opacity-100"
                        >
                            Github
                        </a>
                    </div>
                </div>

                {/* <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Platforms</h3>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="/plugin-sharing"
                            className="opacity-60 hover:opacity-100"
                        >
                            Plugin Sharing
                        </Link>
                    </div>

                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="/ext-sharing"
                            className="opacity-60 hover:opacity-100"
                        >
                            Extension Sharing
                        </Link>
                    </div>
                </div> */}

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Documentation</h3>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="/plugin-docs"
                            className="opacity-60 hover:opacity-100"
                        >
                            Plugin Docs
                        </Link>
                    </div>

                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="/ext-docs"
                            className="opacity-60 hover:opacity-100"
                        >
                            Extension Docs
                        </Link>
                    </div>

                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="/sdk"
                            className="opacity-60 hover:opacity-100"
                        >
                            SDK
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Community</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="https://www.youtube.com/@skuzzi8088"
                            className="opacity-60 hover:opacity-100"
                        >
                            Youtube
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="https://swiftlycs2.net/discord"
                            className="opacity-60 hover:opacity-100"
                        >
                            Discord
                        </a>
                    </div>
                </div>
            </section>

            <section className="container pb-14 text-center mx-auto">
                <h3>
                    &copy; 2025 Copyright{" "}
                    <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://github.com/swiftly-solution"
                        className="text-primary transition-all duration-100 border-primary hover:border-b-2"
                    >
                        Swiftly Solution
                    </a>
                </h3>
            </section>
        </footer>
    );
};