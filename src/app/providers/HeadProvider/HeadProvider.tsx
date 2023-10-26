'use client';

import Head from 'next/head';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import Favicons from './Favicons';

import { accentColor } from '@/configs/constatnta';

const HeadProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{children}
			<ProgressBar
				height="4px"
				color={accentColor}
				options={{ showSpinner: false }}
				shallowRouting
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>

				<Favicons />

				<meta name="theme-color" content={'#181B1E'} />
				<meta
					name="msapplication-navbutton-color"
					content={'#181B1E'}
				/>
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#181B1E'}
				/>
			</Head>
		</>
	);
};

export default HeadProvider;
