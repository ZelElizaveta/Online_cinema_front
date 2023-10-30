import { FC } from 'react';

import { IAdminHeader } from './AdminHeader.interface';
import { SearchField } from '../..';
import { AdminCreateButton } from '..';

import styles from './AdminHeader.module.scss';

const AdminHeader: FC<IAdminHeader> = ({
	onClick,
	searchTerm,
	handleSearch,
}) => {
	return (
		<div className={styles.header}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{onClick ? <AdminCreateButton onClick={onClick} /> : null}
		</div>
	);
};

export default AdminHeader;
