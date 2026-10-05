/* Packages */
import type { Metadata } from 'next';
import Link from 'next/link';

/* Scripts */
import { navigationHeader } from '@/components/navigation/scripts/navigation';
import { navigationUtils } from '@/components/navigation/scripts/navigation-utils';

/* Components */
import { List } from '@/components/blocks/Blocks';

/* Page title */
const title = 'Page Two';

/* Get navigation menu */
const navigationList = navigationUtils.get.listItem(navigationHeader, 'page-two');

export const metadata: Metadata = {
	title: title,
};

export default function PageTwo() {
	return (
		<div className="page-two margin-trim">
			<h2>{title}</h2>

			{navigationList?.children && navigationList.children.length !== 0 ? (
				<>
					<h3>Child Pages</h3>

					<List>
						{navigationList.children.map((nav) => {
							return (
								<li key={nav.url}>
									<Link href={`${nav.url}`}>{nav.label}</Link>
								</li>
							);
						})}
					</List>
				</>
			) : null}

			<p>This is the second page.</p>

			<div className="row row-auto row-spacing-20 row-wrap">
				<div className="column column-width-33">Column 01</div>

				<div className="column column-width-33">Column 02</div>

				<div className="column column-width-33">Column 03</div>
			</div>

			<p>An element below the row example.</p>
		</div>
	);
}
