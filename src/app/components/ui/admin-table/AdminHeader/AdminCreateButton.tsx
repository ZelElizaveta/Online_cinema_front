import { FC } from 'react';

import Button from '../../form-elements/Button';

import { IAdminButton } from './AdminCreateButton.interface';

const AdminCreateButton: FC<IAdminButton> = ({ onClick }) => {
	return <Button onClick={onClick}>Create new</Button>;
};

export default AdminCreateButton;
