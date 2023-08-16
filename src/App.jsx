import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import RequireAuth from './routes/RequireAuth';

import AuthGoogle from './components/AuthGoogle';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import My from './components/My';

import Admin from './components/Admin.jsx';

import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';

console.log(import.meta.env)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

export default function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);
  
  firebase.initializeApp(firebaseConfig);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( user => {
      setAuth(user)
      if (auth !== null && document.location.pathname === "/login") navigate("/admin");
    })
  })
  
  return (
    <>
      <Header auth={auth} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={
          <AuthGoogle />
        } />
        <Route path='/admin' element={
          <RequireAuth auth={auth}>
            <Admin />
          </RequireAuth>
        } />
        <Route path='/admin/my' element={
          <RequireAuth auth={auth}>
            <My user={auth} />
          </RequireAuth>
        } />
      </Routes>

      <Footer data={{
        title: "👨🏻‍💻 MI NEGOCIO",
        dir: "25 de Mayo 1810",
        tel: "2494-112233",
        location: "Tandil, Buenoss Airess, AR"
      }} />
    </>
  )
}
