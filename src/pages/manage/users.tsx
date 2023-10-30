import UserList from '@/components/screens/admin/users/UserList';

import { NextAuthPage } from '@/shared/types/auth.types';

const UsersListPage: NextAuthPage = () => {
	return <UserList />;
};

UsersListPage.isOnlyAdmin = true;

export default UsersListPage;
