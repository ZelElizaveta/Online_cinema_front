import axios, { axiosClassic } from 'api/interceptors';

import { getActorsUrl } from '@/configs/api.comfig';
import { IActor } from '@/shared/types/movie.types';
import { IActorEditInput } from '@/components/screens/admin/actor/ActorEdit.interface';

export const actorService = {
	async getAll(searchTerm?: string) {
		return axios.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

	async getById(_id: string) {
		return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`));
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`));
	},
	async createActor() {
		return axios.post<string>(getActorsUrl(`/`));
	},

	async updateActor(_id: string, data: IActorEditInput) {
		return axios.put<string>(getActorsUrl(`/${_id}`), data);
	},

	async deleteActor(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`));
	},
};
