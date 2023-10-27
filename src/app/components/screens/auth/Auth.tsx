import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Meta } from '@/utils/meta';
import { Heading } from '@/components/ui';
import AuthFields from './AuthFields';
import Button from '@/components/ui/form-elements/Button';

import { useAuthRedirect } from './useAuthRedirect';
import { useAuth } from '@/hooks/useAuth';

import { IAuthInput } from './Auth.interface';

import styles from './Auth.module.scss';
import { useActions } from '@/hooks/useActions';

type Type = 'login' | 'register';

const Auth: FC = () => {
	useAuthRedirect();

	const { isLoading } = useAuth();
	const [type, setType] = useState<Type>('login');
	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	});

	const { login, register } = useActions();

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') {
			login(data);
		} else if (type === 'register') {
			register(data);
		} else {
			return;
		}

		reset();
	};

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />
					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>
					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							{'Login'}
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							{'Register'}
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	);
};

export default Auth;
