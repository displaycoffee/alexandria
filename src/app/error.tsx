'use client';

/* Packages */
import { useEffect } from 'react';
import Link from 'next/link';

/* Components */
import { Alert } from '@/components/alert/Alert';
import { Button } from '@/components/forms/Forms';
import { ContainerFull } from '@/layout/container/Container';

// Note: this renders in the root layout rather than a route group layout, so it adds its own Content wrapper
export default function Error({ error, retry }: AppErrorProps) {
	// Log error if in dev
	useEffect(() => {
		if (process.env.NODE_ENV === 'development') console.error('Error boundary caught an error', error);
	}, [error]);

	return (
		<ContainerFull>
			<Alert>
				<p>
					Something went wrong. <Button label={'Try again'} variant={'link'} onClick={() => retry()} /> or <Link href="/">go back</Link>.
				</p>
			</Alert>
		</ContainerFull>
	);
}
