export default defineEventHandler(() => {
	return createError({
		statusCode: 404,
		message: 'hát ez nincs meg'
	});
	return 'ok';
});
