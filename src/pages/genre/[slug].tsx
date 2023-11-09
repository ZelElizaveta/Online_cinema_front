import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Catalog } from '@/components/ui';
import NotFoundPage from '../404';

import { IGenre, IMovie } from '@/shared/types/movie.types';
import { movieService } from '@/services/movie.service';
import { GenreService } from '@/services/genre.service';

interface IGenrePage {
	movies: IMovie[];
	genre: IGenre | undefined;
}

const GenrePage: NextPage<IGenrePage> = ({ genre, movies }) => {
	return genre ? (
		<Catalog
			title={genre.name}
			movies={movies || []}
			description={genre.description}
		/>
	) : (
		<NotFoundPage />
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await GenreService.getAll();

		const paths = genres.map((g) => ({
			params: { slug: g.slug },
		}));
		return { paths, fallback: 'blocking' };
	} catch (error) {
		return {
			fallback: false,
			paths: [],
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: genre } = await GenreService.getBySlug(
			String(params?.slug)
		);

		const { data: movies } = await movieService.getByGenres([genre._id]);

		return {
			props: {
				genre,
				movies,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default GenrePage;
