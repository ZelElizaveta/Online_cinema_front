import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { useRouter } from 'next/router';

import { useDebounce } from '@/hooks/useDebounce';
import { actorService } from '@/services/actor.service';

import { getAdminUrl } from '@/configs/url.config';
import { toastError } from '@/utils/toast-error';

import { ITableItem } from '@/components/ui/admin-table/AdminTable/AdminTable.interface';

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm, 500);
	const { push } = useRouter();

	const queryData = useQuery(
		['actors list', debouncedSearch],
		() => actorService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(actor): ITableItem => ({
							_id: actor._id,
							editUrl: getAdminUrl(`actor/edit/${actor._id}`),
							items: [actor.name, String(actor.countMovies)],
						})
					)
					.filter((actor) => actor.items[0].includes(searchTerm)),
			onError: (error) => {
				toastError(error, 'Actor list');
			},
		}
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const { mutateAsync: createAsync } = useMutation(
		'create actor',
		() => actorService.createActor(),
		{
			onError(error) {
				toastError(error, 'Create actor');
			},
			onSuccess({ data: _id }) {
				toastr.success('Create actor', 'create was successful');
				push(getAdminUrl(`actor/edit/${_id}`));
			},
		}
	);

	const { mutateAsync: deleteAsync } = useMutation(
		'delete actor',
		(actorId: string) => actorService.deleteActor(actorId),
		{
			onError(error) {
				toastError(error, 'Delete actor');
			},
			onSuccess() {
				toastr.success('Delete actor', 'delete was successful');
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
