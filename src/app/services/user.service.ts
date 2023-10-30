import axios from 'api/interceptors';

import { getUsersUrl } from '@/configs/api.comfig';
import { IUser } from '@/shared/types/user.types';

export const userService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

	async deleteUser(_id: string) {
		return axios.delete<string>(getUsersUrl(`/${_id}`));
	},
};
