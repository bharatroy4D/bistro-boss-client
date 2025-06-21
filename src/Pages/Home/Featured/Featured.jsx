import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featureImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='relative bg-featured py-10 my-12 bg-center '>
            <div className="absolute inset-0 bg-black/45"></div>

            <div className='relative z-10'>
                <SectionTitle subHeading={'Check it out'} heading={'from our menu'} />
                <div className='flex gap-6  justify-center items-center'>
                    <img className='md:w-4/12' src={featureImg} alt="" />
                    <div className='space-y-2'>
                        <h3 className='text-base'>March 20, 2023</h3>
                        <h1 className='text-xl font-semibold'>WHERE CAN I GET SOME?</h1>
                        <p className='w-96 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                        <button className="btn btn-neutral btn-outline text-white border-gray-200">Outline</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;