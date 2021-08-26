import React from 'react'
import Button from './Button'
import SectTitle from './SectTitle'
import PText from './Text'

import styled from 'styled-components'

const AboutSectStyles = styled.div`

    padding:4.3rem 0;
    .container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align:left;
    }
    /* .aboutSectionLeft{
        padding-right:11rem;
 

    } */
   
    

    .aboutSectionLeft,
    .aboutSectionRight{
        flex:1;
       
    }
    .sectTitle{
        text-align:left;
    }
    .para{
        margin-top:2rem;
        margin-left:0;
    }
    .aboutSectBtn{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap:2rem;
        margin-top:2rem;
      
    }

    @media only screen and (max-width:940px){
        .aboutSectionLeft{
            flex:4;
        }
        .aboutSectionRight{
            flex:3;
        }
    }

    @media only screen and (max-width:760px){
        .container{
            flex-direction:column;
            text-align:center;

        }

        .aboutSectionLeft{
            padding-right:0rem;
        }

        .aboutSectionLeft,
        .aboutSectionRight{
            width:100%;
        }

        .aboutSectionRight{
            margin-top: 3rem;
          
        }
        .sectTitle{
            text-align:center;
        }
        .para{
            margin:0 auto;
            margin-top: 2rem;
        }

        .aboutSectBtn{
            flex-direction: column;
            gap:0;
            .buttonWrapper,a{
                
                    width:100%;
                    text-align:center;
                
            }

        }

    }
`;  


export default function AboutSect() {
    return (
        <AboutSectStyles>
            <div className="container">
                <div className="aboutSectionLeft">
                    <SectTitle
                    subheading = "Let me show you about myself"
                    heading ="About me"
                    
                    />
                    <PText>
                    I am a student from Singapore  
                    studying Mobile Software Development. 
                    I am very interested in UI design/UX design, also keen of becoming a software developer. I
                    love designing since i am able to show my creative side.
                    </PText>

                    

                   
                </div>
                <div className="aboutSectionRight">
                        {/* <img className="aboutImg" src={AboutImage} alt="Img"/> */}
                        <div className="aboutSectBtn">
                        <Button btnLink="/projects" btnText="Works" >
                        </Button>
                        <Button btnLink="/about" btnText="Read More" outline>
                        </Button>
                    </div>

                </div>
            </div>
        </AboutSectStyles>
    )
}
