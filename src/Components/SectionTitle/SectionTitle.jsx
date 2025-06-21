import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center'>
            <p className='text-green-500'>--- {subHeading} ---</p>
            <h1 className='text-3xl uppercase border-y '>{heading}</h1>
        </div>
    );
};

export default SectionTitle;