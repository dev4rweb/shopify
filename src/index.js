import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Client from 'shopify-buy';

/*https://github.com/Shopify/js-buy-sdk*/
/*yarn add shopify-buy*/
const client = Client.buildClient({
    storefrontAccessToken: 'bd14e50edce31aa6b246e2daf334ef2a',
    domain: 'testsoftkey.myshopify.com'
});

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App client={client} />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
