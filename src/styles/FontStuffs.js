import { createGlobalStyle } from 'styled-components';



const Typography = createGlobalStyle`
  html{

    font-family: -apple-system, BlinkMacSystemFont;
    color: var(--gray-1);
  }
  *{

    svg{
      color: var(--white);
    }
    font-family: -apple-system, BlinkMacSystemFont;
    color: var(--gray-1);

   
  }
  h1,h2,h3,h4,h5,h6{
   
    font-family: -apple-system, BlinkMacSystemFont;
  }
`;

export default Typography;