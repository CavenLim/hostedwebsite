import React from 'react';
import PText from '../Components/Text';
import placeholder3 from'../assets/Images/placeholder3.jpg'
import styled from 'styled-components';
import DuckMode from '../assets/Images/DuckModeIcon.png'

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
    
        img{
            margin-left:35rem;
            margin-bottom:5rem;
            margin-top:-7rem;
            width: 30%;
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

    @media only screen and (max-width:860px){
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

        .right{
    
        img{
            margin-left:17rem;
            margin-bottom:5rem;
            margin-top:-2rem;
            width: 30%;
         }
}
    }


`

export default function DuckModePrivacy() {
    return (
        <AboutPageStyles>
            <div className="container">
            <div className="right">
                        <img src={DuckMode} alt=""/>
                    </div>
                <div className="topSect">
                    <div className="left">
                        <p className="aboutSubHead">
                           <span>DuckMode</span>
                        </p>
                        <h2 className="aboutHeader">
                            DuckMode's privacy
                        </h2>
                        <div className="aboutInfo">
                            <PText>
                            DuckMode respects the privacy of our users so we do not store any information regarding users or even track users thus users will be safe using DuckMode.
                            DuckMode is only for runtime uses so definitely be ensured that no data will be kept.
                        <br/><br/>
   
                            </PText>

                            <PText>
                                Recently, DuckMode started supporting iCloud syncing and we only use iCloud as a way to link saved colours between different devices so users will be able to
                                use our application between devices without worry of data not syncing, other than the colour details we dont save any other data or have access to other User's information.
                            </PText>
                        </div>

                        <h2 className="aboutHeader">
                            policy for childrens
                        </h2>
                        <div className="aboutInfo">
                            <PText>
                            We have a child friendly application so any ages are welcomed to use our application.
                        <br/><br/>
                        
                            </PText>
                        </div>



                        
                     
                    </div>
                 

                </div>
                

            </div>
        </AboutPageStyles>
    )
}

