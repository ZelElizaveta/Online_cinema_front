import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { SkeletonLoader } from '../..';

import { useUpload } from './useUpload';

import { IUploudField } from './useUpload.interface';

import styles from '../Form.module.scss';

const UploadField: FC<IUploudField> = ({
	folder,
	value,
	isNoImage = false,
	onChange,
	placeholder,
	error,
	style,
}) => {
	const { uploadFile, isLoading } = useUpload(onChange, folder);

	return (
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile} />
					{error && (
						<div className={styles.error}>{error.message}</div>
					)}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader
								count={1}
								className="w-full h-full"
							/>
						) : (
							value && (
								<Image
									src={value}
									alt=""
									layout="fill"
									unoptimized
								/>
							)
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default UploadField;
