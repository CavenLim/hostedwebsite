import React from 'react';
import PText from '../Components/Text';
import placeholder3 from'../assets/Images/placeholder3.jpg'
import styled from 'styled-components';
import FilmishIcon from'../assets/Images/FilmishIcon.png';

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
    .websiteLink {
        text-decoration:none; 
        
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
    a {text-decoration: underline;}
    .lastUpdatedDate{
       color:lightslategrey;
       margin-top: -2.75rem;
       margin-bottom:2rem;
      font-weight:lighter;
     
      font-size:1rem;
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

export default function FilmishPrivacy() {
    return (
        <AboutPageStyles>
            <div className="container">
            <div className="right">
                        <img src={FilmishIcon} alt=""/>
                    </div>
                <div className="topSect">
                    <div className="left">
                        <p className="aboutSubHead">
                           <span>Filmish</span>
                        </p>
                      
                        <h2 className="aboutHeader">
                            Filmish's privacy
                             
                        </h2>
                        <p className="lastUpdatedDate"> Last updated: 11th May 2024</p>

                     
                        <div className="aboutInfo">
                            <PText>
                            Filmish respects the privacy of our users so we store everything locally on each unique devices . I don't collect, use, disclose, or have any access over your information as your personal data within Filmish is stored locally on your device. Please read this Privacy Policy carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT BUY, USE THE APPLICATION. 
                        <br/><br/>
                        We reserve the right to make changes to this Privacy Policy at any time and for any reason.  We will alert you about any changes by updating the “Last updated” date of this Privacy Policy.  You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Application after the date such revised Privacy Policy is posted.  
 
                        This Privacy Policy does not apply to the third-party online/mobile store from which you install the Application or make payments, including any items, which may also collect and use data about you.  We are not responsible for any of the data collected by any such third party. 
                        <br/><br/>
   
                        
                            </PText>
                        </div>

                        <h2 className="aboutHeader">
                            policy for childrens
                        </h2>
                        <div className="aboutInfo">
                            <PText>
                            We have a child friendly application so any ages are welcomed to use our application however purchases of app from children under 12 will require parental guidance.
                        <br/><br/>
                        
                            </PText>
                        </div>

                        <h2 className="aboutHeader">
                        OPTIONS REGARDING YOUR PURCHASE
                        </h2>
                        <p className="aboutSubHead">
                           <span>Purchase Information</span>
                        </p>
                        <div className="aboutInfo">
                            <PText>
                            In any case of disparity should you to choose to refund your app we respect tour decision, you can do so by:
                            <br/><br/>
                              -   <a target="_blank" href="https://reportaproblem.apple.com">Refund with Apple</a>
                             <br/><br/>
                             OR
                             <br/>
                             <br/>
                              -    <a href="mailto:queries@cavenlim.com?subject=Refund enquiries">
                              Contact me</a> and i will assist you with it.
                         
                    
                        
                            </PText>
                        </div>
                     
                    </div>
                 

                </div>
                

            </div>
        </AboutPageStyles>
    )
}

