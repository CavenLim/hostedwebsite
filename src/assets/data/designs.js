
import React from 'react';

import WindMac from '../Images/WindMac.png';
import SkyMounts from '../Images/SkyMounts.png';
import Memoji from '../Images/Memoji.png';
import iMacWindMac from '../Images/iMacWindMac.png';
import LightModeMacBg from '../Images/LightModeMacBg.png';
import DarkModeMacBg from '../Images/DarkModeMacBg.png';
import AnimalKingdom from '../Images/AnimalKingdom.png';
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
      name: 'WWDC 2021',
      desc:
        'A design i made to celebrate WWDC 2021 that consist of memojis.',
      img: Memoji
    },
    {
      id: 2,
      name: 'WindMac',
      desc:
        'I tried combining MacOS and Windows OS basically merging some features and adding some of my own new features, it is just a fun design concept that will probably not happen.',
      img: WindMac,
    },
    {
        id: 3,
        name: "IMac WindMac",
        desc:
          'A simple Mac inspired background for light mode.',
          img: iMacWindMac,
      },
    {
      id: 4,
      name: 'Light Mode Mac Bg',
      desc:
        "A simple Mac inspired background for light mode.",
      img: LightModeMacBg,
    },
    {
      id: 5,
      name: "Dark Mode Mac Bg",
      desc:
        'A simple Mac inspired background for dark mode.',
        img: DarkModeMacBg,
    },
   
      {
        id: 6,
        name: "Animal Kingdom",
        desc:
          'A simple Mac inspired background with animals.',
          img: AnimalKingdom,
      },
      {
        id: 7,
        name: "SkyMounts",
        desc:
          'A simple Mac inspired background with sky element.',
          img: SkyMounts,
      },
   
  ];


  export default designs;