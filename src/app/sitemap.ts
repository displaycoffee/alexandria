/* Packages */
import type { MetadataRoute } from 'next';

/* Scripts */
import { site } from '@/_core/data/site';

/* Note: add new pages here, or build this list from your data for dynamic routes */
const routes: string[] = ['/'];

export default function sitemap(): MetadataRoute.Sitemap {
	return routes.map((route) => ({
		url: new URL(route, site.url).href,
		lastModified: new Date(),
	}));
}
