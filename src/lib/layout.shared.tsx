import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BsGithub, BsDiscord } from 'react-icons/bs';

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
          SwiftlyS2
        </>
      ),
    },
    links: [
      {
        text: "Documentation",
        url: "/docs",
        external: false,
      },
      {
        type: "icon",
        label: "GitHub",
        icon: <BsGithub />,
        text: "GitHub",
        url: "https://github.com/swiftly-solution",
        external: true,
      },
      {
        type: "icon",
        label: "Discord",
        icon: <BsDiscord />,
        text: "Discord",
        url: "/discord", // (swiftlys2.net/discord)
        external: true,
      },
    ],
  };
}
