const INITIAL_STATE = {
	userId: '',
	firstName: '',
	lastName: '',
	email: '',
	sessionToken: '',
	error: '',
	isLoading: false,
};

function user(state = INITIAL_STATE, action) {
	switch (action.type) {
		// request login to api
		case '@user/FETCH_LOGIN_USER':
			return {
				...state,
				isLoading: true,
			};

		// success recieve from api
		case '@user/FETCH_LOGIN_USER_SUCCESS':
			const { userId, firstName, lastName, email, sessionToken } =
				action.userData;
			return {
				...state,
				userId,
				firstName,
				lastName,
				email,
				sessionToken,
				isLoading: false,
			};

		// error recieve from api
		case '@user/FETCH_LOGIN_USER_ERROR':
			return {
				...state,
				error: action.error,
				isLoading: false,
			};

		default:
			return state;
	}
}

export default user;
