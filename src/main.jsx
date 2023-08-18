import "./assets/styles/sakura.scss";
import "./assets/styles/global.scss";

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import {init} from './services/firebase';
import {firebaseConfig} from './services/firebase/config';
import FirebaseProvider from "./services/firebase/provider";

import App from './App.jsx';

init(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseProvider>
  </React.StrictMode>
);
