import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { ISlideItem } from './Slider.interface';

import styles from './Slider.module.scss';
import { title } from 'process';

const SlideItem: FC<ISlideItem> = ({
	slide: { bigPoster, title, link, subtitle },
	buttonTitle = 'Watch',
}) => {
	const { push } = useRouter();
	return (
		<div className={styles.slide}>
			{bigPoster && (
				<Image
					src={bigPoster}
					alt={title}
					layout="fill"
					className={styles.image}
					draggable={false}
					unoptimized
					priority
				/>
			)}

			<div className={styles.content}>
				<div className={styles.heading}>{title}</div>
				<div className={styles.subHeading}>{subtitle}</div>
				<button className={styles.button} onClick={() => push(link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	);
};

export default SlideItem;
