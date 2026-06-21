import React from 'react'
import styled from 'styled-components'
import IntroSectItem from './IntroSectItem'
import SectTitle from './SectTitle'

import {CgDesignmodo} from 'react-icons/cg'
import { MdMemory } from 'react-icons/md'
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
                        <IntroSectItem icon = {<SiApple/>} title="IOS App Development" desc="Another language i will always use is Swift with the SwiftUi framework since i enjoy
            having the ability to code out my own app's user interface than to use drag and drop which is usually very constraining and limiting to the app's user interface."/>
            <IntroSectItem icon ={<MdMemory/>}  title="AI & Agentic Systems" desc="I enjoy building full-stack applications, but what excites me most is working with AI agents and agentic tools. 
            I'm deeply interested in how AI is shaping the future, and I love being able to code systems that think, act, and work alongside me, not just applications that respond to input."/>

            </div>
           </div>
            
        </IntroSecStyles>
    )
}
