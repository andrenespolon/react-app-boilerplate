import { all } from 'redux-saga/effects';

import user from './user/sagas';
import theme from './theme/sagas';

export default function* rootSagas() {
	return yield all([user, theme]);
}
