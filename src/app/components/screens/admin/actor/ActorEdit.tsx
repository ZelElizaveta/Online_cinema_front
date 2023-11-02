import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { stripHtml } from 'string-strip-html';
import dynamic from 'next/dynamic';

import { Meta } from '@/utils/meta';
import {
	AdminNavigation,
	Heading,
	SkeletonLoader,
	SlugField,
} from '@/components/ui';
import Field from '@/ui/form-elements/Field';
import Button from '@/ui/form-elements/Button';

import { useActorEdit } from './useActorEdit';
import generateSlug from '@/utils/string/generateSlug';

import { IActorEditInput } from './ActorEdit.interface';

import formStyles from '@/ui/form-elements/AdminForm.module.scss';
import UploadField from '@/components/ui/form-elements/uploadField/UploadField';

const DynamicTextEditor = dynamic(
	() => import('@/ui/form-elements/TextEditor'),
	{
		ssr: false,
	}
);

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useActorEdit(setValue);
	return (
		<Meta title="Edit actor">
			<AdminNavigation />
			<Heading title="Edit actor" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder="Name"
								error={errors.name}
							/>

							<SlugField
								generate={() =>
									setValue(
										'slug',
										generateSlug(getValues('name'))
									)
								}
								register={register}
								error={errors.slug}
							/>

							<Controller
								name="photo"
								control={control}
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="actors"
										placeholder="photo"
									/>
								)}
								rules={{
									required: 'Photo is required',
								}}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	);
};

export default ActorEdit;
