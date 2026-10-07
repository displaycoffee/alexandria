'use client';

/* Styles */
import './styles/forms.scss';

/* Packages */
import { useRef, useState } from 'react';
import type { InputEvent } from 'react';

/* Scripts */
import type { ButtonScrollProps, FieldCloseProps } from './scripts/forms-types';
import { forms } from './scripts/forms';
import { context } from '@/context/scripts/context';

/* Components */
import { Button } from './Forms';
import { Icon } from '@/components/icons/Icons';

export const ButtonScroll = (props: ButtonScrollProps) => {
	const { offset = 0, target, ...rest } = props;
	const { utilsBrowser } = context;

	return <Button variant={'link'} onClick={(e) => utilsBrowser.scrollTo(e, target, offset)} {...rest} />;
};

export const FieldClose = (props: FieldCloseProps) => {
	const { children, defaultValue, hasClose, value } = props;
	const fieldRef = useRef<HTMLDivElement>(null);
	const [hasInput, setHasInput] = useState(forms.clearable.hasValue(defaultValue));

	// Show the clear button while the field has a value
	// Note: controlled fields follow their value prop, so changes made outside the field (e.g. a reset) update the button too
	const isActive = value !== undefined ? forms.clearable.hasValue(value) : hasInput;

	// Track the value of uncontrolled fields as the user types
	const handleInput = (e: InputEvent<HTMLDivElement>) => {
		const field = e.target as HTMLInputElement | HTMLTextAreaElement;
		setHasInput(forms.clearable.hasValue(field.value));
	};

	// Clear the field and return focus to it
	const clearField = () => {
		const field = fieldRef.current?.querySelector<HTMLInputElement | HTMLTextAreaElement>('.input, .textarea');
		if (!field) return;

		forms.clearable.clear(field);
		field.focus();
	};

	// Wrap the field with a clear button
	// Note: only the field and button are wrapped, so a description or error below can't push the button out of place
	return hasClose ? (
		<div className="form-field-close" ref={fieldRef} onInput={handleInput}>
			{children}
			<Button
				className={`button-close${isActive ? ' button-active' : ''}`}
				hideLabel={true}
				label={'Clear'}
				onClick={clearField}
				type={'button'}
				variant={'unstyled'}
			>
				<Icon name={'x'} />
			</Button>
		</div>
	) : (
		children
	);
};
