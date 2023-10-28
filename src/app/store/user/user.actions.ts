import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { IAuthResponse, IEmailPassword } from './user.interface';

import { authService } from '@/services/auth/auth.service';
import { toastError } from '@/utils/toast-error';
import { errorCatch } from 'api/api.helpers';

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await authService.register(email, password);
			toastr.success('Registration', 'Completed successfully');
			return response.data;
		} catch (error) {
			toastError(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await authService.login(email, password);
			toastr.success('Login', 'Completed successfully');
			return response.data;
		} catch (error) {
			toastError(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	await authService.logout();
});

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			const response = await authService.getNewTokkens();
			return response.data;
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorizaiton is finished, plz sign in again'
				);
				thunkAPI.dispatch(logout());
			}
			return thunkAPI.rejectWithValue(error);
		}
	}
);
