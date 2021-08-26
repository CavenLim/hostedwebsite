import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {MdMenu,MdClose} from 'react-icons/md';
import { useState } from 'react';




const NavBarStyles = styled.div`

    position: fixed;
    z-index:100;
    top:0;
    left:0;
    width:100%;
    padding: 1rem 0;
    background-color: #262626;
    ul{
        max-width: 1200px;
        margin:0 auto;
        width: 90%;
        text-align: center;
        li {
            display: inline-block;
            border-radius: 8px;
            transition: .3s ease background-color;
            &:hover{
                background-color: var(--deep-dark);

            }
        }
        a {
            display: inline-block;
            font-family: -apple-system, BlinkMacSystemFont;
            padding: 1rem 2rem;
            font-size:2rem;
            color:var(--gray-1);
            outline: none;
        }
        .active{
            color:var(--white);
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
        .navBar{
            --top:1rem;
            transition: none.3s ease transform;
            background-color: var(--deep-dark);
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
            }
        }
       

    }

`;

export default function NavBar() {
    const[showNavBar,setShowNavBar]= useState(false);
    return (
        <NavBarStyles>
       <div className="mobile-navbar-icon"   
       onClick={() => setShowNavBar(!showNavBar)} 
                role="button" 
                onKeyDown={()=> setShowNavBar(!showNavBar)} 
                tabIndex={0}>
       <MdMenu/>
       </div>
            <ul className={!showNavBar ? 'navBar hide-item':'navBar'}>
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
              
            </ul>
        </NavBarStyles>
    )
}