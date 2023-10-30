import { GenreList } from '@/components/screens';
import { NextAuthPage } from '@/shared/types/auth.types';

const GenreListPage: NextAuthPage = () => {
	return <GenreList />;
};

GenreListPage.isOnlyAdmin = true;

export default GenreListPage;
