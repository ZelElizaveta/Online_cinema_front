import axios from 'api/interceptors';

import { getGenresUrl } from '@/configs/api.comfig';

import { IGenre } from '@/shared/types/movie.types';
import { axiosClassic } from 'api/interceptors';

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`));
	},
};
