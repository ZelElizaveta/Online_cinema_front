import { FC } from 'react';

import { Menu } from './ui/menu';
import GenreMenu from './genres/GenreMenu';

import { firstMenu, userMenu } from './menu.data';

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</div>
	);
};

export default MenuContainer;
