import { FC } from 'react';

import { IHeading } from './Heading.interface';

const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<div
			className={`text-white text-opacity-80 font-semibolt ${
				className?.includes('xl') ? '' : 'text-3xl'
			} ${className}`}
		>
			{title}
		</div>
	);
};

export default Heading;
