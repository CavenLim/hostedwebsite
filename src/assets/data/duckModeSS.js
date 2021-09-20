import React from 'react';

//10 wireframes
import DarkMode from '../DuckModeImages/DarkMode.png';
import HomePage from '../DuckModeImages/HomePage.png';


const duckModeSS = [
    {
      id: 0,
      name: 'Home Page',
      desc:
        'Users see this page when App is launched. Allow users to choose colour by typing hex code or using color picker which has a variety of colour code options. User can also toggle between colour modes(light and dark), copy colour codes, view locations.',
      img: HomePage
    },
    {
      id: 1,
      name: 'Color List Feature',
      desc:
        "Users see this page when they submit a valid hex colour code or have chosen a colour from the colour picker. Allow users to see the list of colours in different tones from Dark/Light to Light/Dark depending on user's choice.",
      img: DarkMode
    }
    
   
  ];


  export default duckModeSS;