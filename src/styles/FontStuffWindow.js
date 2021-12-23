import { createGlobalStyle } from 'styled-components';



const TypographyWind = createGlobalStyle`
  html{
    //font-family: 'Lato', sans-serif;

    font-family: 'Poppins', sans-serif;
   
    color: var(--gray-1);
  
  }
  *{

    svg{
      color: var(--white);
    }

    //font-family: 'Lato', sans-serif;
    font-family: 'Poppins', sans-serif;
    color: var(--gray-1);

   
  }
  h1,h2,h3,h4,h5,h6{
    /* font-family: -apple-system, BlinkMacSystemFont; */
  
    //font-family: 'Lato', sans-serif;
    font-family: 'Poppins', sans-serif;
  }
`;

export default TypographyWind;