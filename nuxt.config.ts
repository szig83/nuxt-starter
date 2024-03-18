// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		/*"@nuxtjs/eslint-module",*/ '@nuxtjs/tailwindcss',
		'nuxt-security',
		'@vueuse/nuxt',
		'@pinia/nuxt',
		'@nuxt/image'
	],
	tailwindcss: {
		configPath: 'tailwind.config',
		exposeConfig: false,
		config: {},
		viewer: true
	},
	security: {
		headers: false /*DEV mode only*/,
		csrf: true
	}
});
