import { NextAuthPage } from '@/shared/types/auth.types';

const AdminPage: NextAuthPage = () => {
	return <div>AdminPage</div>;
};

AdminPage.isOnlyAdmin = true;

export default AdminPage;
