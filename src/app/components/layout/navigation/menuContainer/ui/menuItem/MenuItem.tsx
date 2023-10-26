'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FC } from 'react';
import cn from 'classnames';

import { MaterialIcon } from '@/components/ui';

import { IMenuItems } from './menuItem.interface';

import styles from './MenuItem.module.scss';

const MenuItem: FC<{ item: IMenuItems }> = ({ item }) => {
	const pathname = usePathname();

	return (
		<li
			className={cn({
				// [styles.active]: item.link === pathname,
			})}
		>
			<Link href={item.link}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	);
};

export default MenuItem;
