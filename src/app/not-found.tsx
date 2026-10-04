/* Packages */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Page Not Found',
};

export default function NotFound() {
	return (
		<div className="not-found">
			<p>
				Page not found. <Link href={'/'}>Go back</Link>.
			</p>
		</div>
	);
}
