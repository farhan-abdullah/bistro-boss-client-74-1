import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
	return (
		<div className='text-center p-10 mx-auto md:w-4/12'>
			<p className='text-yellow-500 mb-2'>---{subHeading}---</p>
			<h3 className='text-black text-3xl border-y-4 py-4'>{heading}</h3>
		</div>
	);
};

export default SectionTitle;
