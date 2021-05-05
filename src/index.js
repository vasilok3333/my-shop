import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import firebase from "firebase";


// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDhLoLQnKOlPndODkxLxawSeohaeM_1ljk",
  authDomain: "my-shop-phone.firebaseapp.com",
  databaseURL: "https://my-shop-phone-default-rtdb.firebaseio.com",
  projectId: "my-shop-phone",
  storageBucket: "my-shop-phone.appspot.com",
  messagingSenderId: "73763620276",
  appId: "1:73763620276:web:b09bf271ec08c7b9b6dee1"
}

firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


