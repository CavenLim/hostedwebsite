import React from 'react';

//10 wireframes
import homeView from '../FilmishImages/homeView.png'
import camView from '../FilmishImages/camViewSS.png';
import galView from '../FilmishImages/galViewSS.png';
import halfProcessView from '../FilmishImages/halfProcessView.png';
import processView from '../FilmishImages/processView.png';


const filmishSS = [
    {
      id: 1,
      name: "Lab View(0 images)",
      desc:
        'This is what users see whenever the app is first launched or when there is no images snapped.',
        img: homeView,
    },
    {
        id: 2,
        name: "Process View(0%)",
        desc:
          'This is what users see the image has just began processing',
          img: processView,
      },
      {
        id: 3,
        name: "Image processing(20%)",
        desc:
          'This is what users see when the image has processed slightly',
          img: halfProcessView,
      },
      {
        id: 4,
        name: "Camera View",
        desc:
          'This is what users see whenever they want to snap an image',
          img: camView,
      },
      {
        id: 5,
        name: "Fully processed Gallery",
        desc:
          'This is what users see when they have their iamges fully processed in gallery',
          img: galView,
      }
  

     
  ];


  export default filmishSS;