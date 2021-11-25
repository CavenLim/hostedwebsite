import { createGlobalStyle } from 'styled-components';



const Typography = createGlobalStyle`
  html{
    //font-family: 'Lato', sans-serif;
    font-family: -apple-system, sans-serif;
    color: var(--gray-1);
  
  }
  *{

    svg{
      color: var(--white);
    }
    font-family: -apple-system, sans-serif;
    //font-family: 'Lato', sans-serif;
    color: var(--gray-1);

   
  }
  h1,h2,h3,h4,h5,h6{
    /* font-family: -apple-system, BlinkMacSystemFont; */
    font-family: -apple-system, sans-serif;
    //font-family: 'Lato', sans-serif;
  }
`;

export default Typography;