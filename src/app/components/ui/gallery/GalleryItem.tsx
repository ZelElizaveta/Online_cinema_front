import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import { IGalleryItemProps } from './gallery.interface';

import styles from './Gallery.module.scss';

const GalleryItem: FC<IGalleryItemProps> = ({
	variant,
	item: { posterPath, name, link, content },
}) => {
	return (
		<Link
			href={link}
			className={cn(styles.item, {
				[styles.withText]: content,
				[styles.horisontal]: variant === 'horisontal',
				[styles.vertical]: variant === 'vertical',
			})}
		>
			<Image
				src={posterPath}
				alt={name}
				layout="fill"
				draggable={false}
				priority
			/>
			{content && (
				<div className={styles.content}>
					<div className={styles.title}>
						{content.title}
						<div className={styles.subtitle}>
							{content.subtitle}
						</div>
					</div>
				</div>
			)}
		</Link>
	);
};

export default GalleryItem;
