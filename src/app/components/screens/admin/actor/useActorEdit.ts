import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { toastr } from 'react-redux-toastr';

import { toastError } from '@/utils/toast-error';
import { getKeys } from '@/utils/object/getKeys';
import { actorService } from '@/services/actor.service';

import { getAdminUrl } from '@/configs/url.config';
import { IActorEditInput } from './ActorEdit.interface';

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { push, query } = useRouter();
	const actorId = String(query.id);
	const { isLoading } = useQuery(
		['actor', actorId],
		() => actorService.getById(actorId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key]);
				});
			},
			onError: (error) => {
				toastError(error, 'Get actor');
			},
			enabled: !!query.id,
		}
	);

	const { mutateAsync } = useMutation(
		'update actor',
		(data: IActorEditInput) => actorService.updateActor(actorId, data),
		{
			onError: (error) => {
				toastError(error, 'Update actor');
			},
			onSuccess: () => {
				toastr.success('Update actor', 'update was successful');
				push(getAdminUrl('actors'));
			},
		}
	);

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { isLoading, onSubmit };
};
