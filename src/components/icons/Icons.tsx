/* Styles */
import './styles/icons.scss';

/* Packages */
import { Icon as IconifyIcon } from '@iconify/react';

/* Scripts */
import type { IconsProps } from './scripts/icons-types';
import { icons } from '@/_core/data/icons';

/* Note: icons.ts only holds the icons listed in icons.json, so this works in Server and Client Components */
export const Icon = (props: IconsProps) => {
	const { name, size } = props;
	const iconClass = 'icon-wrapper';

	// Create icon classes
	const iconClasses = [iconClass];
	if (size) iconClasses.push(`${iconClass}-${size}`);

	return (
		<div className={iconClasses.join(' ')}>
			<IconifyIcon icon={icons[name]} ssr className={'icon'} aria-hidden={'true'} focusable={'false'} />
		</div>
	);
};
