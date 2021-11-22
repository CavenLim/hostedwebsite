import React from 'react';

// wireframes
import ChatList from '../DogCommTwoImages/ChatList.png';
import HomePage from '../DogCommTwoImages/HomePage.png';
import HomePageNone from '../DogCommTwoImages/HomePageNone.png';
import InitialChatList from '../DogCommTwoImages/InitialChatList.png';
import LogIn from '../DogCommTwoImages/LogIn.png';
import MatchedScreen from '../DogCommTwoImages/MatchedScreen.png';
import MessageScreen from '../DogCommTwoImages/MessageScreen.png';
import ProfileScreen from '../DogCommTwoImages/ProfileScreen.png';


const DogCommTwoSS = [
    {
        id: 0,
        name: 'Launch Screen',
        desc:
          "Users will be welcomed with this page as they see the launch screen, they can only access other pages if they sign in with their google account.",
        img: LogIn
      },
    {
      id: 1,
      name: 'Home Page',
      desc:
        'Users see this page when the app is launched while they are signed it. This page will allow for them to view the profiless, log out , navigate to chat screen. ',
      img: HomePage
    },
    
    {
      id: 2,
      name: 'Home Page with no more profiles',
      desc:
        'Users see this when theres no more users to friend in the database.',
      img: HomePageNone,
    },
    {
        id: 3,
        name: "Set Up Dog's Profile",
        desc:
          'Users will see this if their logged in google account have not set up a dog profile yet, only users with dog profile will then be able to use the features in the applciation.',
          img: ProfileScreen,
      },
      {
        id: 4,
        name: "Friended Screen",
        desc:
          "This is what the second party will see when both users want to friend each other. This will then unlock the chat feature to one another.",
          img: MatchedScreen,
      },
    {
      id: 5,
      name: 'Initial Chat Screen',
      desc:
        "User will only see users which have requested to friend them like they themselves did likewise. Initially since they havent typed any message to one another we encourage them by putting a Say Hi! placeholder",
      img: InitialChatList,
    },
    {
      id: 6,
      name: "Chat Screen",
      desc:
        'User will see the last messaged date as well last sent message when they haev messaged the other party before',
        img: ChatList,
    },
   
    
      {
        id: 7,
        name: "MessageScreen",
        desc:
          'This is the individual chatroom for each individual pair to chat and talk to one another, we have disabled use of photos just to keep it safer between both parties as well.',
          img: MessageScreen,
      },
     
   
  ];


  export default DogCommTwoSS;