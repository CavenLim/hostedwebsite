import React from 'react';
import PText from '../Components/Text';
import Button from '../Components/Button';
import dogComm from '../assets/Images/dogComm.png';
import IconsAll from'../assets/DesignConceptTaskCow/IconsAll.png';

import topTaskCow from '../assets/Images/topTaskCow.png';
import styled from 'styled-components';
import AboutInfoItem from '../Components/AboutInfoItem';
import SectTitle from '../Components/SectTitle'
import {Swiper, SwiperSlide} from 'swiper/react';
import DogCommSS from '../assets/data/dogCommSS';
import AboutDesigns from '../Components/AboutDesigns';
import SwiperCore , {Navigation} from 'swiper';
import {GrAppleAppStore} from 'react-icons/gr';


//taskcow design concepts images

import Color from '../assets/DogCommImages/Color.jpeg';
import BGColor from '../assets/DogCommImages/BGColor.png';
import calendar from '../assets/DesignConceptTaskCow/calendar.jpg';
import LaunchScreen from '../assets/DogCommImages/LaunchScreen.png';
import DogCommTwoSS from '../assets/data/dogCommSSTwo';

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
    font-family: -apple-system, sans-serif;
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

export default function DogCommTwoDetails() {
    return (
        <AboutPageStyles>
            <div className="container">
                
                <div className="topSect">
                    <div className="left">
                        
                        <p className="aboutSubHead">
                           <span>React Native</span> <span>Next Js</span> <span>Firebase</span>
                           <br/> <br/>
                            <span>Tailwind CSS</span>
                           
                        </p>
                        <h2 className="aboutHeader">
                            DogComm 2.0
                        </h2>
                    
                        <br/><br/>

                    
                        <div className="aboutInfo">
                            <PText>
                            The application I would like to create is a community application for dog owners and lovers, it will allow for the dog owners/ lovers to chat with other dog owners/lovers through the match & chat function.
 
                        <br/><br/>
                        Many of us think of ourselves all the time but do we think of the pets they need more recognition too. With this second version of the application, specifically the dogs will have a larger community formed behind them other than their own owners as such more people will not forget about the dogs while also promoting safety measures since
                        our application dont use location to match.
                        <br/><br/>
                        App logo was designed by myself using photoshop where I just used a gradient as the background from light peach to light pink  and just use a dog sketch I did with a gradient of light pink to dark purple for the dog.

Since my application is targeted towards dog market this icon definitely highlights it is an application related to dogs.

<br/><br/>
For the launch screen I also added this dog icon but in white since it will complement my app name in white too.
                            </PText>
                        </div>
                     
                    </div>
                    
                    <div className="right">
                        <img src={dogComm} alt=""/>

                       
                    </div>

                </div>


                <br/><br/><br/><br/>


                <div className="topSect">
                    <div className="left">
                        
                        <p className="aboutSubHead">
                           <span>Videos</span> 
                           <br/> <br/>
                            
                           
                        </p>
                        <h2 className="aboutHeader">
                            DogComm 2.0 Run through
                        </h2>
                    
                        <br/><br/>

                    
                        <div className="aboutInfo">
                            <PText>
                            The video shows the entire process of how the application flow is from after the users have created a profile for their dogs.

 
                        <br/><br/>
                        There a lot of features not covered in this video too like creating and setting up a user profile but that is 
                        <br/><br/>
           
                            </PText>
                        </div>
                     
                    </div>
                    
                    <div className="right" style={{marginLeft:100}}>
                    <iframe src='https://www.youtube.com/embed/4Jo9Pv6nRZw'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen='true'
                        title='video'
                />      

                       
                    </div>

                </div>


               

                <br/><br/>
                <br/><br/>


                <div className="topSect">
                    <div className="left">
                        
                      
                        <h2 className="aboutHeader">
                            DogComm 2.0 Matching 
                        </h2>
                    
                        <br/><br/>

                    
                        <div className="aboutInfo">
                            <PText>
                            The video specifically shows the matching function which i have used firebase to store as well match dogs that have requested to friend each other. 
                            
 
                        <br/><br/>
                        Only mutual willing pair to make friends will then be able to message the other party throught the chat feature making it safer also since not everyone can message anyone
                            also that since we use mutual algorithm we wont have to track user's location also potential leaking and endangering user's life.
                        <br/><br/>
           
                            </PText>
                        </div>
                     
                    </div>
                    
                    <div className="right" style={{marginLeft:100}}>
                    <iframe src='https://www.youtube.com/embed/AHr8DSO-G5g'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen='true'
                        title='video'
                />    
                       
                    </div>

                </div>

              

                <div className="topSect2">
                    <div className="left">
                       
                        <h2 className="aboutHeader">
                            Design Concepts
                        </h2>
                        <div className="aboutInfo">
                            <PText>

                            Main Color I used throughout my app is mainly light peach to around lighter pink which is the gradient for my app’s branding logo.
                            <br/><br/>
                            As for the text , or button I choose to different of tones of gray for light mode and dark mode depending on what user is using.
​                            <br/><br/>
​
​
                            I also used black throughout as my title of each page.
                            

                            </PText>
                        </div>
                     
                    </div>

                    <div className="right2">
                        <img src={Color} alt=""/>
                        <img src={BGColor} alt=""/>
                        
                        <img src={LaunchScreen} alt=""/>

                        
                    </div>
                 
   
                    

                </div>



               
               
                <AboutImagesStyles>

           
                <SectTitle heading="Wireframes" subheading="DogComm's"/>
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
                        {DogCommTwoSS.map((project, index)=>{
                            if (index >= 9) return;

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



                <br/><br/><br/><br/><br/>
 
                <SectTitle heading="Conclusion" subheading="DogComm's"/><br/><br/><br/><br/><br/><br/>

                <div className="topSect">
                    <div className="topLeft">
                   
                       
                        <div className="aboutInfo">
                            <PText>
                            This might be quite an application to explore since i have previously worked on DogComm 1.0 and wasn't very
                            satisfied with the outcome of how the application turned out especially because i was using global chat function which
                            actually defeats the purpose of making a social app. However, i have been trying to find out how and eventually
                            did it in this version of the application also with the help of Firestore from firebase. This time round, the socialising
                            is more personal between dog's owner since it is 1-1 as well as giving user's a choice whetehr they want to friend someone
                            based on each other's dog profiles instead of focusing on other user's look we look at the dog's now.  

                            <br/><br/>

                            Functionalities like mutual matching is something i have recently started to explore more into socialising applications.
​
                            The functionalities are all realtime and real now compared to DogComm 1.0 where i haev to use sample data since i wasn't able to actually do it out in code,
                            this time round with the help Powerful JavaScript framework Next.Js as well as Tailwind Css i am able to present such a proudful app of
                            mine.

                            <br/><br/>
                            Overall this might be the more challenging yet fun application i have made with Firebase, Match, Chat function, Google Auth Function which i didnt have much experience with before.
                            </PText>
                        </div>
                     
                    </div>
                  

                </div>
            

            </div>
        </AboutPageStyles>
    )
}

