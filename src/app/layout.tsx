/* Scripts */
import { head } from '@/layout/head/scripts/head';

/* Components */
import { PreloadedStyles } from '@/layout/head/Head';
import { Container } from '@/layout/container/Container';

export const metadata = head.metadata.all;
export const viewport = head.metadata.viewport;

export default function RootLayout({ children }: LayoutProps<'/'>) {
	// Only preload fonts needed for the first render; the rest load on demand through their @font-face rule
	head.preload.fonts();

	return (
		<html lang="en">
			<head>
				<PreloadedStyles />
			</head>
			<body className="scrollbar">
				<Container>{children}</Container>
			</body>
		</html>
	);
}
