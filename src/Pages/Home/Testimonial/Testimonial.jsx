import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-12'>
            <SectionTitle subHeading={'What Our Clients Say'} heading={'TESTIMONIALS'} />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col justify-center items-center space-y-3'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='w-7/12'>{review.details}</p>
                            <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testimonial;