import { GetStaticProps, NextPage } from 'next';

import { Catalog } from '@/components/ui';

import { IMovie } from '@/shared/types/movie.types';
import { movieService } from '@/services/movie.service';

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			title="Trending movies"
			movies={movies || []}
			description="Trending movies in exellent quality: legal, safe, without ads"
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const movies = await movieService.getMostPopularMovies();

		return {
			props: {
				movies,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default TrendingPage;
