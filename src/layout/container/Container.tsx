/* Styles */
import './styles/container.scss';

/* Packages */
import type { ContainerProps, ContainerLayoutProps } from './scripts/container-types';

/* Scripts */
import { navigationHeader } from '@/components/navigation/scripts/navigation';

/* Components */
import { ContainerBody, ContainerMain } from './ContainerClient';
import { Navigation } from '@/components/navigation/Navigation';
import { ButtonScroll } from '@/components/forms/FormsClient';
import { Slideout } from '@/components/slideout/Slideout';
import { Header } from '@/layout/header/Header';
import { Content } from '@/layout/content/Content';
import { Sidebar } from '@/layout/sidebar/Sidebar';
import { Footer } from '@/layout/footer/Footer';

export const Container = (props: ContainerProps) => {
	const { children } = props;

	// Slideout options
	const slideoutOptions = {
		hideDesktop: true,
		id: 'menu',
		label: 'Menu',
	};

	return (
		<div id="index" tabIndex={-1}>
			<div className="container">
				<ContainerBody defaultPrefix={'index'} />

				<a href="#main-content" className="skip-link sr-only no-decoration">
					Skip to main content
				</a>

				<Header />

				<Navigation data={navigationHeader} hideMobile={true} label={'Header Navigation'} />

				<Slideout options={slideoutOptions}>
					<Navigation data={navigationHeader} disableTransition={true} label={'Mobile Navigation'} />
				</Slideout>

				<ContainerMain>{children}</ContainerMain>

				<Footer />

				<ButtonScroll target={'#index'} label={'Scroll to top'} />
			</div>
		</div>
	);
};

export const ContainerFull = (props: ContainerLayoutProps) => {
	const { children } = props;

	return <Content>{children}</Content>;
};

export const ContainerSidebar = (props: ContainerLayoutProps) => {
	const { children } = props;

	return (
		<>
			<Content>{children}</Content>

			<Sidebar />
		</>
	);
};
