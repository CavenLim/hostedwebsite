import React from 'react';
import PText from '../Components/Text';
import Button from '../Components/Button';

import SolarEdu2 from '../assets/Images/SolarEdu2.png';
import IconsAll from'../assets/DesignConceptTaskCow/IconsAll.png';

import topTaskCow from '../assets/Images/topTaskCow.png';
import styled from 'styled-components';
import AboutInfoItem from '../Components/AboutInfoItem';
import SectTitle from '../Components/SectTitle'
import {Swiper, SwiperSlide} from 'swiper/react';
import SolarEduSS from '../assets/data/SolarEduSS';
import AboutDesigns from '../Components/AboutDesigns';
import SwiperCore , {Navigation} from 'swiper';
import {SiAdobexd} from 'react-icons/si';


//Solar Edu design concepts images

import Venus from'../assets/SolarEduImages/Venus.png';
import VenusTexture from'../assets/SolarEduImages/VenusTexture.jpg';
import VenusWithBg from'../assets/SolarEduImages/VenusWithBg.png';
import { VERSION } from 'lodash';

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
                            SolarEdu
                        </h2>
                    
                <BtnGo id="bt" onClick={() => onClick('https://xd.adobe.com/view/b069d9c8-a272-4ace-ae9e-e55b05f31f6f-e53a/')} outline={false}> <SiAdobexd/></BtnGo> <p>Try It Now</p>
                <br/><br/>
                        <div className="aboutInfo">
                            <PText>
                            The application I will like to create is a mobile application that users can learn about the different planets in our solar system as well as test their understandings of the planets.
 
                        <br/><br/>
                        There is not much mobile applications that can educate the public of our planets of solar system and even if there is it wouldn’t be as useful since it does not test the users after they have learnt so much. This helps those interested in Astronomy get more in depth with learning.
                        <br/><br/>
                        For this Application I have an icon that is really simple which is just words and for the Letter O since it is shape of earth I replace Letter O with the image of the earth as shown in image above.

                            </PText>
                        </div>
                     
                    </div>
                    
                    <div className="right">
                        <img src={SolarEdu2} alt=""/>

                       
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
                            As you can see this is the Venus design I had is very similar to the other planets I designed, I designed it all by myself except the planet textures which I used from https://www.solarsystemscope.com/textures/.
                            <br/><br/>
                            I designed it by taking parts of the map that best represent the planet and syphered it which is how I made it into a circle . For the background I just added black and dots which are really small to represent stars we see in the sky.
​                            <br/><br/>
​                            I used PhotoShop to sypher the planet textures so it will fit the into the circle shape and look more like a planet.
                            

                            </PText>
                        </div>
                     
                    </div>

                    <div className="right2">
                        <img src={Venus} alt=""/>
                        <img src={VenusTexture} alt=""/>
                        <img src={VenusWithBg} alt=""/>
                       

                        
                    </div>
                 
   
                    

                </div>



               
               
                <AboutImagesStyles>

           
                <SectTitle heading="Wireframes" subheading="SolarEdu's"/>
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
                        {SolarEduSS.map((project, index)=>{
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
 
                <SectTitle heading="Conclusion" subheading="SolarEdu's"/><br/><br/><br/><br/><br/><br/>

                <div className="topSect">
                    <div className="topLeft">
                   
                       
                        <div className="aboutInfo">
                            <PText>
                            This application i would say is one of the more Applications i would say i focused more on designing since UI/UX Design has been a field of work i will want to work towards in my journey as an Application Developer. Designing something related to the galaxy has been something i always wanted to try although the textures pack of the planets were not mine but it's quite an experience.
​
                            This i would say is something we can all relate to the world of Astronomy.
                            <br/><br/>

                            Thank you for reading this , if you have any feedback can feel free to contact me :) .

                            </PText>
                        </div>

                     
                     
                    </div>
                  

                </div>
            

            </div>
        </AboutPageStyles>
    )
}

