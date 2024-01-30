'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
	const { ref } = useSectionInView('Projets', 0.3);

	return (
		<section
			ref={ref}
			id='projects'
			className='scroll-mt-28 mb-28 lg:w-1/2'>
			<SectionHeading>Mes réalisations</SectionHeading>
			<div className='flex flex-col justify-center items-center'>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
