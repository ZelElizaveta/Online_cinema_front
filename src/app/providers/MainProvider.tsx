'use client';

import { FC, ReactNode } from 'react';
import ReduxToastr from 'react-redux-toastr';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import HeadProvider from './HeadProvider/HeadProvider';

import { Layout } from '@/components/layout';

import { store } from '@/store/store';

interface Children {
	children: ReactNode;
}

const MainProvider: FC<Children> = ({ children }) => {
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
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	);
};

export default MainProvider;
