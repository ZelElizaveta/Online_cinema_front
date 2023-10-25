import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface ISearchField
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	searchTerm: string;
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}
