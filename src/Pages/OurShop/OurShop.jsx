import React from 'react';
import ShopCoverImg from '../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';

const OurShop = () => {
    return (
        <div>
            <Cover img={ShopCoverImg} title={'our shop'} subTitle={'Would you like to try a dish?'} />
        </div>
    );
};

export default OurShop;