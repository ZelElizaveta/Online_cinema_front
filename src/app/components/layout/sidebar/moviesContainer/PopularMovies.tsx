import { FC } from 'react';
import { useQuery } from 'react-query';

import { SkeletonLoader } from '@/components/ui';

import { movieService } from '@/services/movie.service';
import MovieList from './MovieList';

const PopularMovies: FC = () => {
	const { isLoading, data: populaMovies } = useQuery(
		['Popular movies in sidebar'],
		() => movieService.getMostPopularMovies()
	);
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			link="/trending"
			movies={populaMovies || []}
			title="Popular Movies"
		/>
	);
};

export default PopularMovies;
