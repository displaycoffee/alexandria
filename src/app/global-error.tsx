'use client';

/* Note: this replaces the root layout when it errors, so global styles and fonts aren't loaded here */

/* Components */
import { Alert } from '@/components/alert/Alert';

export default function GlobalError({ retry }: AppErrorProps) {
	// To-do: this will need a container wrapper like layout.tsx
	// To-do: add ButtonLink component
	return (
		<html lang="en">
			<body>
				<title>Something went wrong</title>
				<Alert>
					<p>
						Something went wrong.{' '}
						<button type="button" onClick={() => retry()}>
							Try again
						</button>
						.
					</p>
				</Alert>
			</body>
		</html>
	);
}
