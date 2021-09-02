import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { auth } from '../services/auth';

function PrivateRoute({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={() => (auth.isAuthenticated ? children : <Redirect to='/' />)}
		/>
	);
}

export default PrivateRoute;
