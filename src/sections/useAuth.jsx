import { useState, useEffect } from "react";

const useAuth = (firebase) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() =>{
    const unlisten = firebase.auth().onAuthStateChanged(
      authUser => {
        authUser
          ? setAuthUser(authUser)
          : setAuthUser(null);
      },
    );
    return () => {
      unlisten();
    }
  }, []);

  return authUser
}

export default useAuth;