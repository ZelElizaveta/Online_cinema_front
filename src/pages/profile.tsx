import { NextAuthPage } from '@/shared/types/auth.types';
import { NextPage } from 'next';

const ProfilePage: NextAuthPage = () => {
	return <div>profile</div>;
};

ProfilePage.isOnlyUser = true;

export default ProfilePage;
