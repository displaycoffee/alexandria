/* Packages */
import type { Metadata } from 'next';
import Link from 'next/link';

/* Components */
import { ContainerFull } from '@/layout/container/Container';

export const metadata: Metadata = {
	title: 'Page Not Found',
};

// Note: this renders in the root layout rather than a route group layout, so it adds its own Content wrapper
export default function NotFound() {
	return (
		<ContainerFull>
			<div className="not-found">
				<p>
					Page not found. <Link href={'/'}>Go back</Link>.
				</p>
			</div>
		</ContainerFull>
	);
}
