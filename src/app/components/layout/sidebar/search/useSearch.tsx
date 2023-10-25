import { useState, ChangeEvent } from 'react';
import { useQuery } from 'react-query';
import { useDebounce } from '@/hooks/useDebounce';

import { movieService } from '@/services/movie.service';

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const { isSuccess, data } = useQuery(
		['search movie list', debouncedSearch],
		() => movieService.getAll(),
		{
			select: ({ data }) =>
				data
					.filter((movie) => movie.slug.includes(searchTerm))
					.slice(0, 4),
			enabled: !!debouncedSearch,
		}
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return { isSuccess, handleSearch, data, searchTerm };
};
