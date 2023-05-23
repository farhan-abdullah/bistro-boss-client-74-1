import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';
const Testimonilas = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch('reviews.json')
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	return (
		<section>
			<SectionTitle
				heading={'TESTIMONIALS'}
				subHeading={'What our client say'}></SectionTitle>
			<div>
				<Swiper
					navigation={true}
					modules={[Navigation]}
					className='mySwiper text-center px-5'>
					{reviews.map((review) => (
						<SwiperSlide key={review._id}>
							<div className='m-24 space-y-7'>
								<Rating
									className='mx-auto m-2'
									style={{ maxWidth: 180 }}
									value={review.rating}
									readOnly
								/>
								<p>{review.details}</p>
								<h3 className='text-2xl text-orange-400'>{review.name}</h3>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonilas;
