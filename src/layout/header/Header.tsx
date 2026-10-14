/* Styles */
import './styles/header.scss';

/* Packages */
import Link from 'next/link';

/* Scripts */
import { context } from '@/context/scripts/context';

export const Header = () => {
	const { variables } = context;

	return (
		<header className="header">
			<h1 className="header-title">
				<Link className={'no-decoration'} href={'/'}>
					{variables.site.name}
				</Link>
			</h1>
		</header>
	);
};
