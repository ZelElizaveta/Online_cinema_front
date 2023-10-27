'use client';

import { ForwardedRef, forwardRef } from 'react';
import { IField } from './Form.interface';
import cn from 'classnames';

import styles from './Form.module.scss';

const Field = forwardRef(
	(
		{ placeholder, error, type = 'text', style, ...props }: IField,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className={cn(styles.common, styles.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input type={type} ref={ref} {...props} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

export default Field;
