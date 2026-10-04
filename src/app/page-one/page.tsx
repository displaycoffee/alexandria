/* Packages */
import type { Metadata } from 'next';
//import Link from 'next/link';

/* Page title */
const title = 'Page One';

export const metadata: Metadata = {
	title: title,
};

export default function PageOne() {
	return (
		<div className="page-one margin-trim">
			<h2>{title}</h2>

			<p>This is the first page.</p>

			{/* <PageTitle title={title} />



			<Image alt={'Cat 01'} hasBg={true} hasLazy={true} image={'/assets/images/test/test-image-01.jpg'} wrapperClasses={['bg']} />

			<Image alt={'Cat 02'} hasLazy={true} image={'/assets/images/test/test-image-02.jpg'} wrapperClasses={['fit']} />

			<Image alt={'Cat 03'} hasLazy={true} image={'/assets/images/test/test-image-03.jpg'} wrapperClasses={['fluid']} /> */}
		</div>
	);
}
