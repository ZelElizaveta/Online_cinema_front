import { FC } from 'react';

import { AdminNavigation, Heading } from '@/components/ui';

import { Meta } from '@/utils/meta';

import styles from './Admin.module.scss';
import { Statistics } from './statistics';

const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Some statistics" />
			<Statistics />
		</Meta>
	);
};

export default Admin;
