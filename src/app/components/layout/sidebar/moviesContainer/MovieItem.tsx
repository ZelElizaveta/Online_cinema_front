import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { MaterialIcon } from '@/components/ui';

import { getGenreUrl, getMovieUrl } from '@/configs/url.config';
import { getGenresListEach } from '@/utils/movie/getgenresList';

import { IMovie } from '@/shared/types/movie.types';

import styles from './MovieList.module.scss';

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	const { slug, title, poster, genres, rating } = movie;

	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(slug)}>
				<Image
					src={poster}
					draggable={false}
					alt={slug}
					width={65}
					height={97}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>
						<Link href={getMovieUrl(slug)}>{title}</Link>
					</div>
					<div className={styles.genres}>
						{genres.map((genre, index, arr) => (
							<Link
								href={getGenreUrl(genre.slug)}
								key={genre._id}
							>
								<div>
									{getGenresListEach(
										index,
										arr.length,
										genre.name
									)}
								</div>
							</Link>
						))}
					</div>
				</div>

				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	);
};

export default MovieItem;
