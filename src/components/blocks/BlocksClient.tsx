'use client';

/* Styles */
import './styles/blocks.scss';

/* Packages */
import { useEffect, useRef } from 'react';

/* Scripts */
import type { SectionProps } from './scripts/blocks-types';
import { useFormattedId } from '@/_core/scripts/hooks';
import { context } from '@/context/scripts/context';
import { blocks } from './scripts/blocks';

/* Components */
//import { ButtonScroll } from '../forms/Forms';

export const Section = (props: SectionProps) => {
	const { children, className: propClassName, hasScroll = true, id, target = '#index', title } = props;
	const { utils } = context;
	const fallbackId = useFormattedId();
	const sectionId = `section-${id ? id : title ? utils.handleize(title) : fallbackId}`;
	const classes = `section ${sectionId} margin-trim`;
	const className = propClassName ? `${propClassName} ${classes}` : classes;
	const sectionRef = useRef<HTMLElement>(null);

	// Reveal section with a fade / scroll transition once it comes into view
	useEffect(() => {
		blocks.reveal(sectionRef.current, 'section-visible');
	}, []);

	return (
		<section id={sectionId} className={className} tabIndex={-1} ref={sectionRef}>
			{title ? <h3 className="section-title">{title}</h3> : null}

			<div className="section-content margin-trim">{children}</div>

			{hasScroll ? (
				<div className="section-button">
					{/* To-do: add button scroll */}
					{/* <ButtonScroll target={target} label={'Back to top'} /> */}
				</div>
			) : null}
		</section>
	);
};
