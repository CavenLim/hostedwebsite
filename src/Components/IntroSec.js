import React from 'react'
import styled from 'styled-components'
import IntroSectItem from './IntroSectItem'
import SectTitle from './SectTitle'

import {CgDesignmodo} from 'react-icons/cg'
import {MdComputer} from 'react-icons/md'
import {SiApple} from 'react-icons/si'

const IntroSecStyles = styled.div`

padding:10rem 0;

.introallItems{
    display: flex;
    gap:10rem;
    justify-content: space-between;
    margin-top:5rem;
}

@media only screen and (max-width:760px){
    .introallItems{

        flex-direction: column;
        max-width: 350px;
        margin:0 auto;
        margin-top: 5rem;
        gap:5rem;

    }

}


`

export default function IntroSec() {
    return (
        <IntroSecStyles>
           <div className="container">
           <SectTitle heading="More About Me" subheading="what i usually do"/>
            <div className="introallItems">
          
            <IntroSectItem  icon ={<CgDesignmodo/>} title="Ui Design" desc="  I love and enjoy designing User Interfaces from
                designing App Icons to the application Interface no matter on web or mobile
                as well as some random crazy designs." 
            
            />
            <IntroSectItem icon ={<MdComputer/>}  title="Back End Development" desc="I also enjoy being able to code my own back end/server side code since
            i can have full control and will be able to allow my application to work the way i code it to be, i'm not just a front end dev but also back end dev since
            my interest is in these."    />
            <IntroSectItem icon = {<SiApple/>} title="IOS App Development" desc="Another language i will always use is Swift with the SwiftUi framework since i enjoy
            having as much control to my own storyboard then to use drag and drop which is very constraining and limiting to the app's user interface."/>
            </div>
           </div>
            
        </IntroSecStyles>
    )
}
