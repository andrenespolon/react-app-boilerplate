import { create } from 'apisauce';

const url = process.env.REACT_APP_URL_API;
const appId = process.env.REACT_APP_ID;

const api = create({
	baseURL: url,
	headers: {
		'X-MyApp-Application-Id': appId,
	},
});

export default api;
