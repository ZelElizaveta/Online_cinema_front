import { GetStaticProps, NextPage } from 'next';

import { Home } from '@/components/screens';

import { errorCatch } from 'api/api.helpers';
import { movieService } from '@/services/movie.service';
import { actorService } from '@/services/actor.service';
import { getActorUrl, getMovieUrl } from '@/configs/url.config';
import { getGenresList } from '@/utils/movie/getgenresList';

import { IHome } from '@/components/screens/home/Home.interface';
import { ISlide } from '@/components/ui/slider/Slider.interface';
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface';

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await movieService.getAll();
		const { data: dataActors } = await actorService.getAll();
		const datatTrendingMovies = await movieService.getMostPopularMovies();

		const slides: ISlide[] = movies.slice(0, 5).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subtitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}));

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			link: getActorUrl(a.slug),
			content: {
				title: a.name,
				subtitle: `+${a.countMovies} movies`,
			},
		}));

		const trendingMovies: IGalleryItem[] = datatTrendingMovies
			.slice(0, 7)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}));

		return {
			props: {
				actors,
				slides,
				trendingMovies,
			} as IHome,
		};
	} catch (error) {
		console.log(errorCatch(error));

		return {
			props: {
				actors: [],
				slides: [],
				trendingMovies: [],
			} as IHome,
		};
	}
};

export default HomePage;
