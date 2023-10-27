import Cookies from 'js-cookie';

import { removeTokensStorage, saveToStorage } from './auth.helper';
import { API_URL, getAuthUrl } from '@/configs/api.comfig';

import { IAuthResponse } from '@/store/user/user.interface';
import { getContentType } from 'api/api.helpers';
import { axiosClassic } from 'api/interceptors';

export const authService = {
	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/register')}`,
			{
				email,
				password,
			}
		);

		if (response.data.accessToken) {
			saveToStorage(response.data);
		}

		return response;
	},

	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/login'),
			{ email, password }
		);

		if (response.data.accessToken) {
			saveToStorage(response.data);
		}

		return response;
	},

	logout() {
		removeTokensStorage();
		localStorage.removeItem('user');
	},

	async getNewtokkens() {
		const refreshToken = Cookies.get('refreshToken');
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/login/accsess-token'),
			{ refreshToken },
			{ headers: getContentType() }
		);

		if (response.data.accessToken) {
			saveToStorage(response.data);
		}

		return response;
	},
};
