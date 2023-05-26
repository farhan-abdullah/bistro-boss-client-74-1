import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import img from '../../assets/menu/banner3.jpg';
import img1 from '../../assets/menu/dessert-bg.jpeg';
import img2 from '../../assets/menu/pizza-bg.jpg';
import img3 from '../../assets/menu/salad-bg.jpg';
import img4 from '../../assets/menu/soup-bg.jpg';
import { useMenu } from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
	const [menu] = useMenu();
	const desserts = menu.filter((item) => item.category == 'dessert');
	const pizzas = menu.filter((item) => item.category == 'pizza');
	const soups = menu.filter((item) => item.category == 'soup');
	const salads = menu.filter((item) => item.category == 'salad');
	const offers = menu.filter((item) => item.category == 'offered');
	const drinks = menu.filter((item) => item.category == 'drinks');

	return (
		<div>
			<Helmet>
				<title> Bistro Boss | Menu</title>
			</Helmet>
			<Cover img={img} title={'our menu'}></Cover>
			<SectionTitle subHeading={"Don't Miss"} heading={'Todays Offer'}></SectionTitle>
			<MenuCategory items={offers}></MenuCategory>
			<MenuCategory items={desserts} title={'dessert'} img={img1}></MenuCategory>
			<MenuCategory items={pizzas} title={'pizza'} img={img2}></MenuCategory>
			<MenuCategory items={salads} title={'salads'} img={img3}></MenuCategory>
			<MenuCategory items={soups} title={'soups'} img={img4}></MenuCategory>
			<MenuCategory items={drinks} title={'drinks'} img={img4}></MenuCategory>
		</div>
	);
};

export default Menu;
