import { FC } from 'react';

import { Search } from '.';

import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			{/* <MoviesContainer /> */}
		</div>
	);
};

export default Sidebar;
