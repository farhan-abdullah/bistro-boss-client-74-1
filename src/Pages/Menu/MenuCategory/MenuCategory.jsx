import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
	return (
		<div className='mx-auto'>
			{title && <Cover img={img} title={title}></Cover>}
			<div className='p-5 grid md:grid-cols-2 gap-4 items-center'>
				{items.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
			<div>
				<Link to={`/order/${title}`}>
					<button className='btn btn-outline border-0 border-b-4 my-4'>Order Now</button>
				</Link>
			</div>
		</div>
	);
};

export default MenuCategory;
