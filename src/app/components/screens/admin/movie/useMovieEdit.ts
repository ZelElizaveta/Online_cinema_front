import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { toastr } from 'react-redux-toastr';

import { toastError } from '@/utils/toast-error';
import { getKeys } from '@/utils/object/getKeys';
import { movieService } from '@/services/movie.service';

import { getAdminUrl } from '@/configs/url.config';
import { IMovieEditInput } from './MovieEdit.interface';

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { push, query } = useRouter();
	const movieId = String(query.id);
	const { isLoading } = useQuery(
		['actor', movieId],
		() => movieService.getById(movieId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key]);
				});
			},
			onError: (error) => {
				toastError(error, 'Get movie');
			},
			enabled: !!query.id,
		}
	);

	const { mutateAsync } = useMutation(
		'update movie',
		(data: IMovieEditInput) => movieService.updateActor(movieId, data),
		{
			onError: (error) => {
				toastError(error, 'Update movie');
			},
			onSuccess: () => {
				toastr.success('Update movie', 'update was successful');
				push(getAdminUrl('movies'));
			},
		}
	);

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { isLoading, onSubmit };
};
