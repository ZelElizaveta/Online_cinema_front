'use client';
import { useQuery } from 'react-query';

import { getGenreUrl } from '@/configs/url.config';
import { GenreService } from '@/services/genre.service';

import { IMenuItems } from '../ui/menuItem/menuItem.interface';

export const usePopularGenres = () => {
	const queryData = useQuery({
		queryKey: ['popular genre menu'],
		queryFn: () => GenreService.getAll(),
		select: ({ data }) =>
			data
				.filter((genre) => genre.icon)
				.map(
					(genre) =>
						({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						} as IMenuItems)
				)
				.splice(0, 4),
	});
	return queryData;
};
