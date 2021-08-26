import React from 'react'
import styled from 'styled-components'
import PText from './Text'

const AboutInfoItemStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    margin-top:3rem;
    .aboutTitle{
        font-size:2.4rem;
    }
    .aboutItem{
        display: flex;
        gap:1.3rem;
        position: absolute;
        left:18rem;
    }

    .item{
        background-color:var(--deep-dark);
        padding:1rem;
        border-radius:9px;
    }

    @media only screen and (max-width: 760px){
        flex-direction: column;
        align-items: flex-start;
        gap:1rem;

        .aboutItem{
            position: initial;
            gap:1rem;

        }
        .aboutTitle{
            font-size: 2rem;
        }

        

    }
   
  
    

`

export default function AboutInfoItem({
    title = 'No Title',
    item = [
        'Placeholder1','Placeholder2',"JS"
    ],
}) {
    return (
        <AboutInfoItemStyles>
           <div className="aboutTitle">
               {title}
           </div>
           <div className="aboutItem">
               {item.map((item,index) => (
                   <div className="item" key={index}>
                       <PText>
                           {item}
                       </PText>
                     </div> 

               ))}
           </div>
            
        </AboutInfoItemStyles>
    )
}
