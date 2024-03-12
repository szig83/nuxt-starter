// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		/*"@nuxtjs/eslint-module",*/
		'@nuxtjs/tailwindcss',
		'nuxt-security'
	],
	tailwindcss: {
		configPath: 'tailwind.config',
		exposeConfig: false,
		exposeLevel: 2,
		config: {},
		injectPosition: 'first',
		viewer: true
	},
	security: {
		headers: false /*DEV mode only*/,
		csrf: true
	}
});
