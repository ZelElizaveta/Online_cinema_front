import { FC } from 'react';
import { FieldError } from 'react-hook-form';

import Field from '@/components/ui/form-elements/Field';

import { IAuthFields } from './Auth.interface';
import { validEmail } from '@/shared/regex';

const AuthFields: FC<IAuthFields> = ({
	register,
	isPasswordRequired = false,
	formState: { errors },
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'E-mail is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder="E-mail"
				error={errors.email as FieldError}
			/>

			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should be 6 symbols',
								},
						  }
						: {}
				)}
				placeholder="Password"
				type="password"
				error={errors.password as FieldError}
			/>
		</>
	);
};

export default AuthFields;
