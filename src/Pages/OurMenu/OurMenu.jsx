import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import bgCover from '../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';


const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro-boss | Our Menu</title>
            </Helmet>
            <Cover img={bgCover} title={"Our Menu"} subTitle={'Would you like to try a dish?'} />
            <PopularMenu />
            <Cover img={bgCover} title={"Our Menu"} subTitle={'Would you like to try a dish?'} />
            <PopularMenu />


        </div>
    );
};

export default OurMenu;