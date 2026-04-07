import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swiftly V1 (Lua) Memorial | Legacy Archival',
  description: 'Honoring the legacy of the original Swiftly framework (2023-2026). Reflecting on over 2 years of community innovation before the C# transition.',
  openGraph: {
    title: 'Swiftly V1 Memorial',
    description: 'A tribute to the original Lua-based Swiftly framework and the community that built it.',
    type: 'website',
  },
};

export default function MemorialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="memorial-layout">
      {children}
    </div>
  );
}
