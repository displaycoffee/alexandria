/* Styles */
import './styles/content.scss';

/* Packages */
import type { ContentProps } from './scripts/content-types';

export const Content = (props: ContentProps) => {
	const { children } = props;

	return <div className="content">{children}</div>;
};
