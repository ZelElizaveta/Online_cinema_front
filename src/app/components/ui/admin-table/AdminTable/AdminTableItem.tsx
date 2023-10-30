import { FC } from 'react';
import { IAdminTableItem } from './AdminTable.interface';

import styles from './AdminTable.module.scss';
import { AdminActions } from '..';

const AdminTableItem: FC<IAdminTableItem> = ({ tableItem, removeHandler }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value) => {
				return <div key={value}>{value}</div>;
			})}
			<AdminActions
				editUrl={tableItem.editUrl}
				removeHandler={removeHandler}
			/>
		</div>
	);
};

export default AdminTableItem;
