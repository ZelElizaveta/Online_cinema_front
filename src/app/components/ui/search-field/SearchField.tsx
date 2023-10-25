import { ForwardedRef, forwardRef } from 'react';

import styles from './SearchField.module.scss';

import { ISearchField } from './SearchField.interface';
import { MaterialIcon } from '..';

const SearchField = forwardRef(
	(
		{ className, handleSearch, searchTerm, ...props }: ISearchField,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className={styles.search}>
				<MaterialIcon name="MdSearch" />
				<input
					placeholder="Search"
					onChange={handleSearch}
					{...props}
				/>
			</div>
		);
	}
);

export default SearchField;
