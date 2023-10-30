import { FC } from 'react';
import { useRouter } from 'next/router';

import { MaterialIcon } from '@/components/ui';

import { IAdminActions } from './AdminActions.interface';

import styles from './AdminActions.module.scss';

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter();

	return (
		<div className={styles.actions}>
			<button onClick={() => push(editUrl)}>
				<MaterialIcon name="MdEdit" />
			</button>
			<button onClick={removeHandler}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	);
};

export default AdminActions;
