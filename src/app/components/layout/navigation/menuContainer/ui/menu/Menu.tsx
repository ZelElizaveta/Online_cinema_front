import { FC } from 'react';
import dynamic from 'next/dynamic';

import { MenuItem } from '../menuItem';

import { IMenu } from '../../menu.interface';

import styles from './Menu.module.scss';

const DynamicAuthItems = dynamic(() => import('../../auth/AuthItems'), {
	ssr: false,
});

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item) => {
					return <MenuItem item={item} key={item.link} />;
				})}
				{title === 'General' ? <DynamicAuthItems /> : null}
			</ul>
		</div>
	);
};

export default Menu;
