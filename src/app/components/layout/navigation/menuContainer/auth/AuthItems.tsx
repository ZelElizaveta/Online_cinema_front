import { FC, useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

import { MenuItem } from '../ui/menuItem';
import LogoutButton from './LogoutButton';
import { getAdminHomeUrl } from '@/configs/url.config';

const AuthItems: FC = () => {
	const { user } = useAuth();

	const [auth, setAuth] = useState<boolean>(false);
	const [authAdmin, setAuthAdmin] = useState<boolean>(false);

	useEffect(() => {
		if (user) {
			setAuth(true);
		} else {
			setAuth(false);
		}
	}, [user]);

	useEffect(() => {
		if (user?.isAdmin) {
			setAuthAdmin(true);
		} else {
			setAuthAdmin(false);
		}
	}, [user]);

	return (
		<>
			{auth ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							title: 'Profile',
							link: '/profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem
					item={{
						icon: 'MdLogin',
						title: 'Login',
						link: '/auth',
					}}
				/>
			)}

			{authAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						title: 'Admin panel',
						link: getAdminHomeUrl(),
					}}
				/>
			)}
		</>
	);
};

export default AuthItems;
