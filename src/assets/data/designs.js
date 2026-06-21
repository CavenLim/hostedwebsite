
import React from 'react';

import WindMac from '../Images/WindMac.png';
import SkyMounts from '../Images/SkyMounts.png';
import LightModeMacBg from '../Images/LightModeMacBg.png';
import DarkModeMacBg from '../Images/DarkModeMacBg.png';
import MacBgSwiftUi from '../Images/MacBgClonedSwiftUi.png';


const designs = [
    {
      id: 0,
      name: 'Monterey MBA',
      desc:
        'A design i made from scratch using SwiftUi using the background i created in PhotoShop, this is my impression of MacBook Air',
      img: MacBgSwiftUi
    },
    {
      id: 1,
      name: 'WindMac',
      desc:
        'I tried combining MacOS and Windows OS basically merging some features and adding some of my own new features, it is just a fun design concept that will probably not happen.',
      img: WindMac,
    },
    {
      id: 3,
      name: 'Light Mode Mac Bg',
      desc:
        "A simple Mac inspired background for light mode.",
      img: LightModeMacBg,
    },
    {
      id: 4,
      name: "Dark Mode Mac Bg",
      desc:
        'A simple Mac inspired background for dark mode.',
        img: DarkModeMacBg,
    },
      {
        id: 5,
        name: "SkyMounts",
        desc:
          'A simple Mac inspired background with sky element.',
          img: SkyMounts,
      },
   
  ];


  export default designs;