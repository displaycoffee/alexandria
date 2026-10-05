'use client';

/* Styles */
import './styles/image.scss';

/* Packages */
import { useState } from 'react';
import NextImage from 'next/image';

/* Scripts */
import type { ImageProps, ImageAttributesType, ImageErrorType, WrapperAttributesType } from './scripts/image-types';
import { image as imageUtils } from './scripts/image';

export const Image = (props: ImageProps) => {
	const { alt, hasBg, hasLazy, hasWrapper = true, height, image, imageClass, width, wrapperClasses } = props;
	const wrapperPrefix = 'image-wrapper';
	const isBg = hasWrapper && hasBg;
	const isFluid = hasWrapper && wrapperClasses?.includes('fluid');

	// Swap to the placeholder when the image fails to load
	// Note: the error is stored with the image it belongs to, so a new image prop starts fresh instead of keeping an old fallback
	// Note: next/image re-triggers errors that happened before hydration, as long as onError is set
	const [error, setError] = useState<ImageErrorType | null>(null);
	const src = error?.image == image ? error.src : image;

	// Set up initial attributes
	const wrapperAttributes: WrapperAttributesType = {
		className: wrapperPrefix,
	};
	const imageAttributes: ImageAttributesType = {
		loading: hasLazy ? 'lazy' : 'eager',
		onError: () => setError({ image: image, src: imageUtils.getErrorImage(src) }),
	};

	// Adjust wrapper attributes
	if (hasWrapper) {
		if (wrapperClasses && wrapperClasses.length !== 0) {
			// Add prefix to each class
			const prefixedClasses = wrapperClasses.map((className) => {
				return `${wrapperPrefix}-${className}`;
			});

			// Set new class
			wrapperAttributes.className = `${wrapperPrefix} ${prefixedClasses.join(' ')}`;
		}
		if (isBg) {
			wrapperAttributes.style = {
				backgroundImage: `url(${src})`,
			};
		}
	}

	// Create alt text
	const altText = alt || '';

	// Size the image for next/image, which needs either dimensions or fill
	// Note: fill isn't used since its inline width / height override image.scss (e.g. fluid centers the image at its natural size)
	if (width && height) {
		// Known dimensions reserve space before load, and without sizes next/image builds a 1x / 2x srcset
		// that keeps the image's natural width at the given width, so image.scss sizing stays stable on resize
		imageAttributes.width = width;
		imageAttributes.height = height;
	} else {
		// Unknown dimensions: serve the original file with no srcset, so its natural size is the file's real size
		// Note: a sizes-based srcset would lock the natural width to the viewport width at load, so images stay small after resizing
		imageAttributes.width = 0;
		imageAttributes.height = 0;
		imageAttributes.unoptimized = true;
	}

	// Don't optimize background or fluid images
	if (isBg || isFluid) imageAttributes.unoptimized = true;

	// Add image class
	if (imageClass) imageAttributes.className = imageClass;
	if (isBg) {
		if (!imageAttributes.className) {
			imageAttributes.className = 'image-hidden';
		} else {
			imageAttributes.className = imageAttributes.className + ' image-hidden';
		}
	}

	return hasWrapper ? (
		<div {...wrapperAttributes}>
			<NextImage {...imageAttributes} src={src} alt={altText} />
		</div>
	) : (
		<NextImage {...imageAttributes} src={src} alt={altText} />
	);
};
