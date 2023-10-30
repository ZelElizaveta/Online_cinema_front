import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { useDebounce } from '@/hooks/useDebounce';
import { userService } from '@/services/user.service';

import { getAdminUrl } from '@/configs/url.config';
import { convertMongoDate } from '@/utils/date/convertMongoDate';
import { toastError } from '@/utils/toast-error';

import { ITableItem } from '@/components/ui/admin-table/AdminTable/AdminTable.interface';

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery(
		['users list', debouncedSearch],
		() => userService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(user): ITableItem => ({
							_id: user._id,
							editUrl: getAdminUrl(`user/edit/${user._id}`),
							items: [
								user.email,
								convertMongoDate(user.createdAt),
							],
						})
					)
					.filter((user) => user.items[0].includes(searchTerm)),
			onError: (error) => {
				toastError(error, 'User list');
			},
		}
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(userId: string) => userService.deleteUser(userId),
		{
			onError(error) {
				toastError(error, 'Delete user');
			},
			onSuccess() {
				toastr.success('Delete user', 'delete was successful');
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
