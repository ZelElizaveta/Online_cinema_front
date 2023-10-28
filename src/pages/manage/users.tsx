import { NextAuthPage } from '@/shared/types/auth.types';

const UsersListPage: NextAuthPage = () => {
	return <div>users</div>;
};

UsersListPage.isOnlyAdmin = true;

export default UsersListPage;
