import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopulerMenu from './PopularMenu/PopulerMenu';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Category></Category>
			<PopulerMenu></PopulerMenu>
		</div>
	);
};

export default Home;
