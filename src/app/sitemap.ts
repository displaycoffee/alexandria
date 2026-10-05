/* Packages */
import type { MetadataRoute } from 'next';

/* Scripts */
import type { NavigationFlatItemType } from '@/components/navigation/scripts/navigation-types';
import { site } from '@/_core/data/site';
import { navigationHeader } from '@/components/navigation/scripts/navigation';
import { navigationUtils } from '@/components/navigation/scripts/navigation-utils';

/* Flatten nav items (and nested children) into a plain list of internal urls
   Note: includes items hidden from the nav (showInNav: false), but skips external urls and items with includeInSitemap: false
   Note: pages that aren't in the navigation need to be added to the list below */
const flattenUrls = (items: NavigationFlatItemType[]): string[] => {
	return items.flatMap((item) => {
		const isInternal = item.url.startsWith('/') && !item.url.startsWith('//');
		const urls = item.includeInSitemap && isInternal ? [item.url] : [];
		return item.children ? [...urls, ...flattenUrls(item.children)] : urls;
	});
};

/* Home is always included, even if it's ever removed from the navigation */
const routes = [...new Set(['/', ...flattenUrls(navigationUtils.get.list(navigationHeader, true))])];

export default function sitemap(): MetadataRoute.Sitemap {
	return routes.map((route) => ({
		url: new URL(route, site.url).href,
		lastModified: new Date(),
	}));
}
