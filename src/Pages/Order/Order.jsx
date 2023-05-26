import React, { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useMenu } from '../../hooks/useMenu';
const Order = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const [menu] = useMenu();
	const desserts = menu.filter((item) => item.category == 'dessert');
	const pizzas = menu.filter((item) => item.category == 'pizza');
	const soups = menu.filter((item) => item.category == 'soup');
	const salads = menu.filter((item) => item.category == 'salad');
	const offers = menu.filter((item) => item.category == 'offered');
	return (
		<div>
			<Cover
				img={orderCover}
				title={'Order Food'}
				details={'Would you like to try a dish?'}></Cover>
			<Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
				<TabList>
					<Tab>Salad</Tab>
					<Tab>Pizza</Tab>
					<Tab>Soup</Tab>
					<Tab>Dessert</Tab>
					<Tab>Drinks</Tab>
				</TabList>

				<TabPanel>
					<h2>Any content 1</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Order;
