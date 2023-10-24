'use client';

import { FC, ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import { Layout } from '@/components/layout';

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
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	);
};

export default MainProvider;
