import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	HTMLAttributes,
	InputHTMLAttributes,
} from 'react';
import { FieldError } from 'react-hook-form';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IField
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder: string;
	error?: FieldError | undefined;
}
