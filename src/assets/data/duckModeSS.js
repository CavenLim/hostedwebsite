import React from 'react';

//10 wireframes
import TonesPage from '../DuckModeImages/TonesPage.png';
import HomePage from '../DuckModeImages/HomePage.png';
import HomePageInit from '../DuckModeImages/HomePageInit.png';
import LightMode from '../DuckModeImages/LightMode.png';
import ComplementaryColours from '../DuckModeImages/ComplementaryColours.png';
import RandomColor from '../DuckModeImages/RandomColor.png';
import ColorListDetail from '../DuckModeImages/ColorListDetail.png';

const duckModeSS = [
  {
    id: 0,
    name: 'Initial Home Page',
    desc:
      "Users see this page when App is first installed. There are options for users to navigate between different modes as well as banner for users to support me either by sharing the app or donation.",
    img: HomePageInit
    },
    {
      id: 1,
      name: 'Home Page',
      desc:
        "Users see this page when App is launched or at home page. They will be able to see their favourite colour lists if they have added any colour list into it.",
      img: HomePage
    },
    {
      id: 2,
      name: 'Colour Tones Feature',
      desc:
        "Users see this page when they select the tones tab, when they submit a valid hex colour code or have chosen a colour from the colour picker a list of color tones will be populated. Allow users to see the list of colours in different tones from Dark/Light to Light/Dark depending on user's choice. Users will also be able to add the list into their favourite color list",
      img: TonesPage
    },
    {
      id: 3,
      name: 'Complementary Colour Feature',
      desc:
        "Users might not know what colour will match the current colour they have so DuckMode is here to rescue them by showing them the complementary colour.",
      img: ComplementaryColours
    },
    {
      id: 4,
      name: 'Random Colour Feature',
      desc:
        "Users might not know what colour to use so let the random colour function help that determine what colour they will want.",
      img: RandomColor
    },
    {
      id: 5,
      name: 'Color List Detail',
      desc:
        "User will be able to view all the colour they have added into their favourite color list, right clicking on any hexcode will allow to copy the rgb,hex code. Allowing for user to be access the colors even when offline or across multiple Macs as long iCloud id is the same.",
      img: ColorListDetail
    },
    {
      id: 6,
      name: 'Dark Mode/ Light Mode Feature',
      desc:
        "User's application will adapt to however their system is changed whether dark or light mode/display.",
      img: LightMode
    }
    
   
  ];


  export default duckModeSS;