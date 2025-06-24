import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShopCoverImg from '../../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css';
import Cover from '../../Shared/Cover/Cover'
import useMenu from '../../Components/hooks/useMenu';
import TapMenu from './TapMenu/TapMenu';

const OurShop = () => {
    const [tapIndex, setTapIndex] = useState(0);
    const { items } = useMenu();
    const Salad = items.filter(item => item.category == 'salad');
    const Pizza = items.filter(item => item.category == 'pizza');
    const Soup = items.filter(item => item.category == 'soup');
    const Dessert = items.filter(item => item.category == 'dessert');
    const Drinks = items.filter(item => item.category == 'drinks');

    return (
        <div>
            <Cover img={ShopCoverImg} title={'our shop'} subTitle={'Would you like to try a dish?'} />
            <Tabs defaultIndex={tapIndex} onSelect={(index) => setTapIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza </Tab>
                    <Tab>Soup </Tab>
                    <Tab>Dessert </Tab>
                    <Tab>Drinks </Tab>
                </TabList>
                <TabPanel>
                    <TapMenu items={Salad} />
                </TabPanel>
                <TabPanel>
                    <TapMenu items={Pizza} />
                </TabPanel>
                <TabPanel>
                    <TapMenu items={Soup} />
                </TabPanel>
                <TabPanel>
                    <TapMenu items={Dessert} />
                </TabPanel>
                <TabPanel>
                    <TapMenu items={Drinks} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;