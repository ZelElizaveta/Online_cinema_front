import { NextPage } from 'next';
import { ReactNode } from 'react';

export type TypeRols = {
	isOnlyAdmin?: boolean;
	isOnlyUser?: boolean;
};

export type NextAuthPage<T = {}> = NextPage<T> & TypeRols;

export type TypeComponentAuthFields = {
	Component: TypeRols;
	children: ReactNode;
};
