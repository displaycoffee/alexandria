'use client';

/* Packages */
import { useEffect } from 'react';
import Link from 'next/link';

/* Components */
import { Alert } from '@/components/alert/Alert';

export default function Error({ error, retry }: AppErrorProps) {
	// Log error if in dev
	useEffect(() => {
		if (process.env.NODE_ENV === 'development') console.error('Error boundary caught an error', error);
	}, [error]);

	// To-do: add ButtonLink component

	return (
		<Alert>
			<p>
				Something went wrong.{' '}
				<button type="button" onClick={() => retry()}>
					Try again
				</button>{' '}
				or <Link href="/">go back</Link>.
			</p>
		</Alert>
	);
}
