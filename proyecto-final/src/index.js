import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './components/CartContextProvider';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB8eYRhEiWVc6QW4tRv1A43W7e4THAKSLo",
  authDomain: "ecommerce-react-proyecto-final.firebaseapp.com",
  projectId: "ecommerce-react-proyecto-final",
  storageBucket: "ecommerce-react-proyecto-final.appspot.com",
  messagingSenderId: "395794342053",
  appId: "1:395794342053:web:c008e936a63ee7dedf2d4c"
};



initializeApp(firebaseConfig);



ReactDOM.render(

  <React.StrictMode>

    <BrowserRouter>
    <CartContextProvider>
     <App />
     </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
