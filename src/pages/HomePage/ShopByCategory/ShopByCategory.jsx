import { useEffect, useState } from "react";
import ToyCard from "./ToyCard/ToyCard";

// react tab
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopByCategory = () => {
    const [currentTab, setCurrentTab] =useState('Stuffed Animals');
    const [toys, setToys] = useState([])
    console.log(currentTab)

    
    useEffect(() => {
        fetch(`http://localhost:5000/toys-by-subCategory/${currentTab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [currentTab])

    
    console.log(toys)
    return (
        <section className="my-container my-20">
            <Tabs>
                <TabList>
                    <Tab><span onClick={(e)=> setCurrentTab(e.target.innerHTML)}>Stuffed Animals</span></Tab>
                    <Tab><span onClick={(e)=> setCurrentTab(e.target.innerHTML)}>Wildlife</span></Tab>
                    <Tab><span onClick={(e)=> setCurrentTab(e.target.innerHTML)}>Sea Creatures</span></Tab>
                    <Tab><span onClick={(e)=> setCurrentTab(e.target.innerHTML)}>Woodland Animals</span></Tab>
                    <Tab><span onClick={(e)=> setCurrentTab(e.target.innerHTML)}>Marsupials</span></Tab>
                    <Tab><span onClick={(e)=> setCurrentTab(e.target.innerHTML)}>Birds</span></Tab>
                    <Tab><span onClick={(e)=> setCurrentTab(e.target.innerHTML)}>Interactive Toys</span></Tab>
                    <Tab><span onClick={(e)=> setCurrentTab(e.target.innerHTML)}>Farm Animals</span></Tab>
                    <Tab><span onClick={(e)=> setCurrentTab(e.target.innerHTML)}>Plush Toys</span></Tab>
                    <Tab><span onClick={(e)=> setCurrentTab(e.target.innerHTML)}>Action Figures</span></Tab>
                </TabList>

                <TabPanel> </TabPanel>
                <TabPanel> </TabPanel>
                <TabPanel> </TabPanel>
                <TabPanel> </TabPanel>
                <TabPanel> </TabPanel>
                <TabPanel> </TabPanel>
                <TabPanel> </TabPanel>
                <TabPanel> </TabPanel>
                <TabPanel> </TabPanel>
                <TabPanel> </TabPanel>
               
            </Tabs>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    toys.map(toy => <ToyCard
                        key={toy._id}
                        toy={toy}
                    ></ToyCard>)
                }
            </div>
        </section>
    );
};

export default ShopByCategory;