import React from 'react';
import Search from './Search/Search';
import Gallery from './Gallery/Gallery';
import Banner from './Banner/Banner';
import Card from './Card/Card';
import Collage from './Collage/Collage';

const Home = () => {
    return (
        <div>
            <Search></Search>
            <Banner></Banner>
            <Gallery></Gallery>
            <Collage></Collage>
            <Card></Card>
        </div>
    );
};

export default Home;