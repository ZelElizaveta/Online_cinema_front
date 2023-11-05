import { FC } from 'react';

import { Heading, Slider } from '@/components/ui';

import { Meta } from '@/utils/meta';

import { IHome } from './Home.interface';

const Home: FC<IHome> = ({ slides }) => {
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
		</Meta>
	);
};

export default Home;
