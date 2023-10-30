import { ActorList } from '@/components/screens';
import { NextAuthPage } from '@/shared/types/auth.types';

const ActorListPage: NextAuthPage = () => {
	return <ActorList />;
};

ActorListPage.isOnlyAdmin = true;

export default ActorListPage;
