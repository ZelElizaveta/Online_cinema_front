'use client';

import { FC, ReactNode } from 'react';
import ReduxToastr from 'react-redux-toastr';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import HeadProvider from './HeadProvider/HeadProvider';
import AuthProvider from './AuthProvider/AuthProvider';

import { Layout } from '@/components/layout';

import { store } from '@/store/store';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';

interface Children {
	children: ReactNode;
}

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToastr />
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	);
};

export default MainProvider;
