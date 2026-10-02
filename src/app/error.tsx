'use client';

/* Packages */
import { useEffect } from 'react';
import Link from 'next/link';

type ErrorProps = {
	error: Error & { digest?: string };
	retry: () => void;
};

export default function Error({ error, retry }: ErrorProps) {
	useEffect(() => {
		if (process.env.NODE_ENV === 'development') console.error('Error boundary caught an error', error);
	}, [error]);

	return (
		<p>
			Something went wrong.{' '}
			<button type="button" onClick={() => retry()}>
				Try again
			</button>{' '}
			or <Link href="/">go back</Link>.
		</p>
	);
}
