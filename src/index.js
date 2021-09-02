import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import App from './App';

import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('app')
);
