'use client';

/* Packages */
import { useRef } from 'react';

/* Scripts */
import type { ContainerBodyProps, ContainerMainProps } from './scripts/container-types';
import { useAvailableMinHeight, useBodyClass } from './scripts/container-hooks';

export const ContainerBody = (props: ContainerBodyProps) => {
	const { defaultPrefix } = props;

	// Note: the class is added after hydration, so it isn't in the server HTML on first load
	useBodyClass(defaultPrefix);

	return null;
};

export const ContainerMain = (props: ContainerMainProps) => {
	const { children } = props;
	const mainRef = useRef<HTMLElement>(null);
	useAvailableMinHeight(mainRef);

	return (
		<main id="main-content" className="main" ref={mainRef}>
			<div className="main-layout flex-wrap">{children}</div>
		</main>
	);
};
