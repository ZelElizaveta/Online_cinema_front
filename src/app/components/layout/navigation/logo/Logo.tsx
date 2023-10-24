import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LogoIcon from '@/assets/images/logo.svg';

const Logo: FC = () => {
	return (
		<Link href="/" className="px-layout mb-10 block">
			<Image
				src={LogoIcon}
				alt="logo"
				width={247}
				height={34}
				draggable={false}
			/>
		</Link>
	);
};

export default Logo;
