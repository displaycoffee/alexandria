/* Scripts */
import { head } from '@/layout/head/scripts/head';

/* Components */
import { PreloadedStyles } from '@/layout/head/Head';
import { Container } from '@/layout/container/Container';
import { ThemeToggleScript } from '@/components/theme-toggle/ThemeToggleScript';

export const metadata = head.metadata.all;
export const viewport = head.metadata.viewport;

export default function RootLayout({ children }: LayoutProps<'/'>) {
	// Only preload fonts needed for the first render; the rest load on demand through their @font-face rule
	head.preload.fonts();

	// Note: suppressHydrationWarning only covers <html>'s own attributes, since ThemeToggleScript sets data-theme before React hydrates
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<ThemeToggleScript />
				<PreloadedStyles />
			</head>
			<body className="scrollbar">
				<Container>{children}</Container>
			</body>
		</html>
	);
}
