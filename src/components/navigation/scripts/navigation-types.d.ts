/* Packages */
import type { Route } from 'next';
import type { ReactNode } from 'react';

/* Type definitions */
type NavigationComponent = {
	data: NavigationMap | NavigationItem[];
	disableTransition?: boolean;
	hideMobile?: boolean;
	label: string;
};

type NavigationItemComponent = {
	children?: ReactNode;
	disableTransition: boolean;
	nav: NavigationItem;
	navigationLinkClass: string;
};

type NavigationLinkComponent = {
	className: string;
	disableTransition: boolean;
	href: Route;
	label: string;
};

/* What Navigation renders, whether the items come from a NavigationMap (navigation.ts) or a list from another source */
type NavigationItem = {
	children?: NavigationItem[];
	id: string;
	isRoute: boolean;
	label: string;
	url: Route;
};

type NavigationFlatItem = NavigationItem & {
	children?: NavigationFlatItem[];
	includeInSitemap: boolean;
	showInNav: boolean;
};

type NavigationMapItem = {
	children?: NavigationMap;
	id: string;
	includeInSitemap: boolean;
	isRoute: boolean;
	label: string;
	showInNav: boolean;
	url: Route;
};

type NavigationMap = {
	[key: string]: NavigationMapItem;
};

type NavigationMapItemOptions = {
	children?: NavigationMap;
	includeInSitemap?: boolean;
	isRoute?: boolean;
	key: string;
	label: string;
	showInNav?: boolean;
	url?: string;
};

/* Export types */
export type NavigationItemType = NavigationItem;

export type NavigationFlatItemType = NavigationFlatItem;

export type NavigationMapItemType = NavigationMapItem;

export type NavigationMapType = NavigationMap;

export type NavigationMapItemOptionsType = NavigationMapItemOptions;

/* Export prop types */
export type NavigationComponentProps = NavigationComponent;

export type NavigationItemComponentProps = NavigationItemComponent;

export type NavigationLinkComponentProps = NavigationLinkComponent;
