import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='md:w-3/12 mx-auto text-center space-y-2 my-10'>
            <p className='text-green-500'>--- {subHeading} ---</p>
            <h1 className='text-3xl uppercase border-y-2 border-gray-400 py-2'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;