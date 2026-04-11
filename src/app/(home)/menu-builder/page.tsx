import Link from 'next/link';
import { MenuVisualBuilder } from '../../../components/menu-visual-builder';

export default function MenuBuilderPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1680px] flex-1 flex-col gap-6 px-4 py-8 md:px-6 lg:py-10">
      <div className="rounded-xl border border-fd-border bg-gradient-to-r from-emerald-500/15 via-cyan-500/10 to-indigo-500/15 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300">Visual Scripting Tool</p>
            <h1 className="mt-1 text-2xl font-bold md:text-3xl">SwiftlyS2 Menu Block Builder</h1>
            <p className="mt-2 max-w-3xl text-sm text-fd-muted-foreground md:text-base">
              Build menu flows with blocks, tune behavior in the inspector, and generate ready-to-paste C# using the current API.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/docs/development/menus" className="rounded-md border border-fd-border bg-fd-card px-3 py-2 hover:bg-fd-accent">
              Back To Menus Docs
            </Link>
            <Link href="/docs/development/getting-started" className="rounded-md border border-fd-border bg-fd-card px-3 py-2 hover:bg-fd-accent">
              Plugin Setup Docs
            </Link>
          </div>
        </div>
      </div>

      <MenuVisualBuilder />
    </main>
  );
}