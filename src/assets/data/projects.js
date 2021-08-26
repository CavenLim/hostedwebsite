
import React from 'react';

import TaskCow from '../Images/TaskCow.png';
import dogComm from '../Images/dogComm.png';
import RpApp from '../Images/RpApp.jpg';
import SolarEdu from '../Images/SolarEdu.png';



const projects = [
    {
      id: 1,
      name: 'TaskCow',
      desc:
        'A cow themed application to help plan,track your tasks for the day.',
      img: TaskCow
    },
    {
      id: 2,
      name: 'DogComm',
      desc:
        'An app to help gather the dog community which include dog lovers/owners.',
      img: dogComm,
    },
    {
      id: 3,
      name: 'RpApp',
      desc:
        "This is a prototype application that i did as a project to help combine my school's portal for the benefits of students like myself into a mobile application.",
      img: RpApp,
    },
    {
      id: 4,
      name: "SolarEdu",
      desc:
        'A prototype application where users like aspiring astronomers can learn about the different planets in our solar system as well as test their understandings of the planets.',
      img: SolarEdu,
    },
   
  ];


  export default projects;