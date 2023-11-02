import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { toastr } from 'react-redux-toastr';

import { useDebounce } from '@/hooks/useDebounce';
import { GenreService } from '@/services/genre.service';

import { getAdminUrl } from '@/configs/url.config';
import { toastError } from '@/utils/toast-error';

import { ITableItem } from '@/components/ui/admin-table/AdminTable/AdminTable.interface';

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm, 500);
	const { push } = useRouter();

	const queryData = useQuery(
		['genres list', debouncedSearch],
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre): ITableItem => ({
							_id: genre._id,
							editUrl: getAdminUrl(`genre/edit/${genre._id}`),
							items: [genre.name, genre.slug],
						})
					)
					.filter((genre) => genre.items[1].includes(searchTerm)),
			onError: (error) => {
				toastError(error, 'Genre list');
			},
		}
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const { mutateAsync: createAsync } = useMutation(
		'create genre',
		() => GenreService.createGenre(),
		{
			onError(error) {
				toastError(error, 'Create genre');
			},
			onSuccess({ data: _id }) {
				toastr.success('Create genre', 'create was successful');
				push(getAdminUrl(`genre/edit/${_id}`));
			},
		}
	);

	const { mutateAsync: deleteAsync } = useMutation(
		'delete genre',
		(genreId: string) => GenreService.deleteGenre(genreId),
		{
			onError(error) {
				toastError(error, 'Delete genre');
			},
			onSuccess() {
				toastr.success('Delete genre', 'delete was successful');
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
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	);
};
