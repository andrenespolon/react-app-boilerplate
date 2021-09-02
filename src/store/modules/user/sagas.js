import { call, put, takeLatest, all, delay } from 'redux-saga/effects';
import { fetchLoginUserSuccess, fetchLoginUserError } from './action';
import api from '../../../services/api';

function* _fetchLoginUser({ userId }) {
	delay(500);
	try {
		const res = yield call(api.get, `/user?userId=${userId}`);
		yield put(fetchLoginUserSuccess(res));
	} catch (error) {
		yield put(fetchLoginUserError(error));
	}
}

export default all([
	takeLatest('@theme/FETCH_THEME', _fetchLoginUser),
	// takeLatest('@theme/SEND_THEME', _sendTheme),
]);
