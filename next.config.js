const { sources } = require('next/dist/compiled/webpack/webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.NEXT_PUBLIC_REACT_API_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4200/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*',
			},
		];
	},
};

module.exports = nextConfig;
