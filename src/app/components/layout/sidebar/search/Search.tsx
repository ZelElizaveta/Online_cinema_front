import { FC } from 'react';

import { SearchField } from '@/components/ui';
import { SearchList } from '.';

import { useSearch } from './useSearch';

import styles from './Search.module.scss';

const Search: FC = () => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch();

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm="" handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};

export default Search;
