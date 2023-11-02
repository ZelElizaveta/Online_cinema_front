import { useQuery } from 'react-query';

import { actorService } from '@/services/actor.service';
import { toastError } from '@/utils/toast-error';

import { IOption } from '@/components/ui/form-elements/select/select.interface';

export const useAdminActors = () => {
	const queryData = useQuery('List of actors', () => actorService.getAll(), {
		select: ({ data }) =>
			data.map(
				(actor): IOption => ({
					label: actor.name,
					value: actor._id,
				})
			),
		onError: (error) => {
			toastError(error, 'Actor list');
		},
	});

	return queryData;
};
