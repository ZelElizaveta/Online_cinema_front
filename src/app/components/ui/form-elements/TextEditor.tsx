import { FC, useEffect, useState } from 'react';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import cn from 'classnames';
import { Editor } from 'react-draft-wysiwyg';

import { ITextEditor } from './Form.interface';

import styles from './Form.module.scss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditor: FC<ITextEditor> = ({
	onChange,
	value,
	placeholder,
	error,
}) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [isUpdated, setIsUpdated] = useState(false);

	useEffect(() => {
		if (isUpdated) return;

		const defaultValue = value || '';
		const blocksFromHTML = htmlToDraft(defaultValue);
		const contentState = ContentState.createFromBlockArray(
			blocksFromHTML.contentBlocks,
			blocksFromHTML.entityMap
		);

		const newEditorState = EditorState.createWithContent(contentState);
		setEditorState(newEditorState);
	}, [isUpdated, value]);

	const onEditorStateChange = (editorState: EditorState) => {
		setIsUpdated(true);
		setEditorState(editorState);

		return onChange(
			draftToHtml(convertToRaw(editorState.getCurrentContent()))
		);
	};

	return (
		<div
			className={cn(styles.common, styles.editorWrapper, 'animate-fade')}
		>
			<label>
				<span>{placeholder}</span>
				<div className={styles.wrapper}>
					<Editor
						toolbarClassName={styles.toolbar}
						editorClassName={styles.editor}
						editorState={editorState}
						onEditorStateChange={onEditorStateChange}
						spellCheck
						toolbar={{
							options: ['inline', 'list'],
							inline: {
								inDropdown: false,
								className: undefined,
								component: undefined,
								dropdownClassName: undefined,
								options: [
									'bold',
									'italic',
									'underline',
									'strikethrough',
								],
							},
							list: {
								inDrodown: false,
								options: ['unordered', 'ordered'],
							},
						}}
					/>
				</div>
				{error && <div className={styles.error}>{error.message}</div>}
			</label>
		</div>
	);
};

export default TextEditor;
