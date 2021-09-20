import React from 'react'
import styled from 'styled-components'
import DuckModeIcon from '../assets/Images/DuckModeIcon.png';
import Button from './Button';
import { Marginer } from './marginer';
import {GrAppleAppStore} from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

import {FaArrowRight} from 'react-icons/fa';
//#FFDA6F
const TaskCowBannerContainer = styled.div`

    width: 100%;
    height:490px;
    display: flex;
    background-image: linear-gradient(to right, #D6AA2C, #FFDA6F);
    align-items: center;
    justify-content: center;
    position: relative;

    .custom-shape-divider-top-1631952459 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1631952459 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 86px;
}

.custom-shape-divider-top-1631952459 .shape-fill {
    fill: var(--dark-bg);
    
}
.custom-shape-divider-bottom-1631953452 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1631953452 svg {
    position: relative;
    display: block;
    width: calc(205% + 1.3px);
    height: 81px;
}

.custom-shape-divider-bottom-1631953452 .shape-fill {
    fill: #FFFFFF;
    opacity: .3;
}


@media only screen and (max-width:760px){
    .custom-shape-divider-top-1631952459 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 66px;
}
   
    }


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

    width: 20em;
    height: 19em;

    img{
        object-fit: contain;
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

export default function DuckModeBanner() {
    return (
        <TaskCowBannerContainer>
          <div class="custom-shape-divider-top-1631952459">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
            <ContentContainer>
                <SloganContainer>
                   <Marginer direction="vertical" margin="1em"/>
                    <SloganContainer>
                        <SloganTitle>DuckMode</SloganTitle>
                        <Slogan>
                            Find your desired colours with
                        </Slogan>
                        <Slogan>
                            DuckMode
                        </Slogan>
                        <Slogan>
                            as you design or code etc..
                        </Slogan>
                    </SloganContainer>
                    <Marginer direction="vertical" margin={20}/>
                    <ButtonsDivStyle className="Buttons">
                    <BtnGo id="bt" onClick={() => onClick('https://apps.apple.com/sg/app/duckmode/id1586440491?mt=12')} outline={false}><GrAppleAppStore/></BtnGo>
                    <BtnGo id="bt2" onClick={() => onClick2('/#/duckmode')}outline={false}><FaArrowRight/></BtnGo>
                    </ButtonsDivStyle>
                    
                </SloganContainer>
                <ImageApp>
                    <img src={DuckModeIcon} alt="" />
                </ImageApp>
            </ContentContainer>
            <div class="custom-shape-divider-bottom-1631953452">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
        </TaskCowBannerContainer>
    )
}
