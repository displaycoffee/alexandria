'use client';

/* Styles */
import '@/layout/container/styles/container.scss';

/* Components */
import { Alert } from '@/components/alert/Alert';
import { Button } from '@/components/forms/Forms';
import { ContainerFull } from '@/layout/container/Container';

export default function GlobalError({ retry }: AppErrorProps) {
	return (
		<html lang="en">
			<body>
				<title>Something went wrong</title>

				<div className="container">
					<main id="main-content" className="main">
						<div className="main-layout flex-wrap">
							<ContainerFull>
								<Alert>
									<p>
										Something went wrong. <Button label={'Try again'} variant={'link'} onClick={() => retry()} />.
									</p>
								</Alert>
							</ContainerFull>
						</div>
					</main>
				</div>
			</body>
		</html>
	);
}
