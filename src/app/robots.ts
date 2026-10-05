/* Packages */
import type { MetadataRoute } from 'next';

/* Scripts */
import { site } from '@/_core/data/site';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: new URL('/sitemap.xml', site.url).href,
	};
}
