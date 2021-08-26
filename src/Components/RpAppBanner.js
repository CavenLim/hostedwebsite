import React from 'react'
import styled from 'styled-components'
import RpApp2 from '../assets/Images/RpApp2.png';
import Button from './Button';
import { Marginer } from './marginer';
import {SiAdobexd} from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';

const TaskCowBannerContainer = styled.div`

    width: 100%;
    height:390px;
    display: flex;
    background-image: linear-gradient(to bottom right, green, lightgreen);
    align-items: center;
    justify-content: center;

`

const ContentContainer = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap:5rem;

    @media only screen and (max-width:760px){
        display: flex;
        flex-direction: column;
        gap:0rem;
   
    }

`;
const SloganContainer = styled.div`
    display: flex;
    flex-direction:column;

`;

const Slogan = styled.h2`
    margin: 0 ;
 
    font-size:20px;
    color:  var(--white);
    font-weight: 450;

    @media only screen and (max-width:760px){
        font-size:14px;
   
    }



`


const SloganTitle = styled.h2`
    margin: 0 ;
    margin-bottom:2rem;
    font-size:30px;
    color:  var(--white);
    font-weight: 700;
    



`

const ButtonsDivStyle = styled.div`
    display: flex;
    gap: 1rem;


`



const BtnGo = styled.button`

    background-color: transparent;
    border-radius:4rem;
    border: none; 
    color: white;
    width:3rem ;
    height:3rem ;
    font-size: 0.5rem; 
    cursor: pointer;

  


    path{
        color:var(--white);
     
       

     
    }

   
    @media only screen and (max-width:760px){
        align-self: center;
       justify-self: center;
       
   
    }
    



`

const ImageApp = styled.div`

    width: 21em;
    height: 20em;

    img{
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width:760px){
   
        
        float:top;
        margin-top: 5rem;
        width: 5em;
        height: 4.5em;
        
   
    }

`

// for new windows open url
function onClick(urlName){
    window.open(
        urlName,
        '_blank' //open in a new window.
      );
  
}
// for non new windows opener
function onClick2(urlName){
    window.location.href = urlName
  
}

export default function RpAppBanner() {
    return (
        <TaskCowBannerContainer>
            <ContentContainer>
                <SloganContainer>
                   <Marginer direction="vertical" margin="1em"/>
                    <SloganContainer>
                        <SloganTitle>Rp App</SloganTitle>
                        <Slogan>
                            The reliance of school web portals
                        </Slogan>
                        <Slogan>
                            is now gone and solved
                        </Slogan>
                        <Slogan>
                            as you get access to all in this app!
                        </Slogan>
                    </SloganContainer>
                    <Marginer direction="vertical" margin={20}/>
                    <ButtonsDivStyle className="Buttons">
                    <BtnGo id="bt" onClick={() => onClick('https://xd.adobe.com/view/d9d25d4c-5c48-4ac1-af73-445c5c4b0463-8c81/screen/cfc4de97-da1c-422c-81b3-4fdb418181ad')} outline={false}><SiAdobexd/></BtnGo>
                    <BtnGo id="bt2" onClick={() => onClick2('/rpapp')}outline={false}><FaArrowRight/></BtnGo>
                    </ButtonsDivStyle>
                    
                </SloganContainer>
                <ImageApp>
                    <img src={RpApp2} alt="" />
                </ImageApp>
            </ContentContainer>
            
        </TaskCowBannerContainer>
    )
}
