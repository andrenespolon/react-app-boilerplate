import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from '../themes';

// import views
import Dashboard from '../views/Dashboard';
// formatPrice
import { formatPrice } from '../utils/format';

const Container = styled.div`
	min-height: 100vh;
	min-width: 100vw;
	background: ${({ theme }) => theme.colors.bg};
	color: ${({ theme }) => theme.colors.text};
`;

const View = styled.div`
	padding: 20px;
`;

function MainLayout({ theme }) {
	const { path } = useRouteMatch();
	return (
		<ThemeProvider theme={getTheme(theme)}>
			<Container>
				<div>Main Layout</div>
				{/* example to use formatPrice */}
				<div>{formatPrice(0)}</div>
				<View>
					<Switch>
						<Route exact path={`${path}/dashboard`}>
							<Dashboard />
						</Route>
						<Route path='*'>
							<div>error</div>
						</Route>
					</Switch>
				</View>
			</Container>
		</ThemeProvider>
	);
}

const mapStateToProps = (state) => ({
	theme: state.theme.theme,
});

export default connect(mapStateToProps)(MainLayout);
