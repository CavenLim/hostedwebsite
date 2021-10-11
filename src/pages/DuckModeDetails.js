import React from 'react';
import PText from '../Components/Text';
import Button from '../Components/Button';
import DuckMode from '../assets/Images/DuckModeIcon.png'
import IconsAll from'../assets/DesignConceptTaskCow/IconsAll.png';

import topTaskCow from '../assets/Images/topTaskCow.png';
import styled from 'styled-components';
import AboutInfoItem from '../Components/AboutInfoItem';
import SectTitle from '../Components/SectTitle'
import {Swiper, SwiperSlide} from 'swiper/react';
import duckModeSS from '../assets/data/duckModeSS';
import AboutDesigns from '../Components/AboutDesigns';
import SwiperCore , {Navigation} from 'swiper';
import {GrAppleAppStore} from 'react-icons/gr';


//duckMode design concepts images

import DarkMode from '../assets/DuckModeImages/DarkMode.png'
import LightMode from '../assets/DuckModeImages/LightMode.png'
import SfSymbol from '../assets/DuckModeImages/SfSymbols.png'
import Neuro from '../assets/DuckModeImages/Neuro.png'

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
                height: 80%;
                width: 80%;
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
            width: 300px;
            height: 300px;
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

export default function DuckModeDetails() {
    return (
        <AboutPageStyles>
            <div className="container">
                
                <div className="topSect">
                    <div className="left">
                        
                        <p className="aboutSubHead">
                           <span>SwiftUi</span> <span>MacOS</span> <span>Figma</span>
                           
                           
                        </p>
                        <h2 className="aboutHeader">
                            DuckMode
                        </h2>
                    
                <BtnGo id="bt" onClick={() => onClick('https://apps.apple.com/sg/app/duckmode/id1586440491?mt=12')} outline={false}> <GrAppleAppStore/></BtnGo> <p>Try It Now</p>
                <br/><br/>
                        <div className="aboutInfo">
                            <PText>
                            The application I will like to create is a MacOS application that user can use to find their desired colours, It will allow for users to get colours they might want from a light/dark to dark/light mode especially in context of developers where now dark and light mode is almost a need to be supported in their apps.
                        <br/><br/>
                        WHY?
                        <br/>
                        To Solve issue of user needing to have to search and trial their colours in an inefficient way instead they can get their colours no matter what type of colour code they input ALL JUST IN DUCKMODE.
                        
                        <br/><br/>
                       
                        I designed this logo with the idea of trying to express evolution since duck's evolution is similar to colors in different tones starting from Egg to Duck theres a lot of stages in between which also represents the diff color tones it has to get from light to dark and vice versa. 
                        <br/><br/>
                        DarkMode was my initial app name but i wanted more branding for this app which is why i made a pun out of it from Dark to Duck which sounds similar.
                        <br/><br/>
                        I designed and created this Duck logo myself using Figma.
                            </PText>
                        </div>
                     
                    </div>
                    
                    <div className="right">
                        <img src={DuckMode} alt=""/>

                       
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

                          
                            Main color I used throughout my application is white and black which is intended because i want to make the app's theme simplistic.
                            However for DuckMode's Icon i used a linear gradient background colour with the left side starting from FFDA6F to end of D6AA2C. I used this gradient
                            due to my own interpretation of an actual Duck's colour.
                            As for text color I used black and white as the base according to user’s environment setting whether dark or light mode.
                            <br/><br/>
          
​
​
                            As you can see from the first 2 images below of the difference in light and dark mode.
                            <br/><br/>
                            For the Sf Symbols i used i added a rgb gradient to represent it giving the rgb code while the hex is just grayish colour.

                            <br/>  <br/>
                            Lastly, if you noticed there are neumorphic designs added in the input field,button and the sf symbols which basically adds shadows, glow effect to make it have a soft, minimal look

                            </PText>
                        </div>
                     
                    </div>

                    <div className="right2">
                        <img src={DarkMode} alt=""/>
                        <img src={LightMode} alt=""/>
                       <img src={SfSymbol} alt=""/>
                       <img src={Neuro} alt=""/>
                        
                    </div>
                 
   
                    

                </div>



               
               
                <AboutImagesStyles>

           
                <SectTitle heading="Wireframes" subheading="DuckMode's"/>
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
                        {duckModeSS.map((project, index)=>{
                            if (index >= 5) return;

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



                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
 
                <SectTitle heading="Conclusion" subheading="DuckMode's"/><br/><br/><br/><br/><br/><br/>

                <div className="topSect">
                    <div className="topLeft">
                   
                        
                        <div className="aboutInfo">
                            <PText>
                                This application was my first attempt on playing around colour codes especially playing with NSColor which is Swift's MacOS & AppKit colour Class. I will say
                                that this application is more algorithm based since i went for simplistic UI design and focused more on the colour converting algorithm. It was tough at first because
                                of limited knowledge but after i understood the colour more after 1 week of research and testing.

                                <br/>      <br/>

                                This is such a fruitful experience since i actually learn more than just colour too since its my First MacOs Application. Hope users will like my application since i enjoy
                                being able to help in little ways like this. Feel free to contact me for any collaboration or feedback, my contact details are below.


                            </PText>
                        </div>
                     
                    </div>
                 

                </div>
            

            </div>
        </AboutPageStyles>
    )
}

