import { FC } from 'react';

import { Menu } from '../ui/menu';
import { SkeletonLoader } from '@/components/ui';

import { usePopularGenres } from './usePopularGenres';

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres();
	return isLoading ? (
		<div className="mx-11 md-6">
			<SkeletonLoader count={5} className="h-7 mt-3 mb-4" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	);
};

export default GenreMenu;
