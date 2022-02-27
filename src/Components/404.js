import { Box,Container} from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import Cow from '../assets/Images/Cow.png';
import Button from './Button';
import PText from './Text';
import VoxelDog from './VoxelDog';


const ErrorStyles = styled.div`

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


    

    @media only screen and (max-width:760px){
      margin-top: -10rem;
        
       
       
        
    } 


`

export default function ErrorPage() {
    return (
   
        <ErrorStyles>
            <div className="hero">
              
            
            <div className="container">
                <h1 className="hero_header">
                    <span>Page Not Found</span>
                    <span className="heroName">404 Error</span>
                </h1>
                
               
                
                <Container maxW="container.xl" pt={-10}>
                <VoxelDog/>
       
              
                </Container>

         
            
            </div>
            </div>
        </ErrorStyles>
 
    )
}
