import React from 'react';
import FoodCard from '../../../Shared/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
	return (
		<div className='grid grid-cols-3 gap-3'>
			{items.map((item) => (
				<FoodCard key={item._id} item={item}></FoodCard>
			))}
		</div>
	);
};

export default OrderTab;
