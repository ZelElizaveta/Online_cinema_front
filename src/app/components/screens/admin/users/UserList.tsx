import { FC } from 'react';

import { AdminNavigation, Heading } from '@/components/ui';
import { AdminHeader, AdminTable } from '@/components/ui/admin-table';

import { Meta } from '@/utils/meta';
import { useUsers } from './useUsers';

const UserList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } =
		useUsers();
	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />
			<AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />
			<AdminTable
				tableItems={data || []}
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Email', 'Date register']}
			/>
		</Meta>
	);
};

export default UserList;
