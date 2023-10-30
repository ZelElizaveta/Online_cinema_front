import { FC } from 'react';
import AdminTableHeader from './AdminTableHeader';
import { IAdminTable } from './AdminTable.interface';
import { SkeletonLoader } from '../..';
import AdminTableItem from './AdminTableItem';

import styles from './AdminTable.module.scss';

const AdminTable: FC<IAdminTable> = ({
	tableItems,
	isLoading,
	headerItems,
	removeHandler,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />
			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((tableItem) => (
					<AdminTableItem
						key={tableItem._id}
						tableItem={tableItem}
						removeHandler={() => removeHandler(tableItem._id)}
					/>
				))
			) : (
				<div className={styles.notFound}>Element not found</div>
			)}
		</div>
	);
};

export default AdminTable;
