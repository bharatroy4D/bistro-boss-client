import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='my-10'>
            <SectionTitle subHeading={'Check it out'} heading={'from our List'} />
            <div className='grid md:grid-cols-2 gap-10 '>
                {
                    items.slice(0, 6).map(item => <MenuItem key={item.id} item={item} />)
                }
            </div>

        </div>
    );
};

export default PopularMenu;