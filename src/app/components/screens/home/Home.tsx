import { FC } from 'react';

import { Heading, Slider, SubHeading } from '@/components/ui';

import { Meta } from '@/utils/meta';

import { IHome } from './Home.interface';
import { Gallery } from '..';

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Meta
			title="Movies for fans"
			description="Watch MovieApp movies and TV shows online or steam right to your browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
			{slides.length && <Slider slides={slides} />}
			<div className="my-10">
				<SubHeading title="Trending now" />
				{trendingMovies.length && <Gallery items={trendingMovies} />}
			</div>
			<div className="my-10">
				<SubHeading title="Best actors" />
				{actors.length && <Gallery items={actors} />}
			</div>
		</Meta>
	);
};

export default Home;
