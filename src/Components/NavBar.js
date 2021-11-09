import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {MdMenu,MdClose} from 'react-icons/md';
import { useState,useEffect } from 'react';




const NavBarStyles = styled.div`

    position: fixed;
    z-index:100;
    top:0;
    left:0;
    
    width:100%;
    padding: 1rem 0;
    //background-color: rgba(37,37,37,0.92);
    background-color: var(--navbar-bg);
    backdrop-filter: blur(14px);

   button{
       background-color: var(--navbar-bg);
       /* color:none; */
        padding: 0.5rem;
   }
  
    .webName{
        float:left;
        padding-top:1rem;

        p{
            font-size: 2rem;
            color:var(--white);
            font-weight:bolder;
            font-family: -apple-system, sans-serif;

            .titleSpan{
            color: var(--active-navbar);
            font-weight:lighter;
           
            font-size:2rem;
            }
            
        }
       
       
    }
    .webName2{
        display: none;
     
    }
       

    ul{
        max-width: 1200px;
        margin:0 auto;
        width: 90%;
        text-align: right;
     

     
     

        li {
            display: inline;
            
            border-radius: 3px;
            transition: .3s ease background-color;
            padding:1rem;
            &:hover{
                background-color: var(--deep-dark);
            

            }
            
        }
        a {
            display: inline-block;
            font-family: -apple-system, sans-serif;
            font-weight:lighter;
            padding: 1rem 2rem;
            font-size:1.7rem;
            color:var(--a-navbar-color);
            
            outline: none;
        }
        .active{
           
            color: var(--active-navbar);
            font-weight:lighter;
            float:left;
            padding:1rem;
            font-size:2rem;
          
            
        }
       
    }
    .mobile-navbar-icon{
        position: absolute;
        right:1em;
        top:1em;
        width:2rem;
        cursor: pointer;
        display: none;
        outline: none;
        *{
            pointer-events: none;
        }
       


    }
    .closeNavBarIcon{
        display: none;
    }
    @media only screen and (max-width:760px){
        padding: 0;
        .mobile-navbar-icon{
            display: block;
        }
        .hide-item{
           transform:translateY(calc(-100% - var(--top)));
        }
        ul{
            text-align: center;
        }

    .webName{
       display: none;
      
    }
        .navBar{
            --top:1rem;
            transition: none.3s ease transform;
            //background-color: var(--deep-dark);
            background-color: var(--navbar-bg);
            backdrop-filter: blur(15px);
            padding: 2rem;
            width:90%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right:1rem;
            top:var(--top);

            .closeNavBarIcon{
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                *{
                    pointer-events: none;
                }
            }

            li{
                display: block;
                margin-bottom:1rem;
                font-size: 2rem;
 
            }
            .active{
                color:var(--white);
                float:none;
                padding:none;
                font-weight:normal;
            }
            
        }
       

    }

`;

export default function NavBar({
    
   
    title = '',

}) {
    const[showNavBar,setShowNavBar]= useState(false);
    
    const [darkMode, setDarkMode] = useState(false);
 
   

    function setIsDark(){
        setDarkMode(darkMode ? false : true);
        localStorage.setItem('isDarkMode',darkMode);
    }
    
   

    return (
        
        <NavBarStyles >
            {/* data-theme={darkMode ? "dark" : "light"} */}

            
       <div className="mobile-navbar-icon"   
       onClick={() => setShowNavBar(!showNavBar)} 
                role="button" 
                onKeyDown={()=> setShowNavBar(!showNavBar)} 
                tabIndex={0}>
       <MdMenu/>
       </div>
      
            <ul className={!showNavBar ? 'navBar hide-item':'navBar'}>

                <div className="webName" >
               
                    <p>Caven Lim's <span className="titleSpan">{title}</span>
                    </p>
                    
                </div>

                <div className="closeNavBarIcon" 
                onClick={() => setShowNavBar(!showNavBar)} 
                role="button" 
                onKeyDown={()=> setShowNavBar(!showNavBar)} 
                tabIndex={0}>
                    <MdClose />
                </div>
                <li>
                
             
                    <NavLink to="/" exact  
                    onClick={() => setShowNavBar(!showNavBar)} 
                role="button" 
                onKeyDown={()=> setShowNavBar(!showNavBar)} 
                tabIndex={0}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about"  
                    onClick={() => setShowNavBar(!showNavBar)} 
                role="button" 
                onKeyDown={()=> setShowNavBar(!showNavBar)} 
                tabIndex={0}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects"  
                    onClick={() => setShowNavBar(!showNavBar)} 
                role="button" 
                onKeyDown={()=> setShowNavBar(!showNavBar)} 
                tabIndex={0}>Projects</NavLink>
                </li>
                
               
                {/* <button  style={{margin:"0.4rem"}} onClick={setIsDark}>
                    {darkMode ? "☀️" : "🌑"}
                </button> */}
              
            </ul>
        </NavBarStyles>
    )
}
