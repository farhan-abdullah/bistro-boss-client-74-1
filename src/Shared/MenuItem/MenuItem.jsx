import React from 'react';

const MenuItem = ({ item }) => {
	const { name, image, price, recipe } = item;
	return (
		<div className='flex space-x-5 justify-center space-y-3 items-start'>
			<img
				style={{ borderRadius: '0 200px 200px 200px' }}
				className='w-[118px] h-[104px]'
				src={image}
				alt=''
			/>
			<div>
				<h3 className='uppercase'>{name}</h3>
				<p>{recipe}</p>
			</div>
			<p className='text-yellow-500'>{price}$</p>
		</div>
	);
};

export default MenuItem;
