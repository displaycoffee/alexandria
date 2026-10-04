/* Styles */
import './styles/header.scss';

/* Packages */
import Link from 'next/link';

/* Scripts */
import { context } from '@/context/scripts/context';

/* Components */
// import { ThemeToggle } from '../../components/theme-toggle/ThemeToggle';

export const Header = () => {
	const { variables } = context;
	// To-do: add theme toggle back

	return (
		<header className="header">
			<h1 className="header-title">
				<Link className={'no-decoration'} href={'/'}>
					{variables.site.name}
				</Link>
			</h1>

			{/* <ThemeToggle /> */}
		</header>
	);
};
