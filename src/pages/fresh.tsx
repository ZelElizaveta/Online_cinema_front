import { GetStaticProps, NextPage } from 'next';

import { Catalog } from '@/components/ui';

import { IMovie } from '@/shared/types/movie.types';
import { movieService } from '@/services/movie.service';

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			title="Fresh movies"
			movies={movies || []}
			description="New movies and series in exellent quality: legal, safe, without ads"
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await movieService.getAll();

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

export default FreshPage;
