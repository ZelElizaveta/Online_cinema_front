import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';

import { toastError } from '@/utils/toast-error';
import { getKeys } from '@/utils/object/getKeys';
import { GenreService } from '@/services/genre.service';

import { IGenreEditInput } from './GenreEdit.interface';
import { toastr } from 'react-redux-toastr';
import { getAdminUrl } from '@/configs/url.config';

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const { push, query } = useRouter();
	const genreId = String(query.id);
	const { isLoading } = useQuery(
		['genre', genreId],
		() => GenreService.getById(genreId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key]);
				});
			},
			onError: (error) => {
				toastError(error, 'Get genre');
			},
			enabled: !!query.id,
		}
	);

	const { mutateAsync } = useMutation(
		'update genre',
		(data: IGenreEditInput) => GenreService.updateGenre(genreId, data),
		{
			onError: (error) => {
				toastError(error, 'Update genre');
			},
			onSuccess: () => {
				toastr.success('Update genre', 'update was successful');
				push(getAdminUrl('genres'));
			},
		}
	);

	const onSubmit: SubmitHandler<IGenreEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { isLoading, onSubmit };
};
