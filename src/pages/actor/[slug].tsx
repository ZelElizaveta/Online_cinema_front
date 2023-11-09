import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Catalog } from '@/components/ui';
import NotFoundPage from '../404';

import { IActor, IMovie } from '@/shared/types/movie.types';
import { movieService } from '@/services/movie.service';
import { GenreService } from '@/services/genre.service';
import { actorService } from '@/services/actor.service';

interface IActorPage {
	movies: IMovie[];
	actor: IActor | undefined;
}

const ActorPage: NextPage<IActorPage> = ({ actor, movies }) => {
	return actor ? (
		<Catalog title={actor.name} movies={movies || []} />
	) : (
		<NotFoundPage />
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await actorService.getAll();

		const paths = actors.map((a) => ({
			params: { slug: a._id },
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
		const { data: actor } = await actorService.getBySlug(
			String(params?.slug)
		);

		const { data: movies } = await movieService.getByActor(actor._id);

		return {
			props: {
				actor,
				movies,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default ActorPage;
