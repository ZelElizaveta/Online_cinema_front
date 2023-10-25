import { FC } from 'react';
import Link from 'next/link';

import MovieItem from './MovieItem';

import { IMovieList } from './Movie-list.interface';

import styles from './MovieList.module.scss';

const MovieList: FC<IMovieList> = ({ title, link, movies }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link} className={styles.button}>
				See More
			</Link>
		</div>
	);
};

export default MovieList;
