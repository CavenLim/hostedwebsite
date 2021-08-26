import React from 'react';
import PText from '../Components/Text';
import Button from '../Components/Button';
import TaskCow from '../assets/Images/TaskCow.png';
import IconsAll from'../assets/DesignConceptTaskCow/IconsAll.png';

import topTaskCow from '../assets/Images/topTaskCow.png';
import styled from 'styled-components';
import AboutInfoItem from '../Components/AboutInfoItem';
import SectTitle from '../Components/SectTitle'
import {Swiper, SwiperSlide} from 'swiper/react';
import taskCowSS from '../assets/data/taskcowSS';
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

export default function TaskCowDetails() {
    return (
        <AboutPageStyles>
            <div className="container">
                
                <div className="topSect">
                    <div className="left">
                        
                        <p className="aboutSubHead">
                           <span>SwiftUi</span> <span>Photoshop</span> <span>Figma</span>
                           
                           
                        </p>
                        <h2 className="aboutHeader">
                            TaskCow
                        </h2>
                    
                <BtnGo id="bt" onClick={() => onClick('https://apps.apple.com/sg/app/taskcow/id1565968348')} outline={false}> <GrAppleAppStore/></BtnGo> <p>Try It Now</p>
                <br/><br/>
                        <div className="aboutInfo">
                            <PText>
                            The application I will like to create is a mobile IOS application that user can use to add task to their to do List, It will allow for users to keep track of their task and be reminded of their task by dates and locations. There will also be widget feature to show their task’s status if users add it so they wont have to open app to see, add Task.
                        <br/><br/>

                        To Solve issue of user needed to open app to see the tasks of the day and also that user have more choice to choose various size of widget to display their tasks also that user’s task are more day to day based instead of always only seeing all task.
                        
                        <br/><br/>
                        I designed this logo with the idea of trying to express hardwork since it is what we need to complete our daily tasks. Cow represents hardwork and resilience as this Chinese saying goes by 做牛做马。 With the gradient just thrown behind my Cow logo so that it can truly appeal to user and catch their attention since it is bright.
                        <br/><br/>
                        I designed and created this Cow logo myself using Photoshop and for the weather logos i created them using Figma.
                            </PText>
                        </div>
                     
                    </div>
                    
                    <div className="right">
                        <img src={TaskCow} alt=""/>

                       
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

                          
                            Main color I used throughout my application is light orange to darker orange which I would say is my TaskCow branding’s color .
                            As for text color I used black and white as the base according to user’s environment setting whether dark or light mode.
                            <br/><br/>
                            The reason why I use orange is because it very eye catching and will likely catch user’s attention more than probably just normal black and white.
​                            <br/><br/>
​
​
                            In my Custom Calendar View  I added red with orange on the numbers because I want to highlight the date it is and red is a strong colour. 

                            </PText>
                        </div>
                     
                    </div>

                    <div className="right2">
                        <img src={ColorAccent} alt=""/>
                        <img src={App4BG} alt=""/>
                       <img src={calendar} alt=""/>

                        
                    </div>
                 
   
                    

                </div>



               
               
                <AboutImagesStyles>

           
                <SectTitle heading="Wireframes" subheading="TaskCow's"/>
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
                        {taskCowSS.map((project, index)=>{
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

                <div className="topSect">
                    <div className="left">
                        <p className="aboutSubHead">
                        <span>Figma</span>
                           
                        </p>
                        <h2 className="aboutHeader">
                            Weather Feature
                        </h2>
                        <div className="aboutInfo">
                            <PText>
                                The weather icons were all done and created using Figma, it is the first time i created my own weather vectors so it was
                                quite a fun experience being able to create and use it in my own application. This is also why i enjoy designing because i am
                                able to control how i want my elements to look and see it being deployed it app itself makes all the effort worth it. It also
                                helped me develop more creativity since there is just so many weather conditions and i designed it on how i interpret it.

                                <br/><br/>

                                Overall, i will say Figma helped me a lot since it's an intuitive app as well as provides a lot of useful features especially the shadows
                                which helped me a lot.
                            </PText>
                        </div>
                     
                    </div>
                    
                    <div className="right">
                        <img src={IconsAll} alt=""/>

                       
                    </div>

                </div>


                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
 
                <SectTitle heading="Achievements" subheading="TaskCow's"/><br/><br/><br/><br/><br/><br/>

                <div className="topSect">
                    <div className="topLeft">
                   
                        <h2 className="aboutHeader">
                            TaskCow
                        </h2>
                        <div className="aboutInfo">
                            <PText>
                            On 31 May 2021 my application TaskCow was on the top charts #6 in Singapore, it was one of my happiest moment since it was the first application I released .
                            </PText>
                        </div>
                     
                    </div>
                    <div className="topRight">
                        <img src={topTaskCow} alt=""/>
                    </div>

                </div>
            

            </div>
        </AboutPageStyles>
    )
}

