import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Routes from './routes';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	animation-name: fadeIn;
	-moz-animation-name: fadeIn;
	-webkit-animation-name: fadeIn;
	-o-animation-name: fadeIn;
	animation-duration: 0.6s;
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const App = () => {
	return (
		<Container>
			<Router>
				<Routes />
			</Router>
		</Container>
	);
};

export default App;
