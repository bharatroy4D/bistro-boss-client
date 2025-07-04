import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className=''>
            <SectionTitle subHeading={'From 11.00 AM to 10 pm'} heading={'order online'}/>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-8"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className='text-2xl font-medium text-center text-white -mt-20'>SALADS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className='text-2xl font-medium text-center text-white -mt-20'>SOUPS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className='text-2xl font-medium text-center text-white -mt-20'>PIZZAS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className='text-2xl font-medium text-center text-white -mt-20'>DESSERTS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className='text-2xl font-medium text-center text-white -mt-20'>PIZZAS</h1>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;