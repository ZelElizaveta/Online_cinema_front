import { FC } from 'react';

import { AdminNavigation, Heading } from '@/components/ui';
import { AdminHeader, AdminTable } from '@/components/ui/admin-table';

import { Meta } from '@/utils/meta';
import { useActors } from './useActors';

const ActorList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useActors();
	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title="Actors" />
			<AdminHeader
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				onClick={createAsync}
			/>
			<AdminTable
				tableItems={data || []}
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Count movies']}
			/>
		</Meta>
	);
};

export default ActorList;
