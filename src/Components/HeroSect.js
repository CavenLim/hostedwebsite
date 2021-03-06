import { Box,Container} from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import Cow from '../assets/Images/Cow.png';
import Button from './Button';
import PText from './Text';
import VoxelDog from './VoxelDog';


const HeroStyles = styled.div`

.hero{
    height:100vh;
    min-height: 1000px;
    width:100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
   

}

.hero_header{
    font-size:2rem;
    margin-bottom: 4rem;
    position: relative;
  
    span{
        display: inline-block;
        width: 100%;
        
    }
    .heroName{
        font-size:7rem;
        font-family:inherit;
        //font-family: -apple-system, sans-serif;
        
  
        color: var(--white);
    }
   
}

.heroImage{
        max-width: 900px;
        width: 100%;
        height:640px;
        margin:0 auto;
        overflow: hidden;
        img{
            padding-top:1rem;
            width: 50%;
            height:50%;
            
    
            
        }
        /* border:2px solid var(--gray-1); */
        /* background-color: var(--deep-dark); */
    }
    .heroInfo{
        margin-top:-10rem;

    }

    @media only screen and (max-width:760px){
      margin-top: -10rem;
        
        .heroImage{
               
                img{
                    padding-top:1rem;
                    width: 80%;
                   
                    
            
                    
                }
          
        }
       
        
    } 


`

export default function HeroSect() {
    return (
   
        <HeroStyles>
            <div className="hero">
              
            
            <div className="container">
                <h1 className="hero_header">
                    <span>Hello! This is</span>
                    <span className="heroName">Caven Lim</span>
                </h1>
                
               
                
                <Container maxW="container.xl" pt={-10}>
                <VoxelDog/>
       
              
                </Container>

                {/* <div className="heroImage">
                    <img src={Cow} alt =""/>
                </div> */}
                <div className="heroInfo">
                    <PText>I am a front end and backend developer
                        currently still pursuing my diploma in
                        Mobile Software Development. I love to design
                        User interface that will caught user's attention
                        on first sight.
                    
                    </PText>
                  



                </div>
         
            
            </div>
            </div>
        </HeroStyles>
 
    )
}
