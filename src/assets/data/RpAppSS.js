import React from 'react';

//10 wireframes
import FirstPage from '../RpAppImages/RpLogin2.png';
import RpCalendar from '../RpAppImages/RpCalendar.jpg';
import RpGrades from '../RpAppImages/RpGrades.jpg';
import RpHamburger from '../RpAppImages/RpHamburger.jpg';
import RpLeaveApply from '../RpAppImages/RpLeaveApply.png';
import RpLogin from '../RpAppImages/RpLogin.png';
import RpMenu from '../RpAppImages/RpMenu.jpg';
import RpModules from '../RpAppImages/RpModules.jpg';
import RpPayment from '../RpAppImages/RpPayment.jpg';


const RpAppSS = [
    {
      id: 0,
      name: 'First Page',
      desc:
        "Users see this page when App is launched. Allow users to sign in if they are Republic Polytechnic's students",
      img: FirstPage
    },
    {
      id: 1,
      name: 'Students Login',
      desc:
        "Users see this page if they click on student sign in, then they will be brought to this page to sign in as a student.",
      img: RpLogin
    },
    {
      id: 2,
      name: 'Home Page',
      desc:
      'This is the central page also known as the home page where all tasks that be done will be shown here like viewing profile, going to student page etc..',
      img: RpMenu,
    },
    {
        id: 3,
        name: "Hamburger Menu",
        desc:
          'This is the menu that can help navigate students using the app from page to easily without having to go back to home page everytime.',
          img: RpHamburger,
      },
    {
      id: 4,
      name: 'Modules Page',
      desc:
        "The main feature of this app is so that students can view their modules assignment without having to access Leo2.0 portal always and even submit it, this is the feature that'll solve all this.",
      img: RpModules,
    },
    {
      id: 5,
      name: "Academic Calendar",
      desc:
        "Students can also view their academic schedule for each day's lessons as well upcoming holiday here",
        img: RpCalendar,
    },
   
      {
        id: 6,
        name: "School's Payment",
        desc:
          "This is where the students of Rp can pay their school related fees of course without accesing portal again which require a specific vpn to access",
          img: RpPayment,
      },
      {
        id: 7,
        name: "Student's Grades",
        desc:
          'This is where students can view to see how their grades fares for any semester.',
          img: RpGrades,
      },
      {
        id: 8,
        name: "Applying Leave",
        desc:
          'Like anyone would there would be day where we fall sick, this will aid students in applying leave on their phone much easily instead of having to on their coms.',
          img: RpLeaveApply,
      },
     
   
  ];


  export default RpAppSS;