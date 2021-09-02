const INITIAL_STATE = {
	theme: 'dark',
	error: '',
	isLoading: false,
};

function theme(state = INITIAL_STATE, action) {
	switch (action.type) {
		// request theme to api
		case '@theme/FETCH_THEME':
			return {
				...state,
				isLoading: true,
			};

		// success recieve theme from api
		case '@theme/FETCH_THEME_SUCCESS':
			return {
				...state,
				theme: action.theme,
				isLoading: false,
			};

		// error recieve from api
		case '@theme/FETCH_THEME_ERROR':
			return {
				...state,
				error: action.error,
				isLoading: false,
			};

		// send theme to api
		case '@theme/SEND_THEME':
			return {
				...state,
				isLoading: true,
			};

		// success recieve from api
		case '@theme/SEND_THEME_SUCCESS':
			return {
				...state,
				isLoading: false,
			};

		// error recieve from api
		case '@theme/SEND_THEME_ERROR':
			return {
				...state,
				error: action.error,
				isLoading: false,
			};

		default:
			return state;
	}
}

export default theme;
