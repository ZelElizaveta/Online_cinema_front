import axios from 'axios';
import Cookies from 'js-cookie';

import { API_URL } from '@/configs/api.comfig';

import { errorCatch, getContentType } from './api.helpers';
import { authService } from '@/services/auth/auth.service';
import { removeTokensStorage } from '@/services/auth/auth.helper';

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
});

const instans = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
});

instans.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken');
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

instans.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config;

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'must be provided') &&
			error.config &&
			error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await authService.getNewtokkens();
				return instans.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					removeTokensStorage();
				}
			}
		}

		throw error;
	}
);

export default instans;
