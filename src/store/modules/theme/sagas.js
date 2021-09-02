import { call, put, takeLatest, all, delay } from 'redux-saga/effects';
import {
	fetchThemeSuccess,
	fetchThemeError,
	// sendThemeSuccess,
	// sendThemeError,
} from './action';
import api from '../../../services/api';

function* _fetchTheme({ userId }) {
	delay(500);
	try {
		const res = yield call(api.get, `/theme?userId=${userId}`);
		yield put(fetchThemeSuccess(res));
	} catch (error) {
		yield put(fetchThemeError(error));
	}
}

function* _sendTheme() {}

export default all([
	takeLatest('@theme/FETCH_THEME', _fetchTheme),
	takeLatest('@theme/SEND_THEME', _sendTheme),
]);
