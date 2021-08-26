import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterColStyles = styled.div`
    .headingFooter{
        font-size:2.4rem;
        margin-bottom: 2rem;;
    }

    li{
        margin-bottom: 1rem;
    }

    a{
        font-size: 1.8rem;
    }


`;

export default function FooterCol({
    heading="Default Heading",
    links = [
        {
            type : "link",
            title : "Home",
            path : "/"
        },
        {
            type : "link",
            title : "About",
            path  : "/about"
        },
        {
            type : "link",
            title : "Projects",
            path : "/projects"
        },
    ]
}) {
    return (
        <FooterColStyles>
            <h1 className="headingFooter">
                {heading}
            </h1>
            <ul>
                {
                    links.map((item,index)=>(
                        <li key={index}>
                            {item.type === 'link' ?(
                            <Link to={item.path}>{item.title}</Link>
                            ):
                            <a href={item.path} target="_blank" rel="noreferrer">{item.title}</a>
                            } 

                        </li>
                        ))
                }
            </ul>
        </FooterColStyles>
    )
}
