export const auth = {
	isAuthenticated: true,
	signin(cb) {
		auth.isAuthenticated = true;
		setTimeout(cb, 1500); // fake async
	},
	signout(cb) {
		auth.isAuthenticated = false;
		setTimeout(cb, 1500);
	},
};
