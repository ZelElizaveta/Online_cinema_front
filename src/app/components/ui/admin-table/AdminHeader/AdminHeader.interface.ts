import { ChangeEvent } from 'react';

export interface IAdminHeader {
	onClick?: () => {};
	searchTerm: string;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
