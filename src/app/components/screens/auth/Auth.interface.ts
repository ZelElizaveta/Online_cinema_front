import { FormState, UseFormRegister } from 'react-hook-form';

export interface IAuthInput {
	email: string;
	password: string;
}

export type Type = 'login' | 'register';

export interface IAuthFields {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	isPasswordRequired?: boolean;
}
