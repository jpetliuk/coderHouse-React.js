import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaFmC_p7cjToMRbGX-pyzCF9fv-9Ce2jY",
  authDomain: "coderhouse-ecommerce-ea91a.firebaseapp.com",
  projectId: "coderhouse-ecommerce-ea91a",
  storageBucket: "coderhouse-ecommerce-ea91a.appspot.com",
  messagingSenderId: "410074089539",
  appId: "1:410074089539:web:9417a9940cfbd197c1ecf6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
