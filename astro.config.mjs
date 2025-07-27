// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "_tirito_'s docs",
			plugins: [starlightThemeRapide()],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Tirito6626' }, { icon: 'discord', label: 'Discord Server', href: 'https://discord.gg/partners/f8DH7YYCcj' }],
			sidebar: [
				{
					label: 'bash2json', 
					items: [
					 { 
						label: 'Guides', 
						autogenerate: { directory: 'bash2json/guides' }
					 },
					 { 
						label: 'Reference', 
						autogenerate: { directory: 'bash2json/reference' }
					 }
					]
				},
				{
					label: 'bashcord',
					items: [
						{ 
						   label: 'Guides', 
						   autogenerate: { directory: 'bashcord/Guides' }
						},
						{ 
							label: 'Builders', 
							autogenerate: { directory: 'bashcord/Builders' }
						},
						{ 
						   label: 'Functions', 
						   autogenerate: { directory: 'bashcord/Functions' }
						}
					   ]
				},
				{
					label: 'Xmanage',
					items: [
						{ 
							label: 'Getting started', 
							autogenerate: { directory: 'xmanage/getting-started' }
						},
						{ 
						   label: 'Guides', 
						   autogenerate: { directory: 'xmanage/guides' }
						},
						{ 
						   label: 'Commands', 
						   autogenerate: { directory: 'xmanage/commands' }
						}
					   ]
				}
			],
		}),
	],
});
