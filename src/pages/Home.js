import React from 'react';
import HeroSect from '../Components/HeroSect';
import AboutSect from '../Components/aboutSect';
import IntroSec from '../Components/IntroSec';
import ProjectSect from '../Components/ProjectSect';
import Footer from '../Components/Footer';
import TaskCowBanner from '../Components/TaskCowBanner';
import RpAppBanner from '../Components/RpAppBanner';
import SolarEduBanner from '../Components/SolarEduBanner';
import DogCommBanner from '../Components/DogCommBanner';
import DuckModeBanner from '../Components/DuckModeBanner';
import DogCommBannerTwo from '../Components/DogCommBannerTwo';

export default function Home() {
   
    return (

        <div>
            <HeroSect/>
            <AboutSect/>
            <IntroSec/> 
            <ProjectSect/>
            <DuckModeBanner/>
            <TaskCowBanner/>
            <DogCommBanner/>
            <RpAppBanner/>
            <SolarEduBanner/>
            <DogCommBannerTwo/>
        
        
            
        </div>
    )
}
