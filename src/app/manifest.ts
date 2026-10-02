/* Packages */
import type { MetadataRoute } from 'next';

/* Scripts */
import { colors } from '@/_core/data/colors';
import { favicons } from '@/_core/data/favicons';
import { site } from '@/_core/data/site';

/* Note: served at /manifest.webmanifest and linked in <head> automatically */
export default function manifest(): MetadataRoute.Manifest {
	return {
		short_name: site.name,
		name: site.description,
		icons: favicons
			.filter((favicon) => favicon.isManifest)
			.map((favicon) => ({
				src: favicon.src,
				type: favicon.type,
				sizes: favicon.sizes,
				purpose: favicon.purpose as 'any' | 'maskable' | 'monochrome',
			})),
		start_url: '/',
		display: 'standalone',
		theme_color: colors.bg,
		background_color: colors.bg,
	};
}
