import { FC } from 'react';

import { Meta } from '@/utils/meta';
import { Heading } from '..';
import Description from '../heading/Description';
import GalleryItem from '../gallery/GalleryItem';

import { ICatalog } from './Catalog.interface';
import { getMovieUrl } from '@/configs/url.config';

import styles from './Catalog.module.scss';

const Catalog: FC<ICatalog> = ({ title, description, movies }) => {
	return (
		<Meta title={title}>
			<Heading title={title} className={styles.heading} />

			{description && (
				<Description
					text={description}
					className={styles.description}
				/>
			)}

			<section className={styles.movies}>
				{movies.map((movie) => (
					<GalleryItem
						key={movie._id}
						item={{
							posterPath: movie.bigPoster,
							name: movie.title,
							link: getMovieUrl(movie.slug),
							content: {
								title: movie.title,
							},
						}}
						variant="horizontal"
					/>
				))}
			</section>
		</Meta>
	);
};

export default Catalog;
