"use client";

import Link from 'next/link';
import SwiftlyLogo from "./logo.png";
import MenusPreview from "./menus_preview.png";
import Image from 'next/image';
import { CodeBlock } from '@/components/code-block';
import { LuDownload, LuFlaskConical, LuShieldCheck } from 'react-icons/lu';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const [isDownloadOpen, setDownloadOpen] = useState(false);
  const downloadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!downloadRef.current?.contains(event.target as Node)) {
        setDownloadOpen(false);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDownloadOpen(false);
    };

    window.addEventListener('mousedown', handleClick);
    window.addEventListener('keyup', handleKey);
    return () => {
      window.removeEventListener('mousedown', handleClick);
      window.removeEventListener('keyup', handleKey);
    };
  }, []);

  return (
    <main className="flex flex-1 flex-col">

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span style={{ color: '#00FEED' }}>SwiftlyS2</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-xl">
                A powerful C# framework for Source Engine 2 servers
              </p>
              <p className="text-base text-gray-500 max-w-xl">
                Build modern game server plugins with the full power of .NET and C#.
                Hot reload, async/await, and native Source 2 integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4">
                <Link
                  href="/docs"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors text-center"
                >
                  Get Started
                </Link>
                <div className="relative" ref={downloadRef}>
                  <button
                    type="button"
                    onClick={() => setDownloadOpen((v) => !v)}
                    className="border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900 px-8 py-3 rounded-md font-medium transition-all text-center cursor-pointer select-none inline-flex items-center gap-2 shadow-sm hover:shadow"
                    aria-expanded={isDownloadOpen}
                    aria-haspopup="menu"
                  >
                    <LuDownload className="h-4 w-4" aria-hidden="true" />
                    Download
                  </button>
                  <div
                    role="menu"
                    className={`absolute z-10 mt-2 min-w-[220px] rounded-md border border-neutral-800 bg-neutral-950/95 shadow-xl backdrop-blur origin-top transition-all duration-150 ease-out ${
                      isDownloadOpen
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="px-4 py-2 text-xs uppercase tracking-[0.08em] text-neutral-500">Choose build</div>
                    <a
                      href="https://github.com/swiftly-solution/swiftlys2/releases/latest"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-900"
                      target="_blank"
                      rel="noreferrer"
                      role="menuitem"
                      onClick={() => setDownloadOpen(false)}
                    >
                      <LuShieldCheck className="h-4 w-4 text-green-400" aria-hidden="true" />
                      Latest Stable
                    </a>
                    <a
                      href="https://github.com/swiftly-solution/swiftlys2/releases"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-900"
                      target="_blank"
                      rel="noreferrer"
                      role="menuitem"
                      onClick={() => setDownloadOpen(false)}
                    >
                      <LuFlaskConical className="h-4 w-4 text-yellow-400" aria-hidden="true" />
                      Latest Beta
                    </a>
                    <div className="px-4 py-2 text-xs text-neutral-500 border-t border-neutral-800">Opens in GitHub Releases</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={SwiftlyLogo}
                alt="SwiftlyS2 Logo"
                width={400}
                height={400}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-neutral-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span style={{ color: '#00FEED' }}>Why SwiftlyS2?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to build powerful Source 2 server plugins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Feature Card 1 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-600/10 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Modern C# Development</h3>
              <p className="text-gray-400">
                Write clean, maintainable code with modern C# features, async/await, and full IntelliSense support.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-600/10 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Native Source 2 Integration</h3>
              <p className="text-gray-400">
                Direct access to Source Engine 2 internals with low-level game events, entity manipulation, and more.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-purple-600/10 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Plugin Ecosystem</h3>
              <p className="text-gray-400">
                Extensible architecture with dependency management, hot reload, and inter-plugin communication.
              </p>
            </div>
          </div>

          {/* Detailed Features */}
          <div className="space-y-24">
            {/* Feature 1 - Detailed */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Advanced Menu System
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Build interactive in-game menus with ease using SwiftlyS2{"'"}s advanced menu system.
                  Create dynamic menus, handle user input, and manage menu states seamlessly.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Builder API for easy menu creation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Input, Toggle, Progress Bar, Button, Text, Choices and more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Async/Await Support</span>
                  </li>
                </ul>
                <Image
                  src={MenusPreview}
                  alt="Menus Preview"
                  width={381}
                  height={226}
                  className="max-w-full h-auto mx-auto"
                />
              </div>
              <CodeBlock
                code={`var menu = Core.MenusAPI
    .CreateBuilder()
    .SetPlayerFrozen(false)
    .SetAutoCloseDelay(15f)
    .Design.SetMaxVisibleItems(5)
    .Design.SetMenuTitle("Menu System")
    .Design.SetMenuTitleVisible(true)
    .Design.SetMenuFooterVisible(true)
    .Design.EnableAutoAdjustVisibleItems()
    .Design.SetGlobalScrollStyle(MenuOptionScrollStyle.WaitingCenter)
    .AddOption(new TextMenuOption("1"))
    .AddOption(new ToggleMenuOption("12"))
    .AddOption(new ChoiceMenuOption(
        "123",
        ["Option 1", "Option 2", "Option 3"]
    ))
    .AddOption(new SliderMenuOption("1234"))
    .AddOption(new ProgressBarMenuOption(
        "12345", 
        () => (float)new Random().NextDouble(),
        multiLine: false
    ))
    .AddOption(new SubmenuMenuOption("123456", async () =>
    {
        await Task.Delay(1000);
        var menu = Core.MenusAPI.CreateBuilder()
            .SetPlayerFrozen(true)
            .Design.SetMenuTitle("Async Submenu")
            .AddOption(new TextMenuOption("123456"))
            .Build();
        return menu;
    }))
    .AddOption(new InputMenuOption("1234567"))
    .Build();

Core.MenusAPI.OpenMenuForPlayer(player, menu);`}
                title="Menu API"
              />
            </div>

            {/* Feature 2 - Detailed */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <CodeBlock
                  code={`[ServerNetMessageHandler]
public HookResult NetMessageHandler(
    CCSUsrMsg_SendPlayerItemDrops msg
) {
    Console.WriteLine("FIRED");
    return HookResult.Continue;
}
    
Core.NetMessage.Send<CUserMessageShake>(um =>
{
    um.Frequency = 1f;
    um.Recipients.AddAllPlayers();
});

Core.NetMessage.HookClientMessage<CCLCMsg_Move>((msg, id) => {
    Console.WriteLine("OnClientMove");
    Console.WriteLine(BitConverter.ToString(msg.Data));
    return HookResult.Continue;
});`}
                  title="Source 2 Integration"
                />
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Network Messages
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Full access to Source 2{"'"}s network message system.
                  Send and receive both server and client messages, allowing for deep integration with the engine{"'"}s networking layer.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Full support for protobuf used in Source:2 Games</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Hook all incoming player network messages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Hook all outgoing network messages</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 - Detailed */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  SteamWorks API
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Integrate SteamWorks features directly into your plugins.
                  Access player{"'"}s Steam profiles, manage user-generated content, and utilize Steam game server functionalities seamlessly.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Steam User-Generated Content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Steam Game Server</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Steam Game Server Statistics</span>
                  </li>
                </ul>
              </div>
              <CodeBlock
                code={`// Download Steam Workshop item
var result = SteamGameServerUGC.DownloadItem(
    new PublishedFileId_t(44332211),
    true
);

// Get Item State
var state = SteamGameServerUGC.GetItemState(
    new PublishedFileId_t(44332211)
);
Console.WriteLine(
    $"Needs Updating: {state == EItemState.k_EItemStateNeedsUpdate}"
);`}
                title="SteamWorks API"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Notice */}
      <section className="py-12 px-4 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            swiftlys2.net is a hobby project and is not affiliated with Valve Corporation or Steam.
          </p>
        </div>
      </section>
    </main>
  );
}
