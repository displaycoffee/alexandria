/* Styles */
import './styles/content.scss';

/* Packages */
import type { ContentProps } from './scripts/content-types';

export const Content = (props: ContentProps) => {
	const { children } = props;

	// Note: page view transitions are started by NavigationLink (useViewTransition), which names .content page-content for content.scss
	// React's <ViewTransition> isn't used here since it starts a document view transition on page load, which shifts the content in Firefox
	return <div className="content">{children}</div>;
};
