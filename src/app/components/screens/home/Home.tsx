import { FC } from 'react';

import { Heading } from '@/components/ui';
import { Layout } from '@/components/layout';

import { IHome } from './Home.interface';

const Home: FC<IHome> = (): JSX.Element => {
	return (
		<Layout>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Layout>
	);
};

export default Home;
