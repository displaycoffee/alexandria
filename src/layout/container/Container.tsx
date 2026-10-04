/* Styles */
import './styles/container.scss';

/* Packages */
import type { ContainerProps } from './scripts/container-types';
// import { useRef } from 'react';
// import { Link, useLocation } from '@tanstack/react-router';

/* Scripts */
// import { useRespond } from '@displaycoffee/scripts/hooks';
// import { useAvailableMinHeight, useBodyClass } from '@displaycoffee/scripts/hooks-tanstack';
// import { useAppContext } from '../../context/scripts/context-hooks';
// import { navigationHeader } from '../../components/navigation/scripts/navigation';

/* Components */
import { ContainerBody, ContainerMain } from './ContainerClient';
// import { ErrorBoundary } from '../../components/error-boundary/ErrorBoundary';
// import { Navigation } from '../../components/navigation/Navigation';
// import { ButtonScroll } from '../../components/forms/Forms';
// import { Slideout } from '../../components/slideout/Slideout';
import { Header } from '@/layout/header/Header';
import { Content } from '@/layout/content/Content';
import { Sidebar } from '@/layout/sidebar/Sidebar';
import { Footer } from '@/layout/footer/Footer';
// import { Portal } from '../../targets/portal/Portal';

/* Pages that should exclude the sidebar */
//const excludeSidebar: string[] = ['/page-two'];

export const Container = (props: ContainerProps) => {
	const { children } = props;
	// const { theme } = useAppContext();
	// const location = useLocation();
	// const isDesktop = useRespond(theme.breakpoints.md);
	// const sidebar = !excludeSidebar.includes(location.pathname);
	// const mainRef = useRef<HTMLElement>(null);
	// useAvailableMinHeight(mainRef);
	const sidebar = true;

	// // Slideout options
	// const slideoutOptions = {
	// 	id: 'menu',
	// 	label: 'Menu',
	// };

	return (
		<div className="container">
			<ContainerBody defaultPrefix={'index'} />

			<a href="#main-content" className="skip-link sr-only no-decoration">
				Skip to main content
			</a>

			<Header />

			{/* {isDesktop ? (
				<Navigation data={navigationHeader} label={'Header Navigation'} />
			) : (
				<Slideout options={slideoutOptions}>
					<Navigation data={navigationHeader} disableTransition={true} label={'Mobile Navigation'} />
				</Slideout>
			)} */}

			<ContainerMain>
				<Content>{children}</Content>

				<Sidebar show={sidebar} />
			</ContainerMain>

			<Footer />
			{/* 

			<ButtonScroll target={'#index'} label={'Scroll to top'} /> */}
		</div>
	);
};
