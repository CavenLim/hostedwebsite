import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TaskCow from '../assets/Images/TaskCow.png';
import  placeholder3  from '../assets/Images/placeholder3.jpg';

const AboutDesignsStyles = styled.div`
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
    /* font-family: -apple-system, sans-serif; */
    font-family:inherit;
    margin-top: 1rem;
}

/* @media only screen and (max-width:760px){

    .projectItemImg{
        height: 350px;
    }

} */


`


export default function AboutDesigns({
    img = placeholder3,
    title = " no project name",
    desc = "no desc"
}) {
    return (
        <AboutDesignsStyles>
            <Link  className="projectItemImg">
                <img src={img} alt=""/>
            </Link>
            <div className="projectInfo">
                <Link to="#">
                    <h3 className="projectItemTitle">
                        {title}
                    </h3>
                </Link>
                <p className="projectItemDesc">{desc}</p>
            </div>
           
        </AboutDesignsStyles>
    )
}
