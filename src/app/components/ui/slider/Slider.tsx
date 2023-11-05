import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import SlideArrow from './slideArrow/SlideArrow';
import SlideItem from './SlideItem';

import { useSlider } from './useSlider';

import { ISlider } from './Slider.interface';

import styles from './Slider.module.scss';

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
	const { slideIn, isNext, isPrev, index, handleClick } = useSlider(
		slides.length
	);
	return (
		<div className={styles.slider}>
			{isPrev && (
				<SlideArrow
					variant="left"
					clickHandler={() => handleClick('prev')}
				/>
			)}

			<CSSTransition
				in={slideIn}
				timeout={100}
				classNames="slide-animation"
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

			{isNext && (
				<SlideArrow
					variant="right"
					clickHandler={() => handleClick('next')}
				/>
			)}
		</div>
	);
};

export default Slider;
