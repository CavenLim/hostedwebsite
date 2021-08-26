import React from 'react';

//9 wireframes
import CongratsPage from '../SolarEduImages/CongratsPage.png';
import FirstPage from '../SolarEduImages/FirstPage.png';
import HomePageEarth from '../SolarEduImages/HomePageEarth.png';
import ImageInfo from '../SolarEduImages/ImageInfo.png';
import InfoExpanded from '../SolarEduImages/InfoExpanded.png';
import InfoPageEarth from '../SolarEduImages/InfoPageEarth.png';
import PlanetsMenu from '../SolarEduImages/PlanetsMenu.png';
import QuizPage from '../SolarEduImages/QuizPage.png';
import VenusInfoPage from '../SolarEduImages/VenusInfoPage.png';


const SolarEduSS = [
    {
      id: 0,
      name: 'First Page',
      desc:
        "Users see this page when App is launched. Allow users see the planets we have lined up and they will be brought to home page when they click the button.",
      img: FirstPage
    },
    {
      id: 1,
      name: 'Home Page',
      desc:
        "Users see this page if they click on play button, by default it'll show the earth's Globe and users are able to spin it in 360 direction they are also able to see list of other planets by scrolling horizontally and select it just by clicking on it, Once done they can click button to learn more about selected planet. ",
      img: HomePageEarth
    },
    {
        id: 2,
        name: "Earth Info Page",
        desc:
          'This is the page that displays the information, images as well as Quizes about our Earth. They can toggle between the diff functions with the tab bar below.',
          img: InfoPageEarth,
      },
      {
        id: 3,
        name: 'Info Page Expanded',
        desc:
          "The feature of being able to expand the info view helps to save space as well as show user more if they are interested.",
        img: InfoExpanded,
      },
    {
      id: 4,
      name: 'Earth Image Page',
      desc:
      'This is the page that user will see when they expand the image page.',
      img: ImageInfo,
    },
  
  
    {
      id: 5,
      name: "Venus Info Page",
      desc:
        "Another example of Info Page for planet Venus.",
        img: VenusInfoPage,
    },
   
      {
        id: 6,
        name: "Quiz Page",
        desc:
          "Of course when there's learning there should be knowledge put to use so therefore quizes are available for each planets too for users to test themselves after learning.",
          img: QuizPage,
      },
      {
        id: 7,
        name: "Congrats Page",
        desc:
          'This is how we motivate Users when they get perfect scores so it provides a positive learning environment.',
          img: CongratsPage,
      },
      {
        id: 8,
        name: "Planets Menu",
        desc:
          'No one likes having to click a lot to get to another page so, heres a way to solve that by having navigation hamburger menu to help other navigation between pages.',
          img: PlanetsMenu,
      },
     
   
  ];


  export default SolarEduSS;