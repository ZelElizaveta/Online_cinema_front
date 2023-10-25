import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IMovie } from '@/shared/types/movie.types';

import { getMovieUrl } from '@/configs/url.config';

import styles from './SearchList.module.scss';

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => {
					return (
						<Link href={getMovieUrl(movie.slug)} key={movie._id}>
							<Image
								src={movie.poster}
								width={50}
								height={50}
								alt={movie.title}
								priority={true}
								draggable={false}
								style={{ objectFit: 'cover' }}
							/>
							<span>{movie.title}</span>
						</Link>
					);
				})
			) : (
				<div className="text-white text-center my-4">
					Movies not found
				</div>
			)}
		</div>
	);
};

export default SearchList;
