import { FC } from 'react';

import Field from '../Field';

import { ISlugField } from './SlugField.interface';

import styles from './SlugField.module.scss';

const SlugField: FC<ISlugField> = ({ generate, error, register }) => {
	return (
		<div className="relative">
			<Field
				{...register('slug', {
					required: 'Slug is required!',
				})}
				placeholder="Slug"
				error={error}
			/>
			<div className={styles.badge} onClick={generate}>
				generate
			</div>
		</div>
	);
};

export default SlugField;
