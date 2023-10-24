import { FC } from 'react';

import { Navigation, Sidebar } from '.';

import { ILayout } from './Layout.interface';

import styles from './Layout.module.scss';

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	);
};

export default Layout;
