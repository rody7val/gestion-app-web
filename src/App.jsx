import {useContext, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import RequireAuth from './routes/RequireAuth';

import {
  Header, Home, Footer,
  Auth, Admin, My, // PrivacyPolicy, // TermOfService,
} from './components';

import {FirebaseContext} from './services/firebase/provider';
import useAuth from './sections/useAuth';

export default function App() {
  const firebase = useContext(FirebaseContext);
  const user = useAuth(firebase);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user !== null && document.location.pathname === "/auth/login") navigate("/admin");
  })
  
  return (
    <>
      <Header auth={user} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={
          <Auth />
        } />

        <Route path='/admin' element={
          <RequireAuth auth={user}>
            <Admin />
          </RequireAuth>
        } />
        <Route path='/admin/my' element={
          <RequireAuth auth={user}>
            <My user={user} />
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
