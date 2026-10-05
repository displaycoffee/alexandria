/* Styles */
import './styles/alert.scss';

/* Packages */
import { Icon as IconifyIcon } from '@iconify/react';

/* Scripts */
import type { AlertIconType, AlertProps } from './scripts/alert-types';
import { icons } from '@/_core/data/icons';

/* Icon name for each alert type */
const alertIcons: AlertIconType = {
	error: 'circle-x',
	info: 'info',
	success: 'circle-check',
	warning: 'circle-alert',
};

export const Alert = (props: AlertProps) => {
	const { children, className: propClassName, type = 'error', ...rest } = props;
	const classes = `alert alert-${type} flex-nowrap`;
	const className = propClassName ? `${propClassName} ${classes}` : classes;
	const role = type == 'info' || type == 'success' ? 'status' : 'alert';

	return (
		<div className={className} role={role} {...rest}>
			<div className="alert-icon">
				<IconifyIcon icon={icons[alertIcons[type]]} ssr />
			</div>
			<div className="alert-message margin-trim">{children}</div>
		</div>
	);
};
