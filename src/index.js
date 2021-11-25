import React from 'react';
import ReactDOM from 'react-dom';
import AllStyles from './styles/StyleAll';
import Typography from './styles/FontStuffs';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import TypographyWind from './styles/FontStuffWindow';


function CheckOs(){
  if (navigator.appVersion.indexOf("Mac")!= -1){
    console.log(navigator.appVersion.indexOf("Mac"));
    return <Typography />;
  }
  else{
    return <TypographyWind />;
  }
}

ReactDOM.render(
  <React.StrictMode>
   
    <HashRouter>
    <AllStyles />
    {/* <Typography /> */}
    <CheckOs />
    <App />
    </HashRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
