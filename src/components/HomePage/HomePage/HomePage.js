import React from 'react';
import Contact from '../Contact/Contact';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeMain from '../HomeMain/HomeMain';
import InfoBox from '../InfoBox/InfoBox';
import Laboratory from '../Laboratory/Laboratory';
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeMain></HomeMain>
            <InfoBox></InfoBox>
            <HomeAbout></HomeAbout>
            <Carousel></Carousel>
            <Laboratory></Laboratory>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;