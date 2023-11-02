import { Options } from 'react-select';
import { ControllerRenderProps } from 'react-hook-form';

import { IField } from '../Form.interface';

export interface IOption {
	value: string;
	label: string;
}

export interface ISelect extends IField {
	options: Options<IOption>;
	isMulti?: boolean;
	field: ControllerRenderProps<any, any>;
	isLoading: boolean;
}
