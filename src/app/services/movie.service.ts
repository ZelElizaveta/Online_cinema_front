import { axiosClassic } from 'api/interceptors';
import axios from 'api/interceptors';

import { getMoviesUrl } from '@/configs/api.comfig';

import { IMovieEditInput } from '@/components/screens/admin/movie/MovieEdit.interface';
import { IActor, IMovie } from '@/shared/types/movie.types';

export const movieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		);

		return movies;
	},

	async getById(_id: string) {
		return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`));
	},
	async getByGenres(genreIds: string[]) {
		return axiosClassic.post<IMovie[]>(getMoviesUrl(`/by-genres`), {
			genreIds,
		});
	},
	async getByActor(actorId: string) {
		return axiosClassic.get<IActor[]>(getMoviesUrl(`/by-actor/${actorId}`));
	},

	async createMovie() {
		return axios.post<string>(getMoviesUrl(`/`));
	},

	async updateActor(_id: string, data: IMovieEditInput) {
		return axios.put<string>(getMoviesUrl(`/${_id}`), data);
	},

	async deleteMovie(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`));
	},
};
