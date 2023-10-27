import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { IAuthResponse, IEmailPassword } from './user.interface';

import { authService } from '@/services/auth/auth.service';
import { toastError } from '@/utils/toast-error';
import { errorCatch } from 'api/api.helpers';

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await authService.register(email, password);
			toastr.success('Registration', 'Completed successfuly');
			return response.data;
		} catch (error) {
			toastError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await authService.login(email, password);
			toastr.success('Login', 'Completed successfuly');
			return response.data;
		} catch (error) {
			toastError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
	await authService.logout();
});

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await authService.getNewtokkens();
			return response.data;
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastError(
					'Logout',
					'Your autorization is finished, plz sigh in again'
				);
				thunkApi.dispatch(logout());
			}
			return thunkApi.rejectWithValue(error);
		}
	}
);
