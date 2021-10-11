import React from 'react';

//10 wireframes
import TonesPage from '../DuckModeImages/TonesPage.png';
import HomePage from '../DuckModeImages/HomePage.png';
import LightMode from '../DuckModeImages/LightMode.png';
import ComplementaryColours from '../DuckModeImages/ComplementaryColours.png';
import RandomColor from '../DuckModeImages/RandomColor.png';

const duckModeSS = [
    {
      id: 0,
      name: 'Home Page',
      desc:
        "Users see this page when App is launched. Allow users to choose the mode they want to use to find their colours also acts as a user's guide.",
      img: HomePage
    },
    {
      id: 1,
      name: 'Colour Tones Feature',
      desc:
        "Users see this page when they select the tones tab, when they submit a valid hex colour code or have chosen a colour from the colour picker a list of color tones will be populated. Allow users to see the list of colours in different tones from Dark/Light to Light/Dark depending on user's choice.",
      img: TonesPage
    },
    {
      id: 2,
      name: 'Complementary Colour Feature',
      desc:
        "Users might not know what colour will match the current colour they have so DuckMode is here to rescue them by showing them the complementary colour.",
      img: ComplementaryColours
    },
    {
      id: 3,
      name: 'Random Colour Feature',
      desc:
        "Users might not know what colour to use so let the random colour function help that determine what colour they will want.",
      img: RandomColor
    },
    {
      id: 4,
      name: 'Dark Mode/ Light Mode Feature',
      desc:
        "User's application will adapt to however their system is changed whether dark or light mode/display.",
      img: LightMode
    }
    
   
  ];


  export default duckModeSS;