import { EditorProps } from 'draft-js';
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

type TypeEditorPropsField = EditorProps & IField;
export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void;
	value: string;
}
