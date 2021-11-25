import { createGlobalStyle } from 'styled-components';



const AllStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  @media (prefers-color-scheme: dark) {
    :root{//[data-theme="dark"]
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white: white;
    --black: black;
    --navbar-bg:rgba(30,30,30,0.90);
    --a-navbar-color:rgb(150,144,144);
    --active-navbar:rgb(201,195,195);
  }
}

@media (prefers-color-scheme: light) {
  :root{
    --dark-bg: #ffffff;
    --gray-1: #000000;
    --deep-dark: rgba(204,204,204,0.60);
    --gray-2: #363636;
    --white: black;
    --black: white;
    --navbar-bg:rgba(232,232,232,0.75);
    --a-navbar-color:#000000;
    --active-navbar:#000000;
            
           
      
  } 
}
 

  html{
    font-size: 12px;
    font-family: -apple-system, sans-serif;
    //font-family: 'Lato', sans-serif;
    background-color: var(--dark-bg);
    
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default AllStyles;