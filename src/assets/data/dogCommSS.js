import React from 'react';

//10 wireframes
import CreatePage from '../DogCommImages/CreatePage.png';
import dogList from '../DogCommImages/dogList.jpeg';
import EventsPage from '../DogCommImages/EventsPage.jpeg';
import home from '../DogCommImages/home.jpeg';
import LaunchScreen from '../DogCommImages/LaunchScreen.png';
import Location from '../DogCommImages/Location.jpeg';
import Location2 from '../DogCommImages/Location2.jpeg';
import VerifyPage from '../DogCommImages/VerifyPage.png';
import VerifyNumber from '../DogCommImages/VerifyNumber.png';
import Chat from '../DogCommImages/Chat.png';


const DogCommSS = [
    {
        id: 0,
        name: 'Launch Screen',
        desc:
          "Users will be welcomed with this page as they see the launch screen.",
        img: LaunchScreen
      },
    {
      id: 1,
      name: 'Home Page',
      desc:
        'Users see this page when App is launched. Allows users to enter global chatroom anonymous with a nickname or without any name. There is also tab bar at bottom to switch between pages',
      img: home
    },
    
    {
      id: 2,
      name: 'Verification Feature 1',
      desc:
        'Users see this page upon first ever login where they are asked to enter a phone number to verify that they are not a robot.',
      img: VerifyPage,
    },
    {
        id: 3,
        name: "Verification Feature 2",
        desc:
          'Second part of the Verification Process where user enters the OTP sent to their phone Number. This is all done with firebase authentication.',
          img: VerifyNumber,
      },
      {
        id: 4,
        name: "Creating Account Page",
        desc:
          "This is where user create an account so they wont have to login everytime and stay logged in. They are supposed to key in dog details since it s a dog community app, they can also add images as their profile picture. These datas will be stored in firebase.",
          img: CreatePage,
      },
    {
      id: 5,
      name: 'Location',
      desc:
        "User will only see the following once they enter an available location keyword, it will drop a pin on nearest location with the keyword relating to the place and populate it in a drawer list.",
      img: Location,
    },
    {
      id: 6,
      name: "Location2",
      desc:
        'If the user were to toggle the drawer list by clicking on it, it will expand and look like this.',
        img: Location2,
    },
   
    
      {
        id: 7,
        name: "Global Chat Space",
        desc:
          'There is when user enter the chatroom, it allow users to chat with each other anonymously basically a space for users to discuss or share about their dogs.',
          img: Chat,
      },
      {
        id: 8,
        name: "Dog Explore",
        desc:
          'There is also a feature to show a list of dogs and user can be tested on knowledge as well as guess the breed before clicking into it. Once clicked a more detailed view of that breed dog can be seen as well as how it sound when it bark',
          img: dogList,
      },
      {
        id: 9,
        name: "DogComm Events",
        desc:
          'This is the page that shows the events DogComm is having or had. The events are all free without need to sign up so user just have to click in and see if they want to sign up. This feature is not up yet since it will require for organisations to work with me to have events like this.',
          img: EventsPage,
      },
   
  ];


  export default DogCommSS;