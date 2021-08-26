import React from 'react'
import SectTitle from './SectTitle'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore , {Navigation} from 'swiper';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';
import styled from 'styled-components';
import 'swiper/swiper-bundle.min.css';


SwiperCore.use([Navigation])

const ProjectSectStyles = styled.div`
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



export default function ProjectSect() {
    return (
        <ProjectSectStyles>
            <div className="container">
                <SectTitle heading="Works" subheading="some of my "/>
                {/* <div className="projAllItem">
                    <Swiper spaceBetween={30} slidesPerView={1} navigation
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
                        {projects.map((project, index)=>{
                            if (index >= 4) return;

                            return(
                                <SwiperSlide key={project.id}>
                                    <ProjectItem
                                    title = {project.name}
                                    img = {project.img}
                                    desc = {project.desc}
                                    />      
                                </SwiperSlide>
                                
                            )

                        })}

                    </Swiper>
                </div> */}
            </div>
        </ProjectSectStyles>
    )
}
