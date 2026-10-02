/* Packages */
import 'server-only';
import { Icon as IconifyIcon } from '@iconify/react';
import { getIconData } from '@iconify/utils';
import { icons as lucide } from '@iconify-json/lucide';

/* Styles */
import './styles/icons.scss';

/* Scripts */
import type { IconsProps } from './scripts/icons-types';

/* Note: this is a Server Component so the full Lucide set stays on the server and only the icon's SVG data is sent to the browser. */
/* To use an icon inside a Client Component, render <Icon /> in a Server Component and pass it down as a prop or children. */
export const Icon = (props: IconsProps) => {
	const { icon, size } = props;
	const iconClass = 'icon-wrapper';
	const iconData = getIconData(lucide, icon);

	// Fail loudly so a misspelled icon name doesn't silently render nothing
	if (!iconData) throw new Error(`Icon "${icon}" not found in @iconify-json/lucide`);

	// Create icon classes
	const iconClasses = [iconClass];
	if (size) iconClasses.push(`${iconClass}-${size}`);

	return (
		<div className={iconClasses.join(' ')}>
			<IconifyIcon icon={iconData} ssr className={'icon'} aria-hidden={'true'} focusable={'false'} />
		</div>
	);
};
