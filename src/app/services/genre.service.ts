import axios from 'api/interceptors';
import { axiosClassic } from 'api/interceptors';

import { getGenresUrl } from '@/configs/api.comfig';

import { IGenre } from '@/shared/types/movie.types';
import { IGenreEditInput } from '@/components/screens/admin/genre/GenreEdit.interface';

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

	async getById(_id: string) {
		return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`));
	},

	async createGenre() {
		return axios.post<string>(getGenresUrl(`/`));
	},

	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`));
	},

	async updateGenre(_id: string, data: IGenreEditInput) {
		return axios.put<string>(getGenresUrl(`/${_id}`), data);
	},
};
