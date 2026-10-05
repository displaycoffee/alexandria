/* Packages */
import type { Metadata } from 'next';

/* Scripts */
import { navigationHeader } from '@/components/navigation/scripts/navigation';
import { navigationUtils } from '@/components/navigation/scripts/navigation-utils';

/* Components */
import Link from 'next/link';

/* Page title */
const title = 'Child Page Two';

/* Parent page, from the same navigation data that Page Two uses to list its children */
const parentPage = navigationUtils.get.listItem(navigationHeader, 'page-two');

export const metadata: Metadata = {
	title: title,
};

export default function ChildPageTwo() {
	return (
		<div className="page-child-page-two margin-trim">
			<h2>{title}</h2>

			<p>
				This is <strong>child page two</strong> of page two.
			</p>

			{parentPage ? (
				<p>
					<Link href={parentPage.url}>Go back to {parentPage.label.toLowerCase()}</Link>
				</p>
			) : null}
		</div>
	);
}
