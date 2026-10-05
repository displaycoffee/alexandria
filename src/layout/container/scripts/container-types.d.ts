/* Packages */
import type { ReactNode } from 'react';

/* Type definitions */
type ContainerChildren = {
	children: ReactNode;
};

type Container = ContainerChildren;

type ContainerBody = {
	defaultPrefix: string;
};

type ContainerLayout = ContainerChildren;

type ContainerMain = ContainerChildren;

/* Export prop types */
export type ContainerProps = Container;

export type ContainerBodyProps = ContainerBody;

export type ContainerLayoutProps = ContainerLayout;

export type ContainerMainProps = ContainerMain;
