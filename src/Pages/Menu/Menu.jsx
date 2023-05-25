import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import img from '../../assets/menu/banner3.jpg';
import PopulerMenu from '../Home/PopularMenu/PopulerMenu';
import { useMenu } from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
	const [menu] = useMenu();
	const desserts = menu.filter((item) => item.category === 'dessert');
	const pizzas = menu.filter((item) => item.category === 'pizza');
	const soups = menu.filter((item) => item.category === 'soup');
	const salads = menu.filter((item) => item.category === 'salad');
	const offers = menu.filter((item) => item.category === 'offered');

	return (
		<div>
			<Helmet>
				<title> Bistro Boss | Menu</title>
			</Helmet>
			<Cover img={img} title={'our menu'}></Cover>
			<SectionTitle subHeading={"Don't Miss"} heading={'Todays Offer'}></SectionTitle>
			<MenuCategory items={offers}></MenuCategory>
			<MenuCategory items={desserts} title={'Desert'} img={""}></MenuCategory>
			<MenuCategory items={salads}></MenuCategory>
		</div>
	);
};

export default Menu;
