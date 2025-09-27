import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          SwiftlyS2 - Beta
        </>
      ),
    },
    links: [
      {
        text: "Discord",
        url: "https://discord.gg/SRYnAEWmb4",
        external: true,
      },
      {
        text: "GitHub",
        url: "https://github.com/swiftly-solution",
        external: true,
      }
    ],
  };
}
