import { getMoviesUrl } from '@/configs/api.comfig';
import { IMovie } from '@/shared/types/movie.types';
import { axiosClassic } from 'api/interceptors';

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
};
