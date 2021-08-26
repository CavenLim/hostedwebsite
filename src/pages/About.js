import React from 'react';
import PText from '../Components/Text';
import Button from '../Components/Button';
import placeholder3 from'../assets/Images/placeholder3.jpg'
import topTaskCow from '../assets/Images/topTaskCow.png';
import styled from 'styled-components';
import AboutInfoItem from '../Components/AboutInfoItem';
import SectTitle from '../Components/SectTitle'
import {Swiper, SwiperSlide} from 'swiper/react';
import designs from '../assets/data/designs';
import AboutDesigns from '../Components/AboutDesigns';
import SwiperCore , {Navigation} from 'swiper';

SwiperCore.use([Navigation])


const AboutImagesStyles = styled.div`
    padding: 10rem 0 ;

    .projAllItem{
        display: flex;
        gap:3rem;
        margin-top: 5rem;
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

    @media only screen and (max-width:760px){
        .projAllItem{
            flex-direction: column;
            max-width: 400px;
            margin:0 auto;
            margin-top:7rem;
            gap:5rem;
            .projectItemImg{
                width:100%;
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
    .left{
        flex:3
    }
    .right{
        flex:2
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
        span{
            background-color: var(--deep-dark);
            padding:0.5rem;
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
    .right{
        img{
            border: 2px solid var(--gray-1);
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

    @media only screen and (max-width:760px){
        padding:10rem 0 ;
        .topSect{
            flex-direction: column;
            gap:5rem;

        }
        .aboutSubHead{
            font-size: 1.7rem;
        }
        .aboutHeader{
            font-size: 3rem;
        }
    }


`

export default function About() {
    return (
        <AboutPageStyles>
            <div className="container">
                <div className="topSect">
                    <div className="left">
                        <p className="aboutSubHead">
                            Hi, I am <span>Caven Lim</span>
                        </p>
                        <h2 className="aboutHeader">
                            Software Developer/UI Designer
                        </h2>
                        <div className="aboutInfo">
                            <PText>
                            I am a student studying from Singapore studying Mobile Software Development at Republic Polytechnic. 
                            I am very interested in UI design/UX design, also keen of becoming a software developer.
                        <br/><br/>

                        This is the site where you'll be able to see my app concepts as well as application i have developed. I will say applications regarding animals
                        will interest me a lot since im a huge cow and dog lover, so definitely if you have an application idea regarding animals hit me up.
                        
                            </PText>
                        </div>
                     
                    </div>
                    <div className="right">
                        <img src={placeholder3} alt=""/>
                    </div>

                </div>
                <div className="aboutInfoItems">
                    <div className="aboutInfoItem">
                        <h1 className="aboutInfoHeader">
                            Education
                        </h1>
                        <AboutInfoItem
                        
                        title = "Primary"
                        item = {[
                            "Boon Lay Garden Primary School"
                        ]}/>
                        <AboutInfoItem
                        
                        title = "Secondary"
                        item = {[
                            "Shuqun Secondary School"
                        ]}/>
                         <AboutInfoItem
                        
                        title = "Tertiary"
                        item = {[
                            "Republic Polytechnic"
                        ]}/>
                    </div>

                    <div className="aboutInfoItem">
                        <h1 className="aboutInfoHeader">
                            My Skills
                        </h1>
                        <AboutInfoItem
                        
                        title = "Frontend"
                        item = {[
                            "HTML","CSS","JavaScript","SwiftUi"
                        ]}/>
                        <AboutInfoItem
                        
                        title = "Backend"
                        item = {[
                            "PHP","PYTHON"
                        ]}/>
                         <AboutInfoItem
                        
                        title = "Design"
                        item = {[
                            "Adobe XD","Figma","Photoshop"
                        ]}/>
                    </div>
                </div>
                <AboutImagesStyles>

           
                <SectTitle heading="Fun Designs" subheading="some of my "/>
                <div className="projAllItem">
                    <Swiper spaceBetween={30} slidesPerView={1} navigation
                  
                    >
                        {designs.map((project, index)=>{
                            if (index >= 8) return;

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
 
                <SectTitle heading="Achievements" subheading="some of my "/><br/><br/><br/><br/><br/><br/>

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

