// import { createLogger, transports, format } from 'winston';
// const { combine, timestamp, label, prettyPrint, colorize } = format;

export default defineNuxtPlugin((nuxtApp) => {
	// nuxtApp.hook('vue:error', (err) => {
	// 	console.log(err);
	// 	const logger = createLogger({
	// 		format: combine(timestamp(), prettyPrint()),
	// 		transports: [
	// 			new transports.Console({
	// 				format: colorize({ all: true })
	// 			})
	// 			//new transports.File({ filename: './logs/combined.log' })
	// 		]
	// 	});
	// 	logger.error(err);
	// });
	// nuxtApp.hook('vue:error', (..._args) => {
	// 	console.log('vue:error');
	// 	if (process.client) {
	// 		console.log(..._args);
	// 	}
	// });
	// nuxtApp.hook('app:error', (..._args) => {
	// 	console.log('app:error');
	// 	if (process.client) {
	// 		console.log(..._args);
	// 	}
	// });
	// nuxtApp.vueApp.config.errorHandler = (..._args) => {
	// 	console.log('global error handler');
	// 	if (process.client) {
	// 		console.log(..._args);
	// 	}
	// };
});
