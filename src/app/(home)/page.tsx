import Link from 'next/link';
import SwiftlyLogo from "./logo.png";
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center px-4 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="mb-16 grid grid-cols-2">
          <div className='flex flex-col justify-center'>
            <div className="flex items-center justify-center gap-4 mb-6">
              <h1 className="text-6xl font-bold" style={{ color: '#00FEED' }}>
                SwiftlyS2
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              A powerful C# framework for Source Engine 2 servers.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/docs"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/docs/api"
                className="border border-neutral-600 hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                API Reference
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src={SwiftlyLogo} alt="SwiftlyS2 Logo" width={512} height={512} className="mx-auto" />
          </div>
        </div>

        <div className="mb-1 rounded-lg pt-8 pb-8">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#00FEED' }}>Performance Tests</h2>
          <div className="bg-neutral-950 rounded-lg p-8 border border-neutral-800">
            <div className="grid gap-8">
              soon™️
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#00FEED' }}>Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-neutral-700 bg-neutral-950 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Development Experience</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Modern C# with async/await</li>
                <li>Rich IntelliSense support</li>
                <li>Hot reload capabilities</li>
                <li>Type-safe API bindings</li>
              </ul>
            </div>
            <div className="p-6 border border-neutral-700 bg-neutral-950 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Engine Integration</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Native Source Engine 2 support</li>
                <li>Low-level game event access</li>
                <li>Entity manipulation</li>
                <li>Network message handling</li>
              </ul>
            </div>
            <div className="p-6 border border-neutral-700 bg-neutral-950 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Server Management</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Player management APIs</li>
                <li>Map and game mode control</li>
                <li>Console command registration</li>
                <li>Configuration management</li>
              </ul>
            </div>
            <div className="p-6 border border-neutral-700 bg-neutral-950 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Performance</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Zero-copy event handling</li>
                <li>Minimal memory overhead</li>
                <li>Optimized native interop</li>
                <li>JIT compilation benefits</li>
              </ul>
            </div>
            <div className="p-6 border border-neutral-700 bg-neutral-950 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Extensibility</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Plugin dependency system</li>
                <li>Event-driven architecture</li>
                <li>Custom hook registration</li>
                <li>Inter-plugin communication</li>
              </ul>
            </div>
            <div className="p-6 border border-neutral-700 bg-neutral-950 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Developer Tools</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Built-in debugging support</li>
                <li>Profiling and metrics</li>
                <li>Live plugin reloading</li>
                <li>Comprehensive logging</li>
              </ul>
            </div>
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
