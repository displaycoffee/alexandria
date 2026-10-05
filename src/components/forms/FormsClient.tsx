'use client';

/* Styles */
import './styles/forms.scss';

/* Scripts */
import type { ButtonScrollProps } from './scripts/forms-types';
import { context } from '@/context/scripts/context';

/* Components */
import { Button } from './Forms';

export const ButtonScroll = (props: ButtonScrollProps) => {
	const { offset = 0, target, ...rest } = props;
	const { utilsBrowser } = context;

	return <Button variant={'link'} onClick={(e) => utilsBrowser.scrollTo(e, target, offset)} {...rest} />;
};
