import { ActorEdit } from '@/components/screens';
import { NextAuthPage } from '@/shared/types/auth.types';

const ActorEditPage: NextAuthPage = () => {
	return <ActorEdit />;
};

ActorEditPage.isOnlyAdmin = true;

export default ActorEditPage;
