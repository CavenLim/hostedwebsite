import React from 'react'
import {MdDesktopMac} from 'react-icons/md'
import styled from 'styled-components'
import PText from './Text'

const IntroItemStyles = styled.div`
text-align: center;
.introItemIcon{
    svg{
        margin-top:3rem;
        width:3rem;
    }
}

.introItemTitle{
    font-size: 2.5rem;
    font-family: -apple-system, BlinkMacSystemFont;

}

.para{
    margin-top:3rem;    
   
}



`

export default function IntroSectItem({
    
    icon  = <MdDesktopMac/>,
    title = 'None',
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",


}) {
    return (
        <IntroItemStyles>
            <div className="introItemIcon">
                {icon}
            </div>
            <div className="introItemTitle">
               {title}
            </div>
            <PText>
               
                {desc}

            </PText>
        </IntroItemStyles>
    )
}
