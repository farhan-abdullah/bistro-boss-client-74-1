import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopulerMenu from './PopularMenu/PopulerMenu';
import Featured from './Featured/Featured';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Category></Category>
			<PopulerMenu></PopulerMenu>
			<Featured></Featured>
		</div>
	);
};

export default Home;
