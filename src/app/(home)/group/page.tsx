import Image from 'next/image';
import Swiftly from './swiftlys2.png'
import CS2Browser from './cs2browser.png'
import Link from 'next/link';

export default function HomePage() {
    return (
        <main className="flex flex-1 flex-col justify-center text-center px-4 py-16">
            <div className="max-w-6xl mx-auto">
                {/* Website Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Website 1 */}
                    <div className="bg-white dark:bg-stone-900 rounded-lg shadow-lg p-6">
                        <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                            <Image
                                src={Swiftly}
                                alt="swiftlys2.net"
                                width={400}
                                height={225}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            SwiftlyS2 - Beta
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 mb-3 text-sm">
                            <Link href={"https://beta.swiftlys2.net"} target="_blank" rel="noopener noreferrer">https://beta.swiftlys2.net</Link>
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            SwifltyS2 is a server modification plugin for Counter Strike 2 which is based on Metamod:Source.

                            This server modification platform allows plugins to be created easily, providing lightning-fast speed for your source code.
                        </p>
                    </div>

                    {/* Website 2 */}
                    <div className="bg-white dark:bg-stone-900 rounded-lg shadow-lg p-6">
                        <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                            <Image
                                src={CS2Browser}
                                alt="CS2Browser.net"
                                width={400}
                                height={225}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            CS2 Server Browser
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 mb-3 text-sm">
                            <Link href={"https://cs2browser.net"} target="_blank" rel="noopener noreferrer">https://cs2browser.net</Link>
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            Explore one of the most comprehensive Counter-Strike 2 server directories, with over 10,000 servers tracked.

                            Quickly find the perfect server with powerful filters by region, mode, or community favorites like Zombie Escape, Surf, BunnyHop, Retake, AWP, and more.
                        </p>
                    </div>
                </div>
            </div>

            {/* Notice */}
            <div className="border-t mt-16 pt-8 text-center">
                <p className="text-sm text-gray-400 max-w-3xl mx-auto">
                    swiftlys2.net is a hobby project and is not affiliated with Valve Corportaion or Steam.
                </p>
            </div>
        </main>
    );
}
