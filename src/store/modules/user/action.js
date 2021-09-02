export function fetchLoginUser(email, password) {
	return {
		type: '@user/FETCH_LOGIN_USER',
		email,
		password,
	};
}

export function fetchLoginUserSuccess(userData) {
	return {
		type: '@user/FETCH_LOGIN_USER_SUCCESS',
		userData,
	};
}

export function fetchLoginUserError(error) {
	return {
		type: '@user/FETCH_LOGIN_USER_ERROR',
		error,
	};
}
