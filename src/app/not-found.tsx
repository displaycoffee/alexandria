/* Packages */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Page not found',
};

export default function NotFound() {
	return (
		<p>
			This page could not be found. <Link href="/">Go back</Link>.
		</p>
	);
}
