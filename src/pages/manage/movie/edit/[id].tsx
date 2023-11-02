import { MovieEdit } from '@/components/screens';
import { NextAuthPage } from '@/shared/types/auth.types';

const MovieEditPage: NextAuthPage = () => {
	return <MovieEdit />;
};

MovieEditPage.isOnlyAdmin = true;

export default MovieEditPage;
