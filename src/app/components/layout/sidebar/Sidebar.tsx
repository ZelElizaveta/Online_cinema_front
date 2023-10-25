import { FC } from 'react';

import { Search } from '.';
import { MoviesContainer } from './moviesContainer';

import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	);
};

export default Sidebar;
