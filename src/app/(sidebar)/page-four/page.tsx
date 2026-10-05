/* Packages */
import type { Metadata } from 'next';

/* Components */
import { PageFourClient } from './PageFourClient';
import { Form } from '@/components/forms/Forms';

/* Page title */
const title = 'Page Four';

export const metadata: Metadata = {
	title: title,
};

export default function PageFour() {
	return (
		<div className="page-four margin-trim">
			<h2>{title}</h2>

			<p>This is an example of form fields.</p>

			<Form>
				<PageFourClient />
			</Form>
		</div>
	);
}
