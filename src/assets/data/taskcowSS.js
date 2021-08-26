import React from 'react';

//10 wireframes
import AddTask from '../DesignConceptTaskCow/AddTask.png';
import HomePage from '../DesignConceptTaskCow/HomePage.png';
import OnBoard from '../DesignConceptTaskCow/OnBoard.png';
import Location1 from '../DesignConceptTaskCow/Location1.png';
import Location2 from '../DesignConceptTaskCow/Location2.png';
import darkWeather from '../DesignConceptTaskCow/darkWeather.png';
import Weather from '../DesignConceptTaskCow/Weather.png';
import Widgets from '../DesignConceptTaskCow/Widgets.png';
import Widgets2 from '../DesignConceptTaskCow/Widgets2.png';
import SetNotifications from '../DesignConceptTaskCow/SetNotifications.png';
import LaunchScreen from '../DesignConceptTaskCow/LaunchScreen.png';


const taskCowSS = [
    {
      id: 0,
      name: 'Home Page',
      desc:
        'Users see this page when App is launched. Allow users to check task for the day or all task added using toggle button. User can also set notifications, delete task, view locations, add task on this page, as well as set task completion status.',
      img: HomePage
    },
    {
      id: 1,
      name: 'Add Task Page',
      desc:
        "Users see this page when they click add task button on the home page. Allow users to add tasks only for dates that have not passed like on today or after today. Else 'Done'  button will be in disabled mode.",
      img: AddTask
    },
    {
      id: 2,
      name: 'Location Feature 1',
      desc:
        'Users see this page click on the location button at the home page. The location field will be set to the location keyword the user had previously set.',
      img: Location1,
    },
    {
        id: 3,
        name: "Location Feature 2",
        desc:
          'Allow users to see nearby places so they can have a gauge of nearby for example cafes they can study at without having to open maps separately on another application/browser. They have to submit the keyword to search.',
          img: Location2,
      },
    {
      id: 4,
      name: 'Weather',
      desc:
        "A new feature added to enable users to plan ahead with the weather in account, weather data is mostly supported for Singapore due to budget however non-SG countries can still get their data when api limit is not hit.",
      img: Weather,
    },
    {
      id: 5,
      name: "Dark Mode Weather",
      desc:
        'TaskCow also supports dark mode like in this case the weather page too.',
        img: darkWeather,
    },
   
      {
        id: 6,
        name: "Widget with tasks",
        desc:
          "This widget is dynamic since it updates quite regularly after every operation from user as well as after every midnight pass. Most importantly it is all accessible just from background of the user's device",
          img: Widgets,
      },
      {
        id: 7,
        name: "Widget without task",
        desc:
          'There is a different design for widget when there is no task too.',
          img: Widgets2,
      },
      {
        id: 8,
        name: "Onboarding Screen",
        desc:
          'There is also a feature to show user of new updates in the app whenever they update or first download the app to showcase features available as well to guide user whenever they might be unsure of what TaskCow is capable of.',
          img: OnBoard,
      },
      {
        id: 9,
        name: "Notifications page",
        desc:
          'Of Course a task application cant do without setting notfications to remind ourselves, be surprised by what reminds you.',
          img: SetNotifications,
      },
      {
        id: 10,
        name: "Launch Screen page",
        desc:
          'This is what users see whenever the app is launched',
          img: LaunchScreen,
      },
   
  ];


  export default taskCowSS;