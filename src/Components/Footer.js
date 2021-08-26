import React from 'react'
import PText from './Text'
import FooterCol from './FooterCol'
import styled from 'styled-components'

const FooterStyles = styled.div`
    padding-top:10rem;
    background-color: var(--deep-dark);

    .container{
        display: flex;
        gap:3rem;
    }
    @media only screen and (max-width:760px){
        .container{
            flex-direction: column;
            display: flex;
            gap:0rem;
            &  > div{
                margin-top: 5rem;
            }
        }

        .footerCol1 .para{
            max-width: 100%;
        }

        .footerCol1Title{
        font-size: 2.0rem;
       
    }

        .copyright{
            .container{
                div{
                    margin-top: 0;
                }
            }

        }

    }

    .footerCol1{
        flex:2;
    }


    .footerCol2,.footerCol3{
        flex:1;
    }

    .footerCol1Title{
        font-size: 3.5rem;
        margin-bottom:1rem;
    }

    .copyright{
       
        padding:1rem 0;
        margin-top:5rem;
        
      
    }

   


`;

export default function Footer() {
    return (
        <FooterStyles>
            <div className="container">
                <div className="footerCol1">
                    <h1 className="footerCol1Title">Caven Lim
                        
                    </h1>
                    <PText>
                    A student from Republic Polytechnic in Singapore  studying Mobile Software Development. I am very interested in UI design/UX design, also keen of becoming a software developer.
                    </PText>
                </div>
                <div className="footerCol2">
                    <FooterCol heading="Important Links" links={
                        [
                            {
                                title:"Home",
                                path:"/",
                                type:"link"
                            },
                            {
                                title:"About",
                                path:"/about",
                                type:"link"
                            },
                            {
                                title:"Projects",
                                path:"/projects",
                                type:"link"
                            },

                          
                        ]
                    } />
                   
                </div>
                <div className="footerCol3">
                <FooterCol heading="Contact Info" links={
                        [
                            {
                                title:"cavenlim03@gmail.com",
                                path:"mailto:cavenlim03@gmail.com",
                               
                            },
                            {
                                title:"Instagram",
                                path:" https://www.instagram.com/cavenisaacow/",
                               
                            },

                           
                           
                          
                        ]
                    } />
                
                </div>

                
                
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>
                    © 2021 - Caven Lim. Designed by Caven
                    </PText>
                </div>
            </div>
          
        </FooterStyles>
    );
}
