'use client';

/* Packages */
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* Scripts */
import type { NavigationLinkComponentProps } from './scripts/navigation-types';
import { useViewTransition } from '@/layout/container/scripts/container-hooks';

export const NavigationLink = (props: NavigationLinkComponentProps) => {
	const { className, disableTransition, href, label } = props;
	const pathname = usePathname();
	const isActive = pathname == href;
	const handleTransition = useViewTransition();

	return (
		<Link
			href={href}
			className={isActive ? `${className} navigation-link-active` : className}
			aria-current={isActive ? 'page' : undefined}
			onClick={disableTransition ? undefined : (e) => handleTransition(e, href)}
		>
			{label}
		</Link>
	);
};
