import { FC } from 'react';

import { AdminNavigation, Heading } from '@/components/ui';
import { AdminHeader, AdminTable } from '@/components/ui/admin-table';

import { Meta } from '@/utils/meta';
import { useGenres } from './useGenres';

const GenreList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useGenres();
	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />
			<AdminHeader
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				onClick={createAsync}
			/>
			<AdminTable
				tableItems={data || []}
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Slug']}
			/>
		</Meta>
	);
};

export default GenreList;
