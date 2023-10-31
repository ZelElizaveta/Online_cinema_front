import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Meta } from '@/utils/meta';
import { AdminNavigation, Heading, SkeletonLoader } from '@/components/ui';
import Field from '@/components/ui/form-elements/Field';

import { useGenreEdit } from './useGenreEdit';

import { IGenreEditInput } from './GenreEdit.interface';

const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useGenreEdit(setValue);
	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" />
			<form onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div>
							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>
							<div style={{ width: '31%' }}></div>
							<Field
								{...register('icon', {
									required: 'Icon is required!',
								})}
								placeholder="Icon"
								error={errors.icon}
								style={{ width: '31%' }}
							/>
							<button>Update</button>
						</div>
					</>
				)}
			</form>
		</Meta>
	);
};

export default GenreEdit;
