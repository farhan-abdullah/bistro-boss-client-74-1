import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import { useMenu } from '../../../hooks/useMenu';

const PopulerMenu = () => {
	// const [menu, setMenu] = useState([]);
	const [menu] = useMenu();
	const popularItems = menu.filter((item) => item.category === 'popular');
	return (
		<section>
			<SectionTitle subHeading={'Popular Items'} heading={'FROM OUR MENU'}></SectionTitle>
			<div className='p-5 grid md:grid-cols-2 gap-4 items-center'>
				{popularItems.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
		</section>
	);
};

export default PopulerMenu;
