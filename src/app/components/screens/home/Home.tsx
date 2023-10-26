import { FC } from 'react';

import { Heading } from '@/components/ui';

import { Meta } from '@/utils/meta';

import { IHome } from './Home.interface';
import { toastr } from 'react-redux-toastr';

const Home: FC<IHome> = (): JSX.Element => {
	return (
		<Meta
			title="Movies for fans"
			description="Watch MovieApp movies and TV shows online or steam right to your browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Meta>
	);
};

export default Home;
