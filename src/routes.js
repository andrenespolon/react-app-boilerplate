import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import private route
import PrivateRoute from './utils/PrivateRoute';
// import pages
import Login from './pages/Login';
import MainLayout from './pages/MainLayout';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<Login />
			</Route>
			<PrivateRoute path='/auth'>
				<MainLayout />
			</PrivateRoute>
			<Route path='*'>
				<Redirect to='/' />
			</Route>
		</Switch>
	);
};

export default Routes;
