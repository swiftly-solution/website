// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import starlightAutoSidebar from 'starlight-auto-sidebar';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SwiftlyS2 - Beta',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/swiftly-solution' }],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
			},
			sidebar: [
				{
					label: "Guides",
					autogenerate: { directory: "guides" }
				}
			],
			customCss: [
				'./src/styles/global.css',
			],
		}),
	],

	vite: {
		plugins: [tailwindcss(), starlightAutoSidebar()],
	},
});