export function fetchTheme(userId) {
	return {
		type: '@theme/FETCH_THEME',
		userId,
	};
}

export function fetchThemeSuccess(theme) {
	return {
		type: '@theme/FETCH_THEME_SUCCESS',
		theme,
	};
}

export function fetchThemeError(error) {
	return {
		type: '@theme/FETCH_THEME_ERROR',
		error,
	};
}

export function sendTheme(theme) {
	return {
		type: '@theme/SEND_THEME',
		theme,
	};
}

export function sendThemeSuccess() {
	return {
		type: '@theme/SEND_THEME_SUCCESS',
	};
}

export function sendThemeError(error) {
	return {
		type: '@theme/SEND_THEME_ERROR',
		error,
	};
}
