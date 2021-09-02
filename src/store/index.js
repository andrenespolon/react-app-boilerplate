import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './modules/rootSagas';
import rootReducers from './modules/rootReducers';

const secretKey = process.env.REACT_APP_ID;
const nodeEnv = process.env.NODE_ENV;

// reducers redux-persist
const rootPersistReducer = persistCombineReducers(
	{
		key: 'SettingsApplication',
		keyPrefix: '_APP:',
		storage,
		// only these reducers will persist in localStorage
		whitelist: ['user', 'theme'],
		transforms: [
			// ecrypt data in localStorage
			encryptTransform({
				// use react app id as secretKey
				secretKey: secretKey,
				onError: function (error) {
					console.log(error);
				},
			}),
		],
	},
	// all reducers
	rootReducers
);

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store
const enhancer =
	nodeEnv === 'development'
		? compose(
				applyMiddleware(sagaMiddleware),
				window.__REDUX_DEVTOOLS_EXTENSION__ &&
					window.__REDUX_DEVTOOLS_EXTENSION__()
		  )
		: applyMiddleware(sagaMiddleware);

// store
export const store = createStore(rootPersistReducer, enhancer);

// persist store on localStorage
export const persistor = persistStore(store);

// run saga as middleware
sagaMiddleware.run(rootSagas);
