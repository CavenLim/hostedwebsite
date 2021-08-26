import React from 'react';
import PText from '../Components/Text';
import Button from '../Components/Button';
import RpApp2 from '../assets/Images/RpApp2.png';
import IconsAll from'../assets/DesignConceptTaskCow/IconsAll.png';

import topTaskCow from '../assets/Images/topTaskCow.png';
import styled from 'styled-components';
import AboutInfoItem from '../Components/AboutInfoItem';
import SectTitle from '../Components/SectTitle'
import {Swiper, SwiperSlide} from 'swiper/react';
import RpAppSS from '../assets/data/RpAppSS';
import AboutDesigns from '../Components/AboutDesigns';
import SwiperCore , {Navigation} from 'swiper';
import {SiAdobexd} from 'react-icons/si';


//taskcow design concepts images

import colorScheme from '../assets/RpAppImages/colorScheme.png';
import Leo from '../assets/RpAppImages/Leo2.0.png';
import Oasis from '../assets/RpAppImages/Oasis2.0.png';
import RpApp from '../assets/Images/RpApp.jpg';

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
    font-family: -apple-system, BlinkMacSystemFont;
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

export default function RpAppDetails() {
    return (
        <AboutPageStyles>
            <div className="container">
                
                <div className="topSect">
                    <div className="left">
                        
                        <p className="aboutSubHead">
                           <span>Adobe XD</span> <span>Photoshop</span> <span>Prototype</span> 
                           
                           
                        </p>
                        <h2 className="aboutHeader">
                            Rp App
                        </h2>
                    
                <BtnGo id="bt" onClick={() => onClick('https://xd.adobe.com/view/d9d25d4c-5c48-4ac1-af73-445c5c4b0463-8c81/screen/cfc4de97-da1c-422c-81b3-4fdb418181ad')} outline={false}> <SiAdobexd/></BtnGo> <p>Try It Now</p>
                <br/><br/>
                        <div className="aboutInfo">
                            <PText>
                            The application I will like to create is a mobile application that combines both the oasis and Leo2.0 that Republic Polytechnic students use, it will allow republic polytechnic students to check their personal details like finances and to use leo2.0 in the application and not on the web. It will provide convenience for the school students since they can just access everything related to school in the application without the need of always using computer to access the website.
 
                        <br/><br/>
                        Some of the existing problems we have while accessing leo2.0 && oasis is that we always have to access the 2 platforms through the web and with VPN for Oasis . Most of time Republic Polytechnic’s student can only check their term results or pay their school fees using their laptop where it is the only device able to be connected to school’s VPN. Also to even check their daily grades or do their reflection for the day they have to use the website. With an application the following tasks can be done in ease and anywhere as long as they have access to the application.
                        <br/><br/>
                        App logo was created by myself with the idea of making it seems like RP students graduating as seen by the graduation hat since this application is supposed to follow rp students till they graduate. It is also designed using PhotoShop


                            </PText>
                        </div>
                     
                    </div>
                    
                    <div className="right">
                        <img src={RpApp2} alt=""/>

                       
                    </div>

                </div>


                <br/><br/><br/><br/>

                <div className="topSect2">
                    <div className="left">
                       
                        <h2 className="aboutHeader">
                            Design Concepts
                        </h2>
                        <div className="aboutInfo">
                            <PText>

                            The design of functionalities is made to be more of a shortcut since there is already two portals for the students to do on the website, application brings them straight into it in the application itself.
                            <br/><br/>
                            Having hamburger menu to allow user to navigate through app too other than just having  to press back arrow everytime.
​                            <br/><br/>
​
​
                            Mostly green, white and black or grey since that is the color the represents Republic Polytechnic
                            use of warm colors for main menu icons, while use of cool colors for modules button.
                            Colors are consistent between button colors and the function of the button (like for payment since the button is light blue the other payment pages are also mainly light blue)
                            

                            </PText>
                        </div>
                     
                    </div>

                    <div className="right2">
                        <img src={colorScheme} alt=""/>
                        <img src={RpApp} alt=""/>
                        
                       

                        
                    </div>
                 
   
                    

                </div>



               
               
                <AboutImagesStyles>

           
                <SectTitle heading="Wireframes" subheading="Rp App's"/>
                <div className="projAllItem">
                    <Swiper spaceBetween={22} slidesPerView={1} navigation

                    breakpoints = {
                        {
                            640:{
                                slidesPerView:1,
                            },
                            760:{
                                slidesPerView:2,
                            },
                            1200:{
                                slidesPerView:3,
                            }
                        }
                    
                    }
                  
                    >
                        {RpAppSS.map((project, index)=>{
                            if (index >= 10) return;

                            return(
                                <SwiperSlide key={project.id}>
                                    <AboutDesigns
                                    title = {project.name}
                                    img = {project.img}
                                    desc = {project.desc}
                                    />      
                                </SwiperSlide>
                                
                            )

                        })}

                    </Swiper>
                </div>
                </AboutImagesStyles>



                <br/><br/><br/>
 
                <SectTitle heading="Conclusion" subheading="Rp App's"/><br/><br/><br/><br/><br/><br/>

                <div className="topSect">
                    <div className="topLeft">
                   
                       
                        <div className="aboutInfo">
                            <PText>
                            This is one of my more specific application idea i feel would be a useful proposal for Republic Polytechnic's Students since we dont have an application to handle student's matters on our phone compared to other schools.
                            <br/><br/>

                            This is what Leo2.0 and Oasis 2.0 does for Rp students or staff in case you are not from Republic Polytechnic . The image below shows the 2 portal we have to settle our school matters.
​
Leo2.0 which is more for our school academic work and Oasis more of our admin work like application forms.

                            </PText>
                        </div>

                        <div className="RpPortals">
                            <img src={Leo} alt="" />
                            <img src={Oasis} alt="" />
                        </div>
                     
                    </div>
                  

                </div>
            

            </div>
        </AboutPageStyles>
    )
}

