/* Packages */
import type { ReactNode } from 'react';

/* Type definitions */
type Container = {
	children: ReactNode;
};

type ContainerBody = {
	defaultPrefix: string;
};

type ContainerMain = {
	children: ReactNode;
};

/* Export prop types */
export type ContainerProps = Container;

export type ContainerBodyProps = ContainerBody;

export type ContainerMainProps = ContainerMain;
