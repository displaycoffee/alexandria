/* Packages */
import type { HTMLAttributes } from 'react';
import type { ImageProps as NextImageProps } from 'next/image';

/* Type definitions */
type Image = {
	alt?: string;
	hasBg?: boolean;
	hasLazy?: boolean;
	hasWrapper?: boolean;
	height?: number;
	image: string;
	imageClass?: string;
	title?: string;
	width?: number;
	wrapperClasses?: string[];
};

type ImageAttributes = Omit<NextImageProps, 'alt' | 'src'>;

type ImageError = {
	image: string;
	src: string;
};

type WrapperAttributes = HTMLAttributes<HTMLDivElement>;

/* Export types */
export type ImageAttributesType = ImageAttributes;

export type ImageErrorType = ImageError;

export type WrapperAttributesType = WrapperAttributes;

/* Export prop types */
export type ImageProps = Image;
