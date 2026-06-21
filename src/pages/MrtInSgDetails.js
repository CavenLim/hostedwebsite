import React from 'react';
import PText from '../Components/Text';
import Button from '../Components/Button';
import TaskCow from '../assets/Images/TaskCow.png';
import IconsAll from'../assets/DesignConceptTaskCow/IconsAll.png';

import MrtInSGIcon from '../assets/Images/MrtInSg.png';
import styled from 'styled-components';
import AboutInfoItem from '../Components/AboutInfoItem';
import SectTitle from '../Components/SectTitle'
import {Swiper, SwiperSlide} from 'swiper/react';
import filmishSS from '../assets/data/filmishSS';
import AboutDesigns from '../Components/AboutDesigns';
import SwiperCore , {Navigation} from 'swiper';
import {GrAppleAppStore} from 'react-icons/gr';


//taskcow design concepts images

import ColorAccent from '../assets/DesignConceptTaskCow/ColorAccent.png';
import App4BG from '../assets/DesignConceptTaskCow/App4BG.png';
import calendar from '../assets/DesignConceptTaskCow/calendar.jpg';
import LaunchScreen from '../assets/DesignConceptTaskCow/LaunchScreen.png';

SwiperCore.use([Navigation])


// for new windows open url
function onClick(urlName){
    window.open(
        urlName,
        '_blank' //open in a new window.
      );
  
}

const BtnGo = styled.button`

    background-color: transparent;
    border-radius:4rem;
    border: none; 
    color: white;
    width:5rem ;
    height:5rem ;
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

const AboutTaskCowStyles = styled.div`
.projectItemImg{
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border:3px solid var(--gray-2);
    img{
        height:100%;
    }
}

.projectInfo{
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding:1rem;
    border-radius: 12px;
}
.projectItemTitle{
    font-size: 2.2rem;
}

.projectItemDesc{
    font-size:1.6rem;
    /* font-family: -apple-system, BlinkMacSystemFont; */
    font-family:inherit;
    margin-top: 1rem;
}

/* @media only screen and (max-width:760px){

    .projectItemImg{
        height: 350px;
    }

} */


`



const AboutImagesStyles = styled.div`
    padding: 10rem 0 ;

    .projAllItem{
        display: flex;
        gap:3rem;
        margin-top: 5rem;
        align-self: center;


    }

    .swiper-container{
        padding-top:8rem;
        max-width: 100%;
    }

   
    .swiper-button-prev,.swiper-button-next{
        position: absolute;
        height:50px;
        width: 50px;
        background-color: var(--deep-dark);
        z-index:10;
        right:60px;
        left:auto;
        top:0;
        transform:translateY(50%);
        color:var(--gray-1);
        border-radius: 8px;
    }
    .swiper-button-next{
        right:0;
    }
    .swiper-button-prev:after,.swiper-button-next:after{
        font-size:2rem;
    }
    .projectItemImg{
                height: 56%;
                width: 56%;
                margin-left:4.3rem;
               
    }   

    @media only screen and (max-width:760px){
        .projAllItem{
            flex-direction: column;
            max-width: 400px;
            margin:0 auto;
            margin-top:7rem;
            gap:5rem;
            .projectItemImg{
                margin-left:6rem;
                width: 60%;
                
            }
        }
    }



`

const AboutPageStyles = styled.div`
    padding:20rem 0 10rem 0;
    .topSect{
        display: flex;
        align-items: center;
        justify-content: center;
        
        gap:2rem;
    }

    .topSect2{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        gap:2rem;
    }
    .left{
        flex:3;
        
    }
    .right{
        flex:2;
       
       
    }
    .right2{
        /* flex:33.33%; */
        display: row;
        img{
            margin:1rem;
            width: 200px;
            height: 200px;
            object-fit: contain;
           
            
           
           
        }
       
    }

    

    .topLeft{
        flex:3
    }
    .topRight{
        flex:3
    }
    .aboutSubHead{
        font-size: 2.2rem;
        margin-bottom:2rem;
        display: block;
        margin-right: 1rem;
        
        span{
            background-color: var(--deep-dark);
            padding:1rem;
            border-radius:9px;
           
        }
    }

    .aboutHeader{
        font-size: 3.6rem;
        margin-bottom:3rem;
    }
    .aboutInfo{
        margin-bottom: 4rem;
        .para{
            max-width: 100%;
        }
    }
   
    .aboutInfoItems{
        margin-top: 15rem;
    }
    .aboutInfoItem{
        margin-bottom:10rem;
    }
    .aboutHeader{
        font-size: 3.6rem;
        text-transform:uppercase;
    }

    @media only screen and (max-width:830px){
        padding:10rem 0 ;
        .topSect{
            flex-direction: column;
            gap:5rem;

        }
        .right2{
            display: flex;
            flex-direction: column;
            span{
                display: flex;
                flex-direction:column;
                margin-top:1rem;
            }
        }
        .aboutSubHead{
            font-size: 1.7rem;
            span{
                display: flex;
                flex-direction:column;
                margin-top:1rem;
            }
        }
        .aboutHeader{
            font-size: 3rem;
        }

    }


`

export default function MrtInSgDetails() {
    return (
        <AboutPageStyles>
            <div className="container">
                <div className="topSect">
                    <div className="left">
                        <p className="aboutSubHead">
                            <span>SwiftUI</span> <span>Figma</span>
                        </p>
                        <h2 className="aboutHeader">Mrt In Sg</h2>
                        <BtnGo id="bt" onClick={() => onClick('https://apps.apple.com/sg/app/mrt-in-sg/id6760958462')} outline={false}>
                            <GrAppleAppStore/>
                        </BtnGo>
                        <p>Try It Now</p>
                        <div className="aboutInfo">
                            <PText>
                                More details about Mrt In Sg coming soon. Stay tuned.
                            </PText>
                        </div>
                    </div>
                    <div className="right">
                        <img src={MrtInSGIcon} alt=""/>
                    </div>
                </div>
            </div>
        </AboutPageStyles>
    )
}

