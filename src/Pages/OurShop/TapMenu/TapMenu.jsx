import React from 'react';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const TapMenu = ({items}) => {
    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)

            }
        </div>
    );
};

export default TapMenu;