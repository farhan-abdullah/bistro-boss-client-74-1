import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
	return (
		<div className='featured bg-fixed text-white '>
			<SectionTitle subHeading={'check it out'} heading={'Featured Items'}></SectionTitle>
			<div className='md:flex justify-center items-center gap-4 pt-10 pb-20 px-32 bg-slate-500 bg-opacity-40'>
				<div>
					<img className='w-[400px]' src={featuredImg} alt='' />
				</div>
				<div className='w-1/2  '>
					<p>Aug 20, 2029</p>
					<p className='uppercase'> WHERE CAN I GET SOME?</p>
					<p className=''>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate
						facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat
						recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime
						tenetur.
					</p>
					<button className='btn btn-outline border-b-4 border-0 uppercase'>
						Read more
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
