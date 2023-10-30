import Admin from '@/components/screens/admin/home/Admin';
import { NextAuthPage } from '@/shared/types/auth.types';

const AdminPage: NextAuthPage = () => {
	return <Admin />;
};

AdminPage.isOnlyAdmin = true;

export default AdminPage;
