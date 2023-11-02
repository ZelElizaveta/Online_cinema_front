import { FC } from 'react';
import makeAnimated from 'react-select/animated';
import { OnChangeValue } from 'react-select';
import ReactSelect from 'react-select';

import { IOption, ISelect } from './select.interface';

import styles from './Select.module.scss';
import formStyles from '../Form.module.scss';

const animatedComponents = makeAnimated();

const Select: FC<ISelect> = ({
	placeholder,
	error,
	isMulti,
	isLoading,
	field,
	options,
}) => {
	const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map((item) => item.value)
				: (newValue as IOption).value
		);
	};

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter(
						(option) => field.value.indexOf(option.value) >= 0
				  )
				: options.find((option) => option.value === field.value);
		} else {
			isMulti ? [] : '';
		}
	};
	return (
		<div className={styles.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix="custom-select"
					options={options}
					value={getValue()}
					isMulti={isMulti}
					onChange={onChange}
					components={animatedComponents}
					isLoading={isLoading}
				/>
			</label>
			{error && <div className={formStyles.error}>{error.message}</div>}
		</div>
	);
};

export default Select;
