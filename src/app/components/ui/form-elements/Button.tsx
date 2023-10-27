import { FC } from 'react';
import cn from 'classnames';

import { IButton } from './Form.interface';

import styles from './Form.module.scss';

const Button: FC<IButton> = ({ children, className, ...props }) => {
	return (
		<button className={cn(styles.button, className)} {...props}>
			{children}
		</button>
	);
};

export default Button;
