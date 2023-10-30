import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { useDebounce } from '@/hooks/useDebounce';
import { movieService } from '@/services/movie.service';

import { getAdminUrl } from '@/configs/url.config';
import { toastError } from '@/utils/toast-error';
import { getGenresList } from '@/utils/movie/getgenresList';

import { ITableItem } from '@/components/ui/admin-table/AdminTable/AdminTable.interface';

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery(
		['movies list', debouncedSearch],
		() => movieService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(movie): ITableItem => ({
							_id: movie._id,
							editUrl: getAdminUrl(`movie/edit/${movie._id}`),
							items: [
								movie.title,
								String(
									movie.genres.map((g) => g.name).join(', ')
								),
								String(movie.rating),
							],
						})
					)
					.filter((movie) => movie.items[0].includes(searchTerm)),
			onError: (error) => {
				toastError(error, 'Movie list');
			},
		}
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const { mutateAsync: deleteAsync } = useMutation(
		'delete movie',
		(movieId: string) => movieService.deleteMovie(movieId),
		{
			onError(error) {
				toastError(error, 'Delete movie');
			},
			onSuccess() {
				toastr.success('Delete movie', 'delete was successful');
				queryData.refetch();
			},
		}
	);

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
		}),
		[queryData, searchTerm, deleteAsync]
	);
};
