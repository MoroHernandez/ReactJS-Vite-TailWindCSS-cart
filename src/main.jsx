import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyJdcA-cZcP55XYo3bWXljukXWDxqlLl4",
  authDomain: "morcoffee-c617a.firebaseapp.com",
  projectId: "morcoffee-c617a",
  storageBucket: "morcoffee-c617a.appspot.com",
  messagingSenderId: "169132862846",
  appId: "1:169132862846:web:c394e8e2183b8d2be8d72f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
