import React from 'react'
import styled from 'styled-components'
import PText from './Text'
import {SiSwift} from 'react-icons/si';
const AboutInfoItemStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    margin-top:3rem;
  
    .aboutTitle{
        font-size:2.4rem;
       padding-bottom: 1rem;
    }
    .aboutItem{
        display: flex;
      
        flex-direction: row;
        align-items: center;
  
        gap:1.5rem;
        position: absolute;
        left:18rem;
        
    }

    .item{
        
        background-color:var(--deep-dark);
        padding:1rem;
        border-radius:9px;
     
        
            float:left;
        
        
      
        
    }
    .imageItem{
        float: right;
        
        svg{
           
        width:2rem;
        color: white;
        fill:white;
        }
    
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
    image=["",""]
}) {
    return (
        <AboutInfoItemStyles>
           <div className="aboutTitle">
               {title}
           </div>
           <div className="aboutItem">
               {item.map((item,index) => (
                   <div className="item" key={index}>

{/* <                       div className="imageItem">
                            {image}
                        </div> */}
                       <PText className="itemText">
                           {item}
                       </PText>

                      
                     </div> 
                     
                 

               ))}

                {image.map((image,index) => (
                        <div className="imageItem" key={index}>

                       
                                            {image}
                          
                     

                                    
                        </div> 
                                    
                                

                            ))}
                    



           </div>
            
        </AboutInfoItemStyles>
    )
}
