import '../styles/globals.scss';

import MainProvider from 'providers/MainProvider';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Component {...pageProps} />;
		</MainProvider>
	);
}
