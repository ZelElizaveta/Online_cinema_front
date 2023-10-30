import axios from 'api/interceptors';

import { getActorsUrl } from '@/configs/api.comfig';
import { IUser } from '@/shared/types/user.types';
import { IActor } from '@/shared/types/movie.types';

export const actorService = {
	async getAll(searchTerm?: string) {
		return axios.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

	async deleteUser(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`));
	},
};
