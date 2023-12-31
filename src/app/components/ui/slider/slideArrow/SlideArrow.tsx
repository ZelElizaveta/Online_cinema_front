import { FC } from 'react';
import cn from 'classnames';

import { MaterialIcon } from '../..';

import { ISlideArrow } from './SlideArrow.interface';

import styles from './SlideArrow.module.scss';

const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandler }) => {
	const isLeft = variant === 'left';
	return (
		<button
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
		>
			<MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	);
};

export default SlideArrow;
