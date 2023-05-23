import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const PopulerMenu = () => {
	const [menu, setMenu] = useState([]);
	useEffect(() => {
		fetch('menu.json')
			.then((res) => res.json())
			.then((data) => {
				const popularItems = data.filter((item) => item.category === 'popular');
				setMenu(popularItems);
			});
	}, []);
	return (
		<section>
			<SectionTitle subHeading={'Popular Items'} heading={'FROM OUR MENU'}></SectionTitle>
			<div className='p-5 grid md:grid-cols-2 gap-4 items-center'>
				{menu.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
		</section>
	);
};

export default PopulerMenu;
