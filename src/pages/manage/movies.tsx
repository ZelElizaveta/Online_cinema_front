import { MovieList } from '@/components/screens';
import { NextAuthPage } from '@/shared/types/auth.types';

const MovieListPage: NextAuthPage = () => {
	return <MovieList />;
};

MovieListPage.isOnlyAdmin = true;

export default MovieListPage;
