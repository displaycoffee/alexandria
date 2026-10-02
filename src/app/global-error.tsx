'use client';

/* Note: this replaces the root layout when it errors, so global styles and fonts aren't loaded here */

type GlobalErrorProps = {
	error: Error & { digest?: string };
	retry: () => void;
};

export default function GlobalError({ retry }: GlobalErrorProps) {
	return (
		<html lang="en">
			<body>
				<title>Something went wrong</title>
				<p>
					Something went wrong.{' '}
					<button type="button" onClick={() => retry()}>
						Try again
					</button>
				</p>
			</body>
		</html>
	);
}
