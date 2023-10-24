import { FC } from 'react';

import { Logo } from './logo';
import { MenuContainer } from './menuContainer';

import styles from './Navigation.module.scss';

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	);
};

export default Navigation;
