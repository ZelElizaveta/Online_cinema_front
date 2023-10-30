import { FC } from 'react';

import { AdminNavigation, Heading } from '@/components/ui';
import { AdminHeader, AdminTable } from '@/components/ui/admin-table';

import { Meta } from '@/utils/meta';
import { useMovies } from './useMovies';

const MovieList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } =
		useMovies();
	return (
		<Meta title="Movies">
			<AdminNavigation />
			<Heading title="Movies" />
			<AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />
			<AdminTable
				tableItems={data || []}
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Title', 'Genre', 'Rating']}
			/>
		</Meta>
	);
};

export default MovieList;
