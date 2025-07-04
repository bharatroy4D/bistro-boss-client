import React from 'react';

const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className='flex gap-5'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[100px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-green-500'>${price}</p>
        </div>
    );
};

export default MenuItem;