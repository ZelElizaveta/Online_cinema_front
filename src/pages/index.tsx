import { GetStaticProps, NextPage } from 'next';

import { Home } from '@/components/screens';

import { errorCatch } from 'api/api.helpers';
import { movieService } from '@/services/movie.service';
import { getMovieUrl } from '@/configs/url.config';
import { getGenresList } from '@/utils/movie/getgenresList';

import { IHome } from '@/components/screens/home/Home.interface';
import { ISlide } from '@/components/ui/slider/Slider.interface';

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await movieService.getAll();

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subtitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}));

		return {
			props: {
				slides,
			} as IHome,
		};
	} catch (error) {
		console.log(errorCatch(error));

		return {
			props: {
				slides: [],
			} as IHome,
		};
	}
};

export default HomePage;
