import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopulerMenu from './PopularMenu/PopulerMenu';
import Featured from './Featured/Featured';
import Testimonilas from './Testimonials/Testimonilas';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Category></Category>
			<PopulerMenu></PopulerMenu>
			<Featured></Featured>
			<Testimonilas></Testimonilas>
		</div>
	);
};

export default Home;
