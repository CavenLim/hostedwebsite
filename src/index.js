import React from 'react';
import ReactDOM from 'react-dom';
import AllStyles from './styles/StyleAll';
import Typography from './styles/FontStuffs';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
   <AllStyles />
    <Typography />
    <App />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
