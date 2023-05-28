import React from 'react';

const FoodCard = ({ item }) => {
	const { name, image, price, recipe } = item;
	return (
		<div>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<figure>
					<img src={image} alt={name} />
					<p className='bg-slate-900 absolute right-5 top-2 rounded-lg p-1 text-white'>
						${price}
					</p>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{name}</h2>
					<p>{recipe}</p>
					<div className='card-actions justify-center'>
						<button className='btn btn-outline bg-slate-200 border-b-4 border-0 border-orange-400 text-orange-400'>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
